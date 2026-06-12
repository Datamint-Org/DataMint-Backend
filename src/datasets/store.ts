import { Dataset } from "./types";

/** In-memory dataset store. Swap for a real database in production. */
export const datasets: Dataset[] = [];

datasets.push({
  id: "global-weather",
  name: "Global Weather Observations",
  description: "Hourly surface weather readings from 40,000 stations worldwide.",
  providerId: "provider-noaa",
  category: "weather",
  storageHash: "QmWeather001",
  priceXlm: 120,
  sizeBytes: 4_800_000_000,
  rowCount: 9_200_000,
  tags: ["weather", "climate", "timeseries"],
  licensed: true,
  createdAt: "2025-01-04T09:00:00.000Z",
  updatedAt: "2025-01-04T09:00:00.000Z",
});
