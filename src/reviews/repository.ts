import { reviews } from "./store";
import { Review } from "./types";

export function insert(review: Review): Review {
  reviews.push(review);
  return review;
}

export function findAll(): Review[] {
  return [...reviews];
}

export function findById(id: string): Review | undefined {
  return reviews.find((r) => r.id === id);
}

export function findByDatasetId(datasetId: string): Review[] {
  return reviews.filter((r) => r.datasetId === datasetId);
}

export function update(id: string, patch: Partial<Review>): Review | undefined {
  const existing = reviews.find((r) => r.id === id);
  if (!existing) return undefined;
  Object.assign(existing, patch);
  return existing;
}
