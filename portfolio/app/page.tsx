"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const workExperience = [
  {
    company: "Fowler College of Business",
    role: "Research Assistant, Financial & Data Analytics",
    date: "09/2024 – Present | San Diego, USA",
    bullets: [
      "Deployed Claude and GitHub Copilot as primary development tools to build production-ready MySQL pipelines, Python ETL scripts, DAX logic, and web-based reporting interfaces, reducing report revision cycles by 30%.",
      "Engineered AI/ML-assisted Python ETL pipelines to extract, transform, and standardize cohort-level student grade and enrollment datasets, replacing manual weekly exports with automated scheduled outputs.",
      "Authored research reports and designed Power BI dashboards with DAX-calculated KPIs across enrollment trends, grade distributions, and academic performance; produced supporting visualizations in Python, enabling self-service faculty reporting.",
    ],
  },
  {
    company: "Admantium Advisory Group",
    role: "Financial Business Analyst",
    date: "03/2021 – 03/2024 | Delhi, India",
    bullets: [
      "Conducted discovery sessions and as-is analysis to map a 14-step manual reporting process across a MySQL-backed client onboarding portal; facilitated JAD sessions with 10+ stakeholders using MoSCoW prioritization, translating outcomes into BRDs, FSDs, and Visio process flow diagrams.",
      "Engineered ETL pipelines using MySQL CTEs and multi-table joins across application, document verification, risk assessment, and approval tables; automated weekly finance reporting via Python and openpyxl.",
      "Executed UAT across normal and edge case scenarios, triaged defects in JIRA, performed root cause analysis on SQL transformation logic, and maintained an RTM linking every business requirement to its SQL calculation.",
    ],
  },
  {
    company: "Mphasis UK Limited",
    role: "Business Analyst, Strategy & Finance",
    date: "09/2019 – 06/2020 | United Kingdom",
    bullets: [
      "Applied MOST analysis to map current-state financial user journeys, identify process bottlenecks, and encode future-state logic into BRDs and functional specifications.",
      "Executed SQL queries to identify data mapping discrepancies across relational schemas, validating financial data integrity ahead of SIT and contributing to a clean go-live.",
    ],
  },
  {
    company: "Sun Pharma",
    role: "Financial Analyst Intern",
    date: "02/2018 – 09/2018 | Delhi, India",
    bullets: [
      "Conducted operational and financial data analysis across business functions using Excel and structured query methods to surface cost inefficiencies and process gaps.",
    ],
  },
];

const education = [
  {
    school: "Fowler College of Business, San Diego State University",
    degree: "MBA Information Systems",
    date: "2024 – May 2026",
    gpa: "GPA: 3.87",
  },
  {
    school: "University of Strathclyde, Glasgow, United Kingdom",
    degree: "MSc in Finance",
    date: "2019 – 2020",
    gpa: "GPA: 3.61 (Passed with Distinction)",
  },
  {
    school: "Symbiosis International University, India",
    degree: "BBA, Financial Management",
    date: "2014 – 2017",
    gpa: "",
  },
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
    items:
      "Claude, GitHub Copilot, Prompt Engineering, AI-assisted Pipeline Development, LLM Output Validation, Workflow Automation, Skill Authoring",
  },
  {
    title: "Programming & Data",
    items:
      "Python, SQL, MySQL, CTEs, R, TypeScript, ETL, NLP, TF-IDF, Machine Learning, SVM, Neural Networks, JavaScript, React.js, Next.js, Tailwind CSS",
  },
  {
    title: "Finance",
    items:
      "Financial Modeling, FP&A, Valuation, DCF, CAPM, DDM, FCFF, FCFE, Forecasting, Budgeting, Variance & Revenue Analysis",
  },
  {
    title: "BI & Visualization",
    items:
      "Power BI, Tableau, Streamlit, Lucidchart, Semantic Data Modeling, KPI Reporting, Snowflake",
  },
  {
    title: "Tools & Platforms",
    items:
      "Advanced Excel, VBA, Scenario Modeling, JIRA, Confluence, Visio, GitHub, Google Colab, Bloomberg, openpyxl",
  },
];

