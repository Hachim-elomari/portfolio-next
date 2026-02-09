//pages\_app.js
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}


import Header from '../components/Header'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}