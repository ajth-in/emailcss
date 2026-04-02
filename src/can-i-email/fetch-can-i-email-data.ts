import type { CanIEmailItem } from "./types";

export async function fetchCanIEmailData(): Promise<CanIEmailItem[]> {
  const response = await fetch("https://www.caniemail.com/api/data.json");
  const json = (await response.json()) as { data: CanIEmailItem[] };
  return json.data;
}
