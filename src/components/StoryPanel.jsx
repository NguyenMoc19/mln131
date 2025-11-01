import React, { useEffect, useMemo, useRef } from 'react'

export default function StoryPanel({ children, className = '', initiallyVisible = false, backgroundIndex, ...rest }) {
  const ref = useRef(null)

  const resolvedBackgroundIndex = useMemo(() => {
    if (backgroundIndex === null) return null
    if (typeof backgroundIndex === 'number' && backgroundIndex >= 0) return backgroundIndex
    return undefined
  }, [backgroundIndex])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (initiallyVisible) {
      el.classList.add('visible')
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
          }
        })
      },
      { root: null, threshold: 0.25, rootMargin: '0px 0px -10% 0px' }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [initiallyVisible])

  return (
    <section
      ref={ref}
      className={`story-panel ${className}`}
      {...(resolvedBackgroundIndex === null ? {} : { 'data-fixed-bg-index': resolvedBackgroundIndex })}
      {...rest}
    >
      {children}
    </section>
  )
}
