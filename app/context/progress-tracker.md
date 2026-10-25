# Progress Tracker

Update this file whenever the current phase, active feature, or implementation state changes.

## Current Phase

- Phase 1 — Foundation

## Current Goal

- Editor chrome complete; awaiting next feature spec.

## Completed

- 01 Design System (spec: `feature-specs/01-designe-system.md`)
  - shadcn/ui (`base-nova` style, Base UI primitives) with Button, Card, Dialog, Input, Tabs, Textarea, ScrollArea in `components/ui/`.
  - `lucide-react` installed; `cn()` helper in `lib/utils.ts` (spec said `libs/`; `lib/` matches `code-standards.md` and `components.json`).
  - Dark-only theme: project tokens + shadcn semantic tokens mapped onto them in `globals.css`; `.dark` always set on `<html>`.
  - Verified: `tsc` clean, `next build` passes with all components rendered, `cn()` resolves Tailwind conflicts.
- 02 Editor Chrome (spec: `feature-specs/02-editor-chrome.md`)
  - `components/editor/editor-navbar.tsx`: `h-14` top bar, left/center/right sections, sidebar toggle (`PanelLeftOpen`/`PanelLeftClose`); props `isSidebarOpen`, `onToggleSidebar`.
  - `components/editor/project-sidebar.tsx`: fixed floating overlay below the navbar, slides in from the left (translate, no layout push), `inert` when closed; props `isOpen`, `onClose`. Tabs "My Projects"/"Shared" with empty states; full-width `New Project` button (no handler yet).
  - `components/editor/editor-dialog.tsx`: `EditorDialog` pattern (title, description, body, footer actions) wrapping shadcn `Dialog` with project tokens and `rounded-3xl`. No concrete dialogs built.
  - `components/editor/editor-shell.tsx`: client shell owning sidebar open state; composes navbar, sidebar, and a `main` slot for page content.
  - `app/editor/layout.tsx` (server) wraps `/editor` routes in `EditorShell`; `app/editor/page.tsx` is a placeholder canvas.
  - Verified: `tsc --noEmit` clean, `eslint` clean, `next build` passes with `/editor` route.

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
- shadcn `tabs.tsx` uses `data-horizontal:` variants, but Base UI sets `data-orientation="horizontal"`, so those styles never apply. `ProjectSidebar` passes `flex-col` / `h-8` explicitly; fixing `components/ui/tabs.tsx` itself needs explicit approval.
- `LayoutProps` is a Next 16 global type; run `npx next typegen` (or `next dev`) before a standalone `tsc`.
