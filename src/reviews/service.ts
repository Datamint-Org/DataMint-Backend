import { Review, CreateReviewInput, UpdateReviewInput, ListQuery, AverageRating } from "./types";
import { Paginated } from "../datasets/types";
import * as repo from "./repository";
import * as datasetsRepo from "../datasets/repository";
import { validateCreate, validateUpdate } from "./validation";
import { paginate } from "../datasets/pagination";
import { byDatasetId, byReviewerId, byRating, sortBy } from "./filters";
import { nextReviewId } from "./ids";
import { NotFoundError } from "../datasets/errors";

export function createReview(input: CreateReviewInput): Review {
  const v = validateCreate(input);
  const dataset = datasetsRepo.findById(v.datasetId);
  if (!dataset) throw new NotFoundError(`dataset ${v.datasetId} not found`);
  const now = new Date().toISOString();
  const review: Review = {
    id: nextReviewId(),
    datasetId: v.datasetId,
    reviewerId: v.reviewerId,
    rating: v.rating,
    comment: v.comment,
    createdAt: now,
    updatedAt: now,
  };
  return repo.insert(review);
}
