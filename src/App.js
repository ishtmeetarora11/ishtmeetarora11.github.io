import React, {useEffect, useRef, useState} from "react";
import NetworkBackground from "./NetworkBackground";
import {profile, experience, projects} from "./profileData";
import "./App.scss";

const stacks = [
  [
    "01",
    "Backend & systems",
    ["Java", "Python", "C++", "Spring", "REST APIs", "Microservices"]
  ],
  [
    "02",
    "Cloud & infrastructure",
    ["OCI", "GCP", "AWS", "Docker", "Kubernetes", "GitHub Actions"]
  ],
  [
    "03",
    "Data & observability",
    ["SQL", "MongoDB", "Redis", "Grafana", "OpenTelemetry", "Zipkin"]
  ],
  [
    "04",
    "Interfaces & experiences",
    ["React", "TypeScript", "JavaScript", "Leaflet", "HTML", "CSS"]
  ]
];
const impact = [
  {
    label: "DEVELOPER INFRASTRUCTURE",
    company: "ZopSmart",
    title: "Reworking a compiler platform",
    description:
      "I helped evolve a compiler engine into 13 microservices. Added multi-file Java support, automated delivery, and validated cluster capacity for 2,000+ students.",
    metric: "40%",
    result: "faster Java / C++ compilation",
    flow: ["CODE", "CONTAINERS", "EXECUTION"],
    tags: ["Java", "Docker", "Kubernetes", "GCP"]
  },
  {
    label: "CLOUD OBSERVABILITY",
    company: "Oracle",
    title: "Observability for cloud services",
    description:
      "I built Java-based metrics emission for the Aries File System, powering Grafana dashboards and operational monitoring. Contributed to AI-assisted root cause analysis.",
    metric: "End to end",
    result: "from service metrics to operational insight",
    flow: ["SERVICES", "METRICS", "GRAFANA"],
    tags: ["Java", "OCI", "Grafana", "Observability"]
  },
  {
    label: "ADAPTIVE LEARNING",
    company: "University of Florida",
    title: "Building an adaptive learning platform",
    description:
      "I built the frontend and backend of Storiza, an adaptive literacy platform for K–3 students. Connected personalized storytelling to reading levels, keywords, and cloud monitoring.",
    metric: "99.9%",
    result: "uptime supported by GCP monitoring",
    flow: ["LEARNER", "STORY ENGINE", "FEEDBACK"],
    tags: ["React", "Python", "MongoDB", "GCP"]
  }
];
function Arrow({diagonal = false}) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d={diagonal ? "M5 19 19 5M5 5h14v14" : "M4 12h16m-6-6 6 6-6 6"} />
    </svg>
  );
}
function Job({job}) {
  return (
    <article className={`job ${job.current ? "current-job" : ""}`}>
      <div className="job-marker" />
      <div className="job-meta">
        <span>{job.date}</span>
        {job.current && <span className="current-badge">CURRENT</span>}
      </div>
      <div className="job-heading">
        <h3>{job.company}</h3>
        <span>{job.location}</span>
      </div>
      <h4>{job.role}</h4>
      {job.highlights.length > 0 && (
        <ul>
          {job.highlights.map(text => (
            <li key={text}>{text}</li>
          ))}
        </ul>
      )}
      {job.tags.length > 0 && (
        <div className="tags">
          {job.tags.map(tag => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      )}
    </article>
  );
}

const searchText = text =>
  text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
function App() {
  const [motion, setMotion] = useState(
    () => !window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches
  );
  const [enforced, setEnforced] = useState(true);
  const [breach, setBreach] = useState(false);
  const [selected, setSelected] = useState(33);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");
  const [query, setQuery] = useState("");
  const [scrollPercent, setScrollPercent] = useState(0);
  const menuButton = useRef(null),
    dialog = useRef(null);
  useEffect(() => {
    const key = event => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        if (dialog.current.open) dialog.current.close();
        else {
          setQuery("");
          dialog.current.showModal();
        }
      }
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        menuButton.current.focus();
      }
    };
    document.addEventListener("keydown", key);
    return () => document.removeEventListener("keydown", key);
  }, [menuOpen]);
  useEffect(() => {
    const update = () =>
      setScrollPercent(
        Math.min(
          100,
          Math.round(
            (window.scrollY /
              Math.max(
                1,
                document.documentElement.scrollHeight - window.innerHeight
              )) *
              100
          )
        )
      );
    window.addEventListener("scroll", update, {passive: true});
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyStatus("Copied. Let’s connect.");
    } catch (_) {
      setCopyStatus(
        "Select the email address to copy it, or use the email link."
      );
    }
  };
  const commands = [
    {name: "View selected work", meta: "WORK", href: "#work"},
    {name: "Explore experience", meta: "CAREER", href: "#experience"},
    {name: "Explore open-source projects", meta: "CODE", href: "#opensource"},
    {name: "View résumé", meta: "PDF ↗", href: profile.resume, external: true},
    {
      name: "Open LinkedIn",
      meta: "PROFILE ↗",
      href: profile.linkedin,
      external: true
    },
    {name: "Start a conversation", meta: "CONTACT", href: "#contact"}
  ];
  return (
    <div className="portfolio" data-motion={motion}>
      <NetworkBackground
        motion={motion}
        enforced={enforced}
        breach={breach}
        selected={selected}
        onSelect={setSelected}
      />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="header-inner shell">
          <a
            className="brand"
            href="#greeting"
            aria-label="Ishtmeet Singh Arora, home"
          >
            <span className="brand-mark">
              ia<span>_</span>
            </span>
            <span>
              ISHTMEET
              <br />
              <b>SINGH ARORA</b>
            </span>
          </a>
          <nav
            id="navigation"
            className={menuOpen ? "site-nav open" : "site-nav"}
            aria-label="Main navigation"
          >
            {[
              ["00", "About", "#about"],
              ["01", "Work", "#work"],
              ["02", "Experience", "#experience"],
              ["03", "Stack", "#skills"]
            ].map(([n, name, href]) => (
              <a key={name} href={href} onClick={() => setMenuOpen(false)}>
                <span>{n}</span>
                {name}
              </a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Let’s connect <Arrow diagonal />
            </a>
          </nav>
          <div className="header-tools">
            <button
              className="command-trigger"
              aria-label="Open command menu"
              onClick={() => {
                setQuery("");
                dialog.current.showModal();
              }}
            >
              ⌘ K
            </button>
            <button
              ref={menuButton}
              className="menu-toggle"
              aria-controls="navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
        <div
          className="reading-progress"
          style={{width: `${scrollPercent}%`}}
        />
      </header>
      <main id="main" tabIndex="-1">
        <section className="hero shell" id="greeting">
          <div className="hero-copy">
            <div className="hero-introduction">
              <img
                src={`${process.env.PUBLIC_URL}/portrait.webp`}
                alt="Ishtmeet Singh Arora"
                width="44"
                height="44"
              />
              <p className="hero-hello">Hi, I’m</p>
            </div>
            <h1>
              Ishtmeet
              <span className="surname">
                Singh Arora<span className="name-period">.</span>
              </span>
            </h1>
            <p className="hero-role">
              Software engineer. <span>Backend at heart.</span>
            </p>
            <p className="hero-description">
              I build backend systems and cloud software. My journey has taken
              me from developer tools at ZopSmart to cloud infrastructure at
              Oracle—and now Illumio.
            </p>
            <p className="current-role">
              <span className="status-light" />
              Currently{" "}
              <strong>
                {profile.role} at {profile.company}
              </strong>
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#work">
                See my work <Arrow />
              </a>
              <a
                className="button secondary"
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                View résumé <Arrow diagonal />
              </a>
            </div>
            <div className="hero-socials" aria-label="Find me online">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <Arrow diagonal />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn <Arrow diagonal />
              </a>
              <a href={`mailto:${profile.email}`}>
                Say hello <Arrow />
              </a>
            </div>
          </div>
          <div
            className="network-stage hero-network"
            aria-label="Interactive network illustration"
          >
            <p className="network-invitation">
              A few connections. Endless possibilities.
            </p>
            <span className="network-hint">
              MOVE YOUR CURSOR · CLICK A NODE · SCROLL TO EXPLORE
            </span>
          </div>
          <div className="hero-bottom">
            <a href="#about" className="scroll-hint">
              <span>↓</span>A LITTLE ABOUT ME
            </a>
            <button
              className="motion-toggle"
              aria-label={
                motion
                  ? "Pause background animation"
                  : "Play background animation"
              }
              onClick={() => setMotion(!motion)}
            >
              {motion ? "Ⅱ Pause motion" : "▷ Play motion"}
            </button>
          </div>
        </section>
        <section className="about-section shell" id="about">
          <div>
            <p className="eyebrow">BEHIND THE RÉSUMÉ</p>
            <h2>
              An engineer,
              <br />
              <span>always learning.</span>
            </h2>
          </div>
          <div className="about-copy">
            <p>
              My work spans compiler platforms, microservices, cloud
              observability, and learning tools. I’m most at home in the
              backend, and I’ve also built the interfaces that help people use
              those systems.
            </p>
            <p>
              Along the way, I earned my M.S. in Computer Science at the
              University of Florida, worked on research and education projects,
              and taught as a graduate teaching assistant. Today, I’m based in
              the Bay Area and work at Illumio.
            </p>
            <a className="text-link" href="#experience">
              Follow my journey <Arrow />
            </a>
          </div>
        </section>
        <section className="section shell" id="work">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span>01</span>SELECTED WORK
              </p>
              <h2>
                A few things
                <br />
                <span>I’ve worked on.</span>
              </h2>
            </div>
            <p className="section-description">
              Projects from my time at ZopSmart, Oracle, and the University of
              Florida—and the part I played in each.
            </p>
          </div>
          <div className="impact-grid">
            {impact.map((item, index) => (
              <article
                className={`impact-card impact-${index}`}
                key={item.title}
              >
                <div className="card-topline">
                  <span>{item.label}</span>
                  <span>0{index + 1} /</span>
                </div>
                <div className="architecture-flow" aria-hidden="true">
                  {item.flow.map((label, i) => (
                    <React.Fragment key={label}>
                      <div>
                        <span className="service-cube">
                          <i />
                          <i />
                          <i />
                        </span>
                        <span>{label}</span>
                      </div>
                      {i < 2 && (
                        <span className="flow-connector">
                          ·····<b>›</b>
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
                <p className="card-company">{item.company}</p>
                <h3>{item.title}</h3>
                <p className="card-description">{item.description}</p>
                <div className="card-metric">
                  <strong>{item.metric}</strong>
                  <span>{item.result}</span>
                </div>
                <div className="tags">
                  {item.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="section shell open-source" id="opensource">
          <div className="compact-heading">
            <div>
              <p className="eyebrow">PERSONAL PROJECTS</p>
              <h2>What I build to learn.</h2>
            </div>
            <a
              className="text-link"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore GitHub <Arrow diagonal />
            </a>
          </div>
          <div className="project-grid">
            {projects.map(project => (
              <article className="project-card" key={project.name}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-title"
                >
                  <span>{project.category}</span>
                  <h3>
                    {project.name}
                    <Arrow diagonal />
                  </h3>
                </a>
                <div className="code-preview" aria-hidden="true">
                  <p>
                    <span>$</span> {project.command}
                  </p>
                  {project.code.map(line => (
                    <div key={line}>{line}</div>
                  ))}
                </div>
                <p>{project.description}</p>
                <div className="tags">
                  {project.stack.map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
        <section
          className="background-note shell"
          aria-label="About the interactive background"
        >
          <details>
            <summary>
              <span>A little creative coding, too.</span>
              <span>
                Explore the background <b aria-hidden="true">+</b>
              </span>
            </summary>
            <p>
              A nod to zero-trust security. The network reshapes as you scroll;
              these controls let you explore how segmentation changes a
              simulated breach. All nodes and connections are synthetic.
            </p>
            <div
              className="network-stage"
              aria-label="Interactive synthetic network background"
            >
              <div className="scene-inspector">
                <span>SELECTED NODE</span>
                <strong>
                  {["svc", "data", "ops"][Math.floor(selected / 30)]}-
                  {String(selected + 1).padStart(2, "0")}
                </strong>
                <button
                  onClick={() => setSelected((selected + 11) % 90)}
                  aria-label="Inspect next network node"
                >
                  Next node <Arrow />
                </button>
              </div>
              <div className="network-controls">
                <div className="network-control-heading">
                  <span>BACKGROUND EXPERIMENT</span>
                  <span>CONCEPT SIMULATION</span>
                </div>
                <div className="control-row">
                  <button
                    className={
                      enforced ? "policy-button active" : "policy-button"
                    }
                    aria-pressed={enforced}
                    onClick={() => setEnforced(!enforced)}
                  >
                    <span className="policy-icon" aria-hidden="true">
                      ◇
                    </span>
                    Segmentation {enforced ? "on" : "off"}
                  </button>
                  <button
                    className="breach-button"
                    onClick={() => setBreach(!breach)}
                  >
                    {breach ? "↻ Reset" : "ϟ Simulate breach"}
                  </button>
                </div>
                <p
                  className={`network-status ${breach ? "has-event" : ""}`}
                  role="status"
                >
                  {breach
                    ? enforced
                      ? "Threat contained within one trust zone. Switch segmentation off to compare."
                      : "Lateral paths open. The simulated threat can reach every zone."
                    : "Click a node. Follow the connections. Scroll to transform the system."}
                </p>
              </div>
            </div>
          </details>
        </section>
        <section className="section shell experience-section" id="experience">
          <div className="experience-intro">
            <p className="eyebrow">
              <span>02</span>EXPERIENCE
            </p>
            <h2>
              My journey
              <br />
              <span>so far.</span>
            </h2>
            <p>
              From developer tooling to cloud infrastructure. Each chapter adds
              another layer to how I think about systems.
            </p>
            <a
              className="text-link"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              Full story on LinkedIn <Arrow diagonal />
            </a>
            <div className="career-path">
              <span>ZopSmart</span>
              <i>↗</i>
              <span>UF</span>
              <i>↗</i>
              <span>Oracle</span>
              <i>↗</i>
              <strong>Illumio</strong>
            </div>
          </div>
          <div className="timeline">
            {experience.slice(0, 3).map(job => (
              <Job key={job.company + job.role} job={job} />
            ))}
            <details className="earlier-experience">
              <summary>
                Earlier chapters <span>2021 — 2025</span>
                <b aria-hidden="true">+</b>
              </summary>
              {experience.slice(3).map(job => (
                <Job key={job.company + job.role} job={job} />
              ))}
            </details>
          </div>
        </section>
        <section className="section shell" id="skills">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span>03</span>SKILLS
              </p>
              <h2>
                Tools I’ve
                <br />
                <span>worked with.</span>
              </h2>
            </div>
            <p className="section-description">
              Across backend services, cloud infrastructure, data, and the
              occasional frontend.
            </p>
          </div>
          <div className="stack-grid">
            {stacks.map(([number, title, items]) => (
              <article className="stack-card" key={title}>
                <div>
                  <span>{number} /</span>
                  <h3>{title}</h3>
                </div>
                <div className="stack-items">
                  {items.map(item => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="education-strip">
            <span className="eyebrow">FOUNDATIONS</span>
            <div>
              <h3>University of Florida</h3>
              <p>
                M.S. Computer Science <span>3.86 / 4.00</span>
              </p>
            </div>
            <div>
              <h3>Jaypee Institute of Information Technology</h3>
              <p>
                B.Tech. Computer Science <span>8.3 / 10</span>
              </p>
            </div>
          </div>
        </section>
        <section className="contact-section shell" id="contact">
          <div className="contact-card">
            <div>
              <p className="eyebrow">
                <span>04</span>GET IN TOUCH
              </p>
              <h2>
                Have something
                <br />
                <span>in mind? Say hello.</span>
              </h2>
              <p>
                If my work resonates with you, I’d love to connect—about an
                engineering role, a project, or an interesting technical
                problem.
              </p>
            </div>
            <div className="contact-terminal">
              <div className="terminal-bar">
                <i />
                <i />
                <i />
                <span>connect.sh</span>
              </div>
              <div className="terminal-body">
                <p>
                  <span className="terminal-prompt">~ $</span> whoami
                </p>
                <p className="terminal-answer">
                  Ishtmeet Singh Arora
                  <br />
                  <span>Member of Technical Staff II @ Illumio</span>
                </p>
                <p>
                  <span className="terminal-prompt">~ $</span>{" "}
                  establish_connection
                </p>
                <a className="contact-email" href={`mailto:${profile.email}`}>
                  {profile.email}
                  <Arrow diagonal />
                </a>
                <button className="copy-email" onClick={copyEmail}>
                  [ copy email address ]
                </button>
                <p className="copy-status" role="status">
                  {copyStatus}
                </p>
                <div className="contact-links">
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn ↗
                  </a>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub ↗
                  </a>
                  <a
                    href={profile.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Résumé ↗
                  </a>
                </div>
                <p className="terminal-cursor" aria-hidden="true">
                  ~ $ <span>▊</span>
                </p>
              </div>
            </div>
          </div>
          <footer>
            <span>© {new Date().getFullYear()} ISHTMEET SINGH ARORA</span>
            <span>MADE BY ISHTMEET.</span>
            <a href="#greeting">BACK TO TOP ↑</a>
          </footer>
        </section>
      </main>
      <dialog
        className="command-dialog"
        aria-label="Navigate portfolio"
        ref={dialog}
      >
        <div className="command-title">
          <span>WHERE TO?</span>
          <button
            aria-label="Close command menu"
            onClick={() => dialog.current.close()}
          >
            Esc
          </button>
        </div>
        <input
          aria-label="Search portfolio sections"
          placeholder="Search work, experience, résumé…"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <div className="command-results">
          {commands
            .filter(command =>
              searchText(command.name).includes(searchText(query))
            )
            .map(command => (
              <a
                key={command.name}
                href={command.href}
                target={command.external ? "_blank" : undefined}
                rel={command.external ? "noopener noreferrer" : undefined}
                onClick={() => dialog.current.close()}
              >
                {command.name}
                <span>{command.meta}</span>
              </a>
            ))}
        </div>
      </dialog>
    </div>
  );
}
export default App;
