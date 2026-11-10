export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  status: 'Live' | 'Active' | 'Complete';
  featured: boolean;
  bannerImage: string;
  description: string;
  longDescription: string;
  liveUrl: string;
  githubClientUrl: string;
  techStack: {
    name: string;
    category: 'frontend' | 'backend' | 'database' | 'tool' | 'library';
  }[];
  highlights: string[];
  challenges: {
    title: string;
    problem: string;
    solution: string;
  }[];
  futurePlans: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    highlight?: boolean;
    icon?: string;
  }[];
}

export interface Experience {
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  affiliation?: string;
  period: string;
  result: string;
  location: string;
  highlights: string[];
}

export const personalInfo = {
  name: "MD. SHAHIL",
  preferredName: "Shahil",
  designation: "Web Developer",
  roleHeadline: "React • Next.js • TypeScript",
  location: "Rajshahi, Bangladesh",
  timezone: "Asia/Dhaka",
  utcOffset: "UTC+6",
  email: "personalshahil69@gmail.com",
  phone: "+8801303723701",
  whatsapp: "+8801303723701",
  whatsappUrl: "https://wa.me/8801303723701?text=Hi%20Shahil,%20I%20came%20across%20your%20portfolio!",
  resumeUrl: "/MD_Shahil_Resume.pdf",
  profileImage: "/profile.jpg",
  avatarAlt: "MD. Shahil, Web Developer",
  availability: "Available for full-time and freelance roles",
  bioIntro: "I'm a web developer from Rajshahi, Bangladesh. I build clean, reliable websites and web applications using React, Next.js, and TypeScript.",
  bioNarrative: [
    "I build web applications using React, Next.js, and TypeScript. My focus is on straightforward architecture, readable code, and interfaces that feel fast and natural to use.",
    "Before programming full-time, I studied Management at Rajshahi College, tutored school students, and worked as a freelance writer. Teaching taught me how to explain complex ideas in plain words. Writing taught me to edit ruthlessly and avoid unnecessary jargon. Both habits still guide how I structure code, document features, and collaborate with teams.",
    "I enjoy projects where small details make a genuine difference — whether that means encrypting messages client-side for privacy, keeping search instant across hundreds of records, or making sure an app works smoothly on an older phone with a slow connection."
  ],
  socialLinks: {
    github: "https://github.com/srpranto",
    linkedin: "https://www.linkedin.com/in/md-shahil/",
    twitter: "https://x.com/sahilrahman69",
    facebook: "https://www.facebook.com/sahilrahmanpranto69",
    instagram: "https://www.instagram.com/sahil_rahman_pranto/"
  },
  hobbies: [
    { title: "Books & Essays", desc: "Reading about software design, history, and non-fiction essays.", icon: "book" },
    { title: "Cricket", desc: "Playing weekend matches and following test cricket.", icon: "activity" },
    { title: "Writing & Mentoring", desc: "Writing web tutorials and helping peers learn web development.", icon: "pen-tool" },
    { title: "Tools & Open Source", desc: "Exploring new web APIs, small libraries, and developer tools.", icon: "compass" },
    { title: "Travel", desc: "Exploring new towns and river routes across Bangladesh.", icon: "gamepad-2" }
  ],
  crontabRoutines: [
    { cron: "0 22 * * *", task: "review pull requests & code updates on GitHub" },
    { cron: "*/30 * * * *", task: "build features on Luna & HateyHat (Next.js, TypeScript)" },
    { cron: "0 18 * * 0", task: "write technical notes, tutorials, and documentation" },
    { cron: "0 10 * * 1-5", task: "explore frontend architecture, web standards, and UI design" }
  ]
};

export const developerSecrets = [
  "I read the source code whenever the documentation runs out.",
  "TypeScript compiler errors can feel strict, but they catch real bugs before production.",
  "I explain bugs out loud to an empty room. It works more often than it should.",
  "Most good debugging breakthroughs happen during a walk, not while staring at the screen.",
  "If a complex feature works on the very first try, I get suspicious and write a test.",
  "Clean code is usually about what you choose to leave out.",
  "Testing on a budget phone with a slow mobile connection keeps your design honest.",
  "Good tea and focus music make hard problems manageable.",
  "Readable code always beats clever code."
];

