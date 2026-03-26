<script lang="ts">
  import Switch from '$lib/components/Switch.svelte';
  import { OPENAI_LOGPROB_MODELS } from '$lib/models';

  interface Props {
    altDown: boolean;
    opacityMode: 'prob' | 'gini';
    model: string;
    onToggleAlt?: (v: boolean) => void;
    onChangeOpacity?: (v: 'prob' | 'gini') => void;
    onChangeModel?: (m: string) => void;
  }

  let { altDown, opacityMode, model, onToggleAlt, onChangeOpacity, onChangeModel }: Props = $props();
</script>

<div class="mb-3 flex flex-wrap items-center gap-4 pl-24 text-sm">
  <Switch
    checked={altDown}
    labelLeft=""
    labelRight="Make uncertain tokens more transparent"
    labelRightTitle="Hold alt to toggle this feature temporarily."
    onchange={(e) => onToggleAlt?.(e.checked)}
  />
  {#if altDown}
    <div class="h-4 w-px" style="background-color: var(--color-border);"></div>
    <Switch
      checked={opacityMode === 'gini'}
      labelLeft="Prob."
      labelRight="Gini"
      labelLeftTitle="Represent token uncertainty as the probability of selected tokens."
      labelRightTitle="Represent token uncertainty as the Gini coefficient of the top 5 tokens."
      onchange={(e) => onChangeOpacity?.(e.checked ? 'gini' : 'prob')}
    />
  {/if}
  <div class="ml-auto flex items-center gap-2">
    <label for="model" class="muted text-xs">Model</label>
    <select
      id="model"
      class="panel rounded px-2 py-1 text-xs"
      bind:value={model}
      onchange={() => onChangeModel?.(model)}
    >
      {#each OPENAI_LOGPROB_MODELS as m}
        <option value={m.id}>{m.label ?? m.id}</option>
      {/each}
    </select>
  </div>
</div>


