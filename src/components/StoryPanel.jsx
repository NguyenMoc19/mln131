import React from 'react'

export default function StoryPanel({ id, children, className = '', ...props }) {
  return (
    <section
      id={id}
      className={`relative min-h-screen flex items-center justify-center px-6 py-20 ${className}`}
      {...props}
    >
      <div className="relative z-10 w-full max-w-7xl">
        {children}
      </div>
    </section>
  )
}