export const researchSheetItems = [
  {
    id: "01",
    label: "What I Build",
    question: "What kind of web applications do you build?",
    answer: "Frontends and full-stack web applications with React, Next.js, and TypeScript. I spend most of my time making interfaces responsive, keeping state management simple, and connecting reliable APIs."
  },
  {
    id: "02",
    label: "Featured Project",
    question: "What is your proudest project?",
    answer: "Luna. A private chat app where all encryption runs inside the browser with the Web Crypto API, and chat history lives in an in-memory database. Once you close the tab, no trace remains on any server."
  },
  {
    id: "03",
    label: "Core Principles",
    question: "What values guide your work?",
    answer: "Write code that others can read easily. Make interfaces fast and predictable. Test on real phones and slow connections so the software works well for everyone."
  },
  {
    id: "04",
    label: "Background",
    question: "How did your previous work lead to programming?",
    answer: "Studying management gave me a structured way to think about systems, processes, and time. Writing and tutoring taught me to communicate clearly. Those habits transfer directly to writing maintainable code."
  },
  {
    id: "05",
    label: "Currently Exploring",
    question: "What are you currently exploring?",
    answer: "Deepening my backend knowledge with Node.js and Express, real-time communication with WebSockets, and database query optimization."
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Building fast, accessible, and responsive user interfaces for modern browsers.",
    skills: [
      { name: "React", level: "Proficient", highlight: true },
      { name: "Next.js", level: "Proficient", highlight: true },
      { name: "TypeScript", level: "Proficient", highlight: true },
      { name: "JavaScript (ES6+)", level: "Advanced", highlight: true },
      { name: "Tailwind CSS", level: "Advanced", highlight: true },
      { name: "HTML5 & Semantic Web", level: "Advanced" },
      { name: "CSS3 / Modern CSS", level: "Advanced" },
      { name: "shadcn/ui & Radix UI", level: "Proficient" }
    ]
  },
  {
    title: "Backend & APIs",
    description: "Writing clean server routes, handling data flow, and integrating RESTful services.",
    skills: [
      { name: "Node.js", level: "Working Knowledge", highlight: true },
      { name: "Express.js", level: "Working Knowledge", highlight: true },
      { name: "RESTful APIs", level: "Proficient", highlight: true },
      { name: "Server-Side Rendering", level: "Proficient" },
      { name: "Static Site Generation", level: "Proficient" },
      { name: "WebSockets", level: "Foundational" }
    ]
  },
  {
    title: "Data & Storage",
    description: "Managing databases, in-browser storage, and client-side cryptographic keys.",
    skills: [
      { name: "MongoDB Atlas", level: "Proficient", highlight: true },
      { name: "Better Auth", level: "Proficient", highlight: true },
      { name: "Web Crypto API", level: "Working Knowledge" },
      { name: "Local Storage & IndexedDB", level: "Advanced" },
      { name: "PGlite (Wasm Postgres)", level: "Working Knowledge" }
    ]
  },
  {
    title: "Tools & Workflow",
    description: "Version control, automated deployments, and development tooling.",
    skills: [
      { name: "Git & GitHub", level: "Proficient", highlight: true },
      { name: "GitHub Actions", level: "Working Knowledge", highlight: true },
      { name: "Vercel", level: "Advanced", highlight: true },
      { name: "npm / pnpm", level: "Proficient" },
      { name: "VS Code & DevTools", level: "Advanced" },
      { name: "Postman", level: "Proficient" }
    ]
  }
];

export const educationHistory: Education[] = [
  {
    degree: "BBA (Honours) in Management",
    institution: "Rajshahi College",
    affiliation: "National University of Bangladesh",
    period: "2019 — 2024",
    result: "CGPA: 3.00",
    location: "Rajshahi, Bangladesh",
    highlights: [
      "Studied business operations, organizational management, and accounting.",
      "Developed habits in structured planning, documentation, and coordination."
    ]
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Varendra College, Rajshahi",
    affiliation: "Rajshahi Board",
    period: "2017 — 2019",
    result: "GPA: 4.00",
    location: "Rajshahi, Bangladesh",
    highlights: [
      "Completed higher secondary studies in Humanities with distinction.",
      "Participated in campus debate, sports, and cultural clubs."
    ]
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Rajshahi Bholanath Bisweswar Hindu Academy",
    affiliation: "Rajshahi Board",
    period: "2015 — 2017",
    result: "GPA: 3.75",
    location: "Rajshahi, Bangladesh",
    highlights: [
      "Completed secondary education with focused studies in Humanities.",
      "Developed an early interest in writing and computing."
    ]
  }
];

