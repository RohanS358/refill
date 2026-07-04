// Product families — representative of the company profile.
// TODO(content): replace compound values with confirmed SKU data before launch.

export type Compound = {
  label: string;
  value: string;
};

export type ProductFamily = {
  id: string;
  index: string;
  name: string;
  category: string;
  molecule: "calcium" | "amino" | "omega" | "metabolic";
  summary: string;
  detail: string;
  compounds: Compound[];
  applications: string[];
};

export const productFamilies: ProductFamily[] = [
  {
    id: "calcium-bone-health",
    index: "01",
    name: "Calcium & Bone Health",
    category: "Mineral supplementation",
    molecule: "calcium",
    summary:
      "Bioavailable calcium formulations supporting skeletal recovery, rehabilitation, and long-term bone density.",
    detail:
      "Formulated around highly absorbable calcium salts with co-factors that govern uptake and deposition — designed for post-operative recovery, geriatric care, and long-term bone-health protocols.",
    compounds: [
      { label: "Ca — atomic mass", value: "40.078 u" },
      { label: "Calcium citrate malate", value: "high bioavailability" },
      { label: "Cholecalciferol (D₃)", value: "absorption co-factor" },
      { label: "Menaquinone-7 (K₂)", value: "deposition co-factor" },
    ],
    applications: ["Post-operative recovery", "Osteoporosis support", "Geriatric care"],
  },
  {
    id: "amino-acid-formulations",
    index: "02",
    name: "Amino Acid Formulations",
    category: "Protein & recovery substrates",
    molecule: "amino",
    summary:
      "Targeted amino acid profiles for muscle-protein synthesis, wound healing, and rehabilitation nutrition.",
    detail:
      "Essential and conditionally essential amino acids in clinically relevant ratios — the substrates of tissue repair, immune competence, and lean-mass preservation in catabolic states.",
    compounds: [
      { label: "L-Leucine", value: "mTOR signalling" },
      { label: "L-Glutamine", value: "gut & immune substrate" },
      { label: "L-Arginine", value: "wound perfusion" },
      { label: "BCAA ratio", value: "2:1:1" },
    ],
    applications: ["Wound healing", "Sarcopenia", "Rehabilitation programs"],
  },
  {
    id: "omega-3-fatty-acids",
    index: "03",
    name: "Omega-3 Fatty Acids",
    category: "Essential lipid therapy",
    molecule: "omega",
    summary:
      "Concentrated EPA and DHA formulations supporting cardiovascular, neurological, and inflammatory-response health.",
    detail:
      "Long-chain polyunsaturated fatty acids at clinical concentrations, with defined EPA:DHA ratios for cardiology, neurology, and critical-care lipid strategies.",
    compounds: [
      { label: "EPA (C20:5 n-3)", value: "eicosapentaenoic acid" },
      { label: "DHA (C22:6 n-3)", value: "docosahexaenoic acid" },
      { label: "Form", value: "triglyceride-bound" },
      { label: "Purity", value: "molecularly distilled" },
    ],
    applications: ["Cardiovascular support", "Cognitive health", "Inflammation modulation"],
  },
  {
    id: "specialized-metabolic",
    index: "04",
    name: "Specialized Metabolic Formulations",
    category: "Disease-specific nutrition",
    molecule: "metabolic",
    summary:
      "Disease-specific formulations engineered for the altered metabolic demands of critical illness.",
    detail:
      "Complete and modular formulations matched to specific metabolic states — renal, hepatic, glycaemic, and hypercatabolic — supporting clinicians where standard nutrition falls short.",
    compounds: [
      { label: "Renal profiles", value: "electrolyte-adjusted" },
      { label: "Hepatic profiles", value: "BCAA-enriched" },
      { label: "Glycaemic profiles", value: "low-GI substrates" },
      { label: "Delivery", value: "oral & enteral" },
    ],
    applications: ["ICU protocols", "Renal & hepatic care", "Diabetic nutrition"],
  },
];

/** Expertise domains — home chapter 03. */
export const expertiseDomains = [
  {
    index: "01",
    title: "Critical Care Nutrition",
    body: "Nutritional therapy for intensive care — where feeding strategy is part of the treatment plan, not an afterthought. Enteral and oral formulations matched to hypermetabolic states.",
  },
  {
    index: "02",
    title: "Disease-Specific Metabolic Nutrition",
    body: "Formulations engineered for altered metabolism: renal, hepatic, glycaemic, and oncological states each demand a different substrate profile.",
  },
  {
    index: "03",
    title: "Calcium & Bone Health",
    body: "Bioavailable calcium systems with D₃ and K₂ co-factors — from post-operative recovery to long-term skeletal maintenance.",
  },
  {
    index: "04",
    title: "Amino Acid Science",
    body: "Targeted amino acid profiles for muscle-protein synthesis, wound healing, and lean-mass preservation in catabolic patients.",
  },
  {
    index: "05",
    title: "Omega-3 Lipid Therapy",
    body: "Clinical-grade EPA/DHA concentrations for cardiovascular, neurological, and inflammatory-response support.",
  },
  {
    index: "06",
    title: "Medical Devices & Applications",
    body: "Advanced devices and digital applications used exclusively in critical-care nutrition and patient management — bridging technology and nutritional care.",
  },
] as const;
