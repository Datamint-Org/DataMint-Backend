import { Dataset, DatasetCategory } from "./types";

export function byCategory(items: Dataset[], category?: DatasetCategory): Dataset[] {
  if (!category) return items;
  return items.filter((d) => d.category === category);
}

export function byProvider(items: Dataset[], providerId?: string): Dataset[] {
  if (!providerId) return items;
  return items.filter((d) => d.providerId === providerId);
}

export function bySearch(items: Dataset[], search?: string): Dataset[] {
  if (!search) return items;
  const q = search.toLowerCase();
  return items.filter(
    (d) =>
      d.name.toLowerCase().includes(q) ||
      d.description.toLowerCase().includes(q) ||
      d.tags.some((t) => t.toLowerCase().includes(q)),
  );
}
