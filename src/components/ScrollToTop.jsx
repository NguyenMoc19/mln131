import React, { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      onClick={toTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-[10000] rounded-full p-3 border border-white/10 bg-black/40 text-white shadow-xl shadow-black/30 backdrop-blur transition-all ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      } hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-amber-400/60`}
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  )
}
