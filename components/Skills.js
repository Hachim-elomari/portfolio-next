import { FaPython, FaPhp, FaJava, FaJs, FaGitAlt, FaCode } from "react-icons/fa"
import {
  SiMariadb, SiMysql, SiOcaml, SiC, SiGo, SiKotlin, SiDart,
  SiHtml5, SiCss3, SiBootstrap, SiTailwindcss, SiLaravel, SiFlutter,
  SiCodeigniter, SiIntellijidea, SiEclipseide, SiGitlab, SiGithub, SiJunit5,
} from "react-icons/si"

const skillsByCategory = [
  {
    category: "Langages",
    note: "Ceux que j'utilise le plus en projets & cours.",
    skills: [
      { name: "PHP", icon: FaPhp, color: "#777BB4", level: "Fréquent" },
      { name: "Python", icon: FaPython, color: "#3776AB", level: "Fréquent" },
      { name: "Java", icon: FaJava, color: "#007396", level: "Confort" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E", level: "Confort" },
      { name: "Kotlin", icon: SiKotlin, color: "#7F52FF", level: "Projet" },
      { name: "Dart", icon: SiDart, color: "#0175C2", level: "Projet" },
      { name: "C", icon: SiC, color: "#0367a9", level: "Projet" },
      { name: "OCaml", icon: SiOcaml, color: "#EC6813", level: "Cours" },
      { name: "Go", icon: SiGo, color: "#13e1ec", level: "Cours" },
    ],
  },
  {
    category: "Web",
    note: "Stack front + styles.",
    skills: [
      { name: "HTML", icon: SiHtml5, color: "#E34F26", level: "Confort" },
      { name: "CSS", icon: SiCss3, color: "#1572B6", level: "Confort" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4", level: "Fréquent" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3", level: "Confort" },
    ],
  },
  {
    category: "Frameworks",
    note: "Back-end + mobile.",
    skills: [
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20", level: "Fréquent" },
      { name: "CodeIgniter", icon: SiCodeigniter, color: "#EF4223", level: "Projet" },
      { name: "Flutter", icon: SiFlutter, color: "#02569B", level: "Projet" },
    ],
  },
  {
    category: "Bases de données",
    note: "Modélisation + requêtes + intégration API.",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1", level: "Fréquent" },
      { name: "MariaDB", icon: SiMariadb, color: "#003545", level: "Projet" },
    ],
  },
  {
    category: "Outils & Qualité",
    note: "Versioning, IDE, tests.",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#F05032", level: "Fréquent" },
      { name: "GitHub", icon: SiGithub, color: "#24292e", level: "Fréquent" },
      { name: "GitLab", icon: SiGitlab, color: "#FC6D26", level: "Confort" },
      { name: "VS Code", icon: FaCode, color: "#007ACC", level: "Fréquent" },
      { name: "IntelliJ", icon: SiIntellijidea, color: "#6B57FF", level: "Confort" },
      { name: "Eclipse", icon: SiEclipseide, color: "#2C2255", level: "Cours" },
      { name: "JUnit", icon: SiJunit5, color: "#25A162", level: "Projet" },
    ],
  },
]

function LevelPill({ level }) {
  const styles =
    level === "Fréquent"
      ? "bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-500/15 dark:text-emerald-300 dark:border-emerald-500/25"
      : level === "Confort"
      ? "bg-cyan-50 text-cyan-600 border-cyan-200 dark:bg-cyan-500/15 dark:text-cyan-300 dark:border-cyan-500/25"
      : "bg-slate-100 text-slate-500 border-slate-200 dark:bg-slate-500/15 dark:text-white/60 dark:border-slate-500/25"

  return (
    <span className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${styles}`}>
      {level}
    </span>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="text-center reveal">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Compétences
          </h2>
          <p className="mt-3 text-slate-500 dark:text-white/60">
            Stack classée par usage (fréquent / confort / projet).
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 reveal-stagger">
          {skillsByCategory.map((cat) => (
            <div
              key={cat.category}
              className="card-hover rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {cat.category}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-white/60">{cat.note}</p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {cat.skills.map(({ name, icon: Icon, color, level }) => (
                  <div
                    key={name}
                    className="tool-badge group flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:shadow-md dark:border-white/10 dark:bg-white/[0.06] dark:text-white"
                  >
                    <Icon size={18} color={color} />
                    <span>{name}</span>
                    <div className="ml-1">
                      <LevelPill level={level} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}