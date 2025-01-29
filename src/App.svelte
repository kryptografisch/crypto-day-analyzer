<script lang="ts">
  import Controls from "./Controls.svelte";
  import { fetchData, type Data } from "./data";
  import DataProvider from "./DataProvider.svelte";

  let data: Data[] = [];
  let current: Date | undefined = undefined;

  fetchData().then((csvData) => {
    data = csvData;
    // TODO: change this to "if today is a key of data array - use it, else last"
    current = data[0]?.date ?? undefined;
  });
</script>

<main>
  <section>
    <DataProvider from={data[data.length - 1]?.date} to={data[0]?.date} />
  </section>
  <section>
    <Controls
      {current}
      from={data[data.length - 1]?.date}
      to={data[0]?.date}
      change={(date) => {
        current = date;
      }}
    />
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
