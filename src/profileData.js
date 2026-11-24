// Professional history verified against LinkedIn on November 23, 2026.
export const profile = {
  name: "Ishtmeet Singh Arora",
  role: "Member of Technical Staff II",
  company: "Illumio",
  location: "San Francisco Bay Area",
  email: "ishtmeet.arora@gmail.com",
  github: "https://github.com/ishtmeetarora11",
  linkedin: "https://www.linkedin.com/in/ishtmeet-arora/",
  resume:
    "https://drive.google.com/file/d/1L5rtru1dOzu0rMLr8y53cNklWDTiYSGL/view?usp=drive_link"
};
export const experience = [
  {
    company: "Illumio",
    role: "Member of Technical Staff II",
    date: "Sep 2026 — Present",
    location: "Sunnyvale, CA",
    current: true,
    tags: [],
    highlights: []
  },
  {
    company: "Oracle",
    role: "Software Engineer 2",
    date: "Jul 2025 — Jun 2026",
    location: "Seattle, WA",
    tags: ["Java", "OCI", "Grafana", "React"],
    highlights: [
      "Built Java metrics emission for the Aries File System, powering Grafana dashboards and operational monitoring.",
      "Led the PostgreSQL Console migration from React to MAUI Redwood and contributed to AI-assisted root cause analysis."
    ]
  },
  {
    company: "University of Florida",
    role: "Full Stack Engineer · College of Education",
    date: "Oct 2024 — Jul 2025",
    location: "Florida · Remote",
    tags: ["React", "Python", "SQL", "MongoDB", "GCP"],
    highlights: [
      "Built Storiza’s React frontend and backend services for adaptive K–3 storytelling in Dr. Walter Leite’s Virtual Learning Lab.",
      "Connected personalized stories to reading levels and keywords, with GCP Cloud Monitoring supporting 99.9% uptime."
    ]
  },
  {
    company: "Aerial Tech AG",
    role: "Software Engineer Apprenticeship",
    date: "Jan 2025 — Apr 2025",
    location: "Switzerland · Remote",
    tags: ["React", "Leaflet", "JavaScript"],
    highlights: [
      "Engineered area-of-interest tools with polygon drawing, live vertex editing, and a sidebar management panel for Sky Radar’s airspace maps."
    ]
  },
  {
    company: "University of Florida",
    role: "Graduate Teaching Assistant",
    date: "Sep 2024 — Dec 2024",
    location: "Gainesville, FL",
    tags: ["Software engineering"],
    highlights: [
      "Teaching assistant for CEN5035, the master’s-level Software Engineering course."
    ]
  },
  {
    company: "University of Florida",
    role: "Full Stack Engineer · Dr. Kristy Boyer’s Lab",
    date: "Mar 2024 — Aug 2024",
    location: "Gainesville, FL",
    tags: ["Python", "JavaScript", "React", "Java"],
    highlights: [
      "Developed real-time sports visualizations and game-based learning agents.",
      "Improved Bluetooth error handling, sensor synchronization, and background connectivity monitoring for Karoo and ConneXX."
    ]
  },
  {
    company: "ZopSmart",
    role: "Software Engineer",
    date: "Aug 2021 — Jul 2023",
    location: "Bengaluru, India",
    tags: ["Java", "Redis", "OpenTelemetry", "Spring"],
    highlights: [
      "Built Redis and tracing modules for Rocket, a Java microservices framework, including health checks and Zipkin / New Relic exporters.",
      "Added HTTP circuit breakers, SFTP support, and OpenAPI / Swagger generation using JAX-RS."
    ]
  },
  {
    company: "ZopSmart",
    role: "Software Engineer Intern",
    date: "Feb 2021 — Jul 2021",
    location: "Bengaluru, India",
    tags: ["Docker", "Kubernetes", "GCP", "GitHub Actions"],
    highlights: [
      "Helped migrate a compiler platform from a monolith to 13 microservices and reduced Java/C++ compilation time by 40%.",
      "Added multi-file Java support and CI/CD; used JMeter and Minikube to size a coding platform for 2,000+ students."
    ]
  }
];
export const projects = [
  {
    name: "The Redactor",
    category: "NLP / PRIVACY",
    description:
      "Detect and redact sensitive entities in text while preserving document structure. Named-entity recognition meets practical data protection.",
    stack: ["Python", "spaCy", "Transformers"],
    url: "https://github.com/ishtmeetarora11/The-Redactor",
    command: "redact --names --dates --phones",
    code: [
      "input  → unstructured documents",
      "detect → entities + context",
      "output → redacted text + stats"
    ]
  },
  {
    name: "Incident Explorer",
    category: "DATA / VISUALIZATION",
    description:
      "Turn PDF incident reports into structured records, machine-learning clusters, and interactive views of patterns over time.",
    stack: ["Flask", "scikit-learn", "Bokeh"],
    url: "https://github.com/ishtmeetarora11/Incident-Data-Visualization",
    command: "pipeline.run(incident_reports)",
    code: [
      "extract → PDF records",
      "cluster → TF-IDF + KMeans",
      "explore → interactive charts"
    ]
  },
  {
    name: "File Transfer Protocol",
    category: "SYSTEMS / NETWORKING",
    description:
      "A Java client and server for file uploads and retrieval, with chunked transfers that explore the fundamentals of network programming.",
    stack: ["Java", "Networking", "Client / server"],
    url: "https://github.com/ishtmeetarora11/File-transfer-protocol",
    command: "ftpclient > upload artifact.zip",
    code: [
      "connect → client / server",
      "stream  → 1 KB chunks",
      "control → get / upload / exit"
    ]
  }
];

// Education dates and distinctions from the existing portfolio; master's GPA
// reflects the newer LinkedIn profile.
export const education = [
  {
    id: "florida",
    name: "University of Florida",
    location: "Gainesville, Florida",
    logo: "university-florida.webp",
    level: "GRADUATE",
    dates: "2023 — 2025",
    abbreviation: "M.S.",
    degree: "Master of Science",
    gradeLabel: "GPA",
    grade: "3.86",
    gradeScale: "4.00",
    highlights: [
      "Graduate research",
      "Software Engineering teaching assistant",
      "Gator AI Hackathon finalist"
    ],
    note: "Research. Teaching. Applied learning."
  },
  {
    id: "jaypee",
    name: "Jaypee Institute of Information Technology",
    location: "Noida, India",
    logo: "jiit.webp",
    level: "UNDERGRADUATE",
    dates: "2018 — 2022",
    abbreviation: "B.Tech.",
    degree: "Bachelor of Technology · Honors",
    gradeLabel: "CGPA",
    grade: "8.3",
    gradeScale: "10",
    highlights: [
      "Graduated with honors",
      "Ranked in the top 10% of the program"
    ],
    note: "Where my engineering journey began."
  }
];
