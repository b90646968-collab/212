# Think Tank Index

The think tank is the durable memory layer for this Codex harness.

Use this README as the index. It tells Codex where to look before adding or changing memory.

## What Goes Here

Save things the user repeats, cares about, or wants Codex to remember across future work:

- language and tone preferences
- creative taste and media direction
- recurring image/video prompt structures
- project decisions
- reusable examples
- questions that should be answered later

Do not save secrets, API keys, access tokens, private credentials, or recovery phrases.

## Index

- `preferences.md`: Stable user preferences, collaboration style, security preferences, and durable defaults.
- `lexicon.md`: User-specific terms and what they mean in this workspace.
- `decisions.md`: Dated decisions about the harness, storage model, and project structure.
- `inbox.md`: Temporary holding area for useful notes that are not sorted yet.
- `projects/`: Project-specific memory. Start from `projects/_template.md`.
- `projects/red-frame-trigger.md`: Yura / Yuri anime opening project memory and saved character prompts.
- `projects/red-frame-trigger/storyboard.md`: Source of truth for Red Frame Trigger opening beats before prompt writing.
- `projects/red-frame-trigger/profiles/`: Canonical character profiles used by the storyboard and prompt files.
- `projects/red-frame-trigger/prompts/`: Project-specific prompt files, currently limited to Yura and Yuri focused prompts.

## Routing Rules

- If it changes how Codex should behave, put it in the root `AGENTS.md`.
- If it is a repeated preference or memory, put it in the most specific think-tank file.
- If it is a reusable task procedure, put it in `.agents/skills/`.
- If it is a Red Frame Trigger opening beat, put it in the project storyboard before turning it into a prompt.
- If it is a durable character standard, put it in the relevant project profile.
- If it is uncertain but useful, put it in `inbox.md`.

## Capture Policy

- Notice repeated user preferences automatically.
- Ask the user before writing any newly inferred memory into the think tank.
- Save repeated or durable patterns by default.
- Save one-off notes only when the user explicitly asks.

Keep entries short, dated when useful, and easy to search.
