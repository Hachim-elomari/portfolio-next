import { MdEmail } from "react-icons/md"
import { FaLinkedin, FaGithub } from "react-icons/fa"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 text-center">
      <h2 className="text-4xl font-bold text-[#2c3e50] mb-8">À propos de moi</h2>

      <p className="text-lg mb-2">Développeur web fullstack à Brest</p>
      <p className="text-xl font-semibold mb-2">Mohammed Hachim ELOMARI</p>
      <p className="text-lg mb-2">Étudiant en master 1 informatique à l’Université de Bretagne Occidentale</p>
      <p className="text-lg mb-4">Prêt à rejoindre votre équipe en avril 2026</p>

      <div className="mb-8">
        <h4 className="text-lg font-medium mb-2">Langues parlées :</h4>
        <ul className="flex justify-center flex-wrap gap-4 list-none p-0 text-base">
          <li>Anglais</li>
          <li>Français</li>
          <li>Arabe</li>
          <li>Espagnol</li>
        </ul>
      </div>

      <div className="flex justify-center flex-wrap gap-4">
        <a
          href="mailto:elomarihachim@gmail.com"
          className="flex items-center gap-2 px-5 py-3 bg-[#2c3e50] text-white font-bold rounded-full transform transition-transform duration-200 hover:scale-105"
        >
          <MdEmail size={20} /> Email
        </a>

        <a
          href="https://www.linkedin.com/in/mohammed-hachim-elomari-929162250/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 bg-[#2c3e50] text-white font-bold rounded-full transform transition-transform duration-200 hover:scale-105"
        >
          <FaLinkedin size={20} /> LinkedIn
        </a>

        <a
          href="https://github.com/Hachim-elomari"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 bg-[#2c3e50] text-white font-bold rounded-full transform transition-transform duration-200 hover:scale-105"
        >
          <FaGithub size={20} /> GitHub
        </a>
      </div>
    </section>
  )
}