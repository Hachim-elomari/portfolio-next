import { FaPython, FaPhp, FaJava, FaJs, FaGitAlt, FaCode, FaReact } from "react-icons/fa"
import {
  SiMariadb, SiMysql, SiPostgresql, SiOcaml, SiC, SiGo, SiKotlin, SiDart,
  SiHtml5, SiCss3, SiBootstrap, SiTailwindcss, SiLaravel, SiFlutter,
  SiCodeigniter, SiIntellijidea, SiEclipseide, SiGitlab, SiGithub, SiJunit5,
  SiNextdotjs, SiAngular, SiSpringboot, SiTypescript,
} from "react-icons/si"

const skillsByCategory = [
  {
    category: "Langages",
    note: "Langages utilisés dans mes projets universitaires et professionnels.",
    skills: [
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "PHP", icon: FaPhp, color: "#777BB4" },
      { name: "Java", icon: FaJava, color: "#007396" },
      { name: "Python", icon: FaPython, color: "#3776AB" },
      { name: "Dart", icon: SiDart, color: "#0175C2" },
      { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
      { name: "C", icon: SiC, color: "#0367a9" },
      { name: "OCaml", icon: SiOcaml, color: "#EC6813" },
      { name: "Go", icon: SiGo, color: "#13e1ec" },
    ],
  },
  {
    category: "Web",
    note: "Développement front-end et frameworks web.",
    skills: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Angular", icon: SiAngular, color: "#DD0031" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss3, color: "#1572B6" },
    ],
  },
  {
    category: "Back-end & Mobile",
    note: "Développement d'API, applications serveur et applications mobiles.",
    skills: [
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "CodeIgniter", icon: SiCodeigniter, color: "#EF4223" },
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
    ],
  },
  {
    category: "Bases de données",
    note: "Conception, requêtes et intégration avec les applications.",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "MariaDB", icon: SiMariadb, color: "#003545" },
    ],
  },
  {
    category: "Outils & Qualité",
    note: "Versioning, environnements de développement et tests.",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#24292e" },
      { name: "GitLab", icon: SiGitlab, color: "#FC6D26" },
      { name: "VS Code", icon: FaCode, color: "#007ACC" },
      { name: "IntelliJ", icon: SiIntellijidea, color: "#6B57FF" },
      { name: "Eclipse", icon: SiEclipseide, color: "#2C2255" },
      { name: "JUnit", icon: SiJunit5, color: "#25A162" },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="text-center reveal">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Compétences
          </h2>
          <p className="mt-3 text-slate-500 dark:text-white/60">
            Technologies et outils utilisés dans mes projets.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 reveal-stagger">
          {skillsByCategory.map((cat) => (
            <div
              key={cat.category}
              className="card-hover rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04]"
            >
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {cat.category}
                </h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-white/60">
                  {cat.note}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {cat.skills.map(({ name, icon: Icon, color }) => (
                  <div
                    key={name}
                    className="tool-badge flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:shadow-md dark:border-white/10 dark:bg-white/[0.06] dark:text-white"
                  >
                    <Icon size={18} color={color} />
                    <span>{name}</span>
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