import { Router } from "express";
import {
  listHandler,
  getHandler,
  createHandler,
  updateHandler,
  deleteHandler,
  averageHandler,
} from "./controller";

export const reviewsRouter = Router();

reviewsRouter.get("/", listHandler);
reviewsRouter.get("/:id", getHandler);
