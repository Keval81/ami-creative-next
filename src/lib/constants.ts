// src/lib/constants.ts

export const SOCIAL_LINKS = {
  instagram: "#", // TODO: Nia to provide real URL
  linkedin: "#",  // TODO: Nia to provide real URL
  tiktok: "#",    // TODO: Nia to provide real URL
  email: "mailto:hello@amicreative.com",
} as const;

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  image?: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "why-purpose-driven-brands-win",
    title: "Why purpose-driven brands win",
    category: "Strategy",
    readTime: "8 min read",
    excerpt: "In a world of noise, brands with a clear why cut through every time.",
  },
  {
    slug: "3-questions-every-new-client",
    title: "The 3 questions I ask every new client",
    category: "Process",
    readTime: "4 min read",
    excerpt: "Before I touch a brief, I need to understand three things.",
  },
  {
    slug: "content-strategy-that-converts",
    title: "How to build a content strategy that actually converts",
    category: "Content",
    readTime: "6 min read",
    excerpt: "Content without strategy is just noise. Here's how to build one that works.",
  },
];

export interface PortfolioItem {
  title: string;
  category: "Branding" | "Content" | "Web" | "Social" | "Photography";
  img: string;
  featured?: boolean;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { title: "LSBU Photography", category: "Photography", img: "/images/portfolio/lsbu-44.jpg", featured: true },
  { title: "On Location", category: "Photography", img: "/images/portfolio/lsbu-45.jpg" },
  { title: "Studio Session", category: "Photography", img: "/images/portfolio/lsbu-46.jpg" },
  { title: "Creative Direction", category: "Photography", img: "/images/portfolio/lsbu-48.jpg" },
  { title: "Behind the Lens", category: "Photography", img: "/images/portfolio/lsbu-63.jpg" },
  { title: "Photographer at LSBU", category: "Photography", img: "/images/portfolio/photographer-at-lsbu.jpg" },
];

export interface HighlightCard {
  num: string;
  title: string;
  blurb: string;
  story: string;
  img: string;
}

export const HIGHLIGHT_CARDS: HighlightCard[] = [
  {
    num: "01",
    title: "London Met Talk",
    blurb: "Inspiring the next gen",
    story: "Nia was invited to speak at London Metropolitan University, sharing her journey in creative marketing and inspiring the next generation of designers and brand strategists.",
    img: "/images/highlights/london-met-talk.jpg",
  },
  {
    num: "02",
    title: "Filming Day",
    blurb: "Action! Behind the lens",
    story: "A full day on set directing and producing brand video content — from concept to camera, bringing stories to life through motion and narrative.",
    img: "/images/highlights/filming-day.jpg",
  },
  {
    num: "03",
    title: "Brand Launch",
    blurb: "Pop, clink, cheer",
    story: "The excitement of a live brand launch — months of strategy, design, and preparation culminating in one memorable moment. A major milestone for the client's identity.",
    img: "/images/highlights/lovebrain-event.jpg",
  },
  {
    num: "04",
    title: "NISAU Conference",
    blurb: "Connecting the community",
    story: "Representing AMI Creative at the NISAU Conference — meeting founders, creatives, and changemakers all building something meaningful.",
    img: "/images/highlights/nisau-conference.jpg",
  },
  {
    num: "05",
    title: "Snapchat HQ",
    blurb: "In colour at Snap HQ",
    story: "An unforgettable visit to Snapchat's London headquarters — exploring the intersection of social, tech, and creative culture.",
    img: "/images/highlights/snap-in-colour-snapchat-hq.jpg",
  },
];
