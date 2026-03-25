import { motion } from 'framer-motion'

const APP_URL = 'https://app.klientzo.com'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.1 },
  }),
}

/* ── Gradient Orbs ──────────────────────────────────────────── */
function GradientOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Orb 1 — indigo, top-left */}
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.15]"
        style={{
          background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)',
          animation: 'float 8s ease-in-out infinite',
        }}
      />
      {/* Orb 2 — purple, top-right */}
      <div
        className="absolute -top-20 -right-32 w-[400px] h-[400px] rounded-full opacity-[0.10]"
        style={{
          background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
          animation: 'float 10s ease-in-out 2s infinite',
        }}
      />
      {/* Orb 3 — pink, bottom-center */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full opacity-[0.08]"
        style={{
          background: 'radial-gradient(circle, #e879f9 0%, transparent 70%)',
          animation: 'float 12s ease-in-out 4s infinite',
        }}
      />
    </div>
  )
}

/* ── Grid Overlay ───────────────────────────────────────────── */
function GridOverlay() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
      }}
    />
  )
}

/* ── Badge ──────────────────────────────────────────────────── */
function Badge() {
  return (
    <motion.div
      custom={0}
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass"
      style={{
        borderColor: 'rgba(99, 102, 241, 0.3)',
        boxShadow: '0 0 20px rgba(99, 102, 241, 0.1)',
      }}
    >
      {/* Pulsing green dot */}
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
      </span>
      <span className="text-sm text-gray-300">
        Now live — built for Indian agencies
      </span>
    </motion.div>
  )
}

