import { FaGithub, FaFilePdf, FaEnvelope } from "react-icons/fa"

export default function Header() {
  return (
    <header className="bg-[#2c3e50] text-white text-center py-20 px-4 flex flex-col items-center gap-6">
      <h1 className="text-5xl font-bold drop-shadow-lg">Mohammed Hachim ELOMARI</h1>
      <p className="text-xl font-medium drop-shadow-sm">
        Étudiant en Master Informatique | Développeur Web
      </p>

      <div className="flex flex-wrap gap-4 mt-6">
        <a
          href="https://github.com/Hachim-elomari"
          target="_blank"
          className="flex items-center gap-2 px-5 py-3 bg-white/10 rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
        >
          <FaGithub /> GitHub
        </a>
        <a
          href="CV.pdf"
          target="_blank"
          className="flex items-center gap-2 px-5 py-3 bg-white/10 rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
        >
          <FaFilePdf /> Télécharger CV
        </a>
        <a
          href="#contact"
          className="flex items-center gap-2 px-5 py-3 bg-white/10 rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
        >
          <FaEnvelope /> Contact
        </a>
      </div>
    </header>
  )
}