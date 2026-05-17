# Media Prompt Patterns

## Neutral Creative Brief

Use this before tool-specific adaptation:

```text
Goal:
Audience:
Output type:
Subject:
Environment:
Composition:
Motion:
Lighting:
Color:
Style references:
Technical constraints:
Must include:
Must avoid:
```

## GPT Image Prompt

Favor concrete visual language:

```text
Create [output] of [subject] for [purpose].
Composition: [framing, perspective, focal point].
Style: [visual style, material, rendering/photographic qualities].
Lighting and color: [specific lighting and palette].
Details: [must include].
Avoid: [negative constraints].
Aspect ratio: [ratio].
```

## Video Prompt

Favor temporal clarity:

```text
[Duration], [aspect ratio]. A [scene] featuring [subject].
The action begins with [opening frame], then [main movement], and ends with [ending frame].
Camera: [movement, lens, distance].
Motion: [speed, rhythm, continuity].
Lighting/color/style: [direction].
Avoid: [negative constraints].
```

## Tool Adaptation Notes

- If a tool rewards concise prompts, compress the neutral brief after preserving subject, action, camera, and constraints.
- If a tool supports reference images, name each reference and explain what should be borrowed from it.
- If a tool struggles with text, avoid asking for readable text unless the user explicitly needs it.
