import '../styles/globals.css'
import Head from 'next/head'
import { ThemeProvider } from '../hooks/useTheme'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hachim ELOMARI — Développeur Full-Stack | Brest</title>
        <meta name="description" content="Portfolio de Mohammed Hachim ELOMARI. Développeur web full-stack, étudiant en Master Informatique à Brest. Laravel, Flutter, PHP, MySQL. Disponible stage / alternance avril 2026." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0b1220" />
        {/* Prevent flash: apply dark class before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme !== 'light') {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}