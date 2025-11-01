import React from 'react'
import { Scale, Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-[10000]">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="mt-2 rounded-xl border border-white/10 bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-black/30 shadow-lg shadow-black/20">
          <div className="flex h-14 items-center justify-between px-4">
            <div className="flex items-center gap-3 text-white">
              <Scale className="w-6 h-6 text-amber-400" />
              <span className="font-playfair font-black tracking-wide">Không Vùng Cấm</span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
              <a href="#" className="hover:text-white transition-colors">Trang chủ</a>
              <a href="#story" className="hover:text-white transition-colors">Câu chuyện</a>
              <a href="#about" className="hover:text-white transition-colors">Giới thiệu</a>
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
