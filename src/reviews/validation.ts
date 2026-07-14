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
