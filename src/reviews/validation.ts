import { CreateReviewInput, UpdateReviewInput, Rating } from "./types";
import { ValidationError } from "../datasets/errors";

export function assertDatasetId(datasetId: unknown): string {
  if (typeof datasetId !== "string" || datasetId.trim().length === 0) {
    throw new ValidationError("datasetId is required");
  }
  return datasetId.trim();
}
