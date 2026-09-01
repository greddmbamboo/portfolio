export type Project = {
  slug: string;
  number: string;
  title: string;
  summary: string;
  tags: string[];
  accent: string;
  year: string;
  client: string;
  problem: string;
  context: string;
  role: string;
  approach: string[];
  decisions: string[];
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: 'platform-reimagination', number: '01', title: 'Platform, reimagined',
    summary: 'Turning a fragmented product suite into one coherent experience.',
    tags: ['Product strategy', 'Design systems', 'Org leadership'], accent: 'lime',
    year: '20XX', client: 'Company / Product',
    problem: 'Replace this with the clearest version of the customer and business problem. Aim for one specific tension, not a list of symptoms.',
    context: 'Add the market, company, and product context a reader needs to understand why this work mattered and why it was difficult.',
    role: 'Describe your scope, team, decision rights, and the functions you partnered with. Be explicit about what you led versus contributed to.',
    approach: ['Aligned leaders around a shared product experience thesis.', 'Mapped the end-to-end journey and prioritized systemic friction.', 'Created an operating model that connected strategy to delivery.'],
    decisions: ['Focused the first release on the highest-leverage workflow.', 'Established a shared design language before scaling feature teams.', 'Used customer evidence to resolve competing executive priorities.'],
    outcome: 'Add measurable customer, business, and organizational outcomes. Include the time horizon and what changed because of the work.'
  },
  {
    slug: 'new-growth-engine', number: '02', title: 'A new growth engine',
    summary: 'Finding and validating the next meaningful product opportunity.',
    tags: ['0→1 product', 'Research', 'Growth'], accent: 'blue',
    year: '20XX', client: 'Company / Product',
    problem: 'Describe the unmet need or growth constraint this initiative addressed.',
    context: 'Explain the strategic moment, available evidence, and constraints around the opportunity.',
    role: 'Clarify your leadership role, team composition, and partnership with product, engineering, and go-to-market.',
    approach: ['Synthesized market and behavioral signals into opportunity spaces.', 'Built lightweight concepts to learn before committing engineering capacity.', 'Defined success criteria and a phased path from pilot to scale.'],
    decisions: ['Chose a narrow initial audience with a strong recurring need.', 'Cut attractive but unproven scope from the first test.', 'Instrumented the experience around learning, not vanity metrics.'],
    outcome: 'Replace with adoption, revenue, retention, or learning outcomes and what happened next.'
  },
  {
    slug: 'design-at-scale', number: '03', title: 'Design at scale',
    summary: 'Building the systems and culture for better decisions, faster.',
    tags: ['Team building', 'Operations', 'Design quality'], accent: 'coral',
    year: '20XX', client: 'Design organization',
    problem: 'Frame the organizational barrier that limited product quality or team effectiveness.',
    context: 'Describe the size and maturity of the organization and the change underway.',
    role: 'State the teams you led, your mandate, and how you worked with executive peers.',
    approach: ['Made quality expectations observable and discussable.', 'Created career, critique, and planning systems that reinforced the culture.', 'Invested in managers as the highest-leverage point for sustainable change.'],
    decisions: ['Standardized principles while leaving room for team autonomy.', 'Connected staffing decisions to portfolio priorities.', 'Measured the health of the system, not individual output volume.'],
    outcome: 'Add indicators such as engagement, velocity, quality, hiring, retention, or business impact.'
  },
  {
    slug: 'trust-by-design', number: '04', title: 'Trust by design',
    summary: 'Making a complex, high-stakes workflow feel clear and human.',
    tags: ['Service design', 'Enterprise UX', 'Transformation'], accent: 'violet',
    year: '20XX', client: 'Company / Product',
    problem: 'Describe the high-stakes customer problem and the cost of getting it wrong.',
    context: 'Add regulatory, technical, organizational, or legacy-system constraints.',
    role: 'Explain your role in shaping the direction and enabling cross-functional delivery.',
    approach: ['Observed real workflows and the workarounds customers relied on.', 'Made uncertainty visible through clear language and system feedback.', 'Sequenced improvements across product, service, and operations.'],
    decisions: ['Prioritized comprehension over interface density.', 'Designed failure and recovery paths as core journeys.', 'Created shared measures of trust across functions.'],
    outcome: 'Add evidence of reduced errors, increased confidence, faster completion, or business value.'
  }
];