export const experienceHistory: Experience[] = [
  {
    role: "Freelance Web Content Writer",
    company: "Freelance",
    type: "Contract / Remote",
    period: "2021 — 2023",
    location: "Remote",
    description: "Researched and wrote articles, tutorials, and documentation explaining web technologies and digital tools for remote clients.",
    achievements: [
      "Wrote over 100 tutorials and articles breaking down technical topics into clear, readable language.",
      "Structured content for readability, clear headings, and search optimization.",
      "Managed deadlines independently and collaborated with remote editors."
    ],
    skills: ["Technical Writing", "SEO & Content Structure", "Research", "Remote Collaboration"]
  },
  {
    role: "Private Tutor",
    company: "Self-Employed",
    type: "Part-time",
    period: "2020 — 2023",
    location: "Rajshahi, Bangladesh",
    description: "Mentored secondary and higher secondary students in academic subjects, focusing on clear problem-solving and foundational understanding.",
    achievements: [
      "Helped dozens of students build confidence and improve their exam results.",
      "Adapted explanations to each student's learning style and pace.",
      "Learned to explain complex, multi-step ideas in simple terms."
    ],
    skills: ["Mentorship", "Communication", "Curriculum Planning", "Active Listening"]
  }
];

export const projectsData: Project[] = [
  {
    slug: "luna",
    title: "Luna",
    tagline: "Private chat with client-side encryption and in-memory storage",
    category: "Full Stack Web App",
    year: "2024",
    status: "Live",
    featured: true,
    bannerImage: "/projects/luna-live.png",
    description: "An anonymous messaging app that encrypts messages in the browser using the Web Crypto API. Chat history is stored in an in-memory database with PGlite, leaving zero traces on the server.",
    longDescription: "Luna was built to explore privacy-first web design. Instead of relying on user accounts and centralized database logs, it creates temporary encryption keys in the browser session. Messages are encrypted before leaving the device and decrypted only in local memory. Once you close the tab, all local data is immediately wiped.",
    liveUrl: "https://luna-ggwp.vercel.app/",
    githubClientUrl: "https://github.com/srpranto/Luna",
    techStack: [
      { name: "Next.js 14", category: "frontend" },
      { name: "TypeScript", category: "frontend" },
      { name: "Tailwind CSS", category: "frontend" },
      { name: "Web Crypto API", category: "library" },
      { name: "Web Audio API", category: "library" },
      { name: "PGlite (Wasm)", category: "database" },
      { name: "Vercel", category: "tool" }
    ],
    highlights: [
      "End-to-end encryption performed entirely in the browser with zero plain-text data sent across the network.",
      "In-memory SQL database powered by PGlite Wasm for fast query filtering without writing to disk.",
      "Synthesized audio feedback using the Web Audio API for message delivery and room actions.",
      "Clean, distraction-free interface tested for fast keyboard navigation."
    ],
    challenges: [
      {
        title: "Client-side Key Exchange",
        problem: "Safely exchanging encryption keys between two anonymous participants without requiring user accounts or SMS verification.",
        solution: "Used the native Web Crypto API with Elliptic-curve Diffie–Hellman (ECDH) to generate ephemeral key pairs in the browser, exchanging public fingerprints through single-use room tokens."
      },
      {
        title: "Memory Persistence without Leaving Traces",
        problem: "Managing active chat history smoothly without leaving artifacts in localStorage after a session ends.",
        solution: "Ran PGlite entirely in browser memory and added cleanup triggers on window unload and heartbeat timeouts."
      },
      {
        title: "Audio Feedback on Mobile Browsers",
        problem: "Mobile browsers restrict Web Audio playback before an explicit user interaction.",
        solution: "Created an audio singleton that unlocks the AudioContext on the user's first touch, with silent fallbacks if audio is blocked."
      }
    ],
    futurePlans: [
      "Add voice-note encryption over WebRTC data channels for peer-to-peer audio.",
      "Add disappearing file sharing with automatic memory wipe.",
      "Support multi-device pairing using temporary QR codes."
    ]
  },
  {
    slug: "book-vibe",
    title: "Book Vibe",
    tagline: "Book discovery journal and reading shelf manager",
    category: "Web Application",
    year: "2024",
    status: "Live",
    featured: true,
    bannerImage: "/projects/book-vibe-live.png",
    description: "A reading companion and personal book journal. It connects to the Open Library API to search literature, organize custom shelves, and track personal reading notes with local caching.",
    longDescription: "Book Vibe gives readers a clean, uncluttered place to search for books, group them into shelves ('Want to Read', 'Currently Reading', 'Finished'), and take personal notes. It connects to the public Open Library API with smart client-side caching so searches and shelf updates feel immediate.",
    liveUrl: "https://book-vibe-shahil.vercel.app/",
    githubClientUrl: "https://github.com/srpranto/book-vibe",
    techStack: [
      { name: "Next.js", category: "frontend" },
      { name: "React", category: "frontend" },
      { name: "TypeScript", category: "frontend" },
      { name: "Tailwind CSS", category: "frontend" },
      { name: "Open Library API", category: "backend" },
      { name: "Local Storage", category: "database" },
      { name: "Vercel", category: "tool" }
    ],
    highlights: [
      "Fast book search with debounced queries and fallback cover image resolution.",
      "Three-tier reading shelf system with instant optimistic state transitions.",
      "Reading progress statistics showing finished pages, monthly totals, and completion rates.",
      "Offline caching in browser storage so saved shelves load without network latency."
    ],
    challenges: [
      {
        title: "Handling Variable API Responses",
        problem: "The Open Library API returns inconsistent cover image formats and occasional missing fields across older editions.",
        solution: "Built a TypeScript normalization layer with default fallbacks and an in-memory cache to keep the interface fast and consistent."
      },
      {
        title: "Smooth Shelf Reordering",
        problem: "Moving books between shelves caused abrupt layout jumps when items entered or left the grid.",
        solution: "Used CSS Grid with container transitions and optimistic React state updates for smooth 60fps transitions."
      }
    ],
    futurePlans: [
      "Add Google Books API as an automatic fallback when Open Library covers are missing.",
      "Add annual reading challenge charts and reading retrospectives.",
      "Support cloud sync with MongoDB Atlas and Better Auth."
    ]
  },
  {
    slug: "countries-explorer",
    title: "Countries Explorer",
    tagline: "Fast country atlas and travel wishlist planner",
    category: "Frontend Web Application",
    year: "2024",
    status: "Live",
    featured: true,
    bannerImage: "/projects/countries-explorer-live.png",
    description: "An interactive explorer for 250+ countries with instant search, region filtering, neighbor border navigation, and offline travel wishlists.",
    longDescription: "Countries Explorer turns geographic data into an easy-to-browse digital atlas. Users can filter 250+ countries by continent, language, and currency, jump directly between shared land borders, and save favorite destinations to a local wishlist.",
    liveUrl: "https://countriesexplorer-io.vercel.app/",
    githubClientUrl: "https://github.com/srpranto/countries-explorer-react-app",
    techStack: [
      { name: "React 19", category: "frontend" },
      { name: "TypeScript", category: "frontend" },
      { name: "Vite", category: "tool" },
      { name: "Tailwind CSS", category: "frontend" },
      { name: "REST Countries API", category: "backend" },
      { name: "Browser Storage", category: "database" }
    ],
    highlights: [
      "Fast client-side filtering across 250+ countries with instant search feedback.",
      "Border country navigation: click neighboring nations to jump directly to their statistics.",
      "Personal travel wishlist saved locally in browser storage.",
      "Responsive layout tested for smooth scrolling on both desktop and mobile."
    ],
    challenges: [
      {
        title: "Border Country Code Resolution",
        problem: "The API provides bordering nations as 3-letter alpha codes (e.g., 'BGD', 'IND') rather than readable names.",
        solution: "Created an in-memory lookup map on initial data load to resolve alpha codes to country common names instantly."
      },
      {
        title: "Rendering Flag Images Smoothly",
        problem: "Displaying 250 flag images at once caused stutter during fast scrolling on mobile devices.",
        solution: "Implemented lazy loading with intersection observers and fixed aspect-ratio placeholders to prevent layout shift."
      }
    ],
    futurePlans: [
      "Add interactive Leaflet and OpenStreetMap map views.",
      "Add live currency exchange rate conversions against BDT and USD.",
      "Display capital city weather forecasts via OpenWeatherMap."
    ]
  },
  {
    slug: "bazar-dor",
    title: "Bazar Dor",
    tagline: "Daily commodity market price tracker for Bangladesh",
    category: "Full Stack Web App",
    year: "2024",
    status: "Live",
    featured: true,
    bannerImage: "/projects/bazar-dor-live.png",
    description: "A localized market price tracker that helps shoppers in Bangladesh monitor daily grocery prices, compare percentage shifts, and plan shopping budgets with bilingual English and Bengali support.",
    longDescription: "Bazar Dor ('Market Price') provides daily price updates for essential groceries across local markets in Bangladesh. Shoppers can track categorized staples (rice, vegetables, meat, fish, oils), review 7-day and 30-day price trends, and calculate grocery lists with full bilingual English and Bengali typography.",
    liveUrl: "https://bazar-dor-io.vercel.app/",
    githubClientUrl: "https://github.com/srpranto/bazar-dor",
    techStack: [
      { name: "Next.js", category: "frontend" },
      { name: "TypeScript", category: "frontend" },
      { name: "Tailwind CSS", category: "frontend" },
      { name: "shadcn/ui", category: "frontend" },
      { name: "MongoDB Atlas", category: "database" },
      { name: "Recharts", category: "library" }
    ],
    highlights: [
      "Bilingual interface supporting both English and Bengali (বাংলা) typography.",
      "Visual indicators for 7-day and 30-day percentage price shifts.",
      "Daily shopping list budget calculator with instant totals.",
      "Market price breakdowns across major divisions in Bangladesh."
    ],
    challenges: [
      {
        title: "Bilingual Number Formatting",
        problem: "Displaying numbers accurately in Bengali digits (১, ২, ৩) and English Arabic digits while preserving exact mathematical calculations.",
        solution: "Wrote an internationalization utility with Intl.NumberFormat and custom digit mapping, keeping internal math strictly numeric."
      },
      {
        title: "Displaying Price Graphs on Mobile",
        problem: "Rendering multi-series charts cleanly on smaller phone screens.",
        solution: "Designed responsive SVG micro-charts with touch-friendly scrubbing tooltips."
      }
    ],
    futurePlans: [
      "Add community price verification through photo receipt submissions.",
      "Support daily price notifications via SMS or WhatsApp.",
      "Add price alerts when staple commodity prices drop below a 14-day average."
    ]
  },
  {
    slug: "hateyhat",
    title: "HateyHat",
    tagline: "Community volunteer and local relief coordination platform",
    category: "Full Stack Web App",
    year: "2024",
    status: "Live",
    featured: true,
    bannerImage: "/projects/hateyhat-live.png",
    description: "A community platform connecting volunteers across Dhaka for neighborhood cleanups, winter clothing drives, and social welfare initiatives with real-time signups.",
    longDescription: "HateyHat ('Hand in Hand' / হাতে হাত) coordinates volunteers, student groups, and neighborhood committees for localized community drives across Dhaka. The platform enables event organizers to schedule relief activities, track registrations in real time, and publish clear expense updates.",
    liveUrl: "https://hateyhat-client.vercel.app/",
    githubClientUrl: "https://github.com/srpranto/hateyhat-client",
    techStack: [
      { name: "React 19", category: "frontend" },
      { name: "Next.js", category: "frontend" },
      { name: "TypeScript", category: "frontend" },
      { name: "Tailwind CSS", category: "frontend" },
      { name: "Node.js", category: "backend" },
      { name: "MongoDB Atlas", category: "database" },
      { name: "Vercel", category: "tool" }
    ],
    highlights: [
      "Neighborhood event discovery filtered by area across Dhaka.",
      "Real-time volunteer registration and milestone attendee trackers.",
      "Clear campaign documentation: receipts, volunteer rosters, and expense updates.",
      "Fast, mobile-first design built for volunteers using phones on the go."
    ],
    challenges: [
      {
        title: "Concurrent Volunteer Sign-ups",
        problem: "During popular relief drives, multiple volunteers attempted to claim limited slots at the same time.",
        solution: "Used atomic MongoDB update operations with conditional checks to lock registration slots safely."
      },
      {
        title: "Performance on Mobile Networks",
        problem: "Volunteers on slower 3G mobile connections experienced delays when viewing event guidelines.",
        solution: "Optimized image delivery, prefetched key routes, and cached event schedules locally."
      }
    ],
    futurePlans: [
      "Add SMS alerts for urgent relief drives and blood donations.",
      "Integrate local payment gateways for direct campaign donations.",
      "Add digital certificates for verified community volunteers."
    ]
  }
];

