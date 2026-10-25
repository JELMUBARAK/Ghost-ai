# Progress Tracker

Update this file whenever the current phase, active feature, or implementation state changes.

## Current Phase

- Phase 1 — Foundation

## Current Goal

- Design system: shadcn/ui primitives, `cn()` helper, and dark-only theme tokens.

## Completed

- 01 Design System (spec: `feature-specs/01-designe-system.md`)
  - shadcn/ui (`base-nova` style, Base UI primitives) with Button, Card, Dialog, Input, Tabs, Textarea, ScrollArea in `components/ui/`.
  - `lucide-react` installed; `cn()` helper in `lib/utils.ts` (spec said `libs/`; `lib/` matches `code-standards.md` and `components.json`).
  - Dark-only theme: project tokens + shadcn semantic tokens mapped onto them in `globals.css`; `.dark` always set on `<html>`.
  - Verified: `tsc` clean, `next build` passes with all components rendered, `cn()` resolves Tailwind conflicts.

## In Progress

- None.

## Next Up

- Add the next planned feature unit here.

## Open Questions

- Add unresolved product or implementation questions here.

## Architecture Decisions

- Add decisions that affect the system design or data model.

## Session Notes

- The shadcn CLI generated `import { cn } from "cn"` in every `components/ui/*` file; corrected to `@/lib/utils`. Check this again after adding new shadcn components.
- `LayoutProps` is a Next 16 global type; run `npx next typegen` (or `next dev`) before a standalone `tsc`.
