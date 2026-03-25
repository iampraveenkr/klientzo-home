import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const STEPS = [
  {
    num: '01',
    icon: '👤',
    title: 'Add your client in 30 seconds',
    body: 'Enter their name and email. Klientzo automatically creates a dedicated workspace for them.',
    tag: 'Takes 30 seconds',
  },
  {
    num: '02',
    icon: '📁',
    title: 'Set up their project',
    body: 'Add projects, break them into tasks, set due dates. Organize your work the way you already think about it.',
    tag: 'Fully customizable',
  },
  {
    num: '03',
    icon: '🔗',
    title: 'One click — client is in',
    body: "Hit 'Send Portal Invite' and Klientzo emails your client a magic link. They click it, they're inside. No password. No confusion.",
    tag: 'Magic link — no password needed',
  },
  {
    num: '04',
    icon: '✅',
    title: 'Share work, get approved',
    body: 'Upload your deliverables. Client reviews, approves, or requests changes with a note. You get notified instantly.',
    tag: 'No more WhatsApp back-and-forth',
  },
]

function StepCard({ step, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-10 items-center"
    >
      {/* Left / Right content — alternating sides on desktop */}
      <div className={`${isEven ? 'md:text-right' : 'md:order-3 md:text-left'}`}>
        {/* Step number */}
        <span className="inline-block text-5xl md:text-6xl font-bold font-[family-name:var(--font-heading)] text-primary/20 leading-none mb-3">
          {step.num}
        </span>
        <div className={`flex items-center gap-2.5 mb-2 ${isEven ? 'md:justify-end' : ''}`}>
          <span className="text-2xl">{step.icon}</span>
          <h3 className="text-lg md:text-xl font-bold text-white font-[family-name:var(--font-heading)]">
            {step.title}
          </h3>
        </div>
        <p className="text-sm text-gray-400 leading-relaxed max-w-sm mx-auto md:mx-0 mb-3">
          {step.body}
        </p>
        <span
          className="inline-flex items-center gap-1.5 text-[11px] px-3 py-1 rounded-full font-medium text-primary-light"
          style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.15)' }}
        >
          {step.tag}
        </span>
      </div>

      {/* Center — Timeline node */}
      <div className="hidden md:flex flex-col items-center relative z-10">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
          style={{
            background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
            boxShadow: '0 0 20px rgba(99,102,241,0.4)',
          }}
        >
          {step.num}
        </div>
      </div>

      {/* Opposite side — empty on desktop for layout balance */}
      <div className={`hidden md:block ${isEven ? 'md:order-3' : ''}`} />
    </motion.div>
  )
}

export default function HowItWorks() {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  // Scroll progress for the travelling dot
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const dotTop = useTransform(scrollYProgress, [0.15, 0.85], ['0%', '100%'])

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative py-24 md:py-32 px-6 overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.05] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #6366f1, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight font-[family-name:var(--font-heading)]">
            Up and running in <span className="gradient-text">5 minutes</span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-gray-400 leading-relaxed">
            No training needed. No complicated setup. Just sign up and send your first portal link today.
          </p>
        </motion.div>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical connecting line — desktop only */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px">
            {/* Dashed background line */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'repeating-linear-gradient(to bottom, rgba(99,102,241,0.25) 0px, rgba(99,102,241,0.25) 6px, transparent 6px, transparent 14px)',
              }}
            />
            {/* Solid glow overlay that grows with scroll */}
            <motion.div
              className="absolute top-0 left-0 w-full"
              style={{
                height: dotTop,
                background: 'linear-gradient(to bottom, rgba(99,102,241,0.5), rgba(99,102,241,0.15))',
                boxShadow: '0 0 8px rgba(99,102,241,0.3)',
              }}
            />
            {/* Travelling dot */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full"
              style={{
                top: dotTop,
                background: '#6366f1',
                boxShadow: '0 0 12px rgba(99,102,241,0.7), 0 0 24px rgba(99,102,241,0.3)',
              }}
            />
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-16 md:gap-20">
            {STEPS.map((step, i) => (
              <StepCard key={step.num} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