export interface OpenSourceRepo {
  name: string;
  repoUrl: string;
  description: string;
  stars?: number;
  forks?: number;
  language: string;
  category?: 'fullstack' | 'frontend' | 'backend';
  isOwner?: boolean;
}

export const openSourceData = {
  stats: {
    totalContributions: 842,
    streakDays: 34,
    publicRepos: 21,
    activeYears: "2024 — 2026"
  },
  repos: [
    {
      name: "srpranto/Luna",
      repoUrl: "https://github.com/srpranto/Luna",
      description: "Anonymous encrypted conversation app with Web Crypto API and in-memory PGlite database.",
      language: "TypeScript",
      category: "fullstack",
      isOwner: true
    },
    {
      name: "srpranto/hateyhat-client",
      repoUrl: "https://github.com/srpranto/hateyhat-client",
      description: "Community volunteer platform frontend for neighborhood welfare initiatives across Dhaka.",
      language: "TypeScript",
      category: "frontend",
      isOwner: true
    },
    {
      name: "srpranto/hateyhat-server",
      repoUrl: "https://github.com/srpranto/hateyhat-server",
      description: "Backend REST API for HateyHat built with Node.js, Express, and MongoDB Atlas.",
      language: "TypeScript",
      category: "backend",
      isOwner: true
    },
    {
      name: "srpranto/bazar-dor",
      repoUrl: "https://github.com/srpranto/bazar-dor",
      description: "Daily grocery and commodity price tracker for Bangladesh with clean responsive layouts.",
      language: "TypeScript",
      category: "fullstack",
      isOwner: true
    },
    {
      name: "srpranto/fit-log",
      repoUrl: "https://github.com/srpranto/fit-log",
      description: "Dark-themed workout library and daily routine planner built with Next.js and Tailwind CSS.",
      language: "TypeScript",
      category: "fullstack",
      isOwner: true
    },
    {
      name: "srpranto/devstack",
      repoUrl: "https://github.com/srpranto/devstack",
      description: "Interactive tech stack builder and tool explorer with ratings and difficulty metrics.",
      language: "TypeScript",
      category: "frontend",
      isOwner: true
    },
    {
      name: "srpranto/book-vibe",
      repoUrl: "https://github.com/srpranto/book-vibe",
      description: "Book discovery journal and reading shelf manager powered by the Open Library API.",
      language: "TypeScript",
      category: "frontend",
      isOwner: true
    },
    {
      name: "srpranto/countries-explorer-react-app",
      repoUrl: "https://github.com/srpranto/countries-explorer-react-app",
      description: "Interactive country atlas with real-time filtering, borders, and travel wishlist planning.",
      language: "TypeScript",
      category: "frontend",
      isOwner: true
    },
    {
      name: "srpranto/Bangla-_Trek",
      repoUrl: "https://github.com/srpranto/Bangla-_Trek",
      description: "Travel and trek exploration platform for outdoor locations with custom SCSS design.",
      language: "SCSS",
      category: "frontend",
      isOwner: true
    }
  ] as OpenSourceRepo[]
};
