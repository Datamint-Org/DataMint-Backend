import { Request, Response, NextFunction } from "express";
import * as service from "./service";
import { DatasetCategory, ListQuery } from "./types";

export function listHandler(req: Request, res: Response, next: NextFunction): void {
  try {
    const q = req.query;
    const result = service.listDatasets({
      page: typeof q.page === "string" ? Number(q.page) : undefined,
      pageSize: typeof q.pageSize === "string" ? Number(q.pageSize) : undefined,
      category: typeof q.category === "string" ? (q.category as DatasetCategory) : undefined,
      providerId: typeof q.providerId === "string" ? q.providerId : undefined,
      search: typeof q.search === "string" ? q.search : undefined,
      sort: typeof q.sort === "string" ? (q.sort as ListQuery["sort"]) : undefined,
      order: typeof q.order === "string" ? (q.order as ListQuery["order"]) : undefined,
    });
    res.json({
      datasets: result.items,
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
    res.json(service.getDataset(req.params.id));
  } catch (err) {
    next(err);
  }
}
