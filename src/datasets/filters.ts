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

export type SortField = "name" | "price" | "createdAt";

export function sortBy(
  items: Dataset[],
  field: SortField = "createdAt",
  order: "asc" | "desc" = "desc",
): Dataset[] {
  const dir = order === "asc" ? 1 : -1;
  return [...items].sort((a, b) => {
    let cmp = 0;
    if (field === "name") cmp = a.name.localeCompare(b.name);
    else if (field === "price") cmp = a.priceXlm - b.priceXlm;
    else cmp = a.createdAt.localeCompare(b.createdAt);
    return cmp * dir;
  });
}
