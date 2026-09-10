export type Project = {
  slug: string; number: string; title: string; company: string; summary: string;
  tags: string[]; year: string; status?: 'draft'; cover?: string; coverAlt?: string;
  caseRole?: string;
  headline?: string; problem?: string; context?: string; role?: string;
  approach?: { title: string; body: string }[];
  decisions?: { title: string; body: string }[];
  outcomes?: { value: string; label: string }[]; outcomeCopy?: string; evidenceNote?: string;
  highlight?: { eyebrow: string; title: string; body: string; value: string; label: string };
  adminChapter?: { eyebrow: string; title: string; body: string };
  employeeChapter?: { eyebrow: string; title: string; body: string };
  gallery?: { src: string; alt: string; caption?: string }[];
};

export const projects: Project[] = [
  {
    slug: 'recognition-and-rewards', number: '01', title: 'Recognition & Rewards',
    company: 'BambooHR',
    summary: 'Turning a complex HR program into a clear setup for admins and a lightweight ritual for employees.',
    tags: ['0→1 product', 'Interaction design', 'Proactive AI'], year: '2026', caseRole: 'Product Designer',
    cover: '/assets/work/bamboohr/cover-illustrated.png',
    coverAlt: 'Illustrated BambooHR Recognition feed displayed on a desktop monitor',
    headline: 'Powerful enough for admins. Simple enough for everyone else.',
    problem: 'Recognition & Rewards had to serve two very different jobs. Admins needed control over eligibility, points, rewards, and automation. Employees needed a fast, natural way to recognize someone. The challenge was to support both without making either experience inherit the other’s complexity.',
    context: 'Recognition was becoming table stakes in HR software. Matching the category was not enough; the product also had to make consequential setup decisions understandable and give employees a reason to participate once the program was live.',
    role: 'I led product design across both sides of the experience: the Admin information architecture and point-allocation model, plus the employee composer and AI-suggestion patterns. I partnered with product, engineering, research, and customers from discovery through launch and post-launch iteration.',
    adminChapter: {
      eyebrow: 'Chapter one / The Admin experience',
      title: 'Making a complex system understandable.',
      body: 'The Admin experience could not avoid complexity, but it could make that complexity navigable. I organized the system around clear decisions, progressive disclosure, and visible consequences so an Admin could understand what would happen before committing a change.'
    },
    employeeChapter: {
      eyebrow: 'Chapter two / The employee experience',
      title: 'Removing the blank-page problem.',
      body: 'Employees needed a lightweight social action, not another HR task. The core composer kept recipients, message, values, points, and privacy together. AI suggestions went further by identifying a relevant moment and giving the employee an editable starting point.'
    },
    approach: [
      { title: 'Create a map before exposing controls', body: 'I organized the Admin hub into Recognition Settings, Rewards Settings, and Additional Features. Short descriptions and a single Edit or Set Up action made the system scannable while clarifying that recognition could operate without rewards.' },
      { title: 'Reveal complexity when it becomes relevant', body: 'Focused pages separate post behavior from eligibility, while sensible defaults include active employees and ask Admins to manage only exceptions. Point-allocation forms adapt after an Admin chooses a group, managers, or individuals.' },
      { title: 'Make consequences visible', body: 'Allocation summaries expose the affected population, recurring point total, and estimated cash value. Timing notes explain when changes take effect, helping Admins understand what will happen before they commit.' }
    ],
    decisions: [
      { title: 'Make allocation rules legible', body: 'Named allocation rows expose the audience, calculation method, affected population, point amount, recurring total, and estimated cash value so Admins can understand the consequence of their configuration.' },
      { title: 'Match controls to organizational reality', body: 'Monthly and one-time allocations share a familiar model but use language appropriate to each job. Managers can receive a flat rate or an amount per direct report, with contextual explanations of both methods.' },
      { title: 'Keep flexibility from becoming noise', body: 'Groups, managers, and individuals share a consistent allocation model, while conditional controls reveal details such as per-direct-report and flat-rate calculations only when they become relevant.' }
    ],
    highlight: {
      eyebrow: 'Early outcome',
      title: 'A timely suggestion made recognition easier to start.',
      body: 'Suggestions surfaced a person, reason, editable message, company value, and point amount. Employees could edit, send, or dismiss the suggestion, preserving authorship instead of automating appreciation invisibly. The 56% increase supported our hypothesis that reducing the friction of beginning a recognition post would increase engagement.',
      value: '56%',
      label: 'increase in engagement after AI-suggested recognition was introduced'
    },
    outcomes: [
      { value: '56%', label: 'increase in engagement after AI suggestions launched' },
      { value: '2', label: 'customer-led feature families shipped' },
      { value: '1 mo.', label: 'available post-launch signal window' }
    ],
    outcomeCopy: 'The 56% engagement increase was the clearest early signal: reducing the effort required to begin a recognition helped more employees participate. Post-launch customer conversations also led us to ship more granular point allocations and automated birthday and anniversary recognition.',
    evidenceNote: 'The product had been live for roughly one month when I left BambooHR, so the 56% increase should be read as an early engagement signal rather than proof of sustained adoption.',
    gallery: [
      { src: '/assets/work/bamboohr/settings.png', alt: 'Recognition and Rewards settings organized into recognition, rewards, and optional features', caption: 'The settings hub gives Admins a map of the system before asking them to configure it.' },
      { src: '/assets/work/bamboohr/points.png', alt: 'Points Management page showing monthly allocation groups and recurring totals', caption: 'Allocation rules stay visible, comparable, and financially legible after they are created.' },
      { src: '/assets/work/bamboohr/allocation.png', alt: 'New monthly point allocation dialog with group, manager, and individual audience options' },
      { src: '/assets/work/bamboohr/feed.png', alt: 'Recognition feed with posts, reactions, point balances, and contextual AI suggestions', caption: 'Suggestions appear beside the feed at moments employees already associate with recognition.' },
      { src: '/assets/work/bamboohr/composer.png', alt: 'Give Recognition dialog over the employee recognition feed', caption: 'Employees retain control of the recipient, message, values, points, privacy, and final send.' }
    ]
  },
  {
    slug: 'ai-order-cloud', number: '02', title: 'AI Order Cloud', company: 'Fabric',
    summary: 'Moving AI beyond a bolt-on chatbot to improve real merchandising and fulfillment work.',
    tags: ['AI product strategy', 'Enterprise UX', 'Team leadership'], year: '2024', caseRole: 'UX Team Manager',
    cover: '/assets/work/fabric/cover-illustrated.png',
    coverAlt: 'Illustrated Fabric-branded packages moving through a fulfillment center',
    headline: 'Designing AI around the work—not around the novelty.',
    problem: 'Fabric wanted AI to become a meaningful part of its commerce platform. The easy answer was a chatbot. The harder, more valuable question was where AI could remove real operational friction without asking users to trust a black box.',
    context: 'Merchandising and fulfillment teams work across dense systems, high-volume catalogs, and time-sensitive decisions. AI could accelerate that work, but only if it was contextual, explainable, and integrated into workflows people already understood.',
    role: 'I led the design direction and helped move the initiative from an executive ambition to a shared product strategy. I facilitated alignment with executives and functional leaders, organized the design team around common principles, and partnered with product and engineering through concept development, testing, and systemization.',
    approach: [
      { title: 'Align before designing', body: 'I brought executives, department leaders, and key stakeholders together to identify where AI could create credible customer and business value. The workshop gave design a strategic role early enough to influence the premise—not just the interface.' },
      { title: 'Start with consequential work', body: 'Customer conversations narrowed our focus to merchandising and supply-chain leaders. Both groups spent significant time gathering data, maintaining accuracy, and moving between systems to make decisions.' },
      { title: 'Prototype the relationship', body: 'The team explored how users would move between conversation and action, inspect the rationale behind a recommendation, and recognize AI-generated content without losing their place or sense of control.' }
    ],
    decisions: [
      { title: 'Go deeper than chat', body: 'I pushed the direction beyond a bolt-on assistant and toward AI embedded in the workflows where people already made decisions.' },
      { title: 'Make trust visible', body: 'Recommendations needed rationale, clear provenance, and an easy path to accept, revise, or reject an action.' },
      { title: 'Create a reusable language', body: 'We translated the interaction principles into AI-specific patterns and components that could scale across the product.' }
    ],
    outcomes: [
      { value: '49%', label: 'faster data analysis' },
      { value: '90%', label: 'accuracy rating in beta' },
      { value: '40%', label: 'improvement in self-resolution' }
    ],
    outcomeCopy: 'The beta results supported the central bet: AI was most useful when it helped people complete specific work with the context and controls needed to trust the result.',
    gallery: [
      { src: '/assets/work/fabric/workshop.png', alt: 'A cross-functional team working through AI opportunities on a wall', caption: 'Cross-functional alignment made the opportunity concrete before the team committed to a solution.' },
      { src: '/assets/work/fabric/strategy.png', alt: 'AI opportunity and strategy artifacts from the Fabric project' },
      { src: '/assets/work/fabric/personas.png', alt: 'Target persona and workflow artifacts for merchandising and logistics users' },
      { src: '/assets/work/fabric/team-brain.png', alt: 'Collaborative sketches produced by the Fabric design team', caption: 'Live sketching let the team challenge and combine ideas before polishing screens.' },
      { src: '/assets/work/fabric/components.png', alt: 'AI-specific interface components created for Fabric' },
      { src: '/assets/work/fabric/split-shipments.gif', alt: 'Prototype of an AI-assisted split shipment workflow' },
      { src: '/assets/work/fabric/description-analyzer.gif', alt: 'Prototype of an AI product-description analyzer' }
    ]
  },
  {
    slug: 'product-page-architecture', number: '03', title: 'Product Page Architecture', company: 'Purple',
    summary: 'Reducing decision overload in a high-consideration purchase—and increasing upgrades by 61%.',
    tags: ['Commerce UX', 'Experimentation', 'Research'], year: '2022', caseRole: 'Sole Product Designer',
    cover: '/assets/work/purple/cover-illustrated.png', coverAlt: 'Illustrated Purple mattress in a colorful bedroom',
    headline: 'Fewer decisions at once. Better decisions overall.',
    problem: 'Purple was asking customers to choose a mattress and evaluate every relevant cross-sell on the same product page. The page carried too much narrative, too many options, and too many decisions for an already complex purchase.',
    context: 'A mattress is an infrequent, high-consideration purchase. Adding bases, bedding, and promotions may increase order value, but presenting everything at once can obscure the primary decision and make the experience harder to understand.',
    role: 'I helped diagnose the experience, synthesized behavioral and market evidence, proposed the new information architecture, and carried the direction through design exploration, prototyping, usability testing, and an A/B test.',
    approach: [
      { title: 'Find the actual constraint', body: 'Conversion data, heat maps, and dozens of Quantum Metric sessions pointed to the same issue: customers were being asked to process too many options before they were ready.' },
      { title: 'Look beyond the category', body: 'Most mattress competitors repeated the same overloaded pattern, so we expanded the audit to products outside the category and found stronger models for sequencing decisions.' },
      { title: 'Separate the moments', body: 'I proposed moving add-ons into a post-add-to-cart interstitial. That preserved the commercial opportunity while letting customers focus on the mattress first.' }
    ],
    decisions: [
      { title: 'Protect the primary choice', body: 'The product page would do one job well: help a customer confidently choose a mattress.' },
      { title: 'Sequence, don’t remove', body: 'Cross-sells remained visible, but at a moment when customers had more capacity to evaluate them.' },
      { title: 'Test customer and business value together', body: 'We measured attachment and order value while testing whether people understood the transition and could move back without friction.' }
    ],
    outcomes: [
      { value: '61%', label: 'increase in bedding upgrades' },
      { value: '35%', label: 'increase in bed-frame attachment' },
      { value: '$2.5M', label: 'estimated additional annual revenue' }
    ],
    outcomeCopy: 'The experiment produced a 7% lift in average order value while improving attachment across two important product categories. The strongest result came from changing when customers made each decision—not simply adding more promotion.',
    gallery: [
      { src: '/assets/work/purple/research.png', alt: 'Purple product-page session analysis and experiment data', caption: 'Behavioral evidence showed where customers hesitated and which decisions competed for attention.' },
      { src: '/assets/work/purple/audit.png', alt: 'Competitive product-page audit for Purple' },
      { src: '/assets/work/purple/architecture.png', alt: 'Proposed information architecture for the mattress and add-on flow' },
      { src: '/assets/work/purple/exploration-01.png', alt: 'Early Purple post-add-to-cart design explorations' },
      { src: '/assets/work/purple/exploration-02.png', alt: 'Additional Purple add-on flow explorations' },
      { src: '/assets/work/purple/final-design.png', alt: 'Final Purple product and add-on experience' },
      { src: '/assets/work/purple/testing.png', alt: 'Usability testing artifacts for the Purple experience' },
      { src: '/assets/work/purple/results.png', alt: 'Results from the Purple product-page experiment' }
    ]
  }
];

export const publishedProjects = projects.filter(project => project.status !== 'draft');
