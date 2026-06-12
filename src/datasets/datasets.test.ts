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

describe("pagination", () => {
  it("clampPageSize caps to the maximum", () => {
    expect(clampPageSize(10_000)).toBe(100);
  });

  it("paginate computes totalPages", () => {
    const page = paginate([1, 2, 3, 4, 5], 1, 2);
    expect(page.totalPages).toBe(3);
    expect(page.items).toEqual([1, 2]);
  });
});

describe("filters", () => {
  it("bySearch matches name, description and tags", () => {
    const hits = bySearch(datasets, "weather");
    expect(hits.length).toBeGreaterThan(0);
  });

  it("byCategory filters by exact category", () => {
    expect(byCategory(datasets, "finance").every((d) => d.category === "finance")).toBe(true);
  });
});

describe("service", () => {
  it("createDataset assigns an id and timestamps", () => {
    const created = service.createDataset({
      name: "Service Created",
      providerId: "p-svc",
      storageHash: "QmSvc",
    });
    expect(created.id).toMatch(/^ds_/);
    expect(service.getDataset(created.id).name).toBe("Service Created");
  });

  it("getDataset throws for missing ids", () => {
    expect(() => service.getDataset("does-not-exist")).toThrow();
  });
});

describe("GET /api/v1/datasets", () => {
  it("returns a datasets array with pagination metadata", async () => {
    const res = await request(app).get("/api/v1/datasets");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.datasets)).toBe(true);
    expect(res.body).toHaveProperty("totalPages");
  });

  it("supports category filtering", async () => {
    const res = await request(app).get("/api/v1/datasets?category=energy");
    expect(res.status).toBe(200);
    expect(res.body.datasets.every((d: { category: string }) => d.category === "energy")).toBe(true);
  });
});

describe("POST /api/v1/datasets", () => {
  it("creates a dataset and returns 201", async () => {
    const res = await request(app)
      .post("/api/v1/datasets")
      .send({ name: "HTTP Created", providerId: "p-http", storageHash: "QmHttp" });
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
  });

  it("rejects invalid payloads with 400", async () => {
    const res = await request(app).post("/api/v1/datasets").send({ name: "x" });
    expect(res.status).toBe(400);
    expect(res.body.error).toBe("ValidationError");
  });
});
