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
      {/* ── Sticky nav ── */}
      <div className={`fixed top-0 left-0 right-0 z-50 navbar-glass ${scrolled ? "scrolled" : ""}`}>
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <a href="#" className={`font-bold tracking-tight ${scrolled ? "text-slate-900 dark:text-white" : "text-white"}`}>
            Hachim<span className={scrolled ? "text-cyan-600 dark:text-cyan-300" : "text-cyan-300"}>.dev</span>
          </a>

          {/* Desktop nav */}
          <nav className={`hidden gap-6 text-sm sm:flex ${scrolled ? "text-slate-500 dark:text-white/70" : "text-white/70"}`}>
            {nav.map((n) => (
              <a key={n.href} href={n.href} className={`nav-link transition py-1 ${scrolled ? "hover:text-slate-900 dark:hover:text-white" : "hover:text-white"}`}>
                {n.label}
              </a>
            ))}
          </nav>

          <div className="hidden sm:flex items-center gap-2">
            {/* Theme toggle */}
            

            <a
              href="/Mohammed_Hachim_Elomari_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                scrolled
                  ? "border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200 dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
                  : "border-white/15 bg-white/10 text-white hover:bg-white/15"
              }`}
            >
              <FaFilePdf /> Voir mon CV
            </a>
            <a
              href="#contact"
              className="btn-magnetic inline-flex items-center gap-2 rounded-full bg-cyan-500/90 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-400 transition"
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
            <span className={`h-0.5 w-6 rounded-full transition-all duration-300 ${scrolled ? "bg-slate-900 dark:bg-white" : "bg-white"} ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 rounded-full transition-all duration-300 ${scrolled ? "bg-slate-900 dark:bg-white" : "bg-white"} ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 rounded-full transition-all duration-300 ${scrolled ? "bg-slate-900 dark:bg-white" : "bg-white"} ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`sm:hidden overflow-hidden transition-all duration-400 ease-out border-t border-white/10 ${
            mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-transparent"
          }`}
          style={{ background: "rgba(11, 18, 32, 0.95)", backdropFilter: "blur(16px)" }}
        >
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-1">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-white/70 hover:bg-white/5 hover:text-white transition"
              >
                {n.label}
              </a>
            ))}
            <div className="flex gap-2 mt-2 pt-3 border-t border-white/10">
              <button
                onClick={toggleTheme}
                className="flex items-center justify-center rounded-full border border-white/15 bg-white/10 py-2.5 px-4 text-sm font-semibold text-white"
              >
                {isDark ? <FaSun size={14} /> : <FaMoon size={14} />}
              </button>
              <a
                href="/Mohammed_Hachim_Elomari_CV.pdf"
                target="_blank"
                className="flex-1 text-center rounded-full border border-white/15 bg-white/10 py-2.5 text-sm font-semibold text-white"
              >
                Voir CV
              </a>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="flex-1 text-center rounded-full bg-cyan-500/90 py-2.5 text-sm font-semibold text-slate-950"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Background ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.25) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />

      {/* ── Content ── */}
      <div className="relative mx-auto max-w-6xl px-4 py-20 pt-28 text-center text-white">
        {/* Status badge */}
        <div className="hero-enter hero-enter-1 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80">
          <span className="status-pulse h-2 w-2 rounded-full bg-emerald-400" />
          Disponible à partir d'avril 2026
        </div>

        <h1 className="hero-enter hero-enter-2 mt-6 text-5xl font-extrabold tracking-tight sm:text-6xl">
          Mohammed Hachim <span className="text-cyan-300">ELOMARI</span>
        </h1>

        <p className="hero-enter hero-enter-3 mx-auto mt-4 max-w-2xl text-lg text-white/80">
          Étudiant en Master Informatique • Développeur Web Full-Stack • 📍Brest, France
        </p>

        {/* Terminal card */}
        <div className="hero-enter hero-enter-4 mx-auto mt-10 max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-6 text-left shadow-2xl backdrop-blur">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
            <span className="h-3 w-3 rounded-full bg-green-400/80" />
            <span className="ml-3 text-sm text-white/60">~/portfolio</span>
          </div>
          <pre className="mt-4 overflow-x-auto text-sm leading-relaxed text-white/80">
            <code>
{`$ whoami
> Développeur web fullstack (Brest)

$ stack
> Laravel • PHP • MySQL • Flutter • TailwindCSS

$ focus
> Projets concrets, code propre, Git, tests

$ contact --now
> email / linkedin / github`}
            </code>
          </pre>
          <div className="mt-2 text-sm text-white/50 terminal-cursor">
            <span className="text-cyan-400">❯</span> _
          </div>
        </div>

        {/* CTA */}
        <div className="hero-enter hero-enter-5 mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="https://github.com/Hachim-elomari"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 font-semibold text-white hover:bg-white/15 transition"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="/Mohammed_Hachim_Elomari_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-magnetic inline-flex items-center gap-2 rounded-full bg-cyan-500/90 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-400 transition"
          >
            <FaFilePdf /> Télécharger CV
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 font-semibold text-white hover:bg-white/15 transition"
          >
            <FaEnvelope /> Contact
          </a>
        </div>

        {/* Scroll hint */}
        <div className="hero-enter hero-enter-6 mt-14 flex justify-center">
          <div className="flex flex-col items-center gap-2 text-white/30">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="h-8 w-px bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
          </div>
        </div>
      </div>
    </header>
  )
}