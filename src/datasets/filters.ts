import { Dataset, DatasetCategory } from "./types";

export function byCategory(items: Dataset[], category?: DatasetCategory): Dataset[] {
  if (!category) return items;
  return items.filter((d) => d.category === category);
}

export function byProvider(items: Dataset[], providerId?: string): Dataset[] {
  if (!providerId) return items;
  return items.filter((d) => d.providerId === providerId);
}
