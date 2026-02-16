import { FaGithub, FaFilePdf, FaEnvelope } from "react-icons/fa"

const nav = [
  { label: "À propos", href: "#about" },
  { label: "Parcours", href: "#timeline" },
  { label: "Compétences", href: "#skills" },
  { label: "Projets", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export default function Header() {
  return (
    <header className="relative overflow-hidden">
      {/* Sticky nav */}
      <div className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <a href="#" className="font-bold tracking-tight text-white">
            Hachim<span className="text-cyan-300">.dev</span>
          </a>

          <nav className="hidden gap-6 text-sm text-white/70 sm:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-white transition">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/* CV button */}
            <a
              href="/Mohammed_Hachim_Elomari_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15 transition"
            >
              <FaFilePdf /> Voir mon CV
            </a>

            {/* Contact */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-500/90 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-400 transition"
            >
              <FaEnvelope /> Contact
            </a>
          </div>
        </div>

        {/* Mobile quick nav */}
        <div className="sm:hidden border-t border-white/10">
          <div className="mx-auto max-w-6xl overflow-x-auto px-4 py-2">
            <div className="flex gap-3 text-sm text-white/70">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3 py-1 hover:bg-white/10 transition"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="/Mohammed_Hachim_Elomari_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap rounded-full bg-cyan-500/90 px-3 py-1 font-semibold text-slate-950 hover:bg-cyan-400 transition"
              >
                Voir CV
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background */}
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

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-4 py-20 text-center text-white">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Disponible à partir d’avril 2026
        </div>

        <h1 className="mt-6 text-5xl font-extrabold tracking-tight sm:text-6xl">
          Mohammed Hachim <span className="text-cyan-300">ELOMARI</span>
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
          Étudiant en Master Informatique • Développeur Web Full-Stack • 📍Brest, France
        </p>

        {/* Terminal card */}
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-6 text-left shadow-2xl backdrop-blur">
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
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
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
            className="inline-flex items-center gap-2 rounded-full bg-cyan-500/90 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-400 transition"
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
      </div>
    </header>
  )
}
