<script lang="ts">
  import type { Msg, TokenProcessed } from '$lib/types';
  import TokenSpan from './TokenSpan.svelte';
  import GMDisplay from './GMDisplay.svelte';
  import { geometricMean } from '$lib/tokens';

  interface Props {
    messages: Msg[];
    altDown: boolean;
    opacityMode: 'prob' | 'gini';
    getOpacity: (t: TokenProcessed) => number;
    onTokenEnter: (e: MouseEvent, t: TokenProcessed) => void;
    onTokenMove: (e: MouseEvent) => void;
    onTokenLeave: () => void;
  }

  let { messages, altDown, opacityMode, getOpacity, onTokenEnter, onTokenMove, onTokenLeave }: Props = $props();
</script>

{#each messages as m}
  {#if m.role === 'user'}
    <div class="flex justify-end">
      <div class="max-w-[70%] rounded px-3 py-2 text-sm">{m.text}</div>
    </div>
  {:else}
    {#key altDown && opacityMode}
      <div class="flex items-center justify-start">
        <div class="relative max-w-[70%] cursor-default text-sm">
          <GMDisplay
            show={altDown}
            mode={opacityMode}
            valuePct={(geometricMean(m.tokens.map((t) => (opacityMode === 'prob' ? t.prob : t.gini))) * 100).toFixed(1)}
          />
          {#each m.tokens as t}
            <TokenSpan
              token={t}
              opacity={getOpacity(t)}
              onEnter={onTokenEnter}
              onMove={onTokenMove}
              onLeave={onTokenLeave}
            />
          {/each}
        </div>
      </div>
    {/key}
  {/if}
{/each}


