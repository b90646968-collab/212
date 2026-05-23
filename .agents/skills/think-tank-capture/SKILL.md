---
name: think-tank-capture
description: Capture durable user preferences, repeated wording, project decisions, media prompt patterns, and reusable ideas into the local think-tank files. Use when the user asks to remember, save, store, standardize, reuse later, or when a stable preference emerges during harness work.
---

# Think Tank Capture

## Workflow

1. Decide whether the information is durable.
2. If the information was inferred from repeated user behavior rather than explicitly requested, ask permission before writing.
3. Choose the narrowest destination in `think-tank/`.
4. Write a concise entry that future Codex sessions can understand without the original conversation.
5. Preserve uncertainty by marking unconfirmed assumptions as questions.

## Destinations

- `think-tank/preferences.md`: stable user preferences, collaboration style, language, taste, and workflow defaults.
- `think-tank/lexicon.md`: user-specific terms and meanings.
- `think-tank/decisions.md`: dated decisions about this harness or a project.
- `think-tank/inbox.md`: raw notes that are useful but not sorted yet.
- `think-tank/projects/`: project-specific memory using `_template.md`.
- `think-tank/projects/<project>/profiles/`: durable character profiles and source-of-truth visual standards.
- `think-tank/projects/<project>/storyboard.md`: project opening/story beats that should guide future prompts.
- `think-tank/projects/<project>/prompts/`: project-specific prompt files when the user wants durable prompts saved.

## Capture Rules

- Capture only information that is likely to matter later.
- Automatically notice repeated user patterns, but ask permission before saving them.
- Prefer short bullets over long narrative.
- Date decisions when they affect future structure.
- Do not store secrets, API keys, access tokens, recovery phrases, or unnecessary sensitive personal data.
- If the user says "remember this" or equivalent, capture it unless it is unsafe to store.
- Save one-off notes only when the user explicitly asks.

## When Unsure

Use `think-tank/inbox.md` and add a short note under an `Unsorted` heading. Ask the user later when the distinction affects the harness design.

## Reference

Read `references/schema.md` when adding a new think-tank file type or reorganizing the memory structure.
