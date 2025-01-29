<script lang="ts">
  import DataProvider from "./DataProvider.svelte";

  console.log("test");
</script>

<main>
  <section>
    <DataProvider />
  </section>
  <section>plot</section>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
  }
  section {
    padding: 0 1rem;
    min-height: 2rem;
    border-bottom: 1px solid grey;

    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
