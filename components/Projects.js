import {
  FaJava, FaPython, FaPhp, FaJs, FaGitAlt, FaCode,
  FaMobileAlt, FaDesktop, FaGamepad, FaBriefcase, FaChartLine,
  FaFlask,
} from "react-icons/fa"
import {
  SiKotlin, SiDart, SiFlutter, SiLaravel, SiCodeigniter,
  SiMysql, SiMariadb, SiPostgresql, SiHtml5, SiCss3, SiIntellijidea,
  SiSpringboot, SiAngular,
} from "react-icons/si"

const projects = [
  {
    name: "CHOP'",
    period: "Sep 2025 - Avril 2026",
    desc: "Application mobile de mise en relation étudiants/entreprises avec gestion des profils, CV, matching et messagerie. Déployée sur Android et iOS, avec environ 200 téléchargements cumulés.",
    type: "Mobile + API",
    typeIcon: FaMobileAlt,
    highlights: ["Matching", "Messagerie", "API REST", "Authentification"],
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
    name: "SmartFinance",
    period: "Projet personnel - En cours",
    desc: "Application full-stack de gestion financière personnelle avec suivi des dépenses, analyse des habitudes financières et planification d'objectifs d'épargne.",
    type: "Web",
    typeIcon: FaChartLine,
    highlights: ["REST API", "JWT", "Dashboard", "Full-stack"],
    tools: [
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "Java", icon: FaJava, color: "#007396" },
      { name: "Angular", icon: SiAngular, color: "#DD0031" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    ],
    link: "https://github.com/Hachim-elomari",
    featured: true,
  },
  {
    name: "Conexp-NG",
    period: "Avril - Juin 2026",
    desc: "Extension d'un outil Java d'analyse de concepts formels. Ajout de groupes d'attributs et automatisation de la transformation de données continues en valeurs booléennes.",
    type: "Java / Recherche",
    typeIcon: FaFlask,
    highlights: ["Java", "Treillis de Galois", "Automatisation"],
    tools: [
      { name: "Java", icon: FaJava, color: "#007396" },
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
    ],
    link: "",
    featured: true,
  },
  {
    name: "Stage Développement Web - Alvartech",
    period: "Avril - Juin 2025",
    desc: "Développement d'un backend Laravel avec gestion des e-mails via IMAP, intégration de l'API OpenAI GPT-4 et interface web de gestion des commandes.",
    type: "Expérience",
    typeIcon: FaBriefcase,
    highlights: ["Laravel", "IMAP", "API OpenAI", "MySQL"],
    tools: [
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: "PHP", icon: FaPhp, color: "#777BB4" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
    ],
    link: "",
    featured: false,
  },
  {
    name: "OlymPix",
    period: "2024",
    desc: "Application web de gestion de concours développée avec PHP et CodeIgniter, avec modélisation UML, gestion des transactions et tests de validation.",
    type: "Web",
    typeIcon: FaDesktop,
    highlights: ["PHP", "CodeIgniter", "SQL", "UML"],
    tools: [
      { name: "PHP", icon: FaPhp, color: "#777BB4" },
      { name: "CodeIgniter", icon: SiCodeigniter, color: "#EF4223" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
    link: "https://github.com/Hachim-elomari",
    featured: false,
  },
  {
    name: "Gestion VOD",
    period: "2024",
    desc: "Application Java avec JavaFX pour la gestion d'une plateforme de location de films : comptes, réservations, films, artistes et évaluations.",
    type: "Desktop",
    typeIcon: FaDesktop,
    highlights: ["Java", "JavaFX", "POO", "JUnit"],
    tools: [
      { name: "Java", icon: FaJava, color: "#007396" },
      { name: "JavaFX", icon: FaJava, color: "#007396" },
    ],
    link: "https://github.com/Hachim-elomari",
    featured: false,
  },
  {
    name: "Ready2Scan",
    period: "2024",
    desc: "Application web de gestion d'une boutique de surf développée en PHP avec MariaDB et génération de QR codes.",
    type: "Web",
    typeIcon: FaDesktop,
    highlights: ["PHP", "MariaDB", "QR Code", "UML"],
    tools: [
      { name: "PHP", icon: FaPhp, color: "#777BB4" },
      { name: "MariaDB", icon: SiMariadb, color: "#003545" },
      { name: "UML", icon: FaCode, color: "#3498db" },
    ],
    link: "https://github.com/Hachim-elomari",
    featured: false,
  },
  {
    name: "Padlet Manager",
    period: "2023",
    desc: "Plateforme web de gestion de ressources avec authentification, opérations CRUD et base de données MariaDB.",
    type: "Web",
    typeIcon: FaDesktop,
    highlights: ["CRUD", "Authentification", "MariaDB"],
    tools: [
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss3, color: "#1572B6" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "PHP", icon: FaPhp, color: "#777BB4" },
      { name: "MariaDB", icon: SiMariadb, color: "#003545" },
    ],
    link: "https://github.com/Hachim-elomari",
    featured: false,
  },
  {
    name: "Jeu 2048",
    period: "2025",
    desc: "Implémentation du jeu 2048 en Kotlin avec grille dynamique, gestion des déplacements, calcul du score et interface utilisateur.",
    type: "Game / Kotlin",
    typeIcon: FaGamepad,
    highlights: ["Kotlin", "Logique de jeu", "UI"],
    tools: [
      { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
      { name: "IntelliJ", icon: SiIntellijidea, color: "#6B57FF" },
    ],
    link: "https://github.com/Hachim-elomari",
    featured: false,
  },
  {
    name: "Space Invaders",
    period: "2022",
    desc: "Jeu développé en Python avec gestion des vagues d'ennemis, déplacements, tirs et collisions.",
    type: "Game / Python",
    typeIcon: FaGamepad,
    highlights: ["Python", "Boucle de jeu", "Collisions"],
    tools: [
      { name: "Python", icon: FaPython, color: "#3776AB" },
    ],
    link: "https://github.com/Hachim-elomari",
    featured: false,
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
              <p className="text-xs text-slate-400 dark:text-white/40">
                {p.period}
              </p>
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

        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-white/70">
          {p.desc}
        </p>

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
            Une sélection de projets web, mobile et logiciel.
          </p>
        </div>

        {/* Featured */}
        <div className="mt-12 reveal">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
            ★ Projets phares
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 reveal-stagger">
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