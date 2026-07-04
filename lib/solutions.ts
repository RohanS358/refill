// Solution areas and their page content. TODO(content): validate clinical
// claims and device descriptions with the company before launch.

export type Solution = {
  id: string;
  index: string;
  href: string;
  title: string;
  eyebrow: string;
  summary: string;
  points: { title: string; body: string }[];
};

export const solutions: Solution[] = [
  {
    id: "critical-care-nutrition",
    index: "01",
    href: "/solutions/critical-care-nutrition",
    title: "Critical Care Nutrition",
    eyebrow: "Clinical nutrition",
    summary:
      "Nutritional therapy engineered for intensive care — supporting recovery when the body's metabolic demands are at their most extreme.",
    points: [
      {
        title: "Assessment-led",
        body: "Formulations selected against the patient's metabolic state — hypercatabolism, organ dysfunction, fluid restriction.",
      },
      {
        title: "Disease-specific",
        body: "Renal, hepatic, glycaemic, and oncology-adjacent profiles instead of one-size-fits-all feeding.",
      },
      {
        title: "Recovery-oriented",
        body: "Substrates for tissue repair, immune competence, and lean-mass preservation across the rehabilitation arc.",
      },
    ],
  },
  {
    id: "medical-devices",
    index: "02",
    href: "/solutions/medical-devices",
    title: "Medical Devices & Applications",
    eyebrow: "Healthcare technology",
    summary:
      "Advanced devices and healthcare applications used exclusively in critical-care nutrition and patient management, introduced through strategic partnerships.",
    points: [
      {
        title: "Delivery systems",
        body: "Devices supporting precise, controlled nutritional delivery in critical-care settings.",
      },
      {
        title: "Monitoring & management",
        body: "Healthcare applications that keep nutritional therapy measurable and accountable.",
      },
      {
        title: "Partnership model",
        body: "Global technology, introduced and supported locally — bridging modern healthcare technology and patient-centred care.",
      },
    ],
  },
];

/** Protocol steps for the critical-care page pathway diagram. */
export const protocolSteps = [
  { step: "01", title: "Screen", body: "Nutritional risk identified on admission." },
  { step: "02", title: "Assess", body: "Metabolic state, organ function, and requirements quantified." },
  { step: "03", title: "Formulate", body: "Disease-specific formulation matched to the assessment." },
  { step: "04", title: "Deliver", body: "Oral or enteral delivery with device-supported precision." },
  { step: "05", title: "Monitor", body: "Outcomes tracked; formulation adjusted as the patient recovers." },
] as const;

/** Device capability grid for the medical-devices page. */
export const deviceCapabilities = [
  {
    title: "Enteral delivery",
    body: "Controlled-rate delivery systems for critical-care feeding protocols.",
  },
  {
    title: "Patient monitoring",
    body: "Applications that surface nutritional status alongside clinical vitals.",
  },
  {
    title: "Protocol support",
    body: "Digital tools that help teams standardize nutrition therapy across units.",
  },
  {
    title: "Data & accountability",
    body: "Measurable therapy: intake, tolerance, and outcomes recorded by default.",
  },
] as const;
