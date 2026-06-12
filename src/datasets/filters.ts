import { Dataset, DatasetCategory } from "./types";

export function byCategory(items: Dataset[], category?: DatasetCategory): Dataset[] {
  if (!category) return items;
  return items.filter((d) => d.category === category);
}
