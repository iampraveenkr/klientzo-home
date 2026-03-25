import { useState } from 'react'
import { motion } from 'framer-motion'

const APP_URL = 'https://app.klientzo.com'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-xl font-bold font-[family-name:var(--font-heading)] text-white">
          Klientzo
        </a>

        {/* Desktop nav links — placeholder */}
        <div className="hidden md:flex items-center gap-8">
          {/* Links will go here */}
        </div>

        {/* CTA */}
        <a
          href={APP_URL}
          className="hidden md:inline-flex px-5 py-2 rounded-lg bg-primary text-white text-sm font-semibold glow-button transition-all duration-300"
        >
          Get Started Free
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu — placeholder */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass px-6 py-4"
        >
          <a
            href={APP_URL}
            className="block w-full text-center mt-4 px-5 py-2 rounded-lg bg-primary text-white text-sm font-semibold glow-button"
          >
            Get Started Free
          </a>
        </motion.div>
      )}
    </nav>
  )
}
