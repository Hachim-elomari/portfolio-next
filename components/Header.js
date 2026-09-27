import { useState, useEffect } from "react"
import { FaGithub, FaFilePdf, FaEnvelope, FaSun, FaMoon } from "react-icons/fa"
import { useTheme } from "../hooks/useTheme"

const nav = [
  { label: "À propos", href: "#about" },
  { label: "Parcours", href: "#timeline" },
  { label: "Compétences", href: "#skills" },
  { label: "Projets", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggle: toggleTheme } = useTheme()
  const isDark = theme === "dark"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="relative overflow-hidden">
      {/* Sticky nav */}
      <div className={`fixed top-0 left-0 right-0 z-50 navbar-glass ${scrolled ? "scrolled" : ""}`}>
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <a href="#" className="font-bold tracking-tight text-slate-900 dark:text-white">
            Hachim<span className="text-cyan-600 dark:text-cyan-300">.dev</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden gap-6 text-sm sm:flex text-slate-500 dark:text-white/70">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="nav-link transition py-1 hover:text-slate-900 dark:hover:text-white"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Changer de thème"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-2.5 text-slate-600 hover:bg-slate-50 transition dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
            >
              {isDark ? <FaSun size={14} /> : <FaMoon size={14} />}
            </button>

            <a
              href="/Mohammed_Hachim_Elomari_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition dark:border-white/15 dark:bg-white/10 dark:text-white"
            >
              <FaFilePdf /> Voir mon CV
            </a>

            <a
              href="#contact"
              className="btn-magnetic inline-flex items-center gap-2 rounded-full bg-cyan-600 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-500 transition dark:bg-cyan-500/90 dark:text-slate-950 dark:hover:bg-cyan-400"
            >
              <FaEnvelope /> Contact
            </a>
          </div>

          {/* Mobile burger */}
          <button
            className="flex flex-col gap-1.5 sm:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <span
              className={`h-0.5 w-6 rounded-full bg-slate-900 dark:bg-white transition-all duration-300 ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 rounded-full bg-slate-900 dark:bg-white transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 rounded-full bg-slate-900 dark:bg-white transition-all duration-300 ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`sm:hidden overflow-hidden transition-all duration-400 ease-out border-t border-slate-200 dark:border-white/10 ${
            mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-transparent"
          } bg-white/95 dark:bg-[rgba(2,6,23,0.95)] backdrop-blur-lg`}
        >
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-1">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-white/70 dark:hover:bg-white/5 dark:hover:text-white transition"
              >
                {n.label}
              </a>
            ))}

            <div className="flex gap-2 mt-2 pt-3 border-t border-slate-200 dark:border-white/10">
              <button
                onClick={toggleTheme}
                className="flex items-center justify-center rounded-full border border-slate-200 bg-white py-2.5 px-4 text-sm font-semibold text-slate-700 dark:border-white/15 dark:bg-white/10 dark:text-white"
              >
                {isDark ? <FaSun size={14} /> : <FaMoon size={14} />}
              </button>

              <a
                href="/Mohammed_Hachim_Elomari_CV.pdf"
                target="_blank"
                className="flex-1 text-center rounded-full border border-slate-200 bg-white py-2.5 text-sm font-semibold text-slate-700 dark:border-white/15 dark:bg-white/10 dark:text-white"
              >
                Voir CV
              </a>

              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="flex-1 text-center rounded-full bg-cyan-600 py-2.5 text-sm font-semibold text-white dark:bg-cyan-500/90 dark:text-slate-950"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-24 text-center">
        {/* Status badge */}
        <div className="hero-enter hero-enter-1 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm text-slate-700 dark:border-white/15 dark:bg-white/5 dark:text-white/80">
          <span className="status-pulse h-2 w-2 rounded-full bg-emerald-400" />
          Recherche stage de fin d'études - Mars 2027
        </div>

        <h1 className="hero-enter hero-enter-2 mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-slate-900 dark:text-white">
          Mohammed Hachim <span className="text-cyan-600 dark:text-cyan-300">ELOMARI</span>
        </h1>

        <p className="hero-enter hero-enter-3 mx-auto mt-3 max-w-2xl text-base sm:text-lg text-slate-600 dark:text-white/80">
          Étudiant en Master 2 Informatique • Développeur Full-Stack • 📍Brest, France
        </p>

        {/* Terminal card */}
        <div className="hero-enter hero-enter-4 mx-auto mt-6 max-w-3xl rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-xl dark:border-white/10 dark:bg-white/5 dark:shadow-2xl backdrop-blur">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
            <span className="h-3 w-3 rounded-full bg-green-400/80" />
            <span className="ml-3 text-sm text-slate-400 dark:text-white/60">~/portfolio</span>
          </div>

          <div className="mt-3 space-y-2.5 font-mono text-sm leading-snug text-slate-700 dark:text-white/80">
            <div>
              <p>$ whoami</p>
              <p className="text-slate-500 dark:text-white/60">
                &gt; Développeur web full-stack (Brest)
              </p>
            </div>

            <div>
              <p>$ stack</p>
              <p className="text-slate-500 dark:text-white/60">
                &gt; Java • Spring Boot • React • Angular • Laravel • Flutter
              </p>
            </div>

            <div>
              <p>$ focus</p>
              <p className="text-slate-500 dark:text-white/60">
                &gt; Développement logiciel, API REST, bases de données
              </p>
            </div>

            <div>
              <p>$ contact --now</p>
              <p className="text-slate-500 dark:text-white/60">
                &gt; email / linkedin / github
              </p>
            </div>
          </div>

          <div className="mt-2 text-sm text-slate-400 dark:text-white/50 terminal-cursor">
            <span className="text-cyan-600 dark:text-cyan-400">❯</span> _
          </div>
        </div>

        {/* CTA */}
        <div className="hero-enter hero-enter-5 mt-6 flex flex-wrap justify-center gap-3">
          <a
            href="https://github.com/Hachim-elomari"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 font-semibold text-slate-700 hover:bg-slate-50 transition dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
          >
            <FaGithub /> GitHub
          </a>

          <a
            href="/Mohammed_Hachim_Elomari_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-magnetic inline-flex items-center gap-2 rounded-full bg-cyan-600 px-5 py-2.5 font-semibold text-white hover:bg-cyan-500 transition dark:bg-cyan-500/90 dark:text-slate-950"
          >
            <FaFilePdf /> Télécharger CV
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 font-semibold text-slate-700 hover:bg-slate-50 transition dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
          >
            <FaEnvelope /> Contact
          </a>
        </div>
      </div>
    </header>
  )
}