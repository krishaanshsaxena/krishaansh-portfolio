// app/components/constants.ts

export const SITE_OWNER = "Krishaansh Saxena"
export const COPYRIGHT_YEAR = new Date().getFullYear()
export const SITE_TITLE = "Krishaansh Saxena | AI/ML Engineer in Training"
export const SITE_DESCRIPTION = "B.Tech CSE (AI & ML) student at KIIT University exploring AI, Machine Learning, Data Science, and Quantitative Finance."

export const HERO = {
  name: "Krishaansh Saxena",
  tagline: "Building the future with Intelligence & Math.",
  bio: "B.Tech CSE Student specializing in Artificial Intelligence and Machine Learning at KIIT University.",
}

export const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Blog", path: "/blog" },
  { label: "Resume", path: "/resume" },
  { label: "Contact", path: "/contact" },
]

export const socialItems = [
  { name: "GitHub", url: "https://github.com/krishaanshsaxena" },
  { name: "LinkedIn", url: "https://linkedin.com/in/krishaanshsaxena" },
 // { name: "Email", url: "mailto:your-email@example.com" }, // Swap with your real email
  { name: "Twitter", url: "https://x.com/krishaansh_s" },
]

export const projects = [
  {
    id: "portfolio",
    title: "Personal Portfolio Website",
    description: "My personal slice of the internet built using Next.js, Tailwind CSS, and TypeScript.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://github.com", // Fixed reference path
  },
  {
    id: "digital-garden",
    title: "Digital Garden Website",
    description: "A public repository of my notes, thoughts, and compounding knowledge base.",
    tags: ["Markdown", "Next.js", "Knowledge Management"],
    link: "#",
  },
  {
    id: "news-aggregator",
    title: "News Aggregator App",
    description: "Aggregates tech and finance news using automated RSS pipelines.",
    tags: ["Python", "API", "React"],
    link: "#",
  },
  {
    id: "stats-calculator",
    title: "Statistics Calculator",
    description: "A specialized tool for calculating probability distributions and statistical models.",
    tags: ["Python", "Streamlit", "Mathematics"],
    link: "#",
  },
  {
    id: "ml-playground",
    title: "Machine Learning Playground",
    description: "Visualizations of basic ML models like Linear Regression and Decision Trees.",
    tags: ["Scikit-Learn", "Python", "Data Viz"],
    link: "#",
  },
]

export const blogPosts = [
  { slug: "what-is-ml", title: "What is Machine Learning?", date: "Coming Soon", summary: "An intuitive introduction to training machines." },
  { slug: "stats-for-ai", title: "Statistics for AI", date: "Coming Soon", summary: "The core mathematical foundations required for modern AI." },
  { slug: "bayes-theorem", title: "Bayes Theorem", date: "Coming Soon", summary: "Understanding conditional probability and its real-world uses." },
  { slug: "black-scholes", title: "Black-Scholes Model", date: "Coming Soon", summary: "An exploration into options pricing and quantitative finance math." },
  { slug: "bollinger-bands", title: "Bollinger Bands", date: "Coming Soon", summary: "Using statistical volatility indicators to map financial charts." },
  { slug: "git-basics", title: "Git and GitHub Basics", date: "Coming Soon", summary: "Version control habits essential for every software engineer." },
]

export const skillGroups = [
  { category: "Languages", skills: ["Python", "TypeScript", "JavaScript", "C++", "SQL"] },
  { category: "Libraries & ML Frameworks", skills: ["Scikit-Learn", "NumPy", "Pandas", "Matplotlib"] },
  { category: "Tools & Ecosystem", skills: ["Git", "GitHub", "Next.js", "Tailwind CSS", "Linux"] },
  { category: "Interests & Focus Areas", skills: ["AI / ML", "Statistics", "Quantitative Finance", "Data Science"] },
]

export const timeline = [
  {
    institution: "KIIT University",
    degree: "B.Tech in Computer Science & Engineering (AI & ML)",
    period: "Expected Graduation: June 2029",
  }
]

export const stats = [
  { value: "2+", label: "Years Learning" },
  { value: "5+", label: "Projects" },
  { value: "2029", label: "Graduation" },
]


// app/components/constants.ts
// (Keep all your existing constants at the top, just add this at the bottom)

export const LIVE_BLOG_CONTENT: Record<string, { title: string; date: string; summary: string; content: string }> = {
  "stats-for-ai": {
    title: "Statistics for AI",
    date: "June 2026",
    summary: "The core mathematical foundations required for modern machine learning systems.",
    content: `### Why Statistics Matter for Modern Systems

Machine learning isn’t magic—it’s applied computational mathematics. To understand why neural networks converge or how algorithms make predictions, you have to look closely at probability distributions, variance, and expectation values.

#### 1. Probability Distributions
Every element of raw data input holds inherent uncertainty. We model these uncertainties using specific statistical functions:
* **Gaussian (Normal) Distribution**: Governs weight initialisations and central limit concepts.
* **Bernoulli Distribution**: Underpins binary classification structures.

#### 2. Cost Function Optimization
When an AI updates its network nodes, it evaluates structural errors through optimization functions that calculate expectations over distributions.`
  }
};
