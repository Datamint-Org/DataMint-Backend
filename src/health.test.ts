import request from "supertest";
import app from "./index";

describe("DataMint API", () => {
  it("GET /health returns 200 and status ok", async () => {
    const res = await request(app).get("/health");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: "ok", service: "datamint-backend" });
  });

  it("GET /api/v1/datasets returns datasets array", async () => {
    const res = await request(app).get("/api/v1/datasets");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("datasets");
    expect(Array.isArray(res.body.datasets)).toBe(true);
  });
});
