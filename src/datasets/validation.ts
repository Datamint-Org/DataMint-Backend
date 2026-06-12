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
