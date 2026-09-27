const education = [
  {
    type: "future",
    title: "Master 2 Informatique",
    org: "Université de Bretagne Occidentale (UBO)",
    logo: "/logos/ubo.png",
    alt: "Logo Université de Bretagne Occidentale",
    location: "Brest, France",
    date: "2026 — 2027",
    details: [
      "Dernière année de Master",
      "Développement logiciel, conception d'applications et projets informatiques",
    ],
  },
  {
    type: "education",
    title: "Master 1 Informatique - Parcours LSE",
    org: "Université de Bretagne Occidentale (UBO)",
    logo: "/logos/ubo.png",
    alt: "Logo Université de Bretagne Occidentale",
    location: "Brest, France",
    date: "2025 — 2026",
    details: [
      "Développement logiciel et web, programmation orientée objet, qualité logicielle",
      "Projets universitaires en Java, Go et développement logiciel",
    ],
  },
  {
    type: "education",
    title: "Licence Informatique",
    org: "Université de Bretagne Occidentale (UBO)",
    logo: "/logos/ubo.png",
    alt: "Logo Université de Bretagne Occidentale",
    location: "Brest, France",
    date: "2021 — 2025",
    details: [
      "Bases solides en Java, Python, SQL et développement web",
      "Projets : UML, bases de données, transactions et tests",
    ],
  },
]

const experience = [
  {
    type: "lab",
    title: "Stage TAL - Analyse de Concepts Formels",
    org: "Lab-STICC (UBO)",
    logo: "/logos/lab-sticc.png",
    alt: "Logo Lab-STICC",
    location: "Brest, France",
    date: "avril — juin 2026",
    details: [
      "Extension de l'outil Conexp-NG en Java pour l'analyse de concepts formels et les treillis de Galois",
      "Implémentation de groupes d'attributs pour filtrer et générer des treillis sur des sous-ensembles de données",
      "Automatisation de la transformation de données continues en valeurs booléennes à partir de seuils",
    ],
  },
  {
    type: "experience",
    title: "CHOP' - Application mobile de recrutement étudiant",
    org: "Association Chop'",
    logo: "/logos/chop.png",
    alt: "Logo CHOP'",
    location: "Metz, France",
    date: "sept 2025 — avril 2026",
    details: [
      "Conception et développement full-stack d'une application de recrutement étudiant pour Android et iOS",
      "Développement des profils, CV, matching et messagerie avec Flutter, Laravel et SQL",
      "Mise en place d'une authentification sécurisée avec CAPTCHA, gestion des sessions et validation des mots de passe",
      "Déploiement sur OrangeHost, avec environ 200 téléchargements cumulés",
    ],
  },
  {
    type: "experience",
    title: "Stage - Développement Web & Intégration IA",
    org: "Alvartech",
    logo: "/logos/alvartech.png",
    alt: "Logo Alvartech",
    location: "Lyon, France",
    date: "avril — juin 2025",
    details: [
      "Développement du backend en Laravel (PHP) et automatisation de la gestion des e-mails via IMAP",
      "Intégration de l'API OpenAI GPT-4 pour automatiser l'extraction de données depuis les e-mails et pièces jointes",
      "Conception de la base de données MySQL et développement de l'interface web de gestion des commandes",
    ],
  },
]

function LogoBadge({ src, alt }) {
  return (
    <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white p-2 shadow-sm dark:border-white/10 dark:bg-white">
      <img
        src={src}
        alt={alt}
        className="max-h-full max-w-full object-contain"
      />
    </div>
  )
}

function TimelineColumn({ items }) {
  return (
    <div className="relative">
      <div className="absolute left-7 top-0 h-full w-px bg-gradient-to-b from-cyan-300 via-slate-200 to-transparent dark:from-cyan-400/40 dark:via-white/10" />

      <div className="space-y-6">
        {items.map((it, idx) => {
          const isFuture = it.type === "future"

          return (
            <div key={idx} className="relative pl-20 reveal">
              <div className="absolute left-0 top-0">
                <LogoBadge src={it.logo} alt={it.alt} />
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

                    <p className="text-sm text-slate-500 dark:text-white/60">
                      {it.org}
                    </p>
                  </div>

                  <span
                    className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${
                      isFuture
                        ? "border-violet-200 bg-white text-violet-600 dark:border-violet-400/25 dark:bg-white/[0.06] dark:text-violet-300"
                        : "border-slate-200 bg-white text-slate-600 dark:border-white/10 dark:bg-white/[0.06] dark:text-white/70"
                    }`}
                  >
                    {it.date}
                  </span>
                </div>

                <div className="mt-3 text-sm text-slate-500 dark:text-white/60">
                  {it.location}
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