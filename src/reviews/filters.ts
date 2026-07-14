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
