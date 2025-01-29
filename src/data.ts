export interface Data {
  date: Date;
  value: Number;
}

let dataUrl = "/btcusd.csv";
let remoteUrl = "https://www.cryptodatadownload.com/cdd/Bitfinex_BTCUSD_1h.csv";

export const fetchData = async (): Promise<Data[]> => {
  const res = await fetch(dataUrl);
  const csv = await res.text();
  return csv
    .trim()
    .split("\n")
    .map((row) => {
      return {
        date: new Date(row.split(",")[1]),
        value: Number(row.split(",")[2]),
      };
    });
};

fetchData();
