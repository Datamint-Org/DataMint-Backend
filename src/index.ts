import express, { Request, Response } from "express";
import cors from "cors";
import { requestLogger } from "./middleware/requestLogger";

const app = express();
app.use(cors());
app.use(express.json());
app.use(requestLogger);

app.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "ok", service: "datamint-backend" });
});

app.get("/api/v1/datasets", (_req: Request, res: Response) => {
  res.json({ datasets: [], total: 0 });
});

export default app;
