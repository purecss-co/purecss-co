import PureCSSData from "types/data";
import { APP_URL } from "./constants";

export async function fetchData(): Promise<PureCSSData> {
  const res = await fetch(APP_URL + "api");
  const data = res.json();

  return data;
}
