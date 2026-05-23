# Red Frame Trigger

## Goal

Create an anime opening portfolio project starring Yura, with all characters designed as extensions of Yura's visual world.

## Core Story

Yuri disappeared, and Yura is chasing after the traces she left behind. The opening should revolve around absence, pursuit, memory, mirror fragments, film-like clues, and Yura's unresolved search for Yuri.

## Storyboard Rule

- Use `storyboard.md` as the working source of truth before creating or editing image, video, or opening-cut prompts.
- Keep the saved prompt bank focused on Yura and Yuri unless the user explicitly asks to add prompts for another character, prop, symbol, or environment.
- Put broad opening structure, worldbuilding, and supporting visual ideas into the storyboard first.

## Style Direction

- Dreamy cyber gothic anime opening.
- Semi-realistic painterly digital illustration.
- Cool desaturated gray palette, smoky charcoal backgrounds, muted lavender-gray shadows, pale porcelain skin with dusty rose undertones, black and silver accents, faint metallic highlights, blurred white and pink light streaks, and star-like dust.
- Soft oil-paint and watercolor hybrid texture, visible brush strokes, layered translucent paint, slightly smudged edges, glossy wet highlights on lips and eyes, subtle grain, delicate pencil-like contour lines, painterly hair strands, polished metal reflections, cinematic editorial finish.

## Characters

### Yura

- Main heroine.
- Canonical profile: `profiles/yura.md`.
- Confirmed by user on 2026-05-21: the right-side character in `형제.jpg` is Yura.
- Confirmed by user on 2026-05-21: `유라 악몽최종.png` is Yura.
- Confirmed by user on 2026-05-21: `유라 반지제거.png` is Yura.
- Dark blue-black hair with straight full bangs and twin-tail sections, vivid muted red eyes, pale translucent skin, quiet intense expression, fragile but dangerous presence.
- Canonical looks: suited lounge Yura, nightmare close-up Yura, and signature finger-gun Yura.
- Signature pose: one hand raised in a finger-gun gesture, the other open palm supporting the gesture from below. No rings by default.

### Yuri

- Yura's older twin sister.
- Canonical profile: `profiles/yuri.md`.
- Confirmed by user on 2026-05-21: the left-side character in `형제.jpg` is Yuri.
- Core story role: Yuri disappeared, and Yura follows her traces.
- Confirmed by user on 2026-05-18: the latest generated older twin sister character is Yuri.
- Latest local generated image reference: `ig_09ffb3ccfd6f05c3016a0acef8efe8819195a7fb43ece227f7.png`
- Source style/pose reference: `5ace9713c02956c341d9e066e1ef9de1.jpg`
- Video continuity reference: `형제 169.mp4`. Use this when Yura/Yuri continuity is unclear.
- Current hair direction: shoulder-length deep black layered waves with airy see-through bangs, soft natural curls at the ends, face-framing curled strands, and smoky silver-blue highlights.
- Differentiation from Yura: Yuri keeps Yura's twin-like facial structure and the exact same color/texture system, but uses a more mature expression, shoulder-length wavy black hair, pale gray mirror-like eyes with only a faint cold red/rose tint when needed, mirror/film disappearance motifs, and a calmer lowered-hand pose instead of Yura's finger-gun pose.
- Rubber-band star intermission cut: Yuri makes a red rubber-band star with both hands close to the camera. The star shape is the most important requirement; prioritize a clean, readable five-point star over extra effects or background detail. Her eyes should read as pale gray or light gray with a subtle glassy tint, not vivid red.

## Prompt Maintenance Rule

- When the user adjusts durable character details, update that character's saved prompt in this file during the same turn.
- Treat changes to hair, eyes, facial features, outfit, accessories, pose, mood, motif, role, background language, and age impression as prompt-relevant details.
- Keep the latest approved character direction as the source of truth instead of leaving older prompt wording unchanged.
- Update negative prompts when the detail change introduces a new avoid constraint, such as no rings, no finger-gun pose, no straight hair, or no front-facing pose.

## Prompts

### Yuri Image Prompt

```text
Use `profiles/yuri.md` as the canonical Yuri prompt source.

Short form: Yuri is Yura's older twin sister, the left-side character in `형제.jpg`, and the disappeared twin Yura is chasing. She shares Yura's exact cool gray-blue wet painterly anime color and texture system, but has shoulder-length black wavy hair, pale mirror-gray eyes, a mature unreadable expression, black tailored suit styling, and mirror/film disappearance motifs.
```

### Yuri Negative Prompt

```text
generic anime, flat cel shading, overly clean vector art, photorealistic 3D, plastic skin, harsh black outlines, oversaturated colors, warm cheerful palette, round cute face, exaggerated big eyes, straight flat hair, updo, twin-tails, gray hair, blonde hair, messy anatomy, deformed face, extra fingers, bad hands, muddy features, low detail, low quality, text, watermark, logo
too identical to Yura, Yura's finger-gun pose, hands reaching toward camera, vivid red heroine eyes, childish expression, unreadable rubber-band star shape, different color palette from Yura, different rendering texture from Yura
```

## Decisions

- 2026-05-18: Yuri is Yura's older twin sister and should be treated as a saved character in the Red Frame Trigger opening project.
- 2026-05-18: When a durable character detail is adjusted, update that character's saved prompt automatically during the same turn.
- 2026-05-18: Yuri's latest hair direction changed to shoulder-length deep black layered waves, airy see-through bangs, face-framing curled strands, soft curled ends, and smoky silver-blue highlights.
- 2026-05-18: Yuri should be twin-like but distinct from Yura through mature expression, curled deep-black hair, colder gray-red eyes, mirror/film motifs, and lowered calm hands instead of Yura's finger-gun pose.
- 2026-05-21: Use `형제 169.mp4` when Yura/Yuri continuity is unclear.
- 2026-05-21: For Yuri's rubber-band intermission image, the red rubber band must clearly form a readable five-point star. This is more important than background effects.
- 2026-05-21: Yuri's eyes should lean pale gray/light gray and glassy, not vivid red; faint cold red/rose tint is acceptable only as a subtle undertone.
- 2026-05-21: Keep durable prompt files focused on Yura and Yuri. Use the storyboard as the first reference for opening structure and only create new prompt files from confirmed storyboard beats.
- 2026-05-21: Yura's canonical references are the right-side character in `형제.jpg`, `유라 악몽최종.png`, and `유라 반지제거.png`. Use `profiles/yura.md` as the future Yura standard.
- 2026-05-21: Yuri's canonical reference is the left-side character in `형제.jpg`. Use `profiles/yuri.md` as the future Yuri standard.
- 2026-05-21: Core story premise: Yuri disappeared, and Yura is chasing after Yuri's traces.
- 2026-05-21: Yuri must share Yura's exact color palette and wet painterly texture; only silhouette, hair, expression, pose, and motif should distinguish her.

## Open Questions

- Should the final storyboard use exact timestamps for each opening beat?
- What is the exact cause of Yuri's disappearance?
