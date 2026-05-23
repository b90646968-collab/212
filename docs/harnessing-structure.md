# Codex Harnessing Structure

This structure follows three OpenAI Codex ideas:

- `AGENTS.md` stores repository instructions that Codex reads while working in the project.
- Skills are directories with a required `SKILL.md` plus optional `references/`, `scripts/`, `assets/`, and `agents/openai.yaml`.
- Skills should use progressive disclosure: short metadata first, full instructions only when the skill is selected, and deeper references only when needed.

Sources:

- https://developers.openai.com/codex/guides/agents-md
- https://developers.openai.com/codex/skills
- https://developers.openai.com/cookbook/examples/gpt-5/codex_prompting_guide

## Folder Map

```text
.
├── AGENTS.md
├── README.md
├── .agents/
│   └── skills/
│       ├── think-tank-capture/
│       │   ├── SKILL.md
│       │   └── references/
│       └── media-generation-brief/
│           ├── SKILL.md
│           └── references/
├── think-tank/
│   ├── README.md
│   ├── inbox.md
│   ├── preferences.md
│   ├── lexicon.md
│   ├── decisions.md
│   └── projects/
│       └── yara/
│           ├── README.md
│           ├── red-frame-trigger.md
│           └── red-frame-trigger/
└── docs/
```

## Operating Model

1. `AGENTS.md` controls default behavior for Codex in this workspace.
2. `think-tank-capture` records durable user preferences and repeated ideas.
3. `media-generation-brief` turns image/video ideas into reusable generation briefs.
4. `think-tank/` stores durable project memory, decisions, and storyboard references those skills should read and update.

## First Questions To Resolve

- Should the think tank be private local-only, or eventually pushed to GitHub?
- Should media prompts be organized by tool, project, or output type?
- Which video tools matter first: Grok, Seedance, Runway, Kling, Veo, Sora, or another stack?
- Should generated images/videos be tracked in this workspace or only referenced by path/link?
