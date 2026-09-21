/* All site copy lives here. Source of truth: AL_Aasif_Saneeth_Resume_DevOps_Focused.docx */

export const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const PROFILE = {
  name: "Al. Aasif Saneeth",
  role: "Associate DevOps Engineer",
  tagline: "automating builds and releases on Microsoft Azure with",
  taglineHighlight: "CI/CD, Docker & GitHub Actions.",
  status: "Available: Immediate Joiner",
  about: [
    "DevOps-focused engineer with 3+ years of experience delivering enterprise ERP applications. I specialise in CI/CD pipeline automation (Azure Pipelines, GitHub Actions, Azure DevOps), Microsoft Azure deployments and Git-based release workflows.",
    "I work with Docker and environment configuration, and troubleshoot production and deployment issues with minimal downtime. My .NET (C#), React.js and SQL Server background lets me collaborate closely with development teams and understand the applications I build and release end to end.",
    "I work in Agile/Scrum teams using code reviews and JIRA/Azure Boards.",
  ],
};

export const CONTACT = {
  email: "alasaneeth22@gmail.com",
  phone: "+94 74 082 2580",
  phoneHref: "+94740822580",
  linkedin: "https://www.linkedin.com/in/aasif-saneeth",
  github: "https://github.com/alasaneeth",
  location: "Maruthamunai, Sri Lanka",
};

export const EXPERTISE = [
  { title: "CI/CD Automation", text: "Configured and maintained Azure Pipelines and GitHub Actions to automate builds and deployments of ASP.NET Core Web API and React.js/Angular applications, replacing manual deployment steps." },
  { title: "Microsoft Azure", text: "Deployed and configured ERP applications on Azure (App Services, Azure SQL, Storage), managing environment configuration for consistent releases across environments." },
  { title: "Containers with Docker", text: "Used Docker to package applications for consistent builds and deployments." },
  { title: "Source Control & Releases", text: "Managed source control with Git and GitHub and supported repeatable Git-based release workflows." },
  { title: "Production Support", text: "Troubleshot, diagnosed and resolved production and deployment issues while maintaining existing modules with minimal downtime." },
  { title: "Agile Collaboration", text: "Worked with developers, QA and cross-functional teams on sprint planning, requirements gathering and on-schedule releases; participated in code reviews." },
];

export const EXPERIENCE = [
  {
    role: "Associate DevOps Engineer",
    org: "Infora Tech",
    meta: "1 Year Contract · Colombo District, Sri Lanka · Remote",
    period: "Sep 2025 — Aug 2026",
    current: true,
    points: [
      "Configured and maintained CI/CD pipelines using Azure Pipelines and GitHub Actions to automate builds and deployments of ASP.NET Core Web API and React.js/Angular applications for ERP modules.",
      "Deployed and configured ERP applications on Microsoft Azure, managing environment configuration to keep releases consistent across environments.",
      "Automated build and release workflows to replace manual deployment steps, enabling repeatable, reliable releases.",
      "Managed source control with Git and GitHub, and used Docker to package applications for consistent builds and deployments.",
      "Troubleshot, diagnosed and resolved production and deployment issues, maintaining existing modules with minimal downtime.",
      "Partnered with developers, QA and cross-functional teams in an Agile/Scrum environment: sprint planning, requirements gathering and on-schedule delivery of releases.",
      "Participated in code reviews and helped enforce development standards, reducing recurring defects flagged in QA.",
      "Supported ERP modules built on ASP.NET Core, React.js/TypeScript, Angular and SQL Server, including query and stored procedure optimization for high-volume reporting screens.",
    ],
  },
  {
    role: "Associate Software Engineer",
    org: "Titum",
    meta: "Colombo, Sri Lanka · On-site",
    period: "Nov 2023 — Sep 2025",
    points: [
      "Developed and maintained scalable back-end Web APIs for an ERP system using ASP.NET Core/C#, following Clean Architecture across Domain, Application and Infrastructure layers.",
      "Built responsive front-end interfaces with React.js and TypeScript, improving usability across core ERP workflows.",
      "Designed and optimized queries, stored procedures and schemas in Microsoft SQL Server to support growing transaction volumes.",
      "Integrated RESTful APIs end to end between front-end and back-end systems.",
      "Deployed and managed applications on Microsoft Azure (App Services, Azure SQL, Storage).",
      "Contributed to CI/CD pipelines using GitHub Actions and Azure DevOps, streamlining release cycles and reducing manual deployment steps.",
    ],
  },
  {
    role: "Software Engineer Intern",
    org: "Titum",
    meta: "",
    period: "May 2023 — Oct 2023",
    points: [
      "Developed modular React.js components integrated with ASP.NET Web APIs.",
      "Assisted in debugging and optimizing ASP.NET applications.",
      "Performed functional and integration testing to ensure application reliability.",
    ],
  },
];

/* Projects come from the existing portfolio (not listed in the resume). */
export const PROJECTS = [
  {
    name: "HLChitFund",
    subtitle: "Chit Fund Management System",
    stack: ["Angular 21", ".NET 8", "SQL Server", "JWT"],
    repo: "https://github.com/alasaneeth/chit-fund-tracker",
    points: [
      "Full-stack build across 9 sprints: Clean Architecture backend, zoneless Angular frontend.",
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
  { group: "CI/CD & DevOps", items: ["Azure DevOps", "Azure Pipelines", "GitHub Actions", "CI/CD", "Git", "GitHub", "Docker"] },
  { group: "Microsoft Azure", items: ["Azure App Services", "Azure SQL", "Azure Storage"] },
  { group: "Methodologies", items: ["Agile/Scrum", "Code Reviews", "Peer Mentoring", "JIRA", "Azure Boards"] },
  { group: "Back-End", items: ["C#", ".NET Framework", ".NET Core", "ASP.NET Core Web API", "ASP.NET Core MVC", "Entity Framework Core", "ADO.NET", "Windows Services", "Minimal APIs"] },
  { group: "Front-End", items: ["React.js", "TypeScript", "JavaScript", "Angular", "RxJS", "Redux Toolkit", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"] },
  { group: "Databases", items: ["Microsoft SQL Server", "T-SQL", "Stored Procedures", "Query Optimization", "PostgreSQL"] },
  { group: "Testing", items: ["xUnit", "Moq", "FluentAssertions", "WebApplicationFactory", "Jasmine/Karma", "Jest", "Cypress", "Playwright", "Postman/Newman"] },
  { group: "Architecture & Security", items: ["Clean Architecture", "SOLID", "CQRS with MediatR", "RESTful API Design", "Repository/Factory/Singleton", "DTO/AutoMapper", "JWT Authentication", "ASP.NET Core Identity", "Role-Based Authorization"] },
  { group: "Domain", items: ["ERP: Inventory, Production, Sales & Billing, Payroll", "SAP"] },
];

/* Resume lists no certifications. Add entries here and the section appears automatically:
   { name: "Certification name", issuer: "Issuer", year: "2026", url: "https://..." } */
export const CERTIFICATIONS = [];

export const EDUCATION = [
  { deg: "BEng (Hons), Computer Software Engineering", school: "London Metropolitan University", year: "2024" },
  { deg: "HND, Software Development", school: "Buckinghamshire New University", year: "2023" },
];
