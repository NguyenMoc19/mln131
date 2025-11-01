import React from 'react'

export default function StatBox({ children, className = '' }) {
  return <div className={`stat-box ${className}`}>{children}</div>
}
