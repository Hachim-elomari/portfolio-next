import { FaGraduationCap, FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaFlask } from "react-icons/fa"

const items = [
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
    type: "education",
    title: "Master 1 Informatique — Parcours LSE",
    org: "Université de Bretagne Occidentale (UBO)",
    location: "Brest, France",
    date: "2025 — en cours",
    details: [
      "Développement logiciel & web, projets, POO, qualité",
      "Recherche alternance Master 2 à partir de septembre 2026",
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
  {
    type: "education",
    title: "Licence Informatique",
    org: "Université de Bretagne Occidentale (UBO)",
    location: "Brest, France",
    date: "2021 — 2025",
    details: ["Bases solides : Java, Python, SQL, Web", "Projets : UML, transactions, tests"],
  },
]

function IconBadge({ type }) {
  const base = "flex h-10 w-10 items-center justify-center rounded-xl border shadow-sm"
  const style =
    type === "experience"
      ? "border-cyan-200 bg-cyan-50 text-cyan-600 dark:border-cyan-500/25 dark:bg-cyan-500/10 dark:text-cyan-300"
      : type === "lab"
      ? "border-indigo-200 bg-indigo-50 text-indigo-600 dark:border-indigo-500/25 dark:bg-indigo-500/10 dark:text-indigo-300"
      : "border-emerald-200 bg-emerald-50 text-emerald-600 dark:border-emerald-500/25 dark:bg-emerald-500/10 dark:text-emerald-300"

  const icon =
    type === "experience" ? <FaBriefcase /> : type === "lab" ? <FaFlask /> : <FaGraduationCap />

  return <div className={`${base} ${style}`}>{icon}</div>
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

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Left: timeline */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04] reveal">
            <div className="relative">
              <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-cyan-300 via-slate-200 to-transparent dark:from-cyan-400/40 dark:via-white/10" />

              <div className="space-y-8">
                {items.map((it, idx) => (
                  <div key={idx} className="relative pl-16 reveal">
                    <div className="absolute left-0 top-0">
                      <IconBadge type={it.type} />
                    </div>

                    <div className="card-hover rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/[0.06]">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                            {it.title}
                          </h3>
                          <p className="text-sm text-slate-500 dark:text-white/60">
                            {it.org}
                          </p>
                        </div>

                        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600 dark:border-white/10 dark:bg-white/[0.06] dark:text-white/70">
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
                ))}
              </div>
            </div>
          </div>

          {/* Right: availability */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04] reveal">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Disponibilité & Objectifs
            </h3>

            <div className="mt-4 grid gap-4 reveal-stagger">
              <div className="card-hover rounded-2xl border border-teal-200 bg-teal-50 p-5 dark:border-teal-500/30 dark:bg-teal-500/10">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  Alternance (Master 2)
                </p>
                <p className="mt-1 text-sm text-slate-600 dark:text-white/70">
                  À partir de septembre 2026 — développement web / mobile, back-end, API, montée en compétence et livraison en prod.
                </p>
              </div>

              <div className="card-hover rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/[0.06]">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  Ce que tu peux attendre de moi
                </p>
                <ul className="mt-2 space-y-2 text-sm text-slate-600 dark:text-white/70">
                  <li>• Features livrées proprement (back + DB + UI)</li>
                  <li>• Code lisible, structuré, Git fluide</li>
                  <li>• Sérieux sur la qualité (tests, validation, perf)</li>
                </ul>
              </div>

              <a
                href="#contact"
                className="btn-magnetic mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-600 px-6 py-4 font-semibold text-white hover:bg-cyan-500 transition dark:bg-cyan-500/90 dark:text-slate-950 dark:hover:bg-cyan-400"
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