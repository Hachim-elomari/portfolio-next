import {
  FaJava,
  FaPython,
  FaPhp,
  FaJs,
  FaGitAlt,
  FaCode,
  FaMobileAlt,
  FaDesktop,
  FaGamepad,
  FaBriefcase,
} from "react-icons/fa"

import {
  SiKotlin,
  SiDart,
  SiFlutter,
  SiLaravel,
  SiCodeigniter,
  SiMysql,
  SiMariadb,
  SiHtml5,
  SiCss3,
  SiIntellijidea,
} from "react-icons/si"

const projects = [
  {
    name: "CHOP' | 2025 - En cours",
    desc: "App Android/iOS pour étudiants & entreprises : profils, CV, match, chat, calendrier d’entretiens, suivi d’évaluations.",
    type: "Mobile + API",
    typeIcon: FaMobileAlt,
    highlights: ["Match & chat", "API Laravel", "SQL / auth"],
    tools: [
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
      { name: "Dart", icon: SiDart, color: "#0175C2" },
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: "PHP", icon: FaPhp, color: "#777BB4" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
    link: "https://github.com/Hachim-elomari",
  },
  {
    name: "Stage Développeur Web – Alvarium | 2025",
    desc: "Backend Laravel : IMAP, intégration API OpenAI, MySQL, interface commandes et automation.",
    type: "Expérience",
    typeIcon: FaBriefcase,
    highlights: ["Laravel backend", "IMAP", "API OpenAI"],
    tools: [
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: "PHP", icon: FaPhp, color: "#777BB4" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
    ],
    link: "",
  },
  {
    name: "OlymPix | 2024",
    desc: "Application concours PHP CodeIgniter + SQL avec UML, transactions et tests.",
    type: "Web",
    typeIcon: FaDesktop,
    highlights: ["Transactions SQL", "UML", "App concours"],
    tools: [
      { name: "PHP", icon: FaPhp, color: "#777BB4" },
      { name: "CodeIgniter", icon: SiCodeigniter, color: "#EF4223" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
    link: "https://github.com/Hachim-elomari",
  },
  {
    name: "Gestion VOD | 2024",
    desc: "Application Java + JavaFX pour gestion location films + tests unitaires.",
    type: "Desktop",
    typeIcon: FaDesktop,
    highlights: ["JavaFX", "Tests unitaires", "Architecture POO"],
    tools: [
      { name: "Java", icon: FaJava, color: "#007396" },
      { name: "JavaFX", icon: FaJava, color: "#007396" },
    ],
    link: "https://github.com/Hachim-elomari",
  },
  {
    name: "Ready2Scan | 2024",
    desc: "Boutique surf en PHP + MariaDB + QR Code + UML.",
    type: "Web",
    typeIcon: FaDesktop,
    highlights: ["MariaDB", "QR Code", "UML"],
    tools: [
      { name: "PHP", icon: FaPhp, color: "#777BB4" },
      { name: "MariaDB", icon: SiMariadb, color: "#003545" },
      { name: "UML", icon: FaCode, color: "#3498db" },
    ],
    link: "https://github.com/Hachim-elomari",
  },
  {
    name: "Padlet Manager | 2023",
    desc: "Plateforme web ressources adhérents : HTML/CSS/JS/PHP + MariaDB.",
    type: "Web",
    typeIcon: FaDesktop,
    highlights: ["CRUD", "Auth", "DB MariaDB"],
    tools: [
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss3, color: "#1572B6" },
      { name: "JS", icon: FaJs, color: "#F7DF1E" },
      { name: "PHP", icon: FaPhp, color: "#777BB4" },
      { name: "MariaDB", icon: SiMariadb, color: "#003545" },
    ],
    link: "https://github.com/Hachim-elomari",
  },
  {
    name: "Jeu 2048 | 2025",
    desc: "Jeu 2048 en Kotlin : grille dynamique, déplacements, score et UI.",
    type: "Game / Kotlin",
    typeIcon: FaGamepad,
    highlights: ["Logique de jeu", "UI", "Kotlin"],
    tools: [
      { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
      { name: "IntelliJ", icon: SiIntellijidea, color: "#000000" },
    ],
    link: "https://github.com/Hachim-elomari",
  },
  {
    name: "Space Invaders | 2022",
    desc: "Jeu Python : vagues d’ennemis et système de tir.",
    type: "Game / Python",
    typeIcon: FaGamepad,
    highlights: ["Boucle de jeu", "Collisions", "Python"],
    tools: [{ name: "Python", icon: FaPython, color: "#3776AB" }],
    link: "https://github.com/Hachim-elomari",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Projets & Expériences
          </h2>
          <p className="mt-3 text-slate-600 dark:text-white/70">
            Une sélection orientée recruteur : stack, contexte, valeur.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <div
              key={idx}
              className="group rounded-2xl border border-slate-200/60 bg-white/70 p-6 shadow-sm hover:shadow-xl transition transform hover:-translate-y-1 dark:border-white/10 dark:bg-white/5"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="rounded-lg bg-slate-900/5 p-2 dark:bg-white/10">
                    <p.typeIcon className="text-slate-700 dark:text-white" />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {p.name}
                  </h3>
                </div>

                <span className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600 dark:border-white/10 dark:text-white/70">
                  {p.type}
                </span>
              </div>

              <p className="mt-3 text-sm text-slate-700 dark:text-white/75">
                {p.desc}
              </p>

              {p.highlights?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-white/10 dark:text-white/80"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              ) : null}

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tools.map((t, tIdx) => (
                  <div
                    key={tIdx}
                    className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-800 dark:border-white/10 dark:bg-white/10 dark:text-white/80"
                  >
                    <t.icon size={14} color={t.color} />
                    {t.name}
                  </div>
                ))}
              </div>

              {p.link ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-cyan-700 hover:underline dark:text-cyan-300"
                >
                  Voir le projet <span className="transition group-hover:translate-x-0.5">→</span>
                </a>
              ) : (
                <p className="mt-6 text-sm font-semibold text-slate-500 dark:text-white/50">
                  Repo privé / non publié
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
