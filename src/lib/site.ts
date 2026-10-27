import {
  Award,
  BarChart3,
  BookOpen,
  Bot,
  BrainCircuit,
  Braces,
  Cloud,
  CloudCog,
  Code2,
  Compass,
  Cpu,
  Database,
  Eye,
  FileCode2,
  Gauge,
  Globe,
  GraduationCap,
  Handshake,
  Layers,
  LineChart,
  Lock,
  Medal,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  TerminalSquare,
  Trophy,
  Users,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";

/* ---------------- navigation ---------------- */

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Platform", href: "#platform" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

/* ---------------- hero ---------------- */

export const heroStats = [
  { value: 30, suffix: "+", label: "Happy Clients" },
  { value: 100, suffix: "%", label: "Client Retention" },
  { value: 6, suffix: "k+", label: "Students Trained" },
  { value: 50, suffix: "+", label: "Team Size" },
];

export const marqueeItems = [
  "MERN / MEAN Full Stack",
  "AWS Cloud",
  "Generative AI",
  "Google Cloud",
  "DevOps",
  "Power BI",
  "Selenium Automation",
  "Python & DSA",
  "Snowflake",
  "ServiceNow",
  "MongoDB",
  "Azure",
];

/* ---------------- highlights ---------------- */

export interface FeatureCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const highlights: FeatureCard[] = [
  {
    icon: Braces,
    title: "Top Programming Languages",
    description:
      "Master Java, Python, C and C++ with structured DSA tracks built for interviews and real-world engineering.",
  },
  {
    icon: ShieldCheck,
    title: "Most Secured Workspace",
    description:
      "A hardened practice environment with proctoring, tab-switch monitoring and secure assessment delivery.",
  },
  {
    icon: Bot,
    title: "AI-based Practices & Security",
    description:
      "AI-powered suggestions, auto-evaluation and smart feedback loops accelerate every practice session.",
  },
  {
    icon: LineChart,
    title: "Analysis & Leaderboards",
    description:
      "Extensive result matrix, progress analytics and leaderboards keep learners and educators aligned.",
  },
];

/* ---------------- platform tabs ---------------- */

export interface PlatformTab {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  bullets: string[];
}

export const platformTabs: PlatformTab[] = [
  {
    id: "smarter",
    icon: Sparkles,
    title: "Code Smarter, Not Harder",
    description:
      "Explore new coding techniques and patterns with AI-powered suggestions that broaden your knowledge and enhance your coding creativity.",
    image: "/assets/tab-web.svg",
    imageAlt: "AI-assisted coding illustration",
    bullets: ["AI pair-programming hints", "Pattern & anti-pattern detection", "Contextual best practices"],
  },
  {
    id: "tracking",
    icon: Gauge,
    title: "Data-Powered Progress Tracking",
    description:
      "Track learner progress, identify strengths and weaknesses, and visualize the path to mastery with our comprehensive result matrix.",
    image: "/assets/tab-mobile.svg",
    imageAlt: "Progress tracking illustration",
    bullets: ["Skill-wise mastery matrix", "Strength / gap analysis", "Milestone visualisation"],
  },
  {
    id: "openide",
    icon: TerminalSquare,
    title: "Open IDE — Unleash Your Potential",
    description:
      "The OpenIDE provides an interactive environment where you can learn by doing, with customizable inputs to test your code and refine your problem-solving abilities.",
    image: "/assets/tab-ide.png",
    imageAlt: "Open IDE workspace illustration",
    bullets: ["Interactive in-browser IDE", "Custom test inputs", "Instant compile & run feedback"],
  },
  {
    id: "futureproof",
    icon: Rocket,
    title: "Future-Proof Your Skills",
    description:
      "Unlock lucrative career opportunities with comprehensive training in MERN/MEAN full stacks, AWS cloud, Selenium test automation, Power BI and DevOps.",
    image: "/assets/tab-career.png",
    imageAlt: "Career growth illustration",
    bullets: ["Industry-aligned curriculum", "Cloud & automation tracks", "Placement-focused learning"],
  },
];

/* ---------------- services ---------------- */

export interface ServiceDetail {
  id: string;
  icon: LucideIcon;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  features: { icon: LucideIcon; label: string }[];
  checklist: string[];
  stack: { name: string; detail: string }[];
}

export const services: ServiceDetail[] = [
  {
    id: "web-portal",
    icon: Layers,
    badge: "Online Platform",
    title: "Web Portal",
    tagline: "A state-of-the-art learning & practice platform",
    description:
      "Our portal offers students a best-in-class learning and practice experience, with extensive, detailed analytics for educators and placement cells.",
    image: "/assets/svc-web.svg",
    imageAlt: "Web portal development illustration",
    features: [
      { icon: MonitorSmartphone, label: "Fully Responsive" },
      { icon: Globe, label: "Browser Compatible" },
      { icon: FileCode2, label: "Clean Workspace" },
      { icon: Zap, label: "AI Powered" },
      { icon: Lock, label: "Highly Secured" },
      { icon: Code2, label: "Modern Frameworks" },
    ],
    checklist: [
      "Student Learning Panel with AI-integrated IDE & practice workspace",
      "Assessment Panel with best-in-class proctoring & tab-switch monitoring",
      "Lab Panel with industrial / interview questions for placement prep",
      "Staff Panel with monitoring & analysis for assigned students",
      "Admin Panel with extensive result matrix & leaderboards",
    ],
    stack: [
      { name: "Java", detail: "OOPS with Java & DSA" },
      { name: "Python", detail: "OOPS with Python & DSA" },
      { name: "C", detail: "Core C & DSA" },
      { name: "C++", detail: "OOPS with C++ & DSA" },
    ],
  },
  {
    id: "trainings",
    icon: GraduationCap,
    badge: "80% Hands-on / 20% Theory",
    title: "Trainings & Certifications",
    tagline: "Industry-focused certification programs",
    description:
      "High-quality, hands-on programming skills for freshers and college students — delivered on our working project model so learners absorb knowledge directly from professionals.",
    image: "/assets/svc-trainings.svg",
    imageAlt: "Trainings and certifications service illustration",
    features: [
      { icon: Medal, label: "Certified Educators" },
      { icon: CloudCog, label: "Virtual Labs Environment" },
      { icon: Cloud, label: "AWS · GCP · Azure Partner" },
      { icon: Database, label: "Snowflake & ServiceNow" },
      { icon: Database, label: "Oracle & MongoDB" },
      { icon: Workflow, label: "Full Stack Dev Courses" },
    ],
    checklist: [
      "Fullstack with MongoDB certifications",
      "AWS CP / SAA / DEA / DVA certifications",
      "GCP / Azure professional certifications",
      "Snowflake SnowPro CORE & Associate certifications",
      "ServiceNow professional certifications",
    ],
    stack: [
      { name: "AWS", detail: "CP · AIP · SAA · DEA · DVA" },
      { name: "GCP", detail: "ACE · CA · DE" },
      { name: "Full Stack", detail: "MERN · MEAN · JFS (Spring Boot)" },
      { name: "Snowflake / ServiceNow", detail: "SnowPro / CAD · CIS" },
    ],
  },
  {
    id: "hackathons",
    icon: Trophy,
    badge: "One-Day Event",
    title: "AI Hackathons",
    tagline: "Build an AI-powered app in just one day",
    description:
      "An immersive one-day event where students transform innovative ideas into working AI-powered applications — teaming up, learning from mentors and pitching to a judging panel.",
    image: "/assets/svc-hacks.svg",
    imageAlt: "AI hackathon illustration",
    features: [
      { icon: Code2, label: "AI App Development" },
      { icon: MonitorSmartphone, label: "Modern Web & Mobile Apps" },
      { icon: Zap, label: "Build in One Day" },
      { icon: Users, label: "Mentor Guidance" },
      { icon: Cloud, label: "Cloud & AI Tools Access" },
      { icon: Sparkles, label: "Demo & Project Showcase" },
    ],
    checklist: [
      "Team-based AI app development challenge",
      "Hands-on experience with Generative AI & APIs",
      "Mentorship across ideation, development and pitching",
      "Build, test and deploy a working prototype within the day",
      "Certificates, awards and networking opportunities",
    ],
    stack: [
      { name: "Collaboration", detail: "Solve real-world problems together" },
      { name: "AI Tech", detail: "LLMs, APIs & intelligent automation" },
      { name: "Live Mentoring", detail: "Industry experts guide your build" },
      { name: "Demo & Awards", detail: "Pitch your project, win prizes" },
    ],
  },
];

/* ---------------- about ---------------- */

export const aboutPillars: FeatureCard[] = [
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "Revolutionize tech education by integrating AI-powered learning — empowering the next generation of engineers to innovate, build and thrive in a rapidly evolving digital world.",
  },
  {
    icon: Compass,
    title: "Our Mission",
    description:
      "Bridge the gap between education and real-world application with cutting-edge tools, expert mentorship and a thriving community — fueling innovation, one coder at a time.",
  },
  {
    icon: Target,
    title: "Our Goal",
    description:
      "Empower aspiring engineers with AI-driven tools and hands-on coding experience, making programming education intuitive, accessible and industry-relevant.",
  },
];

