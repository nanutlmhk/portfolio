import { useEffect, useRef, useState } from 'react'

const DURATION_MS = 1400

/** Counts up to a value such as "18+" or "120,000+" the first time it scrolls into view. */
export function CountUp({ value }: { value: string }) {
  const match = value.match(/^([\d,]+)(.*)$/)
  const target = match ? Number(match[1].replace(/,/g, '')) : null
  const suffix = match ? match[2] : ''
  const ref = useRef<HTMLSpanElement>(null)
  const [shown, setShown] = useState<number | null>(null)

  useEffect(() => {
    const element = ref.current
    if (!element || target === null) {
      return
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      return
    }

    let frame = 0
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) {
          return
        }

        observer.disconnect()
        const start = performance.now()
        const step = (now: number) => {
          const progress = Math.min(1, (now - start) / DURATION_MS)
          const eased = 1 - (1 - progress) ** 3
          setShown(Math.round(target * eased))
          if (progress < 1) {
            frame = requestAnimationFrame(step)
          }
        }
        frame = requestAnimationFrame(step)
      },
      { threshold: 0.4 },
    )
    observer.observe(element)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [target])

  if (target === null) {
    return <span>{value}</span>
  }

  return (
    <span ref={ref} aria-label={value}>
      {(shown ?? target).toLocaleString('en-US')}
      {suffix}
    </span>
  )
}
