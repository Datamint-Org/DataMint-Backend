/** Domain types for the DataMint dataset catalog. */

export type DatasetCategory =
  | "weather"
  | "finance"
  | "health"
  | "energy"
  | "mobility"
  | "social"
  | "iot"
  | "other";

export interface Dataset {
  id: string;
  name: string;
  description: string;
  providerId: string;
  category: DatasetCategory;
  storageHash: string;
  priceXlm: number;
  sizeBytes: number;
  rowCount: number;
  tags: string[];
  licensed: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateDatasetInput {
  name: string;
  description?: string;
  providerId: string;
  category?: DatasetCategory;
  storageHash: string;
  priceXlm?: number;
  sizeBytes?: number;
  rowCount?: number;
  tags?: string[];
}

export interface UpdateDatasetInput {
  name?: string;
  description?: string;
  category?: DatasetCategory;
  priceXlm?: number;
  tags?: string[];
  licensed?: boolean;
}

export interface ListQuery {
  page?: number;
  pageSize?: number;
  category?: DatasetCategory;
  providerId?: string;
  search?: string;
  sort?: "name" | "price" | "createdAt";
  order?: "asc" | "desc";
}
