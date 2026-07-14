import { CreateReviewInput, UpdateReviewInput, Rating } from "./types";
import { ValidationError } from "../datasets/errors";

export function assertDatasetId(datasetId: unknown): string {
  if (typeof datasetId !== "string" || datasetId.trim().length === 0) {
    throw new ValidationError("datasetId is required");
  }
  return datasetId.trim();
}

export function assertReviewerId(reviewerId: unknown): string {
  if (typeof reviewerId !== "string" || reviewerId.trim().length === 0) {
    throw new ValidationError("reviewerId is required");
  }
  return reviewerId.trim();
}

export function assertRating(rating: unknown): Rating {
  if (typeof rating !== "number" || !Number.isInteger(rating) || rating < 1 || rating > 5) {
    throw new ValidationError("rating must be an integer between 1 and 5");
  }
  return rating as Rating;
}
