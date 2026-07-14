/** Domain types for dataset reviews and ratings. */

export type Rating = 1 | 2 | 3 | 4 | 5;

export interface Review {
  id: string;
  datasetId: string;
  reviewerId: string;
  rating: Rating;
  comment: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateReviewInput {
  datasetId: string;
  reviewerId: string;
  rating: number;
  comment?: string;
}

export interface UpdateReviewInput {
  rating?: Rating;
  comment?: string;
}

export interface ListQuery {
  page?: number;
  pageSize?: number;
  datasetId?: string;
  reviewerId?: string;
  rating?: number;
  sort?: "rating" | "createdAt";
  order?: "asc" | "desc";
}

export interface AverageRating {
  datasetId: string;
  average: number;
  count: number;
}
