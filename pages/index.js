import useScrollReveal from "../hooks/useScrollReveal"
import Header from "../components/Header"
import About from "../components/About"
import Timeline from "../components/Timeline"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

export default function Home() {
  useScrollReveal()

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white">
      <Header />

      <main>
        <About />
        <div className="section-divider mx-auto max-w-6xl" />

        <Timeline />
        <div className="section-divider mx-auto max-w-6xl" />

        <Skills />
        <div className="section-divider mx-auto max-w-6xl" />

        <Projects />
        <div className="section-divider mx-auto max-w-6xl" />

        <Contact />
      </main>
    </div>
  )
}