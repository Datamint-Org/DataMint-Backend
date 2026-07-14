import { Review } from "./types";

/** In-memory review store. Swap for a real database in production. */
export const reviews: Review[] = [];

reviews.push({
  id: "rv_0001",
  datasetId: "global-weather",
  reviewerId: "user-abarnes",
  rating: 5,
  comment: "Incredible coverage across 40,000 stations. Cleaned up our climate model within a day.",
  createdAt: "2025-01-10T10:00:00.000Z",
  updatedAt: "2025-01-10T10:00:00.000Z",
});
