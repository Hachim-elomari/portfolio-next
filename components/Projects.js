import {
  FaJava, FaPython, FaPhp, FaJs, FaGitAlt, FaCode,
  FaMobileAlt, FaDesktop, FaGamepad, FaBriefcase
} from "react-icons/fa"

import {
  SiKotlin, SiDart, SiFlutter, SiLaravel, SiCodeigniter,
  SiMysql, SiMariadb, SiHtml5, SiCss3,
  SiJunit, SiIntellijidea
} from "react-icons/si"

const projects = [
  {
    name: "CHOP' | 2025 - En cours",
    desc: "Application mobile Android/iOS pour étudiants et entreprises : profils, CV, match, chat, calendrier d’entretiens et suivi des évaluations.",
    typeIcon: FaMobileAlt,
    tools: [
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
      { name: "Dart", icon: SiDart, color: "#0175C2" },
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: "PHP", icon: FaPhp, color: "#777BB4" },
      { name: "SQL", icon: SiMysql, color: "#4479A1" }
    ],
    link: "https://github.com/Hachim-elomari"
  },

  {
    name: "Jeu 2048 | 2025",
    desc: "Jeu 2048 en Kotlin sous IntelliJ : grille dynamique, déplacements, score et interface.",
    typeIcon: FaGamepad,
    tools: [
      { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
      { name: "IntelliJ", icon: SiIntellijidea, color: "#000000" }
    ],
    link: "https://github.com/Hachim-elomari"
  },

  {
    name: "OlymPix | 2024",
    desc: "Application concours PHP CodeIgniter + SQL avec UML, transactions et tests.",
    typeIcon: FaDesktop,
    tools: [
      { name: "PHP", icon: FaPhp, color: "#777BB4" },
      { name: "CodeIgniter", icon: SiCodeigniter, color: "#EF4223" },
      { name: "SQL", icon: SiMysql, color: "#4479A1" }
    ],
    link: "https://github.com/Hachim-elomari"
  },

  {
    name: "Gestion VOD | 2024",
    desc: "Application Java + JavaFX pour gestion location films + tests unitaires JUnit.",
    typeIcon: FaDesktop,
    tools: [
      { name: "Java", icon: FaJava, color: "#007396" },
      { name: "JavaFX", icon: FaJava, color: "#007396" },
      //{ name: "JUnit", icon: SiJunit, color: "#25A162" }
    ],
    link: "https://github.com/Hachim-elomari"
  },

  {
    name: "Ready2Scan | 2024",
    desc: "Application PHP boutique surf + MariaDB + QR Code + UML.",
    typeIcon: FaDesktop,
    tools: [
      { name: "PHP", icon: FaPhp, color: "#777BB4" },
      { name: "MariaDB", icon: SiMariadb, color: "#003545" },
      { name: "UML", icon: FaCode, color: "#3498db" }
    ],
    link: "https://github.com/Hachim-elomari"
  },

  {
    name: "Padlet Manager | 2023",
    desc: "Plateforme web ressources adhérents : HTML, CSS, JS, PHP, MariaDB + UML.",
    typeIcon: FaDesktop,
    tools: [
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss3, color: "#1572B6" },
      { name: "JS", icon: FaJs, color: "#F7DF1E" },
      { name: "PHP", icon: FaPhp, color: "#777BB4" },
      { name: "MariaDB", icon: SiMariadb, color: "#003545" }
    ],
    link: "https://github.com/Hachim-elomari"
  },

  {
    name: "Space Invaders | 2022",
    desc: "Jeu Python avec vagues d’ennemis et système de tir.",
    typeIcon: FaGamepad,
    tools: [
      { name: "Python", icon: FaPython, color: "#3776AB" }
    ],
    link: "https://github.com/Hachim-elomari"
  },

  {
    name: "Stage Développeur Web – Alvarium | 2025",
    desc: "Backend Laravel + IMAP + API OpenAI + MySQL + interface commandes.",
    typeIcon: FaBriefcase,
    tools: [
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: "PHP", icon: FaPhp, color: "#777BB4" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Git", icon: FaGitAlt, color: "#F05032" }
    ],
    link: ""
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-100 mb-12">
        Projets & Expériences
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <div className="flex items-center gap-2 mb-2">
              <p className="text-blue-600"><p.typeIcon /></p>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                {p.name}
              </h3>
            </div>

            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {p.desc}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {p.tools.map((t, tIdx) => (
                <div
                  key={tIdx}
                  className="flex items-center gap-1 px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                >
                  <t.icon size={16} color={t.color} />
                  {t.name}
                </div>
              ))}
            </div>

            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
              >
                Voir le projet
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}