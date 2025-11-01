import React from 'react'

export default function ContentCard({ children, className = '', variant = 'default' }) {
  const extra = variant === 'aged' ? 'aged-paper' : ''
  return (
    <div className={`content-card ${extra} ${className}`}>
      {children}
    </div>
  )
}
