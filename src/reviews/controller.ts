import { Request, Response, NextFunction } from "express";
import * as service from "./service";
import { ListQuery } from "./types";

export function listHandler(req: Request, res: Response, next: NextFunction): void {
  try {
    const q = req.query;
    const result = service.listReviews({
      page: typeof q.page === "string" ? Number(q.page) : undefined,
      pageSize: typeof q.pageSize === "string" ? Number(q.pageSize) : undefined,
      datasetId: typeof q.datasetId === "string" ? q.datasetId : undefined,
      reviewerId: typeof q.reviewerId === "string" ? q.reviewerId : undefined,
      rating: typeof q.rating === "string" ? Number(q.rating) : undefined,
      sort: typeof q.sort === "string" ? (q.sort as ListQuery["sort"]) : undefined,
      order: typeof q.order === "string" ? (q.order as ListQuery["order"]) : undefined,
    });
    res.json({
      reviews: result.items,
      total: result.total,
      page: result.page,
      pageSize: result.pageSize,
      totalPages: result.totalPages,
    });
  } catch (err) {
    next(err);
  }
}

export function getHandler(req: Request, res: Response, next: NextFunction): void {
  try {
    res.json(service.getReview(req.params.id));
  } catch (err) {
    next(err);
  }
}

export function createHandler(req: Request, res: Response, next: NextFunction): void {
  try {
    res.status(201).json(service.createReview(req.body));
  } catch (err) {
    next(err);
  }
}

export function updateHandler(req: Request, res: Response, next: NextFunction): void {
  try {
    res.json(service.updateReview(req.params.id, req.body));
  } catch (err) {
    next(err);
  }
}

export function deleteHandler(req: Request, res: Response, next: NextFunction): void {
  try {
    service.deleteReview(req.params.id);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
}

export function averageHandler(req: Request, res: Response, next: NextFunction): void {
  try {
    res.json(service.averageRatingForDataset(req.params.datasetId));
  } catch (err) {
    next(err);
  }
}
