import request from "supertest";
import app from "../index";
import * as service from "./service";
import { validateCreate, assertName } from "./validation";
import { paginate, clampPageSize } from "./pagination";
import { bySearch, byCategory } from "./filters";
import { ValidationError } from "./errors";
import { datasets } from "./store";

describe("validation", () => {
  it("assertName rejects short names", () => {
    expect(() => assertName("ab")).toThrow(ValidationError);
  });

  it("validateCreate normalizes optional fields", () => {
    const v = validateCreate({
      name: "Test Set",
      providerId: "p1",
      storageHash: "Qm123",
    });
    expect(v.category).toBe("other");
    expect(v.priceXlm).toBe(0);
    expect(v.tags).toEqual([]);
  });
});
