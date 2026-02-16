import { FaGraduationCap, FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa"

const items = [
  {
    type: "education",
    title: "Master 1 Informatique — Parcours LSE",
    org: "Université de Bretagne Occidentale (UBO)",
    location: "Brest, France",
    date: "2025 — en cours",
    details: [
      "Développement logiciel & web, projets, POO, qualité",
      "Objectif : stage 2–4 mois à partir d’avril 2026",
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
  {
    type: "experience",
    title: "Stage Développeur Web (Laravel & IA)",
    org: "Alvarium",
    location: "Lyon, France",
    date: "avril — juin 2025",
    details: [
      "Développement backend Laravel (PHP) + gestion emails (IMAP)",
      "Intégration API IA (OpenAI) pour extraction de données (mails + PJ)",
      "Conception MySQL + interface web de gestion des commandes",
    ],
  },
]

function IconBadge({ type }) {
  const base =
    "flex h-10 w-10 items-center justify-center rounded-xl border shadow-sm backdrop-blur"
  const style =
    type === "experience"
      ? "border-cyan-500/25 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300"
      : "border-emerald-500/25 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"

  return (
    <div className={`${base} ${style}`}>
      {type === "experience" ? <FaBriefcase /> : <FaGraduationCap />}
    </div>
  )
}

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Parcours
          </h2>
          <p className="mt-3 text-slate-600 dark:text-white/70">
            Formation & expérience — focus sur ce qui intéresse les recruteurs.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Left: timeline */}
          <div className="rounded-2xl border border-slate-200/60 bg-white/70 p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
            <div className="relative">
              {/* vertical line */}
              <div className="absolute left-5 top-0 h-full w-px bg-slate-200 dark:bg-white/10" />

              <div className="space-y-8">
                {items.map((it, idx) => (
                  <div key={idx} className="relative pl-16">
                    <div className="absolute left-0 top-0">
                      <IconBadge type={it.type} />
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/10">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                            {it.title}
                          </h3>
                          <p className="text-sm text-slate-600 dark:text-white/70">
                            {it.org}
                          </p>
                        </div>

                        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 dark:border-white/10 dark:bg-white/10 dark:text-white/80">
                          <FaCalendarAlt /> {it.date}
                        </span>
                      </div>

                      <div className="mt-3 inline-flex items-center gap-2 text-sm text-slate-600 dark:text-white/70">
                        <FaMapMarkerAlt /> {it.location}
                      </div>

                      <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-white/75">
                        {it.details.map((d) => (
                          <li key={d}>• {d}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: CTA / availability */}
          <div className="rounded-2xl border border-slate-200/60 bg-white/70 p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Disponibilité & Objectifs
            </h3>

            <div className="mt-4 grid gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/10">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  Stage (2 à 4 mois)
                </p>
                <p className="mt-1 text-sm text-slate-600 dark:text-white/70">
                  À partir d’avril 2026 — développement web / logiciel, back-end, API, SQL.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/10">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  Alternance (Master 2)
                </p>
                <p className="mt-1 text-sm text-slate-600 dark:text-white/70">
                  À partir de septembre 2026 — montée en compétence + livraison en prod.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/10">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  Ce que tu peux attendre de moi
                </p>
                <ul className="mt-2 space-y-2 text-sm text-slate-700 dark:text-white/75">
                  <li>• Features livrées proprement (back + DB + UI)</li>
                  <li>• Code lisible, structuré, Git fluide</li>
                  <li>• Sérieux sur la qualité (tests, validation, perf)</li>
                </ul>
              </div>

              <a
                href="#contact"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-500/90 px-6 py-4 font-semibold text-slate-950 hover:bg-cyan-400 transition"
              >
                Me contacter
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
