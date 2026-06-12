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

datasets.push({
  id: "fx-markets",
  name: "FX Tick Data",
  description: "Sub-second foreign exchange tick prices for 28 major currency pairs.",
  providerId: "provider-quantfeed",
  category: "finance",
  storageHash: "QmFinance002",
  priceXlm: 540,
  sizeBytes: 12_300_000_000,
  rowCount: 412_000_000,
  tags: ["finance", "forex", "ticks"],
  licensed: true,
  createdAt: "2025-01-11T14:30:00.000Z",
  updatedAt: "2025-01-11T14:30:00.000Z",
});

datasets.push({
  id: "genomics-panel",
  name: "Population Genomics Panel",
  description: "Anonymized variant calls across a 50,000 person reference cohort.",
  providerId: "provider-biocore",
  category: "health",
  storageHash: "QmHealth003",
  priceXlm: 980,
  sizeBytes: 88_000_000_000,
  rowCount: 1_900_000,
  tags: ["health", "genomics", "research"],
  licensed: false,
  createdAt: "2025-01-18T08:15:00.000Z",
  updatedAt: "2025-01-18T08:15:00.000Z",
});
