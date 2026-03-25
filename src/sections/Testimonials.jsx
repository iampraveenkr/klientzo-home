import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

/* ── Data ───────────────────────────────────────────────────── */

const TESTIMONIALS = [
  {
    initials: 'RS',
    bg: '#f97066',
    name: 'Rohit Sharma',
    role: 'Founder, DigiSpark Agency, Mumbai',
    quote:
      'Honestly the best ₹999 I spend every month. My clients used to WhatsApp me 10 times a day asking for updates. Now they just check their portal. Game changer for my agency.',
  },
  {
    initials: 'PK',
    bg: '#6366f1',
    name: 'Priya Krishnan',
    role: 'CEO, BrandCraft, Bangalore',
    featured: true,
    quote:
      'We look so much more professional now. Sending clients a portal link instead of a PDF on WhatsApp — the difference in perception is huge. Clients actually respond faster.',
  },
  {
    initials: 'AM',
    bg: '#10b981',
    name: 'Arjun Mehta',
    role: 'Director, PeakMedia, Delhi',
    quote:
      'Setup took literally 10 minutes. Added all my 12 clients the same day. The approval feature alone saves me 2 hours every week chasing clients for feedback.',
  },
]

const STATS = [
  { value: 500, suffix: '+', label: 'Agencies Onboarded' },
  { value: 12000, suffix: '+', label: 'Client Portals Created' },
  { value: 98, suffix: '%', label: 'Would Recommend' },
]

/* ── Stars ──────────────────────────────────────────────────── */

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
        </svg>
      ))}
    </div>
  )
}

/* ── Testimonial Card ───────────────────────────────────────── */

function TestimonialCard({ t, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`rounded-xl p-6 flex flex-col gap-4 ${t.featured ? 'md:-mt-2 md:mb-[-8px]' : ''}`}
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: t.featured
          ? '1px solid rgba(99,102,241,0.3)'
          : '1px solid rgba(255,255,255,0.06)',
        boxShadow: t.featured ? '0 0 30px rgba(99,102,241,0.08)' : 'none',
      }}
    >
      <Stars />

      <p className="text-sm md:text-[15px] text-gray-300 leading-relaxed flex-1">
        &ldquo;{t.quote}&rdquo;
      </p>

      <div className="flex items-center gap-3 pt-2" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
          style={{ background: t.bg }}
        >
          {t.initials}
        </div>
        <div>
          <div className="text-sm font-semibold text-white">{t.name}</div>
          <div className="text-xs text-gray-500">{t.role}</div>
        </div>
      </div>
    </motion.div>
  )
}

/* ── Animated Counter ───────────────────────────────────────── */

function AnimatedStat({ stat, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const motionVal = useMotionValue(0)
  const [displayed, setDisplayed] = useState(0)

  useEffect(() => {
    if (!inView) return
    const unsub = motionVal.on('change', (v) => setDisplayed(Math.round(v)))
    animate(motionVal, stat.value, { duration: 1.8, delay: index * 0.2, ease: 'easeOut' })
    return unsub
  }, [inView, stat.value, index, motionVal])

  const formatted =
    stat.value >= 1000
      ? displayed.toLocaleString('en-IN')
      : displayed

  return (
    <div ref={ref} className="text-center px-2 sm:px-4">
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-heading)]">
        {formatted}{stat.suffix}
      </div>
      <div className="text-xs sm:text-sm text-gray-500 mt-1">{stat.label}</div>
    </div>
  )
}

/* ── Section ────────────────────────────────────────────────── */

export default function Testimonials() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, margin: '-60px' })

  return (
    <section id="testimonials" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight font-[family-name:var(--font-heading)] mb-5">
            Agencies across India love Klientzo
          </h2>
          <div className="flex items-center justify-center gap-3">
            <Stars />
            <span className="text-sm text-gray-400">4.9 out of 5</span>
          </div>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 20 }}
          animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-3 divide-x divide-white/5 py-6 sm:py-8 rounded-xl"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          {STATS.map((stat, i) => (
            <AnimatedStat key={stat.label} stat={stat} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
