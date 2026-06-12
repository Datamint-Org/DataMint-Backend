import { datasets } from "./store";
import { Dataset } from "./types";

export function insert(dataset: Dataset): Dataset {
  datasets.push(dataset);
  return dataset;
}

export function findAll(): Dataset[] {
  return [...datasets];
}

export function findById(id: string): Dataset | undefined {
  return datasets.find((d) => d.id === id);
}

export function update(id: string, patch: Partial<Dataset>): Dataset | undefined {
  const existing = datasets.find((d) => d.id === id);
  if (!existing) return undefined;
  Object.assign(existing, patch);
  return existing;
}

export function remove(id: string): boolean {
  const idx = datasets.findIndex((d) => d.id === id);
  if (idx === -1) return false;
  datasets.splice(idx, 1);
  return true;
}

export function count(): number {
  return datasets.length;
}
