<script lang="ts">
  type ControlsProps = {
    current: Date | undefined;
    from: Date | undefined;
    to: Date | undefined;
    change: (newDate: Date) => void;
  };

  const { current, from, to, change }: ControlsProps = $props();
</script>

<div class="controls">
  <div>&lt; previous</div>
  <div>
    <input
      type="date"
      min={from?.toISOString().split("T")[0] ?? undefined}
      max={to?.toISOString().split("T")[0] ?? undefined}
      value={current?.toISOString().split("T")[0] ?? null}
      oninput={(evt: Event & { currentTarget: HTMLInputElement }) =>
        change(new Date((evt.target as HTMLInputElement).value))}
    />
  </div>
  <div>next &gt;</div>
</div>

<style>
  .controls {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
