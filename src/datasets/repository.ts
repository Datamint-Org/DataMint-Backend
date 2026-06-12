import { datasets } from "./store";
import { Dataset } from "./types";

export function insert(dataset: Dataset): Dataset {
  datasets.push(dataset);
  return dataset;
}
