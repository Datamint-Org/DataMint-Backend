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

datasets.push({
  id: "energy-grid",
  name: "Smart Grid Load Curves",
  description: "Minute-level electricity demand from 1,200 distribution substations.",
  providerId: "provider-gridco",
  category: "energy",
  storageHash: "QmEnergy004",
  priceXlm: 310,
  sizeBytes: 6_100_000_000,
  rowCount: 54_000_000,
  tags: ["energy", "grid", "demand"],
  licensed: true,
  createdAt: "2025-01-25T11:45:00.000Z",
  updatedAt: "2025-01-25T11:45:00.000Z",
});

datasets.push({
  id: "urban-mobility",
  name: "Urban Mobility Traces",
  description: "GPS mobility traces from shared mobility fleets across 60 cities.",
  providerId: "provider-mobilix",
  category: "mobility",
  storageHash: "QmMobility005",
  priceXlm: 220,
  sizeBytes: 9_700_000_000,
  rowCount: 130_000_000,
  tags: ["mobility", "gps", "cities"],
  licensed: false,
  createdAt: "2025-02-02T16:20:00.000Z",
  updatedAt: "2025-02-02T16:20:00.000Z",
});
