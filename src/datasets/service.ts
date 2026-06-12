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

export function listDatasets(query: ListQuery = {}): Paginated<Dataset> {
  let items = repo.findAll();
  items = byCategory(items, query.category);
  items = byProvider(items, query.providerId);
  items = bySearch(items, query.search);
  items = sortBy(items, query.sort, query.order);
  return paginate(items, query.page ?? 1, query.pageSize ?? 20);
}

export function getDataset(id: string): Dataset {
  const found = repo.findById(id);
  if (!found) throw new NotFoundError(`dataset ${id} not found`);
  return found;
}
