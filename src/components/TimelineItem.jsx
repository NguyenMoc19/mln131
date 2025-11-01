import React from 'react'

export default function TimelineItem({ year, children, showLine = true }) {
  return (
    <div className="relative pl-12">
      <div className="timeline-dot" />
      {showLine && <div className="timeline-line" />}
      <h3 className="text-3xl font-bold vintage-accent mb-2">{year}</h3>
      <div className="text-xl vintage-text">{children}</div>
    </div>
  )
}
