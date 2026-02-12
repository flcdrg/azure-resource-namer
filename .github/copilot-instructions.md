# Copilot instructions for azure-resource-namer

These notes give AI coding agents the minimum context to work productively in this repo.

## What this project is
- A small TypeScript single‑page app built with Aurelia and Vite that generates Azure resource names based on CAF guidance.
- Core idea: pick a resource type, enter workload/env/region/instance, and compute a name using a pattern plus per‑resource constraints.

## Architecture at a glance
- Resource catalog: `src/resources.ts` exports `resources: { category, assets }[]`. Each asset is an `IResource`:
  - `abbrev` (short code, must be unique across the entire list), `name`, optional `pattern`, `minLength`, `maxLength`, `regex`, `description`.
  - Example with custom pattern (no hyphens): Storage account `st` and Container Registry `cr` use `pattern: '{resource}{workload}{environment}{region}{instance}'`.
- Name formatting engine: `src/formatting.ts` exports `formatResourceName(selectedResource, workload, environment, region, instance, feedback)`.
  - Pattern default: `{resource}-{workload}-{environment}-{region}-{instance}` if `resource.pattern` is not set.
  - `instance` is 3‑digit, zero‑padded when > 0; omitted entirely when 0.
  - Cleanup: collapses repeated dashes and trims trailing dashes.
  - Validation: fails if `name.length > maxLength` or `regex` does not match. Writes messages into the mutable `feedback` object `{ validationFeedback, resourceNameValid }`.
- UI: Aurelia v2 style bootstrapping in `src/main.ts` with `App` (template `src/app-full.html`), components in `src/*.ts` (e.g., `resourcetype-list.ts`, `region.ts`, `workload.ts`). Styling via Bootstrap.
- Messaging: `src/messages.ts` contains simple event types (e.g., `resourceChanged`).
- Module resolution: `tsconfig.json` sets `baseUrl: "src"`, so imports like `import { formatResourceName } from 'formatting'` resolve to `src/formatting.ts`.

## Developer workflows
- Run dev: `pnpm start` then open http://localhost:9000 (dev server + HMR).
- Build prod: `pnpm build` (outputs to `dist/`).
- Tests: `pnpm test` runs Jest with ts‑jest. Coverage goes to `test/coverage-jest/`. Tests live under `test/unit/formatting/`.
  - Inline snapshot expectations are used; if formatting rules change, update snapshots accordingly.

## Project conventions and pitfalls
- Keep `IResource.abbrev` unique. Matching in `resourcetype-list.ts` uses `abbrev` equality; duplicates lead to ambiguous selection. Audit before adding new entries.
- When adding a new resource:
  - Put it in the right category in `src/resources.ts`.
  - Add `maxLength`, `regex`, and a human‑readable `description` sourced from Azure docs when available.
  - Use a custom `pattern` if the resource forbids hyphens or casing rules require a different layout.
  - Add or update unit tests that cover the happy path and at least one invalid case for the new rules.
- Formatting contract to rely on:
  - Inputs are used verbatim (no automatic lower‑casing); validation enforces restrictions via `regex` and `maxLength`.
  - Example: for Storage account `st`, inputs must already be lowercase alphanumerics to pass `regex: /^[a-z0-9]+$/`.
- Import style: prefer root‑based imports from `src` (e.g., `'resources'`, `'formatting'`), not relative `../../` chains.

## Useful file map
- `src/resources.ts` — source of truth for resource types and constraints.
- `src/formatting.ts` — formats and validates names; update here if global naming behavior changes.
- `test/unit/formatting/*.spec.ts` — examples of expected outputs (e.g., `st`, `cr`, `subnet`, `apim`).
- `vite.config.ts` — dev server config (port 9000).
- `README.md` — quickstart commands and CLI tips.

## External resources

Abbreviation recommendations for Azure resources: <https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-abbreviations>

## Examples
- Programmatic use in tests:
  ```ts
  const apim = resources.find(c => c.category === 'General')!.assets.find(a => a.abbrev === 'apim')!;
  const fb = { validationFeedback: '', resourceNameValid: true };
  const name = formatResourceName(apim, 'workload', 'prod', 'eastus', 1, fb);
  // name === 'apim-workload-prod-eastus-001'
  ```
- Custom pattern resource (no hyphens):
  ```ts
  // In resources.ts
  { abbrev: 'cr', name: 'Container registry', pattern: '{resource}{workload}{environment}{region}{instance}', ... }
  // => 'crworkloadprodeastus001'
  ```

## Contributing changes

- Adding a resource type
  - Pick the correct category in `src/resources.ts` and ensure `abbrev` is unique across all assets (selection logic matches by exact `abbrev`).
  - Provide `maxLength`, `regex`, and a short `description` sourced from Azure docs; set a custom `pattern` if the service disallows hyphens (e.g., storage, container registry).
  - Add tests under `test/unit/formatting/`: include a happy path (valid) and at least one invalid case using `MockFeedback`. Update inline snapshots if behavior changes.
  - Quick manual check: `pnpm start`, pick the resource, try example inputs, confirm validation messages when invalid.

- Changing global formatting rules (`src/formatting.ts`)
  - Preserve the contract: default pattern, 3‑digit zero‑padded instance (omit when 0), collapse duplicate dashes, trim trailing dashes.
  - Consider edge cases: empty workload/environment, instance=0, max length boundary, regex enforcement, custom patterns.
  - Update affected specs and refresh snapshots; ensure `pnpm test` passes and `pnpm build` succeeds.

If any of the above feels incomplete (e.g., missing workflows or a convention you rely on), tell us and we’ll refine this guide.
