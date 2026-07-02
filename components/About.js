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
            Qui je suis, ce que j'aime faire, et ce que je cherche.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3 reveal-stagger">
          {/* Card 1 - About */}
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
              Je suis un dev full-stack qui adore construire des trucs concrets — des apps qu'on peut vraiment utiliser. Passionné par JavaScript, React et l'architecture logicielle, j'aime aussi bien coder une API robuste qu'une interface qui tue.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-white/70">
              J'ai pas peur d'explorer : Flutter mobile, intégration GPT-4 en production, Spring Boot... toujours en train d'apprendre en faisant. Ce que je cherche : du code de qualité, de l'impact, et une équipe motivée.
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

          {/* Card 2 - Formation & Alternance */}
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
              <li>• Développement web : PHP/Laravel, React, Next.js, Angular</li>
              <li>• Mobile : Flutter, Dart, Kotlin</li>
              <li>• Backend : Spring Boot, Java, APIs REST</li>
              <li>• Bases de données : PostgreSQL, MySQL, MariaDB</li>
              <li>• DevOps : Git, Docker basics, déploiement</li>
            </ul>

            <div className="mt-6 rounded-xl border border-teal-200 bg-teal-50 p-4 text-sm text-teal-700 dark:border-teal-500/30 dark:bg-teal-500/10 dark:text-teal-300">
              <span className="font-semibold">Disponibilité :</span> Alternance Master 2 à partir de septembre 2026
            </div>
          </div>

          {/* Card 3 - Ce que je recherche */}
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
                  Alternance, mission concrète
                </p>
              </div>
            </div>

            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-600 dark:text-white/70">
              <li>✓ Une équipe tech motivée où je peux vraiment contribuer</li>
              <li>✓ Des projets concrets avec impact (features, API, architecture)</li>
              <li>✓ Apprendre en faisant et progresser rapidement</li>
              <li>✓ Du code qu'on maintient, qu'on améliore, pas du jetable</li>
            </ul>

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