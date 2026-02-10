import { MdEmail } from "react-icons/md"
import { FaLinkedin, FaGithub } from "react-icons/fa"

export default function Contact() {

  const links = [
    {
      name: "Email",
      url: "mailto:elomarihachim@gmail.com",
      icon: MdEmail
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mohammed-hachim-elomari-929162250/",
      icon: FaLinkedin
    },
    {
      name: "GitHub",
      url: "https://github.com/Hachim-elomari",
      icon: FaGithub
    }
  ]

  return (
    <section id="contact" className="py-16 px-4 text-center bg-white dark:bg-gray-900">

      <h2 className="text-3xl font-semibold text-[#2c3e50] dark:text-white mb-4">
        Contact
      </h2>

      <p className="text-gray-600 dark:text-gray-300 mb-10">
        Get in touch — disponible pour stage / alternance / CDI
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {links.map((l, idx) => (
          <a
            key={idx}
            href={l.url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-2
              px-6 py-3
              rounded-full
              bg-[#2c3e50]
              text-white
              font-semibold
              shadow-md
              hover:shadow-xl
              hover:scale-105
              transition
            "
          >
            <l.icon size={20} />
            {l.name}
          </a>
        ))}
      </div>

      <footer className="
        mt-16
        py-8
        bg-[#2c3e50]
        text-white
        text-sm
      ">
        © 2026 Mohammed Hachim ELOMARI — Tous droits réservés
      </footer>

    </section>
  )
}