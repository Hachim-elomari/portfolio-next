import { MdEmail } from "react-icons/md"
import { FaLinkedin, FaGithub, FaMapMarkerAlt, FaGraduationCap, FaRocket } from "react-icons/fa"

const languages = ["Français", "Anglais", "Arabe", "Espagnol"]

export default function About() {
  return (
    <section id="about" className="relative py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="text-center reveal">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            À propos
          </h2>
          <p className="mt-3 text-slate-500 dark:text-white/60">
            Profil, objectifs, et ce que j'apporte à une équipe.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3 reveal-stagger">
          {/* Card 1 */}
          <div className="card-hover rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
            <div className="flex items-center gap-3">
              <span className="rounded-xl bg-slate-100 p-3 dark:bg-white/10">
                <FaMapMarkerAlt className="text-slate-600 dark:text-white/80" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Mohammed Hachim ELOMARI
                </h3>
                <p className="text-sm text-slate-500 dark:text-white/60">
                  Brest • Développeur web full-stack
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-white/70">
              Je développe des applications web/mobile orientées produit : fonctionnalités utiles,
              code lisible, et intégration back-end propre (API, base de données, auth, etc.).
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {languages.map((l) => (
                <span
                  key={l}
                  className="tool-badge rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/[0.06] dark:text-white/70"
                >
                  {l}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2 */}
          <div className="card-hover rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
            <div className="flex items-center gap-3">
              <span className="rounded-xl bg-slate-100 p-3 dark:bg-white/10">
                <FaGraduationCap className="text-slate-600 dark:text-white/80" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Formation
                </h3>
                <p className="text-sm text-slate-500 dark:text-white/60">
                  Master 1 Informatique — UBO
                </p>
              </div>
            </div>

            <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-white/70">
              <li>• Dév web : PHP/Laravel, SQL, front moderne</li>
              <li>• Algo / POO : Java, Python</li>
              <li>• Projets : UML, transactions, tests</li>
            </ul>

            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600 dark:border-white/10 dark:bg-white/[0.06] dark:text-white/70">
              <span className="font-semibold text-slate-900 dark:text-white">Disponibilité :</span> Avril 2026 (stage/alternance/CDI)
            </div>
          </div>

          {/* Card 3 */}
          <div className="card-hover rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
            <div className="flex items-center gap-3">
              <span className="rounded-xl bg-slate-100 p-3 dark:bg-white/10">
                <FaRocket className="text-slate-600 dark:text-white/80" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Ce que je recherche
                </h3>
                <p className="text-sm text-slate-500 dark:text-white/60">
                  Équipe produit / tech, missions concrètes
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-white/70">
              Une équipe où je peux livrer vite, apprendre, et contribuer : features, API, DB,
              intégrations, et qualité de code.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:elomarihachim@gmail.com"
                className="btn-magnetic inline-flex items-center gap-2 rounded-full bg-cyan-600 px-5 py-3 text-sm font-semibold text-white hover:bg-cyan-500 transition dark:bg-cyan-500/90 dark:hover:bg-cyan-400 dark:text-slate-950"
              >
                <MdEmail size={18} /> Email
              </a>

              <a
                href="https://www.linkedin.com/in/mohammed-hachim-elomari-929162250/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition dark:border-white/10 dark:bg-white/[0.06] dark:text-white dark:hover:bg-white/10"
              >
                <FaLinkedin size={18} /> LinkedIn
              </a>

              <a
                href="https://github.com/Hachim-elomari"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition dark:border-white/10 dark:bg-white/[0.06] dark:text-white dark:hover:bg-white/10"
              >
                <FaGithub size={18} /> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}