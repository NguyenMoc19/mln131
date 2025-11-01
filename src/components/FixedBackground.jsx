import React, { useEffect, useState } from 'react'

export default function FixedBackground({ imageUrls }) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-bg-index]')
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        const sectionTop = section.offsetTop
        
        if (scrollPosition >= sectionTop) {
          const bgIndex = parseInt(section.getAttribute('data-bg-index'))
          setActiveIndex(bgIndex)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed inset-0 z-0">
      {imageUrls.map((url, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${url})`,
            opacity: activeIndex === index ? 1 : 0,
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
      ))}
    </div>
  )
}