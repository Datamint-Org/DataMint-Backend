import { reviews } from "./store";
import { Review } from "./types";

export function insert(review: Review): Review {
  reviews.push(review);
  return review;
}

export function findAll(): Review[] {
  return [...reviews];
}
