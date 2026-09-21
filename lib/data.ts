// Central content store for NEWZONIX — no placeholder copy.

export const nav = [
  { label: "Platform", href: "/platform" },
  { label: "Solutions", href: "/solutions" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export const stats = [
  { value: 4200, suffix: "+", label: "Businesses automated" },
  { value: 118, suffix: "M", prefix: "$", label: "Processed through workflows" },
  { value: 63, suffix: "%", label: "Avg. reduction in ops time" },
  { value: 99.98, suffix: "%", label: "Platform uptime" },
];

export const features = [
  {
    icon: "orbit",
    title: "Autonomous Workflows",
    description:
      "Design multi-step operations once. NEWZONIX agents execute them continuously — routing leads, reconciling invoices, updating records — without a human trigger.",
  },
  {
    icon: "spark",
    title: "Launch Studio",
    description:
      "Go from idea to a live business system in days. Generate onboarding flows, pricing pages, and internal tools from a plain-language brief.",
  },
  {
    icon: "layers",
    title: "Unified Data Core",
    description:
      "Every customer record, transaction, and conversation lives in one governed layer, so your agents reason with the same truth your team sees.",
  },
  {
    icon: "shield",
    title: "Enterprise Controls",
    description:
      "Role-based access, audit trails, and approval gates on every automated action. Nothing ships or spends without the permissions you set.",
  },
  {
    icon: "pulse",
    title: "Live Forecasting",
    description:
      "Models trained on your operating data project revenue, churn, and capacity weeks ahead — updated automatically as new signals arrive.",
  },
  {
    icon: "grid",
    title: "Open Integration Layer",
    description:
      "Connect the tools you already run — CRM, billing, support, warehouse — through native connectors or an open API in minutes, not sprints.",
  },
];

export const timeline = [
  {
    stage: "Connect",
    title: "Bring your operating stack",
    description:
      "Link your CRM, payments, support desk, and internal tools. NEWZONIX maps your existing data model in minutes — nothing to migrate.",
  },
  {
    stage: "Configure",
    title: "Define how your business runs",
    description:
      "Describe your processes in plain language. The platform turns them into governed, auditable workflows your team can review before anything goes live.",
  },
  {
    stage: "Launch",
    title: "Put agents into production",
    description:
      "Approve the workflow and NEWZONIX starts executing — with monitoring, rollback, and human-approval checkpoints built in from day one.",
  },
  {
    stage: "Scale",
    title: "Grow without adding headcount",
    description:
      "As volume increases, agents scale with it. Forecasting and capacity planning update automatically, so growth never outruns your operations.",
  },
];

export const solutions = [
  {
    icon: "spark",
    name: "Startups & Founders",
    tagline: "Launch a real operating business, not just a product.",
    description:
      "Stand up billing, onboarding, support, and reporting in your first week — so you're running a company, not stitching together five tools.",
    points: ["Launch Studio templates", "Usage-based billing built in", "Investor-ready reporting"],
  },
  {
    icon: "layers",
    name: "Mid-Market Operations",
    tagline: "Replace manual busywork with governed automation.",
    description:
      "Give operations teams a single control layer to automate reconciliation, fulfillment, and customer workflows across every department.",
    points: ["Cross-department workflow builder", "Approval gates & audit trails", "Native ERP & CRM connectors"],
  },
  {
    icon: "shield",
    name: "Enterprise & Regulated Industries",
    tagline: "Scale AI with the controls compliance requires.",
    description:
      "Deploy agents under strict role-based permissions, full audit history, and data residency controls, with SOC 2 and ISO 27001 coverage.",
    points: ["SOC 2 Type II & ISO 27001", "Private data residency options", "Dedicated success engineering"],
  },
  {
    icon: "pulse",
    name: "Revenue & Growth Teams",
    tagline: "Turn pipeline and usage data into forecasts you can act on.",
    description:
      "Live models watch your funnel and usage patterns, surfacing churn risk and expansion opportunity before your quarterly review does.",
    points: ["Real-time revenue forecasting", "Churn & expansion alerts", "Automated outreach playbooks"],
  },
];

/**
 * Canonical NewZonix plan pricing - the SINGLE source of truth for the
 * marketing site. priceINR is the real, canonical amount (whole rupees);
 * everything shown in another currency (see lib/currency.ts) is an
 * approximate, display-only conversion computed FROM this number, never
 * a separately maintained figure. Feature lists are intentionally empty
 * for now - no authoritative per-plan feature/quota differentiation was
 * provided, and inventing one here would risk making a false product
 * claim; the existing card layout already renders correctly with none.
 */
export type PricingPlan = {
  name: string;
  priceINR: number;
  period: string;
  description: string;
  cta: string;
  highlighted: boolean;
  features: string[];
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "7-Day Offer",
    priceINR: 49,
    period: "7 days",
    description: "Try NewZonix for a full week at a fraction of the cost.",
    cta: "Get Started",
    highlighted: false,
    features: [],
  },
  {
    name: "Monthly",
    priceINR: 1499,
    period: "per month",
    description: "Flexible, month-to-month access to the platform.",
    cta: "Get Started",
    highlighted: false,
    features: [],
  },
  {
    name: "Quarterly",
    priceINR: 2499,
    period: "per 3 months",
    description: "Save more with a 3-month commitment.",
    cta: "Get Started",
    highlighted: false,
    features: [],
  },
  {
    name: "6-Month",
    priceINR: 4999,
    period: "per 6 months",
    description: "Extended access for teams settling into a routine.",
    cta: "Get Started",
    highlighted: false,
    features: [],
  },
  {
    name: "Yearly",
    priceINR: 8999,
    period: "per year",
    description: "The best value for long-term, ongoing use.",
    cta: "Get Started",
    highlighted: false,
    features: [],
  },
];

export const faqs = [
  {
    question: "What exactly does NEWZONIX automate?",
    answer:
      "NEWZONIX automates the operational work that runs your business day to day — lead routing, onboarding, invoicing, reconciliation, reporting, and customer follow-ups. You define the process once; the platform's agents execute it continuously, inside the permissions and approval gates you set.",
  },
  {
    question: "Do I need engineers to set this up?",
    answer:
      "No. Most teams launch their first workflows using the visual builder and plain-language configuration — no code required. For custom integrations or complex logic, our open API and SDK are available to your engineering team.",
  },
  {
    question: "How does NEWZONIX handle sensitive data?",
    answer:
      "All data is encrypted in transit and at rest, isolated per workspace, and governed by role-based access controls. Enterprise plans add private data residency, dedicated infrastructure, and full audit trails on every automated action.",
  },
  {
    question: "Can I connect the tools we already use?",
    answer:
      "Yes. NEWZONIX ships with native connectors for common CRM, billing, support, and warehouse tools, plus an open API for anything custom. Most teams connect their core stack in under an hour.",
  },
  {
    question: "What happens if an automation makes a mistake?",
    answer:
      "Every workflow can include human-approval checkpoints before high-impact actions, full version history, and one-click rollback. You decide which actions run autonomously and which require sign-off.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Start with the 7-Day Offer to try NewZonix at a fraction of the regular price, then move to a Monthly, Quarterly, 6-Month, or Yearly plan whenever you're ready.",
  },
];

export const testimonials = [
  {
    quote:
      "We replaced four disconnected tools with one automated layer. Our ops team went from chasing spreadsheets to reviewing exceptions — everything else runs itself.",
    name: "Priya Shah",
    role: "COO, Fielder Logistics",
  },
  {
    quote:
      "NEWZONIX let us launch billing, onboarding, and support automation before we hired our first ops person. It felt like getting a head start most founders don't get.",
    name: "Marcus Lindqvist",
    role: "Founder, Arcform",
  },
  {
    quote:
      "The audit trail and approval gates were what got this past our compliance review. We finally get the speed of automation without losing control of it.",
    name: "Dana Whitfield",
    role: "VP Operations, Northbridge Capital",
  },
  {
    quote:
      "Forecasting used to be a Friday afternoon guess. Now it updates itself from real usage data, and it's more accurate than the model we built in-house.",
    name: "Kenji Ito",
    role: "Head of Revenue, Loopstack",
  },
];

export const logos = [
  "Fielder Logistics",
  "Arcform",
  "Northbridge Capital",
  "Loopstack",
  "Halyard",
  "Trestle Health",
  "Ondelta",
  "Marrow Analytics",
];

export const blogPosts = [
  {
    slug: "governed-automation-vs-black-box-ai",
    category: "Platform",
    title: "Why governed automation beats black-box AI in the enterprise",
    excerpt:
      "Autonomy without visibility is a liability, not a feature. Here's how approval gates and audit trails let operations teams trust automation enough to actually rely on it.",
    date: "July 14, 2026",
    readTime: "6 min read",
  },
  {
    slug: "launch-week-one-operating-business",
    category: "Startups",
    title: "How founders are launching a full operating business in week one",
    excerpt:
      "Billing, onboarding, and support used to take months to stitch together. A look at how Launch Studio compresses that into a single working week.",
    date: "June 29, 2026",
    readTime: "5 min read",
  },
  {
    slug: "forecasting-from-operating-data",
    category: "Revenue",
    title: "Forecasting that updates itself: building models on live operating data",
    excerpt:
      "Static quarterly forecasts are already stale by the time they're presented. Here's how live models trained on operating data close that gap.",
    date: "June 12, 2026",
    readTime: "7 min read",
  },
];

export const resources = [
  {
    icon: "layers",
    title: "Documentation",
    description: "Complete reference for the NEWZONIX API, SDKs, and workflow builder.",
    href: "/resources",
  },
  {
    icon: "grid",
    title: "Integration Library",
    description: "Native connectors for CRM, billing, support, and warehouse systems.",
    href: "/resources",
  },
  {
    icon: "shield",
    title: "Trust & Security",
    description: "SOC 2 reports, data processing terms, and our security architecture.",
    href: "/resources",
  },
  {
    icon: "pulse",
    title: "Customer Stories",
    description: "How operations, revenue, and founding teams run on NEWZONIX.",
    href: "/resources",
  },
  {
    icon: "spark",
    title: "Guides & Playbooks",
    description: "Step-by-step playbooks for common automation patterns.",
    href: "/resources",
  },
  {
    icon: "orbit",
    title: "API Reference",
    description: "Endpoints, authentication, webhooks, and rate limits.",
    href: "/resources",
  },
];

export const aboutValues = [
  {
    title: "Automation should be legible",
    description:
      "If a team can't see why an agent acted, they won't trust it. We build visibility into every layer, not as an afterthought.",
  },
  {
    title: "Control is a feature, not friction",
    description:
      "Speed without oversight isn't scale, it's risk. Approval gates and audit trails are core to the product, not compliance checkboxes.",
  },
  {
    title: "Small teams deserve enterprise infrastructure",
    description:
      "The operating systems large companies build in-house should be available to a five-person team on day one.",
  },
];

export const leadership = [
  { name: "Elena Marsh", role: "Co-founder & CEO", bio: "Previously led operations platform teams at two enterprise SaaS companies through IPO." },
  { name: "Théo Bergman", role: "Co-founder & CTO", bio: "Built distributed systems for financial infrastructure before starting NEWZONIX." },
  { name: "Aisha Rahman", role: "Chief Product Officer", bio: "Spent a decade designing workflow tools for operations and revenue teams." },
  { name: "Owen Castellanos", role: "Chief Security Officer", bio: "Formerly led security architecture for a Fortune 500 financial services firm." },
];

export const companyStats = [
  { value: 2021, suffix: "", label: "Founded" },
  { value: 210, suffix: "+", label: "Team members" },
  { value: 34, suffix: "", label: "Countries served" },
  { value: 4200, suffix: "+", label: "Businesses running on NEWZONIX" },
];
