import React from 'react'

export default function FixedBackground({ imageUrl }) {
  return (
    <div
      className="fixed-background"
      style={{ backgroundImage: `url(${imageUrl || 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop'})` }}
      aria-hidden
    />
  )
}
