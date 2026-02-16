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
      // fallback: ouvre mailto si clipboard pas dispo
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl border border-slate-200/60 bg-white/70 p-8 shadow-sm dark:border-white/10 dark:bg-white/5">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Contact
              </h2>
              <p className="mt-3 text-slate-600 dark:text-white/70">
                Disponible pour stage / alternance / CDI à partir d’avril 2026.
                Réponse rapide par email.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 font-semibold text-white hover:bg-slate-800 transition dark:bg-white dark:text-slate-950 dark:hover:bg-white/90"
                >
                  <MdEmail /> Envoyer un email
                </a>

                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-slate-50 transition dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
                >
                  {copied ? <FaCheck /> : <FaCopy />}
                  {copied ? "Copié !" : "Copier email"}
                </button>
              </div>

              <p className="mt-3 text-sm text-slate-500 dark:text-white/60">
                {email}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/10">
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
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-slate-50 transition dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
                  >
                    <l.icon /> {l.name}
                  </a>
                ))}
              </div>

              <div className="mt-6 rounded-xl bg-slate-50 p-4 text-sm text-slate-700 dark:bg-white/10 dark:text-white/80">
                <span className="font-semibold">Stack :</span> Laravel / PHP / MySQL / Flutter / Tailwind
              </div>
            </div>
          </div>

          <footer className="mt-10 border-t border-slate-200/60 pt-6 text-sm text-slate-500 dark:border-white/10 dark:text-white/60">
            © 2026 Mohammed Hachim ELOMARI — Tous droits réservés
          </footer>
        </div>
      </div>
    </section>
  )
}
