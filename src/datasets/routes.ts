import { Router } from "express";
import {
  listHandler,
  getHandler,
  createHandler,
  updateHandler,
  deleteHandler,
} from "./controller";

export const datasetsRouter = Router();

datasetsRouter.get("/", listHandler);
datasetsRouter.get("/:id", getHandler);
datasetsRouter.post("/", createHandler);
datasetsRouter.patch("/:id", updateHandler);
datasetsRouter.delete("/:id", deleteHandler);
