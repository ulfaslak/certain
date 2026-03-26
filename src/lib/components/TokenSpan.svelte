<script lang="ts">
  import type { TokenProcessed } from '$lib/types';

  interface Props {
    token: TokenProcessed;
    opacity: number;
    onEnter?: (e: MouseEvent, t: TokenProcessed) => void;
    onMove?: (e: MouseEvent) => void;
    onLeave?: () => void;
  }

  let { token, opacity, onEnter, onMove, onLeave }: Props = $props();
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<span
  onmouseenter={(e) => onEnter?.(e, token)}
  onmousemove={(e) => onMove?.(e)}
  onmouseleave={() => onLeave?.()}
  style={`opacity: ${opacity};`}
>{token.token}</span>


