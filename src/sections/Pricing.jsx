import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const APP_URL = 'https://app.klientzo.com'

const PLANS = [
  {
    name: 'Starter',
    sub: 'For growing agencies',
    monthly: 999,
    annual: 9990,
    featured: false,
    features: [
      { text: 'Up to 5 client portals', included: true },
      { text: 'Unlimited projects & tasks', included: true },
      { text: 'File uploads (5GB storage)', included: true },
      { text: 'Email notifications', included: true },
      { text: 'Magic link client access', included: true },
      { text: 'White label', included: false },
      { text: 'Priority support', included: false },
    ],
  },
  {
    name: 'Growth',
    sub: 'For established agencies',
    monthly: 2499,
    annual: 24990,
    featured: true,
    badge: 'Most Popular',
    features: [
      { text: 'Up to 20 client portals', included: true },
      { text: 'Unlimited projects & tasks', included: true },
      { text: 'File uploads (25GB storage)', included: true },
      { text: 'Email notifications', included: true },
      { text: 'Magic link client access', included: true },
      { text: 'Priority support', included: true },
      { text: 'White label', included: false },
    ],
  },
  {
    name: 'Pro',
    sub: 'For scaling agencies',
    monthly: 4999,
    annual: 49990,
    featured: false,
    features: [
      { text: 'Unlimited client portals', included: true },
      { text: 'Unlimited projects & tasks', included: true },
      { text: 'File uploads (100GB storage)', included: true },
      { text: 'Email notifications', included: true },
      { text: 'Magic link client access', included: true },
      { text: 'Priority support', included: true },
      { text: 'White label portal (your brand, your domain)', included: true },
      { text: 'Custom email domain', included: true },
    ],
  },
]

function formatPrice(n) {
  return n.toLocaleString('en-IN')
}

