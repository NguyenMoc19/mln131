import React from 'react'
import { Menu } from 'lucide-react'

const navItems = [
  { href: '#landing', label: 'Trang chính' },
  { href: '#party-commitment', label: 'Giới thiệu' },
  { href: '#achievements', label: 'Thành tựu' },
  { href: '#principles', label: 'Nguyên tắc' },
  { href: '#critical-question', label: 'Câu hỏi CQ' },
  { href: '#references', label: 'Tài liệu' },
]

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl  flex justify-end">
        <div className="mt-2 rounded-xl border border-white/10 bg-black/30 backdrop-blur supports-backdrop-filter:bg-black/30 shadow-lg shadow-black/20">
          <div className="flex h-14 items-center justify-end px-4">
            {/* <a href="#hero" className="flex items-center gap-3 text-white">
              <span className="font-playfair font-black tracking-wide">Không Vùng Cấm</span>
            </a> */}
            <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="transition-colors hover:text-white">
                  {item.label}
                </a>
              ))}
            </nav>
            <button className="md:hidden text-white/80" aria-label="Open menu">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
