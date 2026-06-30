export const NAV_ITEMS = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const socialLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://www.linkedin.com/in/niveditha-nandakumar1206/",
};

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  highlights: string[];
  github?: string;
  live?: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Kesef",
    description:
      "Enterprise financing management platform for managing clients, deals, payments, reports, and administrative workflows with role-based access control.",
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Redux Toolkit",
      "React Query",
      "Material UI",
      "Axios",
    ],
    highlights: [
      "Developed reusable UI components and responsive dashboards.",
      "Integrated REST APIs with authentication and role-based access.",
      "Implemented client, deal, payment, and reporting workflows.",
      "Managed application state using Redux Toolkit and React Query.",
    ],
    image: "/projects/kesef.png",
  },
  {
    id: 2,
    title: "MCA Calculator",
    description:
      "Responsive Merchant Cash Advance (MCA) calculator that estimates funding eligibility based on monthly revenue and business duration.",
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Material UI",
      "React Router",
      "Google Analytics",
    ],
    highlights: [
      "Implemented real-time funding calculations.",
      "Built responsive UI with formatted inputs.",
      "Integrated Google Analytics (gtag) event tracking.",
      "Preserved UTM parameters during application redirection.",
    ],
    image: "/projects/mca-calculator.png",
  },
  {
    id: 3,
    title: "Buzz Digital Solutions Website",
    description:
      "Corporate website showcasing digital signage solutions with responsive layouts, animations, and lead generation features.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "React Hook Form",
      "Google APIs",
    ],
    highlights: [
      "Developed responsive pages using Next.js and Tailwind CSS.",
      "Built animated UI with Framer Motion and Swiper.",
      "Integrated contact form with Google Sheets API.",
      "Optimized for SEO and performance.",
    ],
    image: "/projects/buzz.png",
  },
];
