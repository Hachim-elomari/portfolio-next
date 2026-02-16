import Header from "../components/Header"
import About from "../components/About"
import Timeline from "../components/Timeline"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <Header />

      <main>
        <About />
        <div className="mx-auto max-w-6xl px-4">
          <div className="h-px w-full bg-slate-200/70 dark:bg-white/10" />
        </div>

        <Timeline />
        <div className="mx-auto max-w-6xl px-4">
          <div className="h-px w-full bg-slate-200/70 dark:bg-white/10" />
        </div>

        <Skills />
        <div className="mx-auto max-w-6xl px-4">
          <div className="h-px w-full bg-slate-200/70 dark:bg-white/10" />
        </div>

        <Projects />
        <div className="mx-auto max-w-6xl px-4">
          <div className="h-px w-full bg-slate-200/70 dark:bg-white/10" />
        </div>

        <Contact />
      </main>
    </div>
  )
}
