# CashTagAlert

Expanded starter monorepo for the CashTagAlert project.

## Structure

- `apps/web` — web client
- `apps/api` — backend API
- `packages/shared` — shared code (types/utils)
- `docs` — documentation
- `infra` — infrastructure (docker, deploy)
- `scripts` — utility scripts
- `tests/e2e` — end-to-end tests

## Quick start

```bash
pnpm install
pnpm dev
```

## Commands

- `pnpm dev` — run web + api in development mode
- `pnpm build` — build all packages
- `pnpm test` — run tests
- `pnpm lint` — run lint checks
