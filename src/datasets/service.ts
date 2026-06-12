import {
  Dataset,
  CreateDatasetInput,
  UpdateDatasetInput,
  ListQuery,
  Paginated,
} from "./types";
import * as repo from "./repository";
import { validateCreate, validateUpdate } from "./validation";
import { paginate } from "./pagination";
import { byCategory, byProvider, bySearch, sortBy } from "./filters";
import { nextDatasetId } from "./ids";
import { NotFoundError } from "./errors";

export function createDataset(input: CreateDatasetInput): Dataset {
  const v = validateCreate(input);
  const now = new Date().toISOString();
  const dataset: Dataset = {
    id: nextDatasetId(),
    name: v.name,
    description: v.description,
    providerId: v.providerId,
    category: v.category,
    storageHash: v.storageHash,
    priceXlm: v.priceXlm,
    sizeBytes: v.sizeBytes,
    rowCount: v.rowCount,
    tags: v.tags,
    licensed: false,
    createdAt: now,
    updatedAt: now,
  };
  return repo.insert(dataset);
}
