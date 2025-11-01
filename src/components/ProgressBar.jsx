import React from 'react'
import { useScrollProgress } from '../hooks/useScrollProgress'

export default function ProgressBar() {
  const progress = useScrollProgress()
  return (
  <div className="fixed top-0 left-0 h-1.5 z-9999 w-full">
      <div
  className="h-full rounded-r-full shadow-[0_0_12px_rgba(210,105,30,0.6)] bg-linear-to-r from-[#8B4513] via-[#C17F38] to-[#D2691E] transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
