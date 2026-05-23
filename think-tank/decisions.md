# Decisions

## 2026-05-17

- Create a Codex-specific harness rather than a general multi-agent framework.
- Use `AGENTS.md` for workspace-wide instructions.
- Use `.agents/skills` for repo-scoped Codex skills.
- Use `think-tank/` for durable user preferences, recurring ideas, and media-generation patterns.
- Make the workspace a private GitHub repository.
- Organize media-generation prompts and memory by project.
- Let Codex automatically notice repeated user patterns, but require user permission before writing them into `think-tank/`.
- Store only repeated or durable patterns unless the user explicitly asks to save a one-off note.
- Keep Red Frame Trigger durable prompt files focused on Yura and Yuri.
- Use a storyboard as the working source of truth for Red Frame Trigger so every new image or video prompt has a stable opening-beat reference.
