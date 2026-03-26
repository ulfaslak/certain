<script lang="ts">
	import { onMount, tick } from 'svelte';
	import Switch from '$lib/components/Switch.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import ApiKeyModal from '$lib/components/ApiKeyModal.svelte';
	import type { Msg, Token, TokenProcessed } from '$lib/types';
	import { example_messages } from '$lib/example_messages';
	import { processTokens, inverseGini, geometricMean } from '$lib/tokens';
	import { completeChat } from '$lib/services/openai';
	import ControlsBar from '$lib/components/ControlsBar.svelte';
	import Composer from '$lib/components/Composer.svelte';
	import ChatMessages from '$lib/components/ChatMessages.svelte';
	let prompt = '';

	let tokens: TokenProcessed[] = [];
	let messages: Msg[] = [];
	let bottomAnchor: HTMLDivElement | null = null;

	let altDown = false;
	let opacityMode: 'prob' | 'gini' = 'gini';
	let loading = false;
	let apiKey: string = '';
	let isDarkMode = true;
	let mainEl: HTMLElement | null = null;
	let showApiModal = false;
	let modalApiKey: string = '';
	let composerEl: HTMLTextAreaElement | null = null;
	let model: string = 'gpt-4o';

	onMount(() => {
		try {
			const saved = localStorage.getItem('openai_api_key');
			if (saved) apiKey = saved;
		} catch {}

		try {
			const savedTheme = localStorage.getItem('theme');
			if (savedTheme === 'light') {
				isDarkMode = false;
			}
		} catch {}

		try {
			const savedModel = localStorage.getItem('openai_model');
			if (savedModel) model = savedModel;
		} catch {}

		updateTheme();
	});

	function updateTheme() {
		if (typeof document !== 'undefined') {
			document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
		}
	}

	function toggleTheme() {
		isDarkMode = !isDarkMode;
		updateTheme();
		try {
			localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
		} catch {}
	}

	async function generate() {
		if (!apiKey) {
			showApiModal = true;
			modalApiKey = '';
			return;
		}
		try {
			localStorage.setItem('openai_api_key', apiKey);
		} catch {}
		// Add user message and scroll
		messages = [...messages, { role: 'user', text: prompt }];
		prompt = '';
		await tick();
		bottomAnchor?.scrollIntoView({ behavior: 'smooth' });

		loading = true;
		tokens = [];
		try {
			const { rawTokens } = await completeChat({
				apiKey,
				model,
				messages,
				top_logprobs: 5,
				temperature: 0.5
			});
			tokens = processTokens(rawTokens);
			messages = [...messages, { role: 'assistant', tokens }];
		} catch (err) {
			console.error(err);
		} finally {
			loading = false;
		}
		await tick();
		bottomAnchor?.scrollIntoView({ behavior: 'smooth' });
	}

	// Custom tooltip state
	let tipVisible = false;
	let tipX = 0;
	let tipY = 0;
	let tipItems: { token: string; prob: number; chosen: boolean }[] = [];

	function buildTipItems(t: {
		token: string;
		prob: number;
		top?: { token: string; prob: number }[];
	}) {
		const items: { token: string; prob: number; chosen: boolean }[] = [];
		items.push({ token: t.token, prob: t.prob, chosen: true });
		if (t.top && t.top.length) {
			for (const alt of t.top) {
				if (!items.some((x) => x.token === alt.token)) {
					items.push({ token: alt.token, prob: alt.prob, chosen: false });
				}
			}
		}
		items.sort((a, b) => b.prob - a.prob);
		return items;
	}

	function tokenMouseEnter(
		event: MouseEvent,
		t: { token: string; prob: number; top?: { token: string; prob: number }[] }
	) {
		tipItems = buildTipItems(t);
		tipVisible = true;
		positionTip(event);
	}

	function tokenMouseMove(event: MouseEvent) {
		positionTip(event);
	}

	function tokenMouseLeave() {
		tipVisible = false;
	}

	function positionTip(event: MouseEvent) {
		const padding = 12;
		const rect = mainEl?.getBoundingClientRect();
		const baseLeft = rect ? rect.left : 0;
		const baseTop = rect ? rect.top : 0;
		tipX = event.clientX - baseLeft + padding;
		tipY = event.clientY - baseTop + padding;
	}

	function displayToken(s: string) {
		return s.replaceAll('\n', '\\n');
	}

	function getOpacity(t: TokenProcessed): number {
		if (!altDown) {
			return 1;
		}
		if (opacityMode === 'prob') {
			return t.opacity.prob;
		} else {
			return t.opacity.gini;
		}
	}

	function onKeyDown(event: KeyboardEvent) {
		if (event.key === 'Alt') {
			altDown = true;
		}
		if (event.key === 'Escape' && showApiModal) {
			closeApiModal();
		}
	}

	function onKeyUp(event: KeyboardEvent) {
		if (event.key === 'Alt') {
			altDown = false;
		}
	}

	function onTextareaKeydown(event: KeyboardEvent) {
		if (!apiKey) {
			showApiModal = true;
			modalApiKey = '';
			event.preventDefault();
			composerEl?.blur();
			return;
		}
		if (event.key === 'Enter' && !event.shiftKey) {
			event.preventDefault();
			if (!loading) {
				generate();
			}
		}
	}

	function onComposerFocus() {
		if (!apiKey) {
			showApiModal = true;
			modalApiKey = '';
			composerEl?.blur();
		}
	}

	function saveApiKey() {
		apiKey = modalApiKey.trim();
		if (apiKey) {
			try {
				localStorage.setItem('openai_api_key', apiKey);
			} catch {}
			showApiModal = false;
		}
	}

	function closeApiModal() {
		showApiModal = false;
	}