export const aboutImages = [
  {
    src: "/assets/about-fundamentals.png",
    label: "Fundamentals",
    alt: "Programming fundamentals courses illustration",
  },
  {
    src: "/assets/about-fullstack.png",
    label: "Full Stack",
    alt: "Full stack development courses illustration",
  },
  {
    src: "/assets/about-cloud.png",
    label: "Cloud & DevOps",
    alt: "Cloud and DevOps courses illustration",
  },
];

export const aboutChecklist = [
  "Developers & AWS educators",
  "Real-world project-based practice",
  "AI-driven learning approach",
  "On-premises programs for institutions",
];

/* ---------------- partnership ---------------- */

export const partnershipSteps = [
  {
    icon: Handshake,
    step: "01",
    title: "Institution Partnership & MOU",
    description:
      "Formal collaborations with universities and top-tier institutions to bring modern platforms to campus.",
  },
  {
    icon: Trophy,
    step: "02",
    title: "One-Day AI Hackathons",
    description:
      "High-energy campus hackathons where students build AI-powered applications in a single day.",
  },
  {
    icon: Award,
    step: "03",
    title: "Certification Trainings",
    description:
      "Cutting-edge certification programs in cloud, full-stack and data — delivered by certified experts.",
  },
];

export const partners = [
  { src: "/assets/partner-gcp.png", alt: "Google Cloud partner badge" },
  { src: "/assets/partner-aws.png", alt: "AWS Partner Network badge" },
];

