import { APP_URL } from "@/lib/constants";
import PureCSSData from "@/types/data";

export async function fetchData(): Promise<PureCSSData> {
  const res = await fetch(APP_URL + "api");
  const data = res.json();

  return data;
}
