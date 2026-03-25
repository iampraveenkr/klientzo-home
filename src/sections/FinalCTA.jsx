import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const APP_URL = 'https://app.klientzo.com'

export default function FinalCTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="cta" className="relative py-28 md:py-36 px-6 overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.12]"
          style={{ background: 'radial-gradient(circle, #6366f1, transparent 60%)' }}
        />
        <div
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-[0.08]"
          style={{
            background: 'radial-gradient(circle, #8b5cf6, transparent 70%)',
            animation: 'float 10s ease-in-out infinite',
          }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full opacity-[0.06]"
          style={{
            background: 'radial-gradient(circle, #e879f9, transparent 70%)',
            animation: 'float 12s ease-in-out 3s infinite',
          }}
        />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-[family-name:var(--font-heading)] mb-3">
          Stop managing clients on WhatsApp.
        </h2>
        <p className="text-2xl md:text-4xl lg:text-5xl font-bold gradient-text leading-tight font-[family-name:var(--font-heading)] mb-6">
          Start today. Free for 14 days.
        </p>
        <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-10 max-w-xl mx-auto">
          Join 500+ Indian agencies who already look more professional in front of their clients.
        </p>

        <a
          href={APP_URL}
          className="inline-flex items-center justify-center h-16 px-10 rounded-xl text-white text-lg font-semibold transition-all duration-300 hover:scale-[1.04]"
          style={{
            background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
            animation: 'pulse-glow 3s ease-in-out infinite',
          }}
        >
          Start Your Free Trial&nbsp;→
        </a>

        <p className="mt-6 text-xs md:text-sm text-gray-500 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          <span>No credit card required</span>
          <span>•</span>
          <span>Setup in 5 minutes</span>
          <span>•</span>
          <span>Cancel anytime</span>
        </p>
      </motion.div>
    </section>
  )
}