/* ---------------- contact ---------------- */

export const contact = {
  email: "info@atomcode.dev",
  phone: "+91 85085 13222",
  phoneHref: "tel:+918508513222",
  address:
    "ATOMCODE, No. 4A, 3rd St, Bharathi Nagar, Raja Nagar, Ganapathy, Coimbatore, Tamil Nadu 641006.",
};

export const footerBlurb =
  "Join the next generation of AI-powered engineers. Grow your skills, connect with a thriving community, and reimagine engineering with AI-powered tools. Fueled by AI — powered by Atom Code Dev.";

/* ---------------- faq ---------------- */

export const faqItems = [
  {
    question: "What is Atom Code?",
    answer:
      "Atom Code is an AI-powered EdTech and engineering company. We help students and institutions reimagine engineering through hands-on certification trainings, an AI-integrated Open IDE practice platform, campus partnership programs and one-day AI hackathons.",
  },
  {
    question: "What services does Atom Code offer?",
    answer:
      "We offer three core services: a secure online web portal for learning, practice and assessments; industry-focused certification trainings with an 80% hands-on model; and one-day AI hackathons where students build working AI applications with mentor guidance.",
  },
  {
    question: "Which certification programs can I prepare for?",
    answer:
      "Learners prepare for AWS (CP, AI Practitioner, SAA, DEA, DVA), Google Cloud and Azure certifications, Snowflake SnowPro, ServiceNow certifications and full-stack programs including MERN, MEAN and Java Full Stack with Spring Boot.",
  },
  {
    question: "What is the Open IDE platform?",
    answer:
      "Open IDE is our interactive in-browser coding environment. You learn by doing — write code, run it instantly with custom test inputs and get AI-powered suggestions that strengthen your problem-solving skills.",
  },
  {
    question: "Do you partner with colleges and institutions?",
    answer:
      "Yes. We sign MOUs with universities and institutions to bring our platform to campus, run certification trainings and host one-day AI hackathons. On-premises programs are available for institutions.",
  },
  {
    question: "Where is Atom Code located?",
    answer:
      "Our office is in Ganapathy, Coimbatore, Tamil Nadu, India. We work with institutions and learners across India and deliver many programs virtually.",
  },
  {
    question: "How do I get started with Atom Code?",
    answer:
      "Use the contact form on this page or email info@atomcode.dev. Our team will help you choose the right training track, join an upcoming hackathon or set up an institutional partnership.",
  },
];
