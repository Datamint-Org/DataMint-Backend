# datamint-backend

API gateway and services for **DataMint**: dataset minting, access control, and marketplace. Built with **Express** and **TypeScript**.

## What’s in this repo

- REST API with health, datasets and reviews endpoints
- In-memory dataset catalog with CRUD, validation, pagination, search and filtering
- In-memory dataset reviews and ratings with CRUD, validation, pagination and filtering
- TypeScript, Jest for tests, ESLint
- Ready for Stellar Horizon integration and dataset/license logic

## Datasets API

Base path: `/api/v1/datasets`

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/` | List datasets. Supports `page`, `pageSize`, `category`, `providerId`, `search`, `sort` (`name`\|`price`\|`createdAt`), `order` (`asc`\|`desc`). |
| `GET` | `/:id` | Fetch a single dataset by id. |
| `POST` | `/` | Create a dataset. Requires `name`, `providerId`, `storageHash`. |
| `PATCH` | `/:id` | Update mutable fields of a dataset. |
| `DELETE` | `/:id` | Remove a dataset. |

List responses include `datasets`, `total`, `page`, `pageSize` and `totalPages`.
Validation failures return `400`, unknown ids return `404`.

## Reviews API

Base path: `/api/v1/reviews`

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/` | List reviews. Supports `page`, `pageSize`, `datasetId`, `reviewerId`, `rating`, `sort` (`rating`\|`createdAt`), `order` (`asc`\|`desc`). |
| `GET` | `/:id` | Fetch a single review by id. |
| `POST` | `/` | Create a review. Requires `datasetId`, `reviewerId`, `rating` (integer 1-5). Rejects with `404` if the dataset does not exist. |
| `PATCH` | `/:id` | Update a review's `rating` and/or `comment`. |
| `DELETE` | `/:id` | Remove a review. |
| `GET` | `/datasets/:datasetId/average` | Convenience endpoint returning the average `rating` and review `count` for a dataset. |

List responses include `reviews`, `total`, `page`, `pageSize` and `totalPages`.
Validation failures return `400`, unknown ids (review or dataset) return `404`.

## Prerequisites

- **Node.js** 18+ (LTS 20 recommended)
- **npm** (or yarn/pnpm)

## Setup

1. Clone the repo and enter the directory:
   ```bash
   git clone <repo-url> && cd datamint-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build and test:
   ```bash
   npm run build
   npm test
   ```

## Scripts

| Script | Description |
|--------|-------------|
| `npm run build` | Compile TypeScript to `dist/` |
| `npm start` | Run production server (`dist/server.js`) |
| `npm run dev` | Run with ts-node for development |
| `npm test` | Run Jest tests |
| `npm run lint` | Run ESLint |

## Environment

- `PORT` – Server port (default: `3001`)

## Contributing

1. Fork the repo and create a branch from `main`.
2. Install deps, then:
   - `npm run build`
   - `npm test`
   - `npm run lint`
3. Open a pull request. CI runs on `main` and on PRs to `main` (install, build, test).

## License

MIT
