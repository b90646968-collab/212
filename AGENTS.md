# Codex Workspace Instructions

## Collaboration

- Use Korean for user-facing responses unless the user asks otherwise.
- Use English for internal file names, prompts, specs, and reusable agent instructions unless Korean wording is the subject of the task.
- Be proactive: inspect context, make conservative assumptions, implement the smallest useful version, and ask targeted questions only when a decision changes the structure or workflow.
- If the user's requested instruction, workflow, or skill design looks inefficient, brittle, too broad, or costly to maintain, explain the concern briefly and suggest a better approach before proceeding.
- If the user still prefers the original approach after hearing the tradeoff, follow the user's choice.
- Preserve user-authored files and local changes. Never revert unrelated work.

## Harness Purpose

This workspace is for building a Codex-specific agent harness:

- durable operating rules in `AGENTS.md`
- repo-scoped skills in `.agents/skills`
- reusable memory and preference notes in `think-tank`
- lightweight documentation in `docs`

## Think Tank

Use `think-tank/` as the durable local memory store for things the user repeats or wants reused.

Capture:

- preferences about tone, language, taste, and workflows
- recurring prompt patterns
- reusable media-generation settings
- decisions about this harness
- unresolved questions that should be asked later

Capture policy:

- Notice repeated user preferences and recurring phrases automatically.
- Before writing anything into `think-tank/`, ask the user for permission.
- Save only repeated or durable patterns unless the user explicitly asks to save a one-off note.
- Organize media-generation memory by project first, then by tool inside the project when needed.

Do not capture:

- secrets, API keys, access tokens, private credentials, or recovery phrases
- one-off temporary comments unless the user explicitly asks to save them
- sensitive personal data that is not needed for future work

## Skills

Skills live in `.agents/skills/<skill-name>/SKILL.md`.

Create or update a skill when:

- a workflow repeats across sessions
- the user gives a stable preference that should change future execution
- a task needs a reusable checklist, prompt shape, script, or reference

Keep each skill concise. Put detailed examples, schemas, and longer references in `references/` and load them only when needed.

## Sensitive Tokens

When working with GitHub, API keys, access tokens, or other credentials:

- Do not ask the user to paste tokens into chat.
- Do not print, echo, log, summarize, or store token values in workspace files.
- Do not put tokens directly into command arguments, URLs, commit messages, docs, or config files.
- Prefer browser login, Git credential prompts, or macOS Keychain-backed credential storage.
- Explain where a credential will be stored before handling it.
- Treat selected strings that look token-like as sensitive unless they are clearly harmless.

## Media Generation

For image and video work:

- Separate creative intent from tool-specific prompt syntax.
- Keep reusable prompts under `think-tank/prompts/`.
- Organize concrete media work by project under `think-tank/projects/`.
- Track tool, aspect ratio, duration, motion, style, seed/reference assets, and negative constraints when known.
- If the target tool is unclear, produce a neutral creative brief first, then ask which tool should receive the final prompt.

## Verification

For docs and harness edits:

- Validate skill frontmatter when possible.
- Keep filenames stable and readable.
- Summarize what changed and what still needs a user decision.
