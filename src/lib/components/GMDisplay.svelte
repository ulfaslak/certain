<script lang="ts">
  interface Props {
    valuePct: string;
    mode: 'prob' | 'gini';
    show: boolean;
  }

  let { valuePct, mode, show }: Props = $props();
</script>

{#if show}
  <div class="muted absolute -left-16 top-1/2 flex -translate-y-1/2 flex-col items-center text-xs">
    <div class="text-center text-[10px] opacity-80">
      MEAN<br />{mode === 'prob' ? 'PROB' : 'GINI'}<br />
    </div>
    <div class="font-mono">{valuePct}%</div>
  </div>
{/if}


