import { Review } from "./types";

export function byDatasetId(items: Review[], datasetId?: string): Review[] {
  if (!datasetId) return items;
  return items.filter((r) => r.datasetId === datasetId);
}

export function byReviewerId(items: Review[], reviewerId?: string): Review[] {
  if (!reviewerId) return items;
  return items.filter((r) => r.reviewerId === reviewerId);
}

export function byRating(items: Review[], rating?: number): Review[] {
  if (!rating) return items;
  return items.filter((r) => r.rating === rating);
}

export type SortField = "rating" | "createdAt";

export function sortBy(
  items: Review[],
  field: SortField = "createdAt",
  order: "asc" | "desc" = "desc",
): Review[] {
  const dir = order === "asc" ? 1 : -1;
  return [...items].sort((a, b) => {
    let cmp = 0;
    if (field === "rating") cmp = a.rating - b.rating;
    else cmp = a.createdAt.localeCompare(b.createdAt);
    return cmp * dir;
  });
}
