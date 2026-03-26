<script lang="ts">
  interface Props {
    value: string;
    disabled?: boolean;
    onInput?: (v: string) => void;
    onEnter?: () => void;
    onRequireApiKey?: () => void;
  }

  let { value, disabled = false, onInput, onEnter, onRequireApiKey }: Props = $props();

  function handleKeydown(event: KeyboardEvent) {
    if (disabled) return;
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      onEnter?.();
    }
  }
</script>

<div class="pl-24">
  <div class="h-px w-full" style="background-color: var(--color-border);"></div>
  <div class="pt-4">
    <textarea
      class="w-full resize-none border-0 bg-transparent p-0 text-sm leading-relaxed placeholder-[var(--color-muted)] outline-none ring-0 placeholder:opacity-60 focus:outline-none sm:text-base"
      rows="5"
      bind:value={value}
      placeholder="Type your message here..."
      onkeydown={handleKeydown}
      onfocus={() => onRequireApiKey?.()}
      oninput={(e: any) => onInput?.(e.target.value)}
    ></textarea>
  </div>
  </div>


