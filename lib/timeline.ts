// Innovation timeline — home chapter 06 and about page.
// TODO(content): confirm exact milestone years with the company.

export type Milestone = {
  year: string;
  title: string;
  body: string;
  state: "done" | "now" | "future";
};

export const milestones: Milestone[] = [
  {
    year: "2020",
    title: "Founded in Nepal",
    body: "Refill Enterprises Pvt. Ltd. established with a vision to enhance healthcare outcomes through nutritional science.",
    state: "done",
  },
  {
    year: "2021",
    title: "Critical care portfolio",
    body: "First clinical nutrition range reaches healthcare professionals — calcium, amino acid, and Omega-3 formulations.",
    state: "done",
  },
  {
    year: "2022",
    title: "Disease-specific formulations",
    body: "Portfolio deepens into metabolic nutrition for renal, hepatic, and glycaemic states.",
    state: "done",
  },
  {
    year: "2023",
    title: "Medical devices & applications",
    body: "Strategic partnerships introduce devices and digital tools for critical-care nutrition management.",
    state: "done",
  },
  {
    year: "Now",
    title: "Sports nutrition in development",
    body: "A performance, recovery, and active-lifestyle portfolio being engineered on the same clinical foundation.",
    state: "now",
  },
  {
    year: "Next",
    title: "Manufacturing in Nepal",
    body: "A state-of-the-art domestic facility — quality assurance, self-reliance, employment, and a stronger Nepali healthcare industry.",
    state: "future",
  },
];

/** Company statistics — home chapter 10. Honest numbers only. */
export const statistics = [
  { value: 2020, label: "Established", format: "year" as const },
  { value: 4, label: "Clinical product families", suffix: "" },
  { value: 6, label: "Domains of expertise", suffix: "" },
  { value: 2, label: "Solution areas", suffix: "" },
  { value: 1, label: "Planned manufacturing facility", suffix: "" },
  { value: 100, label: "Commitment to evidence", suffix: "%" },
];
