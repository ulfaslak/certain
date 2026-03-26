<script lang="ts">
	interface Props {
		initialValue?: string;
		onclose?: () => void;
		onsave?: (value: string) => void;
		ondemo?: () => void;
	}

	let { initialValue = '', onclose, onsave, ondemo }: Props = $props();

	let value: string = initialValue;
	let inputEl: HTMLInputElement | null = null;
	const inputId = 'api-key-input';

	$effect(() => {
		value = initialValue ?? '';
		queueMicrotask(() => inputEl?.focus());
	});

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			onclose?.();
		} else if (event.key === 'Enter') {
			event.preventDefault();
			onsave?.(value.trim());
		}
	}
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="fixed inset-0 flex items-center justify-center sm:p-6"
	style="position: fixed; inset: 0; z-index: 1000; background-color: rgba(0, 0, 0, 0.5);"
	onclick={(e) => { if (e.target === e.currentTarget) onclose?.(); }}
>
	<div
		class="mx-auto border"
		style="background-color: var(--color-panel); border-color: var(--color-border); border-radius: 0.5rem; padding: 1rem;"
		role="dialog"
		tabindex="-1"
		onkeydown={handleKeyDown}
	>
		<!-- Header -->
		<div
			class="flex items-center justify-between border-b px-5 py-4"
			style="border-color: var(--color-border);"
		>
			<h2 class="flex items-center gap-2 text-base font-semibold">
				<span>Enter OpenAI API key</span>
			</h2>
		</div>

		<!-- Body -->
		<div class="px-5 py-4 sm:py-5">
			<label class="mb-1 block text-xs opacity-80" for={inputId}>API key (stored only in your browser)</label>
			<input
				id={inputId}
				bind:this={inputEl}
				type="password"
				class="panel w-full rounded-lg px-3 py-2 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] placeholder:opacity-60"
				placeholder="sk-..."
				bind:value
			/>
		</div>

		<!-- Footer -->
		<div
			class="flex items-center justify-end border-t px-5 py-3"
			style="border-color: var(--color-border);"
		>
			<div class="flex items-center gap-4 pt-4">
				<button
					class="text-sm"	
					style="cursor: pointer;"
					onclick={() => ondemo?.()}>🤷‍♂️ Demo</button
				>
				<button
					class="text-sm"
					style="cursor: pointer;"
					onclick={() => onsave?.(value.trim())}
				>
					Chat Now
				</button>
			</div>
		</div>
	</div>
</div>
