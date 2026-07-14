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
