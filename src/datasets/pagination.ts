import { Paginated } from "./types";

export const DEFAULT_PAGE_SIZE = 20;
export const MAX_PAGE_SIZE = 100;

export function clampPageSize(size: number | undefined): number {
  if (!size || size < 1) return DEFAULT_PAGE_SIZE;
  return Math.min(Math.floor(size), MAX_PAGE_SIZE);
}

export function clampPage(page: number | undefined): number {
  if (!page || page < 1) return 1;
  return Math.floor(page);
}

export function paginate<T>(items: T[], page: number, pageSize: number): Paginated<T> {
  const p = clampPage(page);
  const size = clampPageSize(pageSize);
  const start = (p - 1) * size;
  return {
    items: items.slice(start, start + size),
    total: items.length,
    page: p,
    pageSize: size,
    totalPages: Math.max(1, Math.ceil(items.length / size)),
  };
}
