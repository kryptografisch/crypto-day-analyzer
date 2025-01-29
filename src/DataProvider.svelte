<script lang="ts">
  import TimeFrame from "./TimeFrame.svelte";

  interface Data {
    date: Date;
    value: Number;
  }

  let dataUrl = "/btcusd.csv";
  let remoteUrl =
    "https://www.cryptodatadownload.com/cdd/Bitfinex_BTCUSD_1h.csv";
  let data: Data[] = [];

  async function fetchData() {
    const res = await fetch(dataUrl);
    const csv = await res.text();
    data = csv
      .trim()
      .split("\n")
      .map((row) => {
        console.log(row);
        return {
          date: new Date(row.split(",")[1]),
          value: Number(row.split(",")[2]),
        };
      });
  }

  fetchData();
</script>

<div class="file-upload">
  <div>using data</div>
  <div>
    <TimeFrame from={data[data.length - 1]?.date} to={data[0]?.date} />
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
