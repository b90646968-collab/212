# Preferences

## Language

- User-facing responses should be in Korean unless requested otherwise.
- Internal reusable instructions can be written in English for Codex clarity.

## Collaboration

- The user is starting agent harnessing for the first time.
- Prefer foundational setup first, then ask targeted questions for decisions that affect the structure.
- Detect repeated user preferences and recurring phrases automatically.
- Always ask for permission before saving detected patterns into `think-tank/`.
- Save repeated or durable patterns by default; save one-off notes only when the user explicitly asks.

## Media

- The user plans to create images with GPT.
- The user plans to create videos with Grok, Seedance, and possibly other generation tools.
- Organize media-generation memory and prompts by project first.
- Use tool-specific sections inside a project when needed.

## Storage

- The user wants this harness stored in a private GitHub repository.

## Security

- Do not ask the user to paste GitHub tokens, API keys, access tokens, or other credentials into chat.
- Do not expose token values in command output, logs, commit messages, docs, URLs, or config files.
- Prefer browser login, Git credential prompts, or macOS Keychain-backed credential storage for GitHub authentication.
- Explain where a credential will be stored before handling it.
- Treat selected strings that look token-like as sensitive unless clearly harmless.
