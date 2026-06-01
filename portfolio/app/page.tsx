"use client";

import { motion } from "framer-motion";
import { useState } from "react";

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
      "Analyzed Maharashtra’s vehicle population trends using Python to identify growth opportunities in private and commercial transport markets. Developed insights supporting EV adoption, public transportation, regional disparity analysis, and infrastructure planning.",
  },
  {
    title: "Healthcare Analytics & Predictive Modeling",
    tool: "R",
    file: "/Medical Insurance Cost.pdf",
    tag: "Predictive Modeling",
    description:
      "Built predictive models in R to analyze medical insurance costs using regression and classification techniques. Compared Logistic Regression, LDA, KNN, Ridge, and Lasso models to identify high-cost risk drivers.",
  },
  {
    title: "SMS Based Cyber Attacks",
    tool: "R",
    file: "/Decoding Deception Identifying SMS-Based Cyber Attacks.pptx",
    tag: "Machine Learning",
    description:
      "Developed an SMS fraud detection system in R to classify ham, spam, and smishing messages using NLP, TF-IDF, SVM, and Neural Networks, achieving over 92% accuracy in detecting fraudulent SMS activity.",
  },
  {
    title: "Solar Energy Data Analysis",
    tool: "SQL",
    file: "/Vaibhav Magoo_Solution.xlsx",
    tag: "SQL Analytics",
    description:
      "Developed SQL-based analytical solutions to evaluate solar energy production, consumption, battery utilization, and grid transactions using MySQL to identify performance trends and operational insights.",
  },
  {
    title: "Business Strategy Simulation",
    tool: "Excel, Capsim",
    file: "/Analysis.pptx",
    tag: "1st Place",
    description:
      "Developed and executed business strategies across finance, marketing, operations, and R&D, leading Team Digby to a 1st place finish in the Capsim business simulation.",
  },
  {
    title: "U.K Portfolio Management",
    tool: "Excel, Bloomberg Terminal",
    file: "/Portfolio Management.pdf",
    tag: "Portfolio Theory",
    description:
      "Built a UK equities portfolio using efficient frontier analysis, CAPM, covariance matrices, Sharpe ratio evaluation, Bloomberg PORT analytics, tracking error analysis, and value investing strategies.",
  },
  {
    title: "Financial Analysis of Intertek Group Plc",
    tool: "Excel",
    file: "/Intertek.pdf",
    tag: "Valuation",
    description:
      "Conducted financial analysis and valuation of Intertek Group Plc using profitability, liquidity, leverage, efficiency, DDM, FCFF, CAPM, Beta analysis, ABHR strategy, and peer benchmarking.",
  },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <main
      className={
        darkMode
          ? "min-h-screen bg-slate-950 text-white"
          : "min-h-screen bg-slate-50 text-slate-950"
      }
    >
      <section className="max-w-6xl mx-auto px-6 py-10">
        <nav className="flex justify-between items-center py-6 border-b border-slate-800">
          <h2 className="text-xl font-bold">Portfolio</h2>

          <div className="hidden md:flex gap-6 text-sm text-gray-400">
            <a href="#certificates" className="hover:text-blue-400">
              Certificates
            </a>
            <a href="#skills" className="hover:text-blue-400">
              Skills
            </a>
            <a href="#projects" className="hover:text-blue-400">
              Projects
            </a>
            <a href="#contact" className="hover:text-blue-400">
              Contact
            </a>
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-xl border border-slate-500 px-4 py-2 text-sm font-semibold hover:border-blue-400"
          >
            {darkMode ? "Day Mode" : "Night Mode"}
          </button>
        </nav>

        <section className="py-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-blue-400 font-semibold mb-4"
          >
            Business Analysis | Data Analytics | Financial Analytics
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-5"
          >
            Vaibhav Magoo
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl text-blue-400 font-semibold mb-8"
          >
            MBA | MSc | PMP | CFA Level 1
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-300 max-w-4xl mx-auto leading-8 text-lg"
          >
            MBA graduate in Information Systems and a Project Management
            Professional with hands-on experience engineering institutional data
            pipelines, building analytical dashboards, and delivering
            reproducible reporting solutions. Proficient in Python, R, SQL,
            Tableau, and Power BI. Committed to data accuracy, governance, and
            delivering actionable business insights.
          </motion.p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="bg-blue-500 hover:bg-blue-600 px-7 py-3 rounded-xl font-semibold text-white"
            >
              View Projects
            </a>

            <a
              href="/Vaibhav_Magoo--Resume.pdf"
              download
              className="bg-slate-800 hover:bg-slate-700 border border-slate-600 px-7 py-3 rounded-xl font-semibold text-white"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="border border-slate-500 hover:border-blue-400 px-7 py-3 rounded-xl font-semibold"
            >
              Contact Me
            </a>
          </div>
        </section>

        <Section id="certificates" title="Certificates">
          <div className="grid md:grid-cols-2 gap-4">
            {certificates.map((certificate) => (
              <Card key={certificate}>
                <p className="text-gray-300">{certificate}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills & Tools">
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="relative overflow-hidden bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-500/10 blur-xl" />

                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    animate={{ y: [0, -7, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2.5,
                      delay: index * 0.2,
                    }}
                    className="text-4xl"
                  >
                    {skill.icon}
                  </motion.div>

                  <h3 className="text-xl font-bold text-blue-400">
                    {skill.title}
                  </h3>
                </div>

                <p className="text-gray-300 leading-7">{skill.items}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Featured Projects">
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500" />

                <div className="flex justify-between items-start gap-4 mb-4">
                  <span className="text-xs uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
                    {project.tag}
                  </span>

                  <span className="text-sm text-gray-400">{project.tool}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition">
                  {project.title}
                </h3>

                <p className="text-gray-300 leading-7">
                  {project.description}
                </p>

                <a
                  href={project.file}
                  download
                  className="inline-block mt-6 bg-blue-500 hover:bg-blue-600 px-5 py-3 rounded-xl font-semibold text-white"
                >
                  Download Project File
                </a>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <Card>
            <div className="grid md:grid-cols-2 gap-6 text-gray-300">
              <div className="space-y-3">
                <p>Email: magoovaibhav@gmail.com</p>
                <p>Ph: +1 279-234-0386</p>
                <p>Location: California, USA</p>
              </div>

              <div className="space-y-3">
                <a
                  href="https://www.linkedin.com/in/vaibhav-magoo/"
                  target="_blank"
                  className="block text-blue-400 hover:text-blue-300"
                >
                  LinkedIn Profile
                </a>

                <a
                  href="https://github.com/VaibhavMagoo"
                  target="_blank"
                  className="block text-blue-400 hover:text-blue-300"
                >
                  GitHub Profile
                </a>
              </div>
            </div>
          </Card>
        </Section>

        <footer className="py-10 text-center text-gray-500 border-t border-slate-800 mt-10">
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
    <section id={id} className="py-14">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-8">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition"
    >
      {children}
    </motion.div>
  );
}