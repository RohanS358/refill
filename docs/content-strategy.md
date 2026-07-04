# Content Strategy

## Source of truth

All company facts come from the founding profile (2020, Nepal, critical-care
nutrition, metabolic formulations, calcium / amino acids / Omega-3, medical devices,
sports-nutrition expansion, manufacturing vision). Structured content lives in
`lib/` (`site.ts`, `products.ts`, `solutions.ts`, `timeline.ts`) — never hardcoded
in components — so copy edits are data edits.

## Messaging hierarchy

1. **Category**: clinical & critical-care nutrition (not "supplements").
2. **Credibility**: evidence-based, disease-specific, for healthcare professionals.
3. **Portfolio**: four families — calcium/bone, amino acids, Omega-3, specialized
   metabolic — plus devices.
4. **Trajectory**: devices → sports nutrition → Nepali manufacturing. The future is a
   plan with dates, not a dream.

## Writing rules

- Headlines: verb-led or noun-phrase, ≤ 6 words ("Nutrition, engineered for recovery.")
- Leads: one or two sentences, ≤ 40 words.
- Body: short paragraphs, no marketing adjectives stacked ("innovative cutting-edge").
- Claims discipline: *supports, formulated for, designed to* — never *cures, guarantees*.
  Regulatory-sensitive statements carry `// TODO(content): verify` in data files.
- Audiences in order: clinicians/hospital procurement → distributors/partners →
  patients' families → future consumers (sports). Copy defaults to the professional
  reader; the sports context may speak consumer.
- Product data (doses, compounds) shown on cards is representative of the category;
  exact SKUs/doses must be confirmed by the company before launch
  (`// TODO(content)` markers in `lib/products.ts`).

## Tone by page

- Home/About: confident manifesto.
- Solutions/Products: clinical, tabular, precise.
- Research/Manufacturing: editorial long-form, first-person-plural sparingly.
- Sports: energetic but still precise — the lime does the shouting, not the copy.
- Careers/Contact: warm, direct, human.
