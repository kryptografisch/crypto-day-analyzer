<script lang="ts">
  import TimeFrame from "./TimeFrame.svelte";

  const { from, to } = $props();
</script>

<div class="file-upload">
  <div>using data</div>
  <div>
    <TimeFrame {from} {to} />
  </div>
  <div>or <button>refresh data</button></div>
</div>

<style>
  .file-upload {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
</style>
