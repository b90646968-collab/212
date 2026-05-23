---
name: yura-opening-style
description: Use when creating or refining character prompts, image prompts, key visuals, or anime opening assets for Yura / Red Frame Trigger in the established semi-realistic wet painterly anime style.
---

# Yura Opening Style

## Purpose

Use this skill to keep Yura and related opening characters visually consistent: dreamy cyber gothic mood, semi-real anime faces, loose wet digital watercolor brushwork, pale translucent skin, cool blue-gray tones, and selective red accents.

## Standing User Constraints

- Until the user gives a separate override, all image/photo creation for this project must use the color, lighting, and texture baseline from `think-tank/projects/red-frame-trigger/profiles/yura.md`.
- For any photo/image/keyframe creation or raster image edit, always invoke and follow the `imagegen` skill together with this skill before generating. Do not create images through a generic prompt-only workflow, and do not skip `imagegen` even when the request sounds simple.
- Do not create extra prompts beyond what the user explicitly asks for. Avoid unsolicited prompt packs, variants, alternates, expansions, or durable prompt files; produce only the prompt needed for the requested image.
- If any existing instruction, prompt text, generated asset, or file conflicts with these constraints or lowers the Yura-profile color/texture quality, do not delete it automatically. First identify the exact item, explain the conflict or quality risk, ask the user for permission, and delete only approved items.

## Storyboard-First Workflow

- Before creating or refining a Red Frame Trigger opening prompt, consult `think-tank/projects/red-frame-trigger/storyboard.md`.
- For any Yura cut, consult `think-tank/projects/red-frame-trigger/profiles/yura.md` after choosing the storyboard beat.
- For any Yuri cut, consult `think-tank/projects/red-frame-trigger/profiles/yuri.md` after choosing the storyboard beat.
- Derive each image or video prompt from a storyboard beat first.
- If the requested cut is not in the storyboard yet, add or revise the storyboard beat before producing the final prompt.
- Keep durable prompt files focused on Yura and Yuri unless the user explicitly asks to create prompt files for another subject.

## Core Style Prompt

Append this style block to character, key visual, storyboard, and image-generation prompts:

```text
semi-realistic painterly anime illustration, loose wet digital watercolor brushwork, soft translucent skin rendering, visible brush strokes, slightly unfinished edges, dreamy and melancholic mood, delicate facial features, glossy eyes, subtle wet highlights on lips and skin, cool blue-gray color palette with selective red accents, muted shadows, soft diffused lighting, elegant cyber gothic atmosphere, emotional close-up portrait style, cinematic anime opening character design, refined but raw painterly texture, high detail face, atmospheric negative space
```

## Negative Prompt

Use this when the image model supports negative prompts:

```text
generic anime, flat cel shading, overly clean vector art, plastic skin, photorealistic 3d, low quality, muddy face, harsh outlines, cheap fantasy costume, childish cartoon style, exaggerated chibi proportions, copied celebrity face, existing character, extra fingers, bad anatomy, distorted eyes, watermark, logo, text
```

## Character Prompt Template

Use this template when designing new characters for Yura's opening:

```text
Create an original character for an anime opening starring Yura.

Character role:
[ROLE]

Visual identity:
[HAIR / EYES / FACE / BODY TYPE / AGE IMPRESSION]

Personality impression:
[QUIET / DANGEROUS / WARM / COLD / MYSTERIOUS / FRAGILE]

Outfit:
[OUTFIT DETAILS]

Symbolic motif:
[MOTIF: film fragments, red thread, mirror shards, smoke, water, flowers, glitch light, etc.]

Pose and composition:
[POSE], cinematic character portrait, upper body or full body, direct emotional presence

Style:
semi-realistic painterly anime illustration, loose wet digital watercolor brushwork, soft translucent skin rendering, visible brush strokes, slightly unfinished edges, dreamy cyber gothic atmosphere, cool blue-gray palette with selective red accents, melancholic anime opening character design, refined raw brush texture, cinematic lighting, high detail face
```

## Visual Continuity Rules

- Build every opening character by referencing Yura first. New characters should feel like they belong to Yura's story world, using her painterly rendering, emotional restraint, cool blue-gray atmosphere, and symbolic memory/editing motifs as the baseline.
- Keep Yura's identity anchored by the canonical profile in `think-tank/projects/red-frame-trigger/profiles/yura.md`: deep blue-black hair, straight full bangs, twin-tail sections, vivid muted red eyes, pale translucent skin, and a quiet but dangerous expression.
- Keep Yuri's identity anchored by the canonical profile in `think-tank/projects/red-frame-trigger/profiles/yuri.md`: Yura's older twin sister, left-side character in `형제.jpg`, shoulder-length black wavy hair, pale mirror-gray eyes, black tailored suit, mature calm expression, and mirror/film disappearance motifs.
- Keep Yuri and Yura in the same color and texture system. Yuri should never look like a separate art direction from Yura.
- Vary characters through role, silhouette, accent color, motif, expression, and costume details rather than switching to a different art style or unrelated design language.
- Use red sparingly as a story signal: eyes, memory fragments, fingertip light, thread, or reflected highlights.
- Let supporting characters have distinct accent systems while staying in the same palette: muted blue for protectors, silver/mirror tones for rivals, black with red light for antagonists.
- Favor emotional poses, close-ups, hands, hair motion, and negative space over busy costume detail.
- When using reference images, borrow mood, pose, texture, and composition only; do not copy real people, existing characters, logos, or recognizable IP.

## Example: Yura

```text
Yura, the main heroine of a dreamy cyber gothic anime opening, a pale girl with dark blue-black hair, straight bangs, twin-tail sections, vivid red eyes, translucent skin, quiet intense expression, fragile but dangerous presence, wearing a simple dark outfit with subtle black ribbons and silver details, memory fragments floating around her, one hand raised in a finger-gun gesture, the other open palm supporting the gesture from below, direct eye contact, centered composition, emotional mystery

semi-realistic painterly anime illustration, loose wet digital watercolor brushwork, soft translucent skin rendering, visible brush strokes, slightly unfinished edges, dreamy and melancholic mood, glossy eyes, cool blue-gray color palette with selective red accents, elegant cyber gothic atmosphere, cinematic anime opening character design
```
