import { FaGraduationCap, FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaFlask, FaRocket } from "react-icons/fa"

const education = [
  {
    type: "future",
    title: "Master 2 Informatique",
    org: "Université de Bretagne Occidentale (UBO)",
    location: "Brest, France",
    date: "2026 — 2027",
    details: [
      "Dernière année de Master, en alternance",
      "Spécialisation développement logiciel & architecture",
    ],
  },
  {
    type: "education",
    title: "Master 1 Informatique — Parcours LSE",
    org: "Université de Bretagne Occidentale (UBO)",
    location: "Brest, France",
    date: "2025 — 2026",
    details: [
      "Développement logiciel & web, projets, POO, qualité",
      "Recherche alternance Master 2 à partir de septembre 2026",
    ],
  },
  {
    type: "education",
    title: "Licence Informatique",
    org: "Université de Bretagne Occidentale (UBO)",
    location: "Brest, France",
    date: "2021 — 2025",
    details: ["Bases solides : Java, Python, SQL, Web", "Projets : UML, transactions, tests"],
  },
]

const experience = [
  {
    type: "future",
    title: "Alternance — chez vous ? 👀",
    org: "Poste à pourvoir à partir de septembre 2026",
    location: "Brest ou ailleurs en France",
    date: "sept 2026 — 2027",
    details: [
      "Prêt à rejoindre une équipe tech et contribuer rapidement",
      "Sérieux, motivé, et disponible pour un engagement d'un an",
    ],
  },
  {
    type: "lab",
    title: "Projet TAL — Analyse de Concepts Formels",
    org: "Lab-STICC (UBO)",
    location: "Brest, France",
    date: "avril — juin 2026",
    details: [
      "Extension de l'outil Conexp-NG (Java) : analyse de concepts formels, treillis de Galois",
      "Implémentation de groupes d'attributs pour filtrer et générer des treillis sur sous-ensembles",
      "Transformation de données continues en valeurs booléennes via seuils",
    ],
  },
  {
    type: "experience",
    title: "CHOP' — App mobile de recrutement étudiant",
    org: "Association Chop', Metz",
    location: "Metz, France",
    date: "sep 2025 — avril 2026",
    details: [
      "Conception et développement full-stack d'une app de recrutement étudiant (Android & iOS)",
      "Mise en relation étudiants/entreprises : profils, CV, matching, communication (Flutter/Dart, Laravel/PHP, SQL)",
      "Authentification sécurisée (CAPTCHA, sessions, validation des mots de passe)",
      "Déploiement sur OrangeHost, ~200 téléchargements cumulés",
    ],
  },
  {
    type: "experience",
    title: "Stage Développeur Web (Laravel & IA)",
    org: "Alvartech",
    location: "Lyon, France",
    date: "avril — juin 2025",
    details: [
      "Développement backend Laravel (PHP) + gestion emails (IMAP)",
      "Intégration API IA (OpenAI GPT-4) pour extraction de données (mails + PJ)",
      "Conception MySQL + interface web de gestion des commandes",
    ],
  },
]

function IconBadge({ type }) {
  const base = "flex h-10 w-10 items-center justify-center rounded-xl border shadow-sm shrink-0"
  const style =
    type === "experience"
      ? "border-cyan-200 bg-cyan-50 text-cyan-600 dark:border-cyan-500/25 dark:bg-cyan-500/10 dark:text-cyan-300"
      : type === "lab"
      ? "border-indigo-200 bg-indigo-50 text-indigo-600 dark:border-indigo-500/25 dark:bg-indigo-500/10 dark:text-indigo-300"
      : type === "future"
      ? "border-violet-300 bg-violet-50 text-violet-600 dark:border-violet-400/30 dark:bg-violet-500/10 dark:text-violet-300"
      : "border-emerald-200 bg-emerald-50 text-emerald-600 dark:border-emerald-500/25 dark:bg-emerald-500/10 dark:text-emerald-300"

  const icon =
    type === "experience" ? <FaBriefcase /> :
    type === "lab" ? <FaFlask /> :
    type === "future" ? <FaRocket /> :
    <FaGraduationCap />

  return <div className={`${base} ${style}`}>{icon}</div>
}

function TimelineColumn({ items }) {
  return (
    <div className="relative">
      <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-cyan-300 via-slate-200 to-transparent dark:from-cyan-400/40 dark:via-white/10" />

      <div className="space-y-6">
        {items.map((it, idx) => {
          const isFuture = it.type === "future"
          return (
            <div key={idx} className="relative pl-16 reveal">
              <div className="absolute left-0 top-0">
                <IconBadge type={it.type} />
              </div>

              <div
                className={`card-hover rounded-2xl border p-5 ${
                  isFuture
                    ? "border-dashed border-violet-300 bg-violet-50/50 dark:border-violet-400/30 dark:bg-violet-500/[0.06]"
                    : "border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/[0.06]"
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {it.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-white/60">{it.org}</p>
                  </div>

                  <span
                    className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${
                      isFuture
                        ? "border-violet-200 bg-white text-violet-600 dark:border-violet-400/25 dark:bg-white/[0.06] dark:text-violet-300"
                        : "border-slate-200 bg-white text-slate-600 dark:border-white/10 dark:bg-white/[0.06] dark:text-white/70"
                    }`}
                  >
                    <FaCalendarAlt /> {it.date}
                  </span>
                </div>

                <div className="mt-3 inline-flex items-center gap-2 text-sm text-slate-500 dark:text-white/60">
                  <FaMapMarkerAlt /> {it.location}
                </div>

                <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-white/70">
                  {it.details.map((d) => (
                    <li key={d}>• {d}</li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="text-center reveal">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Parcours
          </h2>
          <p className="mt-3 text-slate-500 dark:text-white/60">
            Formation & expérience.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 reveal-stagger">
          {/* Left: Formation */}
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              🎓 Formation
            </p>
            <TimelineColumn items={education} />
          </div>

          {/* Right: Expérience */}
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
              💼 Expérience professionnelle
            </p>
            <TimelineColumn items={experience} />
          </div>
        </div>
      </div>
    </section>
  )
}