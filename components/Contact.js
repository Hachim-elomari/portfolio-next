import { useState } from "react"
import { MdEmail } from "react-icons/md"
import { FaLinkedin, FaGithub, FaCopy, FaCheck } from "react-icons/fa"

export default function Contact() {
  const email = "elomarihachim@gmail.com"
  const [copied, setCopied] = useState(false)

  const links = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/mohammed-hachim-elomari-929162250/", icon: FaLinkedin },
    { name: "GitHub", url: "https://github.com/Hachim-elomari", icon: FaGithub },
  ]

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1200)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/[0.04] reveal">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Contact
              </h2>
              <p className="mt-3 text-slate-500 dark:text-white/60">
                Disponible pour stage / alternance / CDI à partir d'avril 2026.
                Réponse rapide par email.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`mailto:${email}`}
                  className="btn-magnetic inline-flex items-center gap-2 rounded-full bg-cyan-600 px-5 py-3 font-semibold text-white hover:bg-cyan-500 transition dark:bg-cyan-500/90 dark:text-slate-950 dark:hover:bg-cyan-400"
                >
                  <MdEmail /> Envoyer un email
                </a>

                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50 transition dark:border-white/10 dark:bg-white/[0.06] dark:text-white dark:hover:bg-white/10"
                >
                  {copied ? <FaCheck className="text-emerald-500" /> : <FaCopy />}
                  {copied ? "Copié !" : "Copier email"}
                </button>
              </div>

              <p className="mt-3 text-sm text-slate-400 dark:text-white/50">
                {email}
              </p>
            </div>

            <div className="card-hover rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/[0.06]">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Me retrouver
              </h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {links.map((l) => (
                  <a
                    key={l.name}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-arrow inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50 transition dark:border-white/10 dark:bg-white/[0.06] dark:text-white dark:hover:bg-white/10"
                  >
                    <l.icon /> {l.name} <span>→</span>
                  </a>
                ))}
              </div>

              <div className="mt-6 rounded-xl bg-slate-100 p-4 text-sm text-slate-600 dark:bg-white/[0.06] dark:text-white/70">
                <span className="font-semibold text-slate-900 dark:text-white">Stack :</span> Laravel / PHP / MySQL / Flutter / Tailwind
              </div>
            </div>
          </div>

          <footer className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-400 dark:border-white/10 dark:text-white/50 no-print">
            © 2026 Mohammed Hachim ELOMARI — Tous droits réservés
          </footer>
        </div>
      </div>
    </section>
  )
}