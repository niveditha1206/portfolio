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
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Financing Platform",
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
  },
  {
    id: 2,
    title: "Funding Calculator",
    description:
      "Responsive Merchant Cash Advance (Funding) calculator that estimates funding eligibility based on monthly revenue and business duration.",
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
  },
  {
    id: 3,
    title: "Corporate Marketing Website",
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
  },
];

export const experience = {
  title: "Software Engineer I",
  company: "Codezyng Private Limited",
  location: "Udupi",
  duration: "March 2023 – Present",
  tenure: "2+ Years",
  responsibilities: [
    "Developed enterprise web applications using React, TypeScript, and modern frontend technologies.",
    "Built reusable UI components to improve consistency and maintainability across the application.",
    "Integrated REST APIs using Axios and managed server state with TanStack React Query.",
    "Managed application state using Redux Toolkit and implemented authentication and role-based access.",
    "Collaborated with backend developers, QA engineers, and product teams to deliver new features.",
    "Optimized application performance and improved user experience through efficient rendering and reusable architecture.",
  ],
  projects: [
    {
      title: "Financing Platform",
      description:
        "Enterprise financing platform for managing clients, financing deals, payments, reports, brokered deals, user management, and role-based workflows.",
    },
    {
      title: "Funding Calculator",
      description:
        "Funding calculator that estimates business funding eligibility based on monthly revenue and business duration, providing a seamless lead generation flow.",
    },
  ],
  technologies: [
    "React",
    "TypeScript",
    "JavaScript",
    "Next.js",
    "Redux Toolkit",
    "React Query",
    "Material UI",
    "Tailwind CSS",
    "Axios",
    "React Hook Form",
    "Yup",
    "Git",
    "GitHub",
    "Vite",
  ],
};
