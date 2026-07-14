import express, { Request, Response } from "express";
import cors from "cors";
import { requestLogger } from "./middleware/requestLogger";
import { errorHandler } from "./middleware/errorHandler";
import { datasetsRouter } from "./datasets/routes";
import { reviewsRouter } from "./reviews/routes";

const app = express();
app.use(cors());
app.use(express.json());
app.use(requestLogger);

app.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "ok", service: "datamint-backend" });
});

app.use("/api/v1/datasets", datasetsRouter);
app.use("/api/v1/reviews", reviewsRouter);

app.use(errorHandler);

export default app;
