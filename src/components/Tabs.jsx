import React, { useState } from 'react'

export default function Tabs({ tabs = [], initial = 0, className = '' }) {
  const [active, setActive] = useState(initial)

  return (
    <div className={className}>
      <div className="flex flex-wrap items-center gap-2 rounded-xl border border-white/10 bg-black/20 p-2 backdrop-blur">
        {tabs.map((t, i) => (
          <button
            key={t.id || i}
            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors ${
              i === active
                ? 'bg-white/15 text-white shadow-inner shadow-black/30'
                : 'text-white/75 hover:text-white'
            }`}
            onClick={() => setActive(i)}
          >
            {t.icon ? <t.icon className="w-4 h-4" /> : null}
            <span className="font-medium">{t.label}</span>
          </button>
        ))}
      </div>
      <div className="mt-6">
        {tabs[active] && tabs[active].content}
      </div>
    </div>
  )
}
