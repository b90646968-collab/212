---
name: media-generation-brief
description: Create reusable image and video generation briefs for GPT image generation, Grok, Seedance, and related tools. Use when the user wants prompts, prompt systems, visual direction, shot plans, tool-specific adaptations, or saved media-generation workflows.
---

# Media Generation Brief

## Workflow

1. Extract the creative intent before writing tool-specific prompts.
2. Identify output type: image, video, storyboard, shot list, reference sheet, or prompt library.
3. Capture constraints: tool, aspect ratio, duration, style, subject, camera, motion, references, and must-avoid details.
4. Produce a neutral creative brief first when the target tool is unclear.
5. Adapt into tool-specific prompts only after the target tool is known or clearly implied.
6. Organize reusable media work by project under `think-tank/projects/`; use tool-specific sections inside the project when needed.
7. For Red Frame Trigger, consult `think-tank/projects/yara/red-frame-trigger/storyboard.md` before writing prompts.
8. Save reusable prompt files only after the user gives permission, and prefer project-specific prompt banks over generic templates.

## Image Brief Shape

Use the active project storyboard or project memory as the default source. If no project source exists, write the brief inline instead of relying on a generic saved template.

Include:

- subject and purpose
- aspect ratio
- composition and camera/lens notes
- style, lighting, color, and material direction
- text requirements if any
- reference assets
- must-include and must-avoid constraints

## Video Brief Shape

Use the active project storyboard or project memory as the default source. If no project source exists, write the brief inline instead of relying on a generic saved template.

Include:

- tool and duration
- scene, subject, and action
- camera movement and motion rhythm
- opening frame and ending frame when useful
- continuity notes
- reference assets
- must-include and must-avoid constraints

## Tool Policy

- GPT image generation: use for image creation unless the user names another image tool.
- Grok: create a separate concise prompt if the user asks for Grok-specific output.
- Seedance: prioritize temporal clarity, shot continuity, and camera movement.
- Unknown video tool: keep the final output as a neutral brief plus a short list of missing tool details.

## Reference

Read `references/prompt-patterns.md` when refining prompt style or adding a new media tool.
