import { FaPython, FaPhp, FaJava, FaJs, FaGitAlt, FaCode } from "react-icons/fa"
import {
  SiMariadb,
  SiMysql,
  SiOcaml,
  SiKotlin,
  SiDart,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiLaravel,
  SiFlutter,
  SiCodeigniter,
  SiIntellijidea,
  SiEclipseide,
  SiGitlab,
  SiGithub,
  SiJunit5
} from "react-icons/si"

const skillsByCategory = [
  {
    category: "Langages de programmation",
    skills: [
      { name: "Python", icon: FaPython, color: "#3776AB" },
      { name: "PHP", icon: FaPhp, color: "#777BB4" },
      { name: "Java", icon: FaJava, color: "#007396" },
      { name: "C", icon: FaJava, color: "#A8B9CC" },
      { name: "OCaml", icon: SiOcaml, color: "#EC6813" },
      { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
      { name: "Dart", icon: SiDart, color: "#0175C2" }
    ]
  },
  {
    category: "Développement Web",
    skills: [
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss3, color: "#1572B6" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" }
    ]
  },
  {
    category: "Frameworks",
    skills: [
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: "CodeIgniter", icon: SiCodeigniter, color: "#EF4223" },
      { name: "Flutter", icon: SiFlutter, color: "#02569B" }
    ]
  },
  {
    category: "Bases de données",
    skills: [
      { name: "MariaDB", icon: SiMariadb, color: "#003545" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" }
    ]
  },
  {
    category: "Outils & Gestion de code",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitLab", icon: SiGitlab, color: "#FC6D26" },
      { name: "GitHub", icon: SiGithub, color: "#000000" },
      { name: "VS Code", icon: FaCode, color: "#007ACC" },
      { name: "IntelliJ", icon: SiIntellijidea, color: "#000000" },
      { name: "Eclipse", icon: SiEclipseide, color: "#2C2255" },
      { name: "JUnit", icon: SiJunit5, color: "#25A162" }
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <h2 className="text-4xl font-bold text-[#2c3e50] text-center">Compétences</h2>

      <div className="mt-10 flex flex-col gap-16">
        {skillsByCategory.map(({ category, skills }) => (
          <div key={category}>
            <h3 className="text-2xl font-semibold text-center text-[#34495e] mb-6">{category}</h3>
            <div className="flex justify-center flex-wrap gap-4">
              {skills.map(({ name, icon: Icon, color }) => (
                <div
                  key={name}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-xl font-semibold cursor-pointer transform transition duration-200 hover:scale-105"
                >
                  <Icon size={22} color={color} />
                  {name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}