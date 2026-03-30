import { useEffect } from "react"

/**
 * Observes all .reveal and .reveal-stagger elements,
 * adding .visible when they enter the viewport.
 * Fires once per element (unobserves after reveal).
 */
export default function useScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    )

    const targets = document.querySelectorAll(".reveal, .reveal-stagger")
    targets.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}