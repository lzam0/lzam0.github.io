# Case study template

Every case study on the site follows the same structure and design as the
VolleyFirst one. The reference implementation is
`app/case-studies/volleyfirst/page.tsx`. Copy it for a new project and replace
the content; don't redesign the layout.

To start a new one, fill in the [blank form](#blank-form) at the bottom and
hand it over with: "Make a case study for <project> using
docs/case-study-template.md".

---

## Files

| What | Where |
| --- | --- |
| Case study page | `app/case-studies/<slug>/page.tsx` (copy the VolleyFirst page) |
| Screenshots | `public/images/projects/<slug>/` (JPEG, max 1200px wide, quality ~80) |
| Card on the home page | `components/Projects.tsx` |

The slug is lowercase and hyphenated, e.g. `wend`, `volleyfirst`.

### Home page card

Add an entry to the `caseStudies` array in `components/Projects.tsx`. Cards
stack vertically in a centred column, newest first. Each card shows a mockup
(a desktop screenshot with a phone screenshot overlapping it, on a light blue
panel), tags, title, tagline, a short description, a **View case study →**
button and a **Live site** pill. The whole card links to the case study; only
**Live site** opens the live product.

---

## Page structure

Sections always appear in this order. Each one is a `<section id="...">` with
a matching entry in the `sections` array, which drives the sticky **Contents**
sidebar on the right (a row of chips on mobile).

### 0. Header (above the sections)

- "← Case studies" back link to `/#case-studies`
- Title: **`<Project>:`** in dark ink, then the tagline in sky blue.
  Format: `<Project>: <what it makes easier, in plain words>`
- **Visit the live site ↗** button (omit if there's no live site)

### 1. Overview — `id="overview"`

A single **vertical** card (items stacked, divided by thin lines, never a
grid), followed by the overview paragraphs in large text.

| Field | Line 1 (bold) | Line 2+ (lighter) |
| --- | --- | --- |
| Role | Project type, e.g. Passion Project / Client Project / University Project | Job title(s), e.g. Full-Stack Developer & Product Designer; then a comma-separated skills list |
| Platform | e.g. Responsive web app / iOS / Desktop app | Devices, e.g. Desktop & mobile |
| Timeline | `Month YYYY – Month YYYY` or `Month YYYY – Current` | — |
| Status | Shown as a pulsing badge, e.g. In Development / Live / Completed | — |
| Deliverables | Category, e.g. Development / Design | Comma-separated list of what was built |

Overview paragraphs (2–3): why I built it (personal connection), then what it
does in one or two sentences.

### 2. Highlights — `id="highlights"`

Real screenshots of the product, each with a one-line caption:

1. One large desktop screenshot (the most important screen)
2. Two smaller desktop screenshots side by side
3. Two mobile screenshots in phone frames, on a light blue panel

Desktop shots are taken at 1440×900, mobile at 390×844.

### 3. The challenge — `id="challenge"`

A short intro paragraph on what was wrong before, then a bulleted list of the
specific pain points (sky-blue bullet markers).

### 4. The solution — `id="solution"`

1. One-sentence intro: what the product does end to end.
2. **Values** (optional): three light blue cards, title + one sentence each.
3. **Key decisions**: numbered cards. Each has a title, 1–2 paragraphs
   (the problem → what I did → the result), and small tech tags.
   Good candidates: decisions that came from research, performance /
   scalability work, auth, payments, security.
4. **Key features**: two-column checklist with ✓ icons, one short line each.

### 5. Research summary — `id="research"`

1. A paragraph on what I looked into (the domain, the organisation, the
   numbers that show scale).
2. A light blue quote box labelled **Talking to the <stakeholder>**: who I
   spoke to and what I learned.
3. A white box labelled **What I changed**: what I built differently because
   of it.

### 6. Reflections — `id="reflections"`

Stacked vertically so it reads in order:

1. **Key takeaways** card (light blue): numbered items, each a bold title plus
   a short explanation of why.
2. **Next steps** card (white): intro line, then items with an emoji bullet
   each (e.g. 🛠️ build, 🧪 test, ✨ refine).
3. Centred closing line: **Thank you for checking out the project 🙌**
4. **← Back to case studies** button.

---

## Writing style

- First person, plain and direct. Short paragraphs.
- Only state facts and numbers that are true. Use real figures from the
  project (load tests, attendance, etc.) and never invent metrics.
- Name real people only when I've said they're fine to mention.

Colours, fonts, components and motion follow [design.md](design.md).

---

## Blank form

Copy this, fill it in, and hand it over. Leave anything you don't have blank.

```md
# Case study: <Project name>

Slug:
Tagline (finishes "<Project>: ..."):
Live site URL:
GitHub URL (optional):
Featured on home page? (yes/no):

## Overview
Role – project type:
Role – job title(s):
Role – skills:
Platform:
Platform – devices:
Timeline:
Status:
Deliverables – category:
Deliverables – list:
Overview paragraphs:

## Highlights
Pages to screenshot (URL + caption for each):
1. (large)
2.
3.
Mobile pages (2):

## The challenge
Intro:
Pain points:
-

## The solution
Intro:
Values (optional, title + sentence x3):
Key decisions (title, what/why/result, tech tags):
1.
Key features:
-

## Research summary
What I looked into:
Who I spoke to + what I learned:
What I changed because of it:

## Reflections
Key takeaways (title + why):
1.
Next steps (emoji + text):
-
```
