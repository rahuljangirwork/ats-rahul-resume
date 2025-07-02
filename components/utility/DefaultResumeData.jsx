const DefaultResumeData = {
  /* --------------------------- basic profile --------------------------- */
  name: "Rahul Jangir",
  position: "Senior Software Developer / Systems Architect",
  contactInformation: "9783351443",
  email: "rahuljangir.works@gmail.com",
  address: "Pune, Maharashtra",
  profilePicture: "",

  /* social / portfolio */
  socialMedia: [
    { socialMedia: "Portfolio", link: "www.rahuljangir.work" },
    { socialMedia: "GitHub", link: "www.github.com/rahuljangirwork" },
    { socialMedia: "LinkedIn", link: "www.linkedin.com/in/rahuljangirwork" }
  ],

  /* professional headline */
  summary:
    "Over three years of experience in full-stack development and system architecture. Proficient in Angular, .NET MVC, Docker, and AWS cloud services, with hands-on experience in Supabase and Firebase for modern web apps. Known for automating workflows and improving resource allocation efficiency. Passionate about Linux systems, ethical hacking, and delivering scalable, maintainable solutions through strong technical and communication skills.",

  /* ------------------------------ education ---------------------------- */
  education: [
    {
      school: "Savitribai Phule Pune University",
      degree: "M.C.A.",
      startYear: "2020-08-01",
      endYear: "2022-10-01"
    },
    {
      school: "Shekhawati University, Sikar",
      degree: "B.C.A.",
      startYear: "2016-07-01",
      endYear: "2019-07-01"
    }
  ],

  /* --------------------------- work history --------------------------- */
  workExperience: [
    {
      company: "GetMy Solutions Pvt. Ltd.",
      position: "Senior Software Developer / Systems Architect",
      description:
        "Designed and deployed multiple backend services and dashboards with modern DevOps tools. Led Linux server setup, containerisation using Docker, and deployed cloud-ready stacks on AWS. Delivered a PHP-based high-traffic resource allocation tool and automated key reporting processes.",
      keyAchievements:
        "Virtualised infra with Docker & XRDP on AWS\n" +
        "Built PHP tool for high-traffic resource allocation\n" +
        "Automated report workflows, saving 20% manual time",
      startYear: "2023-08-01",
      endYear: "Present"
    },
    {
      company: "Oneroof Technologies LLP",
      position: "Junior Software Developer",
      description:
        "Developed Angular 13 UIs for policy and claims management integrated with .NET MVC backends. Improved legacy components and wrote data-access layers in C# for SQL Server-based systems.",
      keyAchievements:
        "Developed Angular 13 frontend\n" +
        ".NET MVC backend and C# DAL\n" +
        "Optimized legacy pages and ensured smooth integration",
      startYear: "2022-06-01",
      endYear: "2023-03-01"
    }
  ],

  /* --------------------------- projects ------------------------------- */
  projects: [
    {
      name: "Vehicle Monitoring & Control System",
      description:
        "A complete software suite for real-time vehicle monitoring and diagnostics, tailored for fleet management and logistics companies. Built using Angular 18 for the front end, MQTT protocol for telemetry, and a .NET backend for API and data services.",
      link: "",
      keyAchievements:
        "Real-time vehicle data via MQTT\nAngular 18 frontend with dynamic maps\n. NET-based telemetry & rule engine\nFleet health and usage reporting dashboard",
      startYear: "2024-02-01",
      endYear: "2025-01-01"
    },
    {
      name: "AI-Powered Job Portal Platform",
      description:
        "An intelligent job portal that matches candidates and job descriptions using generative AI. Built using Gemini API for AI analysis, React + Next.js for frontend, and PHP backend for user and job management.",
      link: "",
      keyAchievements:
        "Used Google Gemini API for semantic job matching\nAI-assisted resume analysis and ranking\nResponsive UI built with React and Next.js\nBackend with PHP and MySQL",
      startYear: "2025-02-17",
      endYear: "2025-08-01"
    },
    // {
    //   name: "LLM-Powered Assistant Platform",
    //   description:
    //     "A web-based UI that integrates local LLMs (like Ollama) to enable natural language interaction and chat memory for internal tools and documentation.",
    //   link: "",
    //   keyAchievements:
    //     "Integrated Ollama for on-device LLM inference\nThreaded chat interface with chat memory\nSupport for Markdown, JSON output, and prompts\nBuilt with React and Supabase",
    //   startYear: "2024-01-01",
    //   endYear: "2024-04-01"
    // },
    // {
    //   name: "Unified Company Operations Suite",
    //   description:
    //     "An all-in-one internal system designed to manage tasks, employee leave, billing, and approvals. Built using Angular and .NET MVC with Supabase for backend services.",
    //   link: "",
    //   keyAchievements:
    //     "Modular task, leave, and billing management\nRole-based access and audit logging\nIntegrated dashboard for HR and Finance\nDeployed in production across departments",
    //   startYear: "2023-01-01",
    //   endYear: "2023-07-01"
    // }
  
  ],
  

  /* ---------------------------- skills -------------------------------- */
  skills: [
    {
      title: "Technical Skills",
      skills: [
        "Angular 14", "React", ".NET MVC", "C#", "Docker", "AWS", "Firebase", "Supabase", "Linux (RHEL, Debian)"
      ]
    },
    {
      title: "Soft Skills",
      skills: ["Team Leadership", "Problem-solving", "Communication"]
    },
    {
      title: "Extras",
      skills: [
        "Data recovery tooling", "System & Network Services", "Ethical Hacking (Learning)"
      ]
    }
  ],

  /* -------------------------- other sections -------------------------- */
  languages: ["English", "Hindi"],
  certifications: [
    "AWS Certified Solutions Architect – Associate",
    "Red Hat Certified System Administrator (RHCSA)"
  ]
};

export default DefaultResumeData;
