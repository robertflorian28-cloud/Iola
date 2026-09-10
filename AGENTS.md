whatever action you can do yourself , please do yourself,this includes starting apps and verification

# Repository Guidelines

## Project Structure & Module Organization

This is a Next.js App Router site written in TypeScript.

- `app/` contains route-level UI, metadata, and global styles. The homepage is `app/page.tsx`; shared document metadata lives in `app/layout.tsx`.
- `components/` contains reusable interactive components such as the header, contact form, contact dock, and motion wrapper.
- `lib/site-data.ts` is the central source for contact details, services, and portfolio content.
- `public/assets/` is the canonical media library exposed at `/assets/...`. It contains the IOLA logos, founder portrait, and project folders `amenajare-rezidentiala/`, `design-interior/`, and `momente-impreuna/`.
- `public/assets/illustrations/` stores generated landing-page illustrations that replace generic stock imagery.
- `public/images/` contains legacy generated imagery and must not be used for new page content.
- Build output in `.next/` and installed packages in `node_modules/` must not be edited or committed.

There is currently no automated test directory. Add future tests beside the feature as `*.test.tsx` or under `tests/` for integration coverage.

## Build, Test, and Development Commands

Use pnpm and preserve `pnpm-lock.yaml`.

- `pnpm install` installs the exact dependency graph.
- `pnpm dev` starts the local development server with hot reload.
- `pnpm build` creates the production build and runs Next.js TypeScript validation.
- `pnpm start` serves the completed production build.

No test runner or working standalone lint configuration is currently installed. Until one is added, `pnpm build` is the required validation before review.

## Coding Style & Naming Conventions

Use strict TypeScript, two-space indentation, semicolons, and double quotes. Name React components and component files in PascalCase (`ContactForm.tsx`); use camelCase for functions and data fields. Keep CSS classes descriptive and kebab-cased (`project-caption`). Prefer Server Components; add `"use client"` only where browser state, events, or Motion are required. Use `next/image` for raster assets.

Use `@phosphor-icons/react` for all interface icons. Do not introduce custom SVG paths or another icon library when a suitable Phosphor icon exists. Keep icon sizes and weights consistent, and give icon-only controls an accessible label.

Reference project media with root-relative URLs such as `/assets/design-interior/dormitor-ansamblu.png` and render raster assets through `next/image`. Preserve the supplied filenames and group new files by project. Prefer IOLA-owned media or purpose-made illustrations; do not add generic stock photography.

## Testing Guidelines

Manually verify desktop and mobile layouts, navigation anchors, accordion controls, form validation, and all WhatsApp, telephone, and Instagram links. Check for horizontal overflow at common widths such as 390px, 768px, and 1440px. New test infrastructure should include a documented `pnpm test` script.

## Commit & Pull Request Guidelines

This checkout has no Git history, so no repository-specific convention exists. Use concise Conventional Commit messages, for example `feat: add portfolio filtering` or `fix: prevent mobile menu overflow`. Pull requests should explain the user-facing change, list validation performed, link related issues, and include before/after screenshots for visual work.

## Configuration & Content Safety

Replace the demo phone, WhatsApp number, and Instagram handle in `lib/site-data.ts` before deployment. Never commit secrets or client-private project information. Optimize new images and provide accurate Romanian alt text.
