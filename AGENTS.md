# Agent Notes

This is a public portfolio repository for a real business website rebuild.

- Never commit `.env.local`, secrets, private business documents, raw source screenshots, or unpublished client/staff information.
- Keep migration source material in ignored folders until it is reviewed for public use.
- Use `npm run lint`, `npm run typecheck`, and `npm run build` before opening PRs.
- Prefer small, readable commits that show the build process clearly for recruiters and collaborators.

## Dev Server Workflow

- The local dev server is pinned to `http://localhost:3762` via `npm run dev`.
- On Windows, prefer `npm.cmd run dev` from the Codex integrated terminal.
- If `3762` is already in use, check whether this project is already running and reuse that server instead of starting a second copy.
- Do not let Next.js silently pick a different port for this project; resolve the port conflict so Codex browser QA and chat references stay stable.
- Recommended Codex Local Environment action: `Run` -> `npm.cmd run dev`.
- Recommended Codex Local Environment setup script: `npm install`.

## Efficient UI Refinement Workflow

- Keep edits within the requested section and preserve unrelated uncommitted work. Do not commit, push, or deploy unless explicitly requested.
- For a small follow-up, read the affected rules/component and use established session context. Avoid repeatedly dumping whole files, Git status, audit history, or tool documentation unless something has changed or needs verification.
- Use focused `rg` searches and short output. Batch independent reads; keep dependent edits and checks sequential.
- Match verification to risk: for a small CSS-only change, inspect the affected rendered area and check the relevant breakpoint or interaction. Do not automatically run lint, typecheck and build after every spacing or colour adjustment.
- For component, link or behaviour changes, run relevant lint/type checks and verify the affected interaction. Run a production build when promoting a substantial preview, changing build-sensitive code, or finishing a substantial batch. All three checks remain required before a PR.
- Reuse the existing browser tab and server. Inspect the current viewport plus affected boundaries; reserve a full viewport sweep for responsive audits or broad layout changes. Reset temporary viewport overrides afterwards.
- Inspect animation states when changing interactions; a static screenshot alone does not verify hover, timing or reduced motion. Report any verification limits briefly.
- Keep progress updates and final replies concise: describe the change, relevant verification and any unresolved decision. Do not repeat established context or offer extra refinements after every approved adjustment.
- For design audits, distinguish actual problems from optional polish and recommend the smallest coherent change. Stop iterating when the user's approved result is achieved.
- Record audit notes after meaningful completed batches, not every tiny iteration. Preserve decisions and verification limits for future sessions.
- Efficiency must not come from skipping necessary checks, guessing file contents or claiming unperformed verification. Do not create extra tasks or delegate unless requested.
