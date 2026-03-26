<script lang="ts">
	interface Props {
		isDark?: boolean;
		ontoggle?: () => void;
	}

	let { isDark = true, ontoggle }: Props = $props();

	function handleToggle() {
		ontoggle?.();
	}
</script>

<button
	class="flex cursor-pointer items-center justify-center border-none bg-transparent p-0"
	on:click={handleToggle}
	aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
	title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
>
	<div
		class="panel relative flex h-8 w-[60px] items-center rounded-2xl border transition-all duration-200 hover:border-[var(--color-primary)]"
	>
		<div
			class="pointer-events-none absolute left-[3px] z-20 flex h-[26px] w-[26px] items-center justify-center transition-colors duration-200 {isDark
				? 'text-white'
				: 'text-[var(--color-muted)]'}"
		>
			{#if isDark}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="18"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-moon text-muted-foreground"
					><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg
				>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="18"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-sun text-primary"
					><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path
						d="M12 20v2"
					></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"
					></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path
						d="m6.34 17.66-1.41 1.41"
					></path><path d="m19.07 4.93-1.41 1.41"></path></svg
				>
			{/if}
		</div>
	</div>
</button>
