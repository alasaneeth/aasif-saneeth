/* ---------------------------------------------------------
   DATA — all site copy lives here. Edit freely, no JSX below.
--------------------------------------------------------- */

export const NAV = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const PROFILE = {
  name: "Al. Aasif Saneeth",
  role: "Software Engineer",
  tagline: "building full-stack ERP systems with",
  taglineHighlight: "ASP.NET Core, React & Angular.",
  status: "Open to opportunities",
  about:
    "3+ years designing and shipping ERP applications end to end — from Clean " +
    "Architecture on the backend to responsive React and Angular front ends, " +
    "deployed on Azure with CI/CD in place. I care about code that stays easy " +
    "to change six months from now.",
};

export const CONTACT = {
  email: "alasaneeth22@gmail.com",
  phone: "+94 74 082 2580",
  phoneHref: "+94740822580",
  linkedin: "https://www.linkedin.com/in/aasif-saneeth",
  github: "https://github.com/alasaneeth",
  location: "Maruthamunai, Sri Lanka",
};

export const EXPERIENCE = [
  {
    role: "Software Engineer",
    org: "Infora Tech",
    period: "Sep 2025 — Present",
    current: true,
    points: [
      "Build ERP modules with ASP.NET Core, React & Angular using Clean Architecture.",
      "Own CI/CD pipelines and Azure deployments end to end.",
    ],
  },
  {
    role: "Associate Software Engineer",
    org: "Titum",
    period: "Nov 2023 — Sep 2025",
    current: false,
    points: [
      "Built and scaled backend APIs and React/TypeScript UIs for an ERP platform.",
      "Deployed to Azure App Services, Azure SQL and Storage.",
    ],
  },
  {
    role: "Software Engineer Intern",
    org: "Titum",
    period: "May 2023 — Oct 2023",
    current: false,
    points: ["Built React components on ASP.NET Web APIs; tested and debugged features."],
  },
];

export const PROJECTS = [
  {
    name: "HLChitFund",
    subtitle: "Chit Fund Management System",
    stack: ["Angular 21", ".NET 8", "SQL Server", "JWT"],
    repo: "https://github.com/alasaneeth/chit-fund-tracker",
    points: [
      "Full-stack build across 9 sprints — Clean Architecture backend, zoneless Angular frontend.",
      "Role-based auth (Admin, Cashier, Customer) enforced at API and UI layers.",
      "25-test Jasmine/Karma suite covering services, guards and components.",
    ],
  },
  {
    name: "HopperFlow",
    subtitle: "String Hopper Business Management System",
    stack: ["React 18", "TypeScript", ".NET 8", "Redux Toolkit"],
    repo: "https://github.com/alasaneeth/hopper-flow",
    points: [
      "RBAC across 6 roles with granular endpoint-level authorization.",
      "Sales, billing, credit tracking and auto-generated invoices.",
      "Payroll with attendance, advances and auto-generated payslips.",
    ],
  },
];

export const SKILLS = [
  { group: "Backend", items: ["C#", ".NET Core", "ASP.NET Core", "EF Core", "CQRS + MediatR"] },
  { group: "Frontend", items: ["React.js", "Angular", "TypeScript", "Redux Toolkit", "Tailwind CSS"] },
  { group: "Data & Cloud", items: ["SQL Server", "Azure", "Docker", "GitHub Actions"] },
  { group: "Testing", items: ["xUnit", "Jest", "Cypress", "Playwright"] },
  { group: "Practices", items: ["Clean Architecture", "SOLID", "REST / GraphQL", "JWT Auth"] },
];

export const EDUCATION = [
  { deg: "BEng (Hons), Computer Software Engineering", school: "London Metropolitan University", year: "2024" },
  { deg: "HND, Software Development", school: "Buckinghamshire New University", year: "2023" },
];
