import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const APP_URL = 'https://app.klientzo.com'

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out"
      style={{
        background: scrolled ? 'rgba(8, 8, 15, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(255, 255, 255, 0.07)'
          : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              className="relative z-10"
            >
              <rect width="32" height="32" rx="8" fill="#6366f1" />
              <text
                x="16"
                y="22"
                textAnchor="middle"
                fontFamily="var(--font-heading)"
                fontWeight="bold"
                fontSize="18"
                fill="white"
              >
                K
              </text>
            </svg>
            {/* Indigo glow behind icon */}
            <div
              className="absolute inset-0 rounded-lg blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300"
              style={{ background: 'rgba(99, 102, 241, 0.4)' }}
            />
          </div>
          <span className="text-lg font-bold font-[family-name:var(--font-heading)] text-white">
            klientzo
          </span>
        </a>

        {/* Center links — desktop */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right CTA — desktop */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={APP_URL}
            className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
          >
            Login
          </a>
          <a
            href={APP_URL}
            className="inline-flex items-center px-5 py-2 rounded-lg text-white text-sm font-semibold glow-button transition-all duration-300 hover:scale-[1.03]"
            style={{
              background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
            }}
          >
            Start Free Trial
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-[5px]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            className="block w-5 h-0.5 bg-white rounded-full origin-left"
            animate={
              mobileOpen
                ? { rotate: 45, y: 0, x: 1 }
                : { rotate: 0, y: 0, x: 0 }
            }
            transition={{ duration: 0.25 }}
          />
          <motion.span
            className="block w-5 h-0.5 bg-white rounded-full"
            animate={mobileOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block w-5 h-0.5 bg-white rounded-full origin-left"
            animate={
              mobileOpen
                ? { rotate: -45, y: 0, x: 1 }
                : { rotate: 0, y: 0, x: 0 }
            }
            transition={{ duration: 0.25 }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden"
            style={{
              background: 'rgba(8, 8, 15, 0.95)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
            }}
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block py-3 text-base text-gray-400 hover:text-white transition-colors duration-200 border-b border-white/5"
                >
                  {link.label}
                </a>
              ))}

              <div className="flex flex-col gap-3 mt-4">
                <a
                  href={APP_URL}
                  className="block text-center py-2.5 text-sm text-gray-400 hover:text-white transition-colors duration-200 rounded-lg border border-white/10"
                >
                  Login
                </a>
                <a
                  href={APP_URL}
                  className="block text-center py-2.5 rounded-lg text-white text-sm font-semibold glow-button transition-all duration-300"
                  style={{
                    background:
                      'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
                  }}
                >
                  Start Free Trial
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
