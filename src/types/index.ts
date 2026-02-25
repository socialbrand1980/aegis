export type NavItem = {
  label: string;
  href: string;
};

export type Industry = {
  slug: string;
  title: string;
  problem: string;
  solution: string;
  outcomes: string[];
};

export type CaseStudy = {
  id: string;
  client: string;
  industry: string;
  timeline: string;
  workflowTimeline: {
    phase: string;
    detail: string[];
  }[];
  problem: string[];
  implementation: string[];
  metrics: string[];
  insight: string;
};

export type ResourcePost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  content: string;
};