const projects = [
  {
    title: "Vehicle Population Trends and Infrastructure Planning",
    tool: "Python",
    file: "/Slides.pptx",
    description:
      "Conducted data cleaning, transformation, analysis, and visualization using Python to examine Maharashtra’s vehicle population trends and identify growth opportunities in private and commercial transport markets. Developed predictive insights to support sustainable mobility strategies, including EV adoption, public transportation, regional disparity analysis, and infrastructure planning.",
  },
  {
    title: "Healthcare Analytics & Predictive Modeling",
    tool: "R",
    file: "/Medical Insurance Cost.pdf",
    description:
      "Built predictive models in R to analyze medical insurance costs using regression and classification techniques. Performed data cleaning, feature engineering, exploratory data analysis, and visualization to identify key cost drivers such as smoking, BMI, age, and demographic factors. Developed and compared Logistic Regression, LDA, KNN, Ridge, and Lasso models.",
  },
  {
    title: "SMS Based Cyber Attacks",
    tool: "R",
    file: "/Decoding Deception Identifying SMS-Based Cyber Attacks.pptx",
    description:
      "Developed a machine learning-based SMS fraud detection system in R to classify ham, spam, and smishing messages using NLP and predictive analytics. Performed data cleaning, text preprocessing, TF-IDF vectorization, feature engineering, and exploratory data analysis on 4,700+ SMS records. Built and evaluated Support Vector Machine and Neural Network models, with the neural network achieving over 92% accuracy in detecting fraudulent SMS activity.",
  },
  {
    title: "Solar Energy Data Analysis",
    tool: "SQL",
    file: "/Vaibhav Magoo_Solution.xlsx",
    description:
      "Developed SQL-based analytical solutions to evaluate solar energy operations and support business decision-making. Conducted data analysis on energy production, consumption, battery utilization, and grid transactions to identify performance trends and operational insights using MySQL.",
  },
  {
    title: "Business Strategy Simulation",
    tools: "Excel, Capsim",
    file: "/Analysis.pptx",
    description:
      "Developed and executed business strategies across finance, marketing, operations, and R&D, leading Team Digby to a 1st place finish in the Capsim simulation.",
  {
    title: "U.K Portfolio Management",
    tools: "Excel, Bloomberg Terminal",
    file: "/Portfolio Management.pdf",
    description:
      "Developed a UK equities investment portfolio using portfolio theory, efficient frontier analysis, CAPM concepts, covariance matrices, Sharpe ratio evaluation, and Bloomberg PORT analytics. Conducted sector-based equity analysis focused on post-Brexit market opportunities, risk diversification, tracking error analysis, and value investing strategies across FTSE 100 companies.",
  },
  {
    title: "Financial Analysis of Intertek Group Plc",
    tool: "Excel",
    file: "/Intertek.pdf",
    description:
      "Conducted a comprehensive financial analysis and valuation of Intertek Group Plc using profitability, liquidity, leverage, efficiency, and valuation metrics. Applied financial models including Dividend Discount Model, Earnings & Investment Model, Free Cash Flow Valuation, CAPM, Beta analysis, ABHR strategy, and peer benchmarking against FTSE 100 competitors to assess the company’s financial position and investment potential.",
  },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <main className={darkMode ? "min-h-screen bg-slate-950 text-white" : "min-h-screen bg-white text-slate-950"}>
      <section className="max-w-6xl mx-auto px-6 py-10">
        <nav className="flex justify-between items-center py-6 border-b border-slate-800">
          <h2 className="text-xl font-bold">Portfolio</h2>
          <div className="hidden md:flex gap-6 text-sm text-gray-300">
            <a href="#education" className="hover:text-blue-400">Education</a>
            <a href="#experience" className="hover:text-blue-400">Work</a>
            <a href="#certificates" className="hover:text-blue-400">Certificates</a>
            <a href="#skills" className="hover:text-blue-400">Skills</a>
            <a href="#projects" className="hover:text-blue-400">Projects</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </div>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-xl border border-slate-500 px-4 py-2 text-sm font-semibold hover:border-blue-400"
          >
            {darkMode ? "Day Mode" : "Night Mode"}
          </button>
        </nav>

        <section className="py-20 text-center">
 

  <p className="text-blue-400 font-semibold mb-4">
    Business Analysis | Data Analytics | Financial Analytics
  </p>

  <h1 className="text-5xl md:text-7xl font-bold mb-5">
    Vaibhav Magoo
  </h1>

  <h2 className="text-2xl md:text-3xl text-blue-400 font-semibold mb-8">
    MBA | MSc | PMP | CFA Level 1
  </h2>

  <p className="text-gray-300 max-w-4xl mx-auto leading-8 text-lg">
    MBA graduate in Information Systems and a Project Management Professional
    with hands-on experience engineering institutional data pipelines, building
    analytical dashboards, and delivering reproducible reporting solutions.
    Proficient in Python, R, SQL, Tableau, and Power BI. Proven ability to
    translate complex data problems into scalable, documented analytics workflows
    for both technical and non-technical stakeholders. Committed to data accuracy,
    governance, and delivering actionable business insights.
  </p>

  <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
    <a href="#projects" className="bg-blue-500 hover:bg-blue-600 px-7 py-3 rounded-xl font-semibold">
      View Projects
    </a>

    <a
      href="/Vaibhav_Magoo--Resume.pdf"
      download
      className="bg-slate-800 hover:bg-slate-700 border border-slate-600 px-7 py-3 rounded-xl font-semibold"
    >
      Download Resume
    </a>

    <a href="#contact" className="border border-slate-500 hover:border-blue-400 px-7 py-3 rounded-xl font-semibold">
      Contact Me
    </a>
  </div>
</section>

        <Section id="education" title="Education">
          <div className="grid md:grid-cols-3 gap-6">
            {education.map((item) => (
              <Card key={item.school}>
                <h3 className="text-xl font-bold text-white mb-2">{item.school}</h3>
                <p className="text-blue-400">{item.degree}</p>
                <p className="text-gray-400">{item.date}</p>
                {item.gpa && <p className="text-gray-300 mt-2">{item.gpa}</p>}
              </Card>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Work Experience">
          <div className="space-y-6">
            {workExperience.map((job) => (
              <Card key={job.company}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{job.company}</h3>
                    <p className="text-blue-400 font-semibold">{job.role}</p>
                  </div>
                  <p className="text-gray-400">{job.date}</p>
                </div>

                <ul className="list-disc pl-6 space-y-3 text-gray-300 leading-7">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="certificates" title="Certificates">
          <div className="grid md:grid-cols-2 gap-4">
            {certificates.map((certificate) => (
              <Card key={certificate}>
                <p className="text-gray-300">{certificate}</p>
                </Card>
              ))}
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <Card key={skill.title}>
                <h3 className="text-xl font-bold text-blue-400 mb-3">
                  {skill.title}
                </h3>
                <p className="text-gray-300 leading-7">{skill.items}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card key={project.title}>
                <p className="text-blue-400 font-semibold mb-2">
                  Major Tool: {project.tool}
                </p>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-300 leading-7">{project.description}</p>
                
                  <a
                    href={project.file}
                    download
                    className="inline-block mt-5 bg-blue-500 hover:bg-blue-600 px-5 py-3 rounded-xl font-semibold text-white"
                  >
                    Download Project File
                  </a>
              </Card>
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
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition"
    >
      {children}
    </motion.div>
  );
}
