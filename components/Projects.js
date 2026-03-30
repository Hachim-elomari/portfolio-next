import {
  FaJava, FaPython, FaPhp, FaJs, FaGitAlt, FaCode,
  FaMobileAlt, FaDesktop, FaGamepad, FaBriefcase,
} from "react-icons/fa"
import {
  SiKotlin, SiDart, SiFlutter, SiLaravel, SiCodeigniter,
  SiMysql, SiMariadb, SiHtml5, SiCss3, SiIntellijidea,
} from "react-icons/si"

const projects = [
  {
    name: "CHOP'",
    period: "2025 - En cours",
    desc: "App Android/iOS pour étudiants & entreprises : profils, CV, match, chat, calendrier d'entretiens, suivi d'évaluations.",
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
    link: "",
    featured: true,
  },
  {
    name: "Stage Développeur Web – Alvarium",
    period: "2025",
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
    featured: true,
  },
  {
    name: "OlymPix",
    period: "2024",
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
    name: "Gestion VOD",
    period: "2024",
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
    name: "Ready2Scan",
    period: "2024",
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
    name: "Padlet Manager",
    period: "2023",
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
    name: "Jeu 2048",
    period: "2025",
    desc: "Jeu 2048 en Kotlin : grille dynamique, déplacements, score et UI.",
    type: "Game / Kotlin",
    typeIcon: FaGamepad,
    highlights: ["Logique de jeu", "UI", "Kotlin"],
    tools: [
      { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
      { name: "IntelliJ", icon: SiIntellijidea, color: "#6B57FF" },
    ],
    link: "https://github.com/Hachim-elomari",
  },
  {
    name: "Space Invaders",
    period: "2022",
    desc: "Jeu Python : vagues d'ennemis et système de tir.",
    type: "Game / Python",
    typeIcon: FaGamepad,
    highlights: ["Boucle de jeu", "Collisions", "Python"],
    tools: [{ name: "Python", icon: FaPython, color: "#3776AB" }],
    link: "https://github.com/Hachim-elomari",
  },
]

function ProjectCard({ p }) {
  const isFeatured = p.featured
  return (
    <div
      className={`group card-hover rounded-2xl border p-6 shadow-sm ${
        isFeatured
          ? "featured-glow border-cyan-200 bg-white dark:border-cyan-500/20 dark:bg-white/[0.04]"
          : "border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.04]"
      }`}
    >
      <div className="relative z-10">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="rounded-lg bg-slate-100 p-2 dark:bg-white/10">
              <p.typeIcon className="text-slate-600 dark:text-white/80" />
            </span>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {p.name}
              </h3>
              <p className="text-xs text-slate-400 dark:text-white/40">{p.period}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isFeatured && (
              <span className="rounded-full border border-cyan-200 bg-cyan-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-cyan-600 dark:border-cyan-400/25 dark:bg-cyan-500/10 dark:text-cyan-300">
                ★ Phare
              </span>
            )}
            <span className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-500 dark:border-white/10 dark:text-white/60">
              {p.type}
            </span>
          </div>
        </div>

        <p className="mt-3 text-sm text-slate-600 dark:text-white/70">{p.desc}</p>

        {p.highlights?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {p.highlights.map((h) => (
              <span
                key={h}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-white/[0.08] dark:text-white/70"
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
              className="tool-badge flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 dark:border-white/10 dark:bg-white/[0.06] dark:text-white/80"
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
            className="link-arrow mt-6 inline-flex items-center gap-2 font-semibold text-cyan-600 hover:underline dark:text-cyan-300"
          >
            Voir le projet <span className="transition">→</span>
          </a>
        ) : (
          <p className="mt-6 text-sm font-semibold text-slate-400 dark:text-white/40">
            Repo privé / non publié
          </p>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="text-center reveal">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Projets & Expériences
          </h2>
          <p className="mt-3 text-slate-500 dark:text-white/60">
            Une sélection orientée recruteur : stack, contexte, valeur.
          </p>
        </div>

        {/* Featured */}
        <div className="mt-12 reveal">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
            ★ Projets phares
          </p>
          <div className="grid gap-6 md:grid-cols-2 reveal-stagger">
            {featured.map((p, idx) => (
              <ProjectCard key={idx} p={p} />
            ))}
          </div>
        </div>

        {/* Others */}
        <div className="mt-10 reveal">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-white/40">
            Tous les projets
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 reveal-stagger">
            {others.map((p, idx) => (
              <ProjectCard key={idx} p={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}