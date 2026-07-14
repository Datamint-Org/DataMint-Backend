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

const MAX_COMMENT_LENGTH = 2000;

export function assertComment(comment: unknown): string {
  if (comment === undefined) return "";
  if (typeof comment !== "string" || comment.length > MAX_COMMENT_LENGTH) {
    throw new ValidationError(`comment must be a string of at most ${MAX_COMMENT_LENGTH} characters`);
  }
  return comment;
}

export function validateCreate(input: CreateReviewInput) {
  return {
    datasetId: assertDatasetId(input.datasetId),
    reviewerId: assertReviewerId(input.reviewerId),
    rating: assertRating(input.rating),
    comment: assertComment(input.comment),
  };
}

export function validateUpdate(input: UpdateReviewInput): UpdateReviewInput {
  const patch: UpdateReviewInput = {};
  if (input.rating !== undefined) patch.rating = assertRating(input.rating);
  if (input.comment !== undefined) patch.comment = assertComment(input.comment);
  return patch;
}
