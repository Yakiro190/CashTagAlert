# CashTagAlert

Развернутый стартовый репозиторий (monorepo) для проекта CashTagAlert.

## Структура

- `apps/web` — веб-клиент
- `apps/api` — backend API
- `packages/shared` — общий код (типы/утилиты)
- `docs` — документация
- `infra` — инфраструктура (docker, deploy)
- `scripts` — служебные скрипты
- `tests/e2e` — e2e тесты

## Быстрый старт

```bash
pnpm install
pnpm dev
```

## Команды

- `pnpm dev` — запуск web + api в dev
- `pnpm build` — сборка всех пакетов
- `pnpm test` — запуск тестов
- `pnpm lint` — линтинг
