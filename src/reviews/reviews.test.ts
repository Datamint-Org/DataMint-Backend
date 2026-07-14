import request from "supertest";
import app from "../index";
import * as service from "./service";
import { validateCreate, assertRating } from "./validation";
import { byDatasetId, byRating } from "./filters";
import { NotFoundError, ValidationError } from "../datasets/errors";
import { reviews } from "./store";

describe("validation", () => {
  it("assertRating rejects out-of-range ratings", () => {
    expect(() => assertRating(6)).toThrow(ValidationError);
  });

  it("assertRating rejects non-integer ratings", () => {
    expect(() => assertRating(3.5)).toThrow(ValidationError);
  });

  it("validateCreate normalizes an omitted comment", () => {
    const v = validateCreate({ datasetId: "global-weather", reviewerId: "r1", rating: 4 });
    expect(v.comment).toBe("");
  });
});

describe("filters", () => {
  it("byDatasetId filters to a single dataset", () => {
    expect(byDatasetId(reviews, "global-weather").every((r) => r.datasetId === "global-weather")).toBe(
      true,
    );
  });

  it("byRating filters by exact rating", () => {
    expect(byRating(reviews, 5).every((r) => r.rating === 5)).toBe(true);
  });
});

describe("service", () => {
  it("createReview assigns an id and timestamps", () => {
    const created = service.createReview({ datasetId: "global-weather", reviewerId: "svc-user", rating: 4 });
    expect(created.id).toMatch(/^rv_/);
    expect(service.getReview(created.id).reviewerId).toBe("svc-user");
  });

  it("createReview rejects reviews for unknown datasets", () => {
    expect(() =>
      service.createReview({ datasetId: "does-not-exist", reviewerId: "svc-user", rating: 4 }),
    ).toThrow(NotFoundError);
  });

  it("getReview throws for missing ids", () => {
    expect(() => service.getReview("does-not-exist")).toThrow();
  });

  it("averageRatingForDataset computes the mean rating", () => {
    const avg = service.averageRatingForDataset("fx-markets");
    expect(avg.count).toBeGreaterThan(0);
    expect(avg.average).toBeGreaterThanOrEqual(1);
    expect(avg.average).toBeLessThanOrEqual(5);
  });
});