function PricingCard({ plan, annual, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const price = annual ? plan.annual : plan.monthly
  const period = annual ? '/yr' : '/mo'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: plan.featured ? 1.05 : 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className={`relative flex flex-col rounded-2xl p-px ${
        plan.featured ? 'md:-mt-4 md:mb-[-16px]' : ''
      }`}
      style={
        plan.featured
          ? {
              background: 'linear-gradient(135deg, #6366f1, #a78bfa, #e879f9, #6366f1)',
              backgroundSize: '300% 300%',
              animation: 'gradient-shift 6s ease infinite, pulse-glow 4s ease-in-out infinite',
            }
          : {
              background: plan.name === 'Pro'
                ? 'rgba(139,92,246,0.15)'
                : 'rgba(255,255,255,0.07)',
            }
      }
    >
      {/* Most Popular badge */}
      {plan.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
          <span
            className="text-[11px] font-semibold px-4 py-1 rounded-full text-white whitespace-nowrap"
            style={{
              background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
              boxShadow: '0 0 16px rgba(99,102,241,0.4)',
            }}
          >
            {plan.badge}
          </span>
        </div>
      )}

      {/* Inner card */}
      <div
        className="flex flex-col flex-1 rounded-[15px] p-6 md:p-7"
        style={{ background: '#0c0c18' }}
      >
        {/* Plan name & sub */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-white font-[family-name:var(--font-heading)] mb-1">
            {plan.name}
          </h3>
          <p className="text-sm text-gray-500">{plan.sub}</p>
        </div>

        {/* Price */}
        <div className="mb-6">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-heading)]">
              ₹{formatPrice(price)}
            </span>
            <span className="text-sm text-gray-500">{period}</span>
          </div>
          {annual && (
            <div className="flex items-center gap-1.5 mt-1.5">
              <span
                className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                style={{ background: 'rgba(34,197,94,0.12)', color: '#22c55e' }}
              >
                Save 17%
              </span>
              <span className="text-xs text-gray-500 line-through">
                ₹{formatPrice(plan.monthly * 12)}
              </span>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="h-px mb-6" style={{ background: 'rgba(255,255,255,0.06)' }} />

        {/* Features */}
        <ul className="flex flex-col gap-3 mb-8 flex-1">
          {plan.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm">
              {f.included ? (
                <span className="text-primary shrink-0 mt-0.5">✓</span>
              ) : (
                <span className="text-gray-600 shrink-0 mt-0.5">✗</span>
              )}
              <span className={f.included ? 'text-gray-300' : 'text-gray-600'}>
                {f.text}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={APP_URL}
          className={`block text-center py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
            plan.featured
              ? 'text-white glow-button hover:scale-[1.03]'
              : 'text-gray-300 hover:text-white hover:bg-white/[0.04]'
          }`}
          style={
            plan.featured
              ? { background: 'linear-gradient(135deg, #6366f1, #4f46e5)' }
              : { border: '1px solid rgba(255,255,255,0.1)' }
          }
        >
          Start Free Trial
        </a>
      </div>
    </motion.div>
  )
}

export default function Pricing() {
  const [annual, setAnnual] = useState(false)
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })
  const bottomRef = useRef(null)
  const bottomInView = useInView(bottomRef, { once: true, margin: '-60px' })

  return (
    <section id="pricing" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            Pricing
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight font-[family-name:var(--font-heading)]">
            Simple pricing. <span className="text-gray-500">No surprises.</span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-gray-400 leading-relaxed">
            All plans include a 14-day free trial. No credit card required to start.
          </p>
        </motion.div>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-14">
          <span className={`text-sm transition-colors ${!annual ? 'text-white font-medium' : 'text-gray-500'}`}>
            Monthly
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            className="relative w-14 h-7 rounded-full p-1 transition-colors duration-300"
            style={{
              background: annual
                ? 'linear-gradient(135deg, #6366f1, #4f46e5)'
                : 'rgba(255,255,255,0.1)',
            }}
            aria-label="Toggle annual pricing"
          >
            <motion.div
              className="w-5 h-5 rounded-full bg-white"
              animate={{ x: annual ? 28 : 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          </button>
          <span className={`text-sm transition-colors ${annual ? 'text-white font-medium' : 'text-gray-500'}`}>
            Annual
          </span>
          {annual && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full"
              style={{ background: 'rgba(34,197,94,0.12)', color: '#22c55e' }}
            >
              Save 2 months
            </motion.span>
          )}
        </div>

        {/* Cards — horizontal scroll on mobile, grid on desktop */}
        <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-5 items-start max-w-5xl mx-auto overflow-x-auto md:overflow-visible pricing-scroll-mobile pb-4 md:pb-0 -mx-6 px-6 md:mx-auto md:px-0">
          {PLANS.map((plan, i) => (
            <div key={plan.name} className="min-w-[300px] md:min-w-0 shrink-0 md:shrink">
              <PricingCard plan={plan} annual={annual} index={i} />
            </div>
          ))}
        </div>

        {/* Enterprise + Guarantee */}
        <motion.div
          ref={bottomRef}
          initial={{ opacity: 0, y: 20 }}
          animate={bottomInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 flex flex-col items-center gap-5"
        >
          {/* Enterprise callout */}
          <div
            className="w-full max-w-3xl text-center py-5 px-6 rounded-xl"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <p className="text-sm text-gray-400">
              Managing 50+ clients or need custom features?{' '}
              <a
                href="mailto:hello@klientzo.com"
                className="text-primary-light hover:text-white transition-colors font-medium"
              >
                Let&apos;s talk → hello@klientzo.com
              </a>
            </p>
          </div>

          {/* Guarantee */}
          <p className="text-xs md:text-sm text-gray-500 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <span>🔒 14-day free trial</span>
            <span>·</span>
            <span>No credit card</span>
            <span>·</span>
            <span>Cancel anytime</span>
            <span>·</span>
            <span>Hosted in India</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
