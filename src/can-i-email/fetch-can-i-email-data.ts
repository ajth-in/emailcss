import type { CanIEmailItem } from "./types";

export async function fetchCanIEmailData(): Promise<CanIEmailItem[]> {
  console.log("Fetching data from caniemail.com...");
  const response = await fetch("https://www.caniemail.com/api/data.json");
  const json = (await response.json()) as { data: CanIEmailItem[] };
  return json.data;
}
