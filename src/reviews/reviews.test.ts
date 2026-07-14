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
