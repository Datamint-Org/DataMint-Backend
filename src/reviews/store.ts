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

reviews.push({
  id: "rv_0002",
  datasetId: "global-weather",
  reviewerId: "user-jchen",
  rating: 4,
  comment: "Great historical depth, though a few stations have gaps in early 2024.",
  createdAt: "2025-01-15T09:30:00.000Z",
  updatedAt: "2025-01-15T09:30:00.000Z",
});

reviews.push({
  id: "rv_0003",
  datasetId: "fx-markets",
  reviewerId: "user-mrivera",
  rating: 5,
  comment: "Sub-second ticks held up perfectly for our backtests across all 28 pairs.",
  createdAt: "2025-01-20T13:00:00.000Z",
  updatedAt: "2025-01-20T13:00:00.000Z",
});

reviews.push({
  id: "rv_0004",
  datasetId: "genomics-panel",
  reviewerId: "user-plopez",
  rating: 3,
  comment: "Solid cohort size, but documentation on the variant calling pipeline could be clearer.",
  createdAt: "2025-01-25T08:45:00.000Z",
  updatedAt: "2025-01-25T08:45:00.000Z",
});

reviews.push({
  id: "rv_0005",
  datasetId: "energy-grid",
  reviewerId: "user-tkim",
  rating: 4,
  comment: "Minute-level load curves were exactly what we needed for demand forecasting.",
  createdAt: "2025-02-01T12:15:00.000Z",
  updatedAt: "2025-02-01T12:15:00.000Z",
});
