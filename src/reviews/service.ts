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

export function listReviews(query: ListQuery = {}): Paginated<Review> {
  let items = repo.findAll();
  items = byDatasetId(items, query.datasetId);
  items = byReviewerId(items, query.reviewerId);
  items = byRating(items, query.rating);
  items = sortBy(items, query.sort, query.order);
  return paginate(items, query.page ?? 1, query.pageSize ?? 20);
}

export function getReview(id: string): Review {
  const found = repo.findById(id);
  if (!found) throw new NotFoundError(`review ${id} not found`);
  return found;
}

export function updateReview(id: string, input: UpdateReviewInput): Review {
  const patch = validateUpdate(input);
  const updated = repo.update(id, { ...patch, updatedAt: new Date().toISOString() });
  if (!updated) throw new NotFoundError(`review ${id} not found`);
  return updated;
}

export function deleteReview(id: string): void {
  const ok = repo.remove(id);
  if (!ok) throw new NotFoundError(`review ${id} not found`);
}

export function averageRatingForDataset(datasetId: string): AverageRating {
  const dataset = datasetsRepo.findById(datasetId);
  if (!dataset) throw new NotFoundError(`dataset ${datasetId} not found`);
  const items = repo.findByDatasetId(datasetId);
  const count = items.length;
  const average = count === 0 ? 0 : items.reduce((sum, r) => sum + r.rating, 0) / count;
  return { datasetId, average: Math.round(average * 100) / 100, count };
}
