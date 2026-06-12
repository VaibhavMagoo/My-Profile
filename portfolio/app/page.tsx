"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const roles = [
  "Financial Analyst",
  "Data Analyst",
  "Business Intelligence Analyst",
  "FP&A Specialist",
];

const certificates = [
  "Project Management Professional (PMP), PMI Institute: 07/2025",
  "Chartered Financial Analyst (CFA) Level 1, CFA Institute: 01/2023",
  "Financial Modeling, Udemy: 05/2021",
  "SQL Data Analytics and Business Intelligence, Udemy: 01/2021",
  "Financial Markets, Yale University: 01/2019",
];

const skills = [
  {
    title: "AI & Development",
    icon: "🤖",
    items:
      "Claude, GitHub Copilot, Prompt Engineering, AI-assisted Pipeline Development, LLM Output Validation, Workflow Automation, Skill Authoring",
  },
  {
    title: "Programming & Data",
    icon: "💻",
    items:
      "Python, SQL, MySQL, CTEs, R, TypeScript, ETL, NLP, TF-IDF, Machine Learning, SVM, Neural Networks, JavaScript, React.js, Next.js, Tailwind CSS",
  },
  {
    title: "Finance",
    icon: "📊",
    items:
      "Financial Modeling, FP&A, Valuation, DCF, CAPM, DDM, FCFF, FCFE, Forecasting, Budgeting, Variance & Revenue Analysis",
  },
  {
    title: "BI & Visualization",
    icon: "📈",
    items:
      "Power BI, Tableau, Streamlit, Lucidchart, Semantic Data Modeling, KPI Reporting, Snowflake",
  },
  {
    title: "Tools & Platforms",
    icon: "🛠️",
    items:
      "Advanced Excel, VBA, Scenario Modeling, JIRA, Confluence, Visio, GitHub, Google Colab, Bloomberg, openpyxl",
  },
];

const projects = [
  {
    title: "Vehicle Population Trends and Infrastructure Planning",
    tool: "Python",
    file: "/Slides.pptx",
    tag: "Mobility Analytics",
    description:
      "Analyzed Maharashtra's vehicle population trends using Python to identify growth opportunities in private and commercial transport markets. Developed insights supporting EV adoption, public transportation, regional disparity analysis, and infrastructure planning.",
    gradient: "from-cyan-500 via-blue-600 to-indigo-700",
    icon: "car",
  },
  {
    title: "Healthcare Analytics & Predictive Modeling",
    tool: "R",
    file: "/Medical Insurance Cost.pdf",
    tag: "Predictive Modeling",
    description:
      "Built predictive models in R to analyze medical insurance costs using regression and classification techniques. Compared Logistic Regression, LDA, KNN, Ridge, and Lasso models to identify high-cost risk drivers.",
    gradient: "from-emerald-500 via-teal-600 to-cyan-700",
    icon: "pulse",
  },
  {
    title: "SMS Based Cyber Attacks",
    tool: "R",
    file: "/Decoding Deception Identifying SMS-Based Cyber Attacks.pptx",
    tag: "Machine Learning",
    description:
      "Developed an SMS fraud detection system in R to classify ham, spam, and smishing messages using NLP, TF-IDF, SVM, and Neural Networks, achieving over 92% accuracy in detecting fraudulent SMS activity.",
    gradient: "from-fuchsia-500 via-purple-600 to-indigo-800",
    icon: "shield",
  },
  {
    title: "Solar Energy Data Analysis",
    tool: "SQL",
    file: "/Vaibhav Magoo_Solution.xlsx",
    tag: "SQL Analytics",
    description:
      "Developed SQL-based analytical solutions to evaluate solar energy production, consumption, battery utilization, and grid transactions using MySQL to identify performance trends and operational insights.",
    gradient: "from-amber-400 via-orange-500 to-red-600",
    icon: "sun",
  },
  {
    title: "Capstone Simulation",
    tool: "Excel, Capsim",
    file: "/Analysis.pptx",
    tag: "Business Strategy",
    description:
      "Developed and executed business strategies across finance, marketing, operations, and R&D, leading Team Digby to a 1st place finish in the Capsim business simulation.",
    gradient: "from-rose-400 via-pink-500 to-fuchsia-700",
    icon: "trophy",
  },
  {
    title: "U.K Portfolio Management",
    tool: "Excel, Bloomberg Terminal",
    file: "/Portfolio Management.pdf",
    tag: "Portfolio Theory",
    description:
      "Built a UK equities portfolio using efficient frontier analysis, CAPM, covariance matrices, Sharpe ratio evaluation, Bloomberg PORT analytics, tracking error analysis, and value investing strategies.",
    gradient: "from-slate-700 via-slate-800 to-black",
    icon: "chart",
  },
  {
    title: "Financial Analysis of Intertek Group Plc",
    tool: "Excel",
    file: "/Intertek.pdf",
    tag: "Valuation",
    description:
      "Conducted financial analysis and valuation of Intertek Group Plc using profitability, liquidity, leverage, efficiency, DDM, FCFF, CAPM, Beta analysis, ABHR strategy, and peer benchmarking.",
    gradient: "from-blue-600 via-indigo-700 to-violet-800",
    icon: "building",
  },
  {
    title: "Aztec Airwalk: Skateboard Ramp Manufacturing",
    tool: "Excel, CVP Modeling",
    file: "/Final Project.pdf",
    tag: "Cost Accounting",
    description:
      "Designed a managerial accounting model for a skateboard ramp manufacturer covering BOM costing, ABC overhead allocation, cost-plus pricing, and CVP analysis. Identified a break-even of ~425 units ($788K revenue), with Skatelite upgrades and Funboxes driving 81% of total contribution margin.",
    gradient: "from-orange-400 via-amber-500 to-yellow-600",
    icon: "skateboard",
  },
];

