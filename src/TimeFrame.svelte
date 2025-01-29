<script lang="ts">
  const { from, to } = $props();

  const convert = (date: Date | null | undefined) => {
    if (!date) return undefined;
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
  };
</script>

<div>from {convert(from) ?? "..."} to {convert(to) ?? "..."}</div>
