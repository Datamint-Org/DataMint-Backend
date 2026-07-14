import { Review } from "./types";

export function byDatasetId(items: Review[], datasetId?: string): Review[] {
  if (!datasetId) return items;
  return items.filter((r) => r.datasetId === datasetId);
}
