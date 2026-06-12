import { CreateDatasetInput, UpdateDatasetInput, DatasetCategory } from "./types";
import { ValidationError } from "./errors";

const CATEGORIES: DatasetCategory[] = [
  "weather",
  "finance",
  "health",
  "energy",
  "mobility",
  "social",
  "iot",
  "other",
];

export function assertName(name: unknown): string {
  if (typeof name !== "string" || name.trim().length < 3) {
    throw new ValidationError("name must be a string of at least 3 characters");
  }
  return name.trim();
}

export function assertProviderId(providerId: unknown): string {
  if (typeof providerId !== "string" || providerId.trim().length === 0) {
    throw new ValidationError("providerId is required");
  }
  return providerId.trim();
}

export function assertCategory(category: unknown): DatasetCategory {
  if (category === undefined) return "other";
  if (typeof category !== "string" || !CATEGORIES.includes(category as DatasetCategory)) {
    throw new ValidationError(`category must be one of: ${CATEGORIES.join(", ")}`);
  }
  return category as DatasetCategory;
}

export function assertPrice(price: unknown): number {
  if (price === undefined) return 0;
  if (typeof price !== "number" || Number.isNaN(price) || price < 0) {
    throw new ValidationError("priceXlm must be a non-negative number");
  }
  return price;
}

export function assertStorageHash(hash: unknown): string {
  if (typeof hash !== "string" || hash.trim().length === 0) {
    throw new ValidationError("storageHash is required");
  }
  return hash.trim();
}

export function validateCreate(input: CreateDatasetInput) {
  return {
    name: assertName(input.name),
    providerId: assertProviderId(input.providerId),
    category: assertCategory(input.category),
    priceXlm: assertPrice(input.priceXlm),
    storageHash: assertStorageHash(input.storageHash),
    description: typeof input.description === "string" ? input.description : "",
    sizeBytes: typeof input.sizeBytes === "number" ? input.sizeBytes : 0,
    rowCount: typeof input.rowCount === "number" ? input.rowCount : 0,
    tags: Array.isArray(input.tags) ? input.tags.map(String) : [],
  };
}

export function validateUpdate(input: UpdateDatasetInput): UpdateDatasetInput {
  const patch: UpdateDatasetInput = {};
  if (input.name !== undefined) patch.name = assertName(input.name);
  if (input.category !== undefined) patch.category = assertCategory(input.category);
  if (input.priceXlm !== undefined) patch.priceXlm = assertPrice(input.priceXlm);
  if (input.description !== undefined) patch.description = String(input.description);
  if (input.tags !== undefined) {
    patch.tags = Array.isArray(input.tags) ? input.tags.map(String) : [];
  }
  if (input.licensed !== undefined) patch.licensed = Boolean(input.licensed);
  return patch;
}
