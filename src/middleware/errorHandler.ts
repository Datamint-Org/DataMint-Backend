import { Request, Response, NextFunction } from "express";

interface HttpError extends Error {
  status?: number;
}

/** Translates thrown domain errors into JSON HTTP responses. */
export function errorHandler(
  err: HttpError,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void {
  const status = err.status ?? 500;
  res.status(status).json({ error: err.name || "Error", message: err.message });
}
