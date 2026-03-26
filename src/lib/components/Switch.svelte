<script lang="ts">
	interface Props {
		checked?: boolean;
		labelLeft?: string;
		labelRight?: string;
		labelLeftTitle?: string;
		labelRightTitle?: string;
		onchange?: (event: { checked: boolean }) => void;
	}

	let {
		checked = false,
		labelLeft = '',
		labelRight = '',
		labelLeftTitle = '',
		labelRightTitle = '',
		onchange
	}: Props = $props();

	function toggle() {
		checked = !checked;
		onchange?.({ checked });
	}
</script>

<div
	class="switch"
	role="switch"
	aria-checked={checked}
	on:click={toggle}
	tabindex="0"
	on:keydown={(e) => (e.key === ' ' || e.key === 'Enter') && (e.preventDefault(), toggle())}
>
	<span class="label left" title={labelLeftTitle}>{labelLeft}</span>
	<div class={checked ? 'track checked' : 'track'}>
		<div class={checked ? 'thumb checked' : 'thumb'}></div>
	</div>
	<span class="label right" title={labelRightTitle}>{labelRight}</span>
</div>

<style>
	.switch {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		cursor: pointer;
		user-select: none;
	}

	.label {
		font-size: 0.85rem;
		color: var(--color-muted);
		transition: color 0.15s ease;
	}

	.label.left:not(:empty) + .track + .label.right:not(:empty) {
		/* When both labels exist, highlight the active one */
	}

	.switch:has(.track.checked) .label.right {
		color: var(--color-foreground);
		/* font-weight: 500; */
	}

	.switch:has(.track:not(.checked)) .label.left:not(:empty) {
		color: var(--color-foreground);
		/* font-weight: 500; */
	}

	.track {
		width: 44px;
		height: 24px;
		background: var(--color-panel);
		border: 1.5px solid var(--color-border);
		border-radius: 999px;
		position: relative;
		transition: all 0.2s ease;
		box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
	}

	.track.checked {
		/* box-shadow: 0 0 0 2px rgba(137, 138, 139, 0.1); */
	}

	[data-theme='light'] .track.checked {
		box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
	}

	.thumb {
		width: 18px;
		height: 18px;
		background: var(--color-foreground);
		border-radius: 999px;
		position: absolute;
		top: 1.5px;
		left: 1.5px;
		transition: all 0.2s ease;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
	}

	.thumb.checked {
		left: 22.5px;
		/* background: white; */
	}

	[data-theme='light'] .thumb {
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
	}

	[data-theme='light'] .thumb.checked {
		background: white;
	}
</style>