/* ── Dashboard Mockup ───────────────────────────────────────── */
function DashboardMockup() {
  const clients = [
    { name: 'Sunrise Hotels', status: 'Active', tasks: 12, color: '#22c55e' },
    { name: 'FreshBite Foods', status: 'Pending Approval', tasks: 8, color: '#f59e0b' },
    { name: 'UrbanNest Realty', status: 'Active', tasks: 5, color: '#22c55e' },
  ]

  const tasks = [
    { name: 'Instagram Creatives — March', status: 'Completed', color: '#22c55e' },
    { name: 'Google Ads Campaign Setup', status: 'In Progress', color: '#6366f1' },
    { name: 'Landing Page Review', status: 'Pending Approval', color: '#f59e0b' },
    { name: 'Monthly Analytics Report', status: 'Not Started', color: '#64748b' },
  ]

  return (
    <motion.div
      custom={6}
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="relative mt-16 mx-auto max-w-4xl"
      style={{ animation: 'float 6s ease-in-out infinite' }}
    >
      {/* Glow behind the mockup */}
      <div
        className="absolute -inset-4 rounded-2xl blur-2xl opacity-30 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #e879f9)' }}
      />

      {/* Browser window */}
      <div
        className="relative rounded-xl overflow-hidden"
        style={{
          border: '1px solid rgba(99, 102, 241, 0.2)',
          boxShadow: '0 0 40px rgba(99, 102, 241, 0.15)',
        }}
      >
        {/* Browser chrome */}
        <div
          className="flex items-center gap-3 px-4 py-3"
          style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <span className="w-3 h-3 rounded-full bg-green-500/70" />
          </div>
          <div
            className="flex-1 max-w-sm mx-auto rounded-md px-3 py-1 text-xs text-gray-500 text-center"
            style={{ background: 'rgba(255,255,255,0.04)' }}
          >
            app.klientzo.com
          </div>
        </div>

        {/* Dashboard body */}
        <div className="flex min-h-[340px] md:min-h-[400px]" style={{ background: '#0a0a14' }}>
          {/* Sidebar */}
          <div
            className="hidden md:flex flex-col w-52 p-4 gap-4 shrink-0"
            style={{ background: 'rgba(255,255,255,0.02)', borderRight: '1px solid rgba(255,255,255,0.05)' }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center text-white text-xs font-bold">K</div>
              <span className="text-sm font-semibold text-white">Klientzo</span>
            </div>
            {['Dashboard', 'Clients', 'Projects', 'Deliverables', 'Messages'].map((item, i) => (
              <div
                key={item}
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs"
                style={{
                  background: i === 1 ? 'rgba(99, 102, 241, 0.12)' : 'transparent',
                  color: i === 1 ? '#818cf8' : '#64748b',
                }}
              >
                <div
                  className="w-4 h-4 rounded"
                  style={{ background: i === 1 ? 'rgba(99, 102, 241, 0.3)' : 'rgba(255,255,255,0.06)' }}
                />
                {item}
              </div>
            ))}
          </div>

          {/* Main content area */}
          <div className="flex-1 p-4 md:p-6">
            <div className="text-xs text-gray-500 mb-1">Welcome back, Rahul</div>
            <div className="text-sm font-semibold text-white mb-5">Your Clients</div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {clients.map((client) => (
                <div
                  key={client.name}
                  className="rounded-lg p-3.5"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-white">{client.name}</span>
                    <span
                      className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                      style={{
                        background: `${client.color}18`,
                        color: client.color,
                        boxShadow: client.status === 'Pending Approval' ? `0 0 12px ${client.color}40` : 'none',
                      }}
                    >
                      {client.status}
                    </span>
                  </div>
                  <div className="text-[10px] text-gray-500">{client.tasks} active tasks</div>

                  {/* Expanded task list on second card */}
                  {client.name === 'FreshBite Foods' && (
                    <div className="mt-3 pt-3 flex flex-col gap-1.5" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                      {tasks.map((task) => (
                        <div key={task.name} className="flex items-center justify-between">
                          <span className="text-[10px] text-gray-400 truncate max-w-[120px]">{task.name}</span>
                          <span
                            className="text-[8px] px-1.5 py-0.5 rounded-full shrink-0"
                            style={{ background: `${task.color}18`, color: task.color }}
                          >
                            {task.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ── Social Proof Bar ───────────────────────────────────────── */
const AGENCIES = ['DigiSpark', 'BrandCraft', 'PeakMedia', 'Creozone', 'NexaAgency']

function SocialProof() {
  return (
    <motion.div
      custom={7}
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="mt-16 text-center"
    >
      <p className="text-xs text-gray-500 mb-4 uppercase tracking-widest">
        Trusted by agencies across India
      </p>
      <div
        className="w-full max-w-2xl mx-auto overflow-x-auto scrollbar-hide"
      >
        <div
          className="inline-flex items-center gap-4 sm:gap-5 md:gap-8 px-5 sm:px-6 py-3 rounded-full mx-auto whitespace-nowrap"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          {AGENCIES.map((name, i) => (
            <span key={name} className="flex items-center gap-4 sm:gap-5 md:gap-8">
              <span
                className="text-xs sm:text-sm md:text-base text-gray-500 font-semibold"
                style={{
                  fontFamily:
                    i % 2 === 0
                      ? 'var(--font-heading)'
                      : 'var(--font-body)',
                  fontStyle: i === 3 ? 'italic' : 'normal',
                  letterSpacing: i === 1 ? '0.1em' : i === 4 ? '-0.02em' : 'normal',
                }}
              >
                {name}
              </span>
              {i < AGENCIES.length - 1 && (
                <span className="text-gray-700">•</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

/* ── Hero Section ───────────────────────────────────────────── */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-20 overflow-hidden"
      style={{ backgroundColor: '#08080f' }}
    >
      <GradientOrbs />
      <GridOverlay />

      {/* Content */}
      <div className="relative z-10 max-w-[800px] mx-auto px-6 text-center">
        {/* Badge */}
        <Badge />

        {/* Headline */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-8 font-[family-name:var(--font-heading)] font-bold text-white text-[40px] md:text-[64px] leading-[1.08] tracking-tight"
        >
          Your clients are tired of
          <br />
          <span className="gradient-text">asking on WhatsApp</span>
          <br />
          Give them a portal.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-6 text-base md:text-xl leading-relaxed max-w-2xl mx-auto"
          style={{ color: '#94a3b8' }}
        >
          Klientzo gives your agency a beautiful client portal —
          share project updates, upload deliverables, get approvals.
          No WhatsApp. No email threads. Just clarity.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={`${APP_URL}/signup`}
            className="inline-flex items-center justify-center h-14 px-8 rounded-xl text-white font-semibold text-base transition-all duration-300 hover:scale-[1.04]"
            style={{
              background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
              animation: 'pulse-glow 3s ease-in-out infinite',
            }}
          >
            Start Free Trial — 14 Days Free
          </a>
          <a
            href={APP_URL}
            className="inline-flex items-center justify-center h-14 px-8 rounded-xl text-white font-medium text-base transition-all duration-300 hover:bg-white/[0.04]"
            style={{ border: '1px solid rgba(255, 255, 255, 0.15)' }}
          >
            See a Live Demo&nbsp;→
          </a>
        </motion.div>

        {/* Trust line */}
        <motion.p
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-6 text-xs md:text-sm flex flex-wrap items-center justify-center gap-x-5 gap-y-1"
          style={{ color: '#64748b' }}
        >
          <span>✓ No credit card required</span>
          <span>✓ Setup in 5 minutes</span>
          <span>✓ First 14 days free</span>
        </motion.p>
      </div>

      {/* Product Mockup — hidden on very small screens */}
      <div className="relative z-10 w-full px-6 hidden xs:block">
        <DashboardMockup />
      </div>

      {/* Social Proof */}
      <div className="relative z-10 w-full px-6">
        <SocialProof />
      </div>
    </section>
  )
}
