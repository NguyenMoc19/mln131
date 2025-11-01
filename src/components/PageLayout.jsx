import React from 'react'
import FixedBackground from './FixedBackground'
import ProgressBar from './ProgressBar'
import Navbar from './Navbar'
import ScrollToTop from './ScrollToTop'

export default function PageLayout({ children }) {
  return (
    <div className="relative min-h-screen">
      <FixedBackground imageUrl={undefined} />
      <ProgressBar />
      <Navbar />
      <div className="pointer-events-none fixed inset-0 z-0 [background:radial-gradient(120%_40%_at_50%_0%,rgba(0,0,0,0.35),transparent_60%),radial-gradient(40%_50%_at_100%_0%,rgba(0,0,0,0.25),transparent_60%),radial-gradient(40%_50%_at_0%_0%,rgba(0,0,0,0.25),transparent_60%)]" />
  <main className="relative z-10 pt-24 pb-16">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-4">
          {children}
        </div>
      </main>
      <ScrollToTop />
    </div>
  )
}