</script>

<svelte:window on:keydown={onKeyDown} on:keyup={onKeyUp} />

<main
	bind:this={mainEl}
	class="relative mx-auto flex h-screen max-w-4xl -translate-x-6 flex-col p-6"
>
	<header class="mb-4 flex items-center justify-between pl-24">
		<h1
			class="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text font-mono text-2xl font-light uppercase tracking-[0.2em] text-transparent"
		>
			Certain
		</h1>
		<div class="flex items-center gap-2">
			<button
				class="rounded border px-2 py-1 text-xs hover:bg-white/5"
				style="border-color: var(--color-border);"
				on:click={() => {
					showApiModal = true;
					modalApiKey = apiKey || '';
				}}
			>
				API Key
			</button>
			<ThemeToggle isDark={isDarkMode} ontoggle={toggleTheme} />
		</div>
	</header>

	<!-- Messages area (scrollable) -->
	<div class="mb-4 flex-1 space-y-4 overflow-auto pl-24">
		<ChatMessages
			messages={messages}
			altDown={altDown}
			opacityMode={opacityMode}
			getOpacity={getOpacity}
			onTokenEnter={(e, t) => tokenMouseEnter(e, t)}
			onTokenMove={(e) => tokenMouseMove(e)}
			onTokenLeave={() => tokenMouseLeave()}
		/>

		{#if loading}
			<div class="flex justify-start">
				<div class="max-w-[70%] rounded px-3 py-2 text-sm">
					<div class="flex items-center gap-2">
						<span class="sr-only">Generating…</span>
						<div class="flex items-end gap-1" aria-hidden="true">
							<span
								class="h-1 w-1 animate-bounce rounded-full bg-[var(--color-foreground)] [animation-delay:0ms]"
							></span>
							<span
								class="h-1 w-1 animate-bounce rounded-full bg-[var(--color-foreground)] [animation-delay:150ms]"
							></span>
							<span
								class="h-1 w-1 animate-bounce rounded-full bg-[var(--color-foreground)] [animation-delay:300ms]"
							></span>
						</div>
					</div>
				</div>
			</div>
		{/if}

		<div bind:this={bottomAnchor}></div>
	</div>

	<!-- Controls row -->
	<ControlsBar
		altDown={altDown}
		opacityMode={opacityMode}
		model={model}
		onToggleAlt={(v) => (altDown = v)}
		onChangeOpacity={(v) => (opacityMode = v)}
		onChangeModel={(m) => {
			model = m;
			try { localStorage.setItem('openai_model', model); } catch {}
		}}
	/>

	<!-- Composer at bottom -->
	<Composer
		value={prompt}
		onInput={(v) => (prompt = v)}
		onEnter={() => { if (!loading) generate(); }}
		onRequireApiKey={() => { if (!apiKey) { showApiModal = true; modalApiKey = ''; } }}
	/>

	<!-- Tooltip (positioned globally) -->
	{#if tipVisible}
		<div class="tooltip" style={`left:${tipX}px; top:${tipY}px`}>
			<div class="tooltip-title">Alternatives</div>
			<ul class="tooltip-list">
				{#each tipItems as it}
					<li class={it.chosen ? 'chosen' : ''}>
						<span class="tok">{displayToken(it.token)}</span>
						<span class="prob">{(it.prob * 100).toFixed(1)}%</span>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</main>

{#if showApiModal}
	<ApiKeyModal
		initialValue={modalApiKey}
		onclose={closeApiModal}
		onsave={(v) => {
			modalApiKey = v;
			apiKey = v;
			if (apiKey) {
				try {
					localStorage.setItem('openai_api_key', apiKey);
				} catch {}
				showApiModal = false;
			}
		}}
		ondemo={() => {
			messages = example_messages.slice();
			showApiModal = false;
			loading = false;
			queueMicrotask(async () => {
				await tick();
				bottomAnchor?.scrollIntoView({ behavior: 'smooth' });
			});
		}}
	/>
{/if}