const stats = [
  { value: "MBA + MSc", label: "Information Systems & Finance" },
  { value: "PMP", label: "Certified" },
  { value: "CFA L1", label: "Certified" },
  { value: "8", label: "Featured Projects" },
];

function ProjectIcon({ name }: { name: string }) {
  const common = "absolute opacity-25 text-white";
  switch (name) {
    case "car":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={`${common} h-32 w-32 -right-6 -bottom-8 rotate-[-8deg]`}>
          <path d="M3 13l1.5-4.5A2 2 0 0 1 6.4 7h11.2a2 2 0 0 1 1.9 1.5L21 13" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="2" y="13" width="20" height="5" rx="1.5" />
          <circle cx="7" cy="18.5" r="1.5" />
          <circle cx="17" cy="18.5" r="1.5" />
        </svg>
      );
    case "pulse":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={`${common} h-32 w-40 -right-4 -bottom-10`}>
          <path d="M2 12h4l2 6 4-14 3 10 2-6h7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={`${common} h-36 w-36 -right-8 -bottom-10 rotate-[6deg]`}>
          <path d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3z" strokeLinejoin="round" />
          <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "sun":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={`${common} h-32 w-32 -right-6 -bottom-8`}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" strokeLinecap="round" />
        </svg>
      );
    case "trophy":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={`${common} h-32 w-32 -right-6 -bottom-8 rotate-[-6deg]`}>
          <path d="M7 4h10v4a5 5 0 0 1-10 0V4z" strokeLinejoin="round" />
          <path d="M7 5H4a3 3 0 0 0 3 4M17 5h3a3 3 0 0 1-3 4" strokeLinecap="round" />
          <path d="M9 16h6M12 13v4M8 20h8" strokeLinecap="round" />
        </svg>
      );
    case "chart":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={`${common} h-32 w-40 -right-4 -bottom-8`}>
          <path d="M3 20V10M9 20V4M15 20v-7M21 20V8" strokeLinecap="round" />
          <path d="M2 20h20" strokeLinecap="round" />
        </svg>
      );
    case "building":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={`${common} h-36 w-32 -right-6 -bottom-10`}>
          <rect x="4" y="3" width="10" height="18" />
          <rect x="14" y="9" width="6" height="12" />
          <path d="M7 7h1M10 7h1M7 11h1M10 11h1M7 15h1M10 15h1" strokeLinecap="round" />
        </svg>
      );
    case "skateboard":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={`${common} h-32 w-40 -right-4 -bottom-8 rotate-[-4deg]`}>
          <path d="M2 14c2-3 18-3 20 0" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="6" cy="17" r="1.5" />
          <circle cx="18" cy="17" r="1.5" />
          <path d="M5 9l3-3M16 9l3-3M9 6h2M13 6h2" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}


  const [darkMode, setDarkMode] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <main
      className={`min-h-screen transition-colors duration-500 relative overflow-x-hidden ${
        darkMode ? "bg-slate-950 text-slate-50" : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* Animated background blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
        <motion.div
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -60, 40, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute top-[-10%] left-[-10%] h-[28rem] w-[28rem] rounded-full blur-3xl ${
            darkMode ? "bg-blue-600/20" : "bg-blue-400/30"
          }`}
        />
        <motion.div
          animate={{
            x: [0, -100, 60, 0],
            y: [0, 50, -30, 0],
          }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute top-[20%] right-[-15%] h-[32rem] w-[32rem] rounded-full blur-3xl ${
            darkMode ? "bg-fuchsia-600/15" : "bg-fuchsia-400/20"
          }`}
        />
        <motion.div
          animate={{
            x: [0, 60, -80, 0],
            y: [0, -40, 60, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute bottom-[-15%] left-[20%] h-[30rem] w-[30rem] rounded-full blur-3xl ${
            darkMode ? "bg-emerald-500/10" : "bg-amber-300/25"
          }`}
        />
      </div>

      <section className="max-w-6xl mx-auto px-6 py-10 relative z-10">
        {/* Nav */}
        <nav
          className={`flex justify-between items-center py-5 border-b ${
            darkMode ? "border-slate-800" : "border-slate-200"
          }`}
        >
          <a href="/" className="text-xl font-black tracking-tight hover:text-blue-500 transition">
            VAB
          </a>

          <div
            className={`hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest ${
              darkMode ? "text-slate-400" : "text-slate-500"
            }`}
          >
            <a href="#projects" className="hover:text-blue-500 transition">
              Projects
            </a>
            <a href="#skills" className="hover:text-blue-500 transition">
              Skills
            </a>
            <a href="#certificates" className="hover:text-blue-500 transition">
              Certificates
            </a>
            <a href="#contact" className="hover:text-blue-500 transition">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block text-xs font-mono px-3 py-1 rounded-full border border-blue-500/40 text-blue-500">
              SAN DIEGO
            </span>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                darkMode
                  ? "border-slate-700 hover:border-blue-500"
                  : "border-slate-300 hover:border-blue-500"
              }`}
            >
              {darkMode ? "☀ Day" : "☾ Night"}
            </button>
          </div>
        </nav>

        {/* Hero */}
        <section className="py-24 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-xs font-semibold uppercase tracking-[0.3em] mb-6 ${
              darkMode ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Business Analysis · Data Analytics · Financial Analytics
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black tracking-tight leading-[0.95]"
          >
            VAIBHAV
            <br />
            MAGOO
          </motion.h1>

          <div className="h-10 mt-6 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={roles[roleIndex]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="text-xl md:text-2xl font-semibold text-blue-500"
              >
                {roles[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`max-w-3xl mx-auto leading-8 text-lg mt-8 ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            MBA graduate in Information Systems and a Project Management
            Professional with hands-on experience engineering institutional
            data pipelines, building analytical dashboards, and delivering
            reproducible reporting solutions. Proficient in Python, R, SQL,
            Tableau, and Power BI.
          </motion.p>

          {/* Stat cards */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4, scale: 1.03 }}
                transition={{ delay: 0.4 + i * 0.08 }}
                className={`rounded-2xl border p-4 backdrop-blur-sm ${
                  darkMode
                    ? "bg-slate-900/60 border-slate-800"
                    : "bg-white/70 border-slate-200"
                }`}
              >
                <p className="text-lg md:text-xl font-extrabold">{stat.value}</p>
                <p
                  className={`text-xs uppercase tracking-wider mt-1 ${
                    darkMode ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="/Vaibhav_Magoo--Resume.pdf"
              download
              className={`px-7 py-3 rounded-full font-semibold transition ${
                darkMode
                  ? "bg-white text-slate-950 hover:bg-blue-500 hover:text-white"
                  : "bg-slate-950 text-white hover:bg-blue-600"
              }`}
            >
              Download Resume ↓
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              className={`border px-7 py-3 rounded-full font-semibold transition hover:border-blue-500 hover:text-blue-500 ${
                darkMode ? "border-slate-700" : "border-slate-300"
              }`}
            >
              View Projects
            </motion.a>
          </div>

          <div className="mt-8 flex justify-center gap-3 text-sm">
            {[
              { label: "LinkedIn", href: "https://www.linkedin.com/in/vaibhav-magoo/" },
              { label: "GitHub", href: "https://github.com/VaibhavMagoo" },
              { label: "Email", href: "mailto:magoovaibhav@gmail.com" },
            ].map((link) => (
              <motion.a
                key={link.label}
                whileHover={{ scale: 1.08 }}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                className={`px-4 py-2 rounded-full border transition hover:border-blue-500 hover:text-blue-500 ${
                  darkMode ? "border-slate-700" : "border-slate-300"
                }`}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </section>

        {/* Projects */}
        <Section id="projects" title="Projects">
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                viewport={{ once: true }}
                className={`group overflow-hidden rounded-3xl border transition-shadow hover:shadow-xl ${
                  darkMode
                    ? "bg-slate-900 border-slate-800 hover:shadow-blue-900/30"
                    : "bg-white border-slate-200 hover:shadow-blue-200/50"
                }`}
              >
                <div className={`relative h-28 w-full overflow-hidden bg-gradient-to-br ${project.gradient}`}>
                  <motion.div
                    animate={{ x: ["-20%", "20%", "-20%"] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-white/10 blur-2xl"
                  />
                  <ProjectIcon name={project.icon} />
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <span className="text-xs uppercase tracking-widest text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full">
                      {project.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-500 transition">
                    {project.title}
                  </h3>

                  <p className={`leading-7 text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tool.split(",").map((t) => (
                      <span
                        key={t}
                        className={`text-xs font-medium px-3 py-1 rounded-full border ${
                          darkMode
                            ? "border-slate-700 text-slate-400"
                            : "border-slate-200 text-slate-500"
                        }`}
                      >
                        {t.trim()}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.file}
                    download
                    className="inline-block mt-5 text-sm font-semibold text-blue-500 hover:underline"
                  >
                    Download Project File →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" title="Skills & Tools">
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`rounded-3xl border p-6 ${
                  darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <motion.span
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.2 }}
                    className="text-3xl"
                  >
                    {skill.icon}
                  </motion.span>
                  <h3 className="text-lg font-bold text-blue-500">{skill.title}</h3>
                </div>
                <p className={`leading-7 text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                  {skill.items}
                </p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Certificates */}
        <Section id="certificates" title="Certificates">
          <div className="grid md:grid-cols-2 gap-4">
            {certificates.map((certificate, index) => (
              <motion.div
                key={certificate}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ x: 4 }}
                transition={{ delay: index * 0.04 }}
                viewport={{ once: true }}
                className={`rounded-2xl border p-5 ${
                  darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
                }`}
              >
                <p className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                  {certificate}
                </p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Contact">
          <div
            className={`rounded-3xl border p-8 ${
              darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
            }`}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3 text-sm">
                <p>Email: magoovaibhav@gmail.com</p>
                <p>Ph: +1 279-234-0386</p>
                <p>Location: San Diego, California, USA</p>
              </div>

              <div className="space-y-3 text-sm">
                <a
                  href="https://www.linkedin.com/in/vaibhav-magoo/"
                  target="_blank"
                  className="block text-blue-500 hover:underline"
                >
                  LinkedIn Profile →
                </a>
                <a
                  href="https://github.com/VaibhavMagoo"
                  target="_blank"
                  className="block text-blue-500 hover:underline"
                >
                  GitHub Profile →
                </a>
              </div>
            </div>
          </div>
        </Section>

        <footer
          className={`py-10 text-center text-sm border-t mt-10 ${
            darkMode ? "text-slate-400 border-slate-800" : "text-slate-500 border-slate-200"
          }`}
        >
          © 2026 Vaibhav Magoo. Built with Next.js and Tailwind CSS.
        </footer>
      </section>
    </main>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-black tracking-tight mb-10"
      >
        {title.toUpperCase()}
      </motion.h2>
      {children}
    </section>
  );
}