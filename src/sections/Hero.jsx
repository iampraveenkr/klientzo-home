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
        className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full opacity-[0.12]"
        style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 65%)' }}
      />
      {/* Orb 2 — purple, top-right */}
      <div
        className="absolute -top-20 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.08]"
        style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 65%)' }}
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
          'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
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
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
      </span>
      <span className="text-sm text-gray-300">Now live — built for Indian agencies</span>
    </motion.div>
  )
}

/* ── Sidebar Icons ──────────────────────────────────────────── */
const SIDEBAR_ICONS = {
  Dashboard: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <rect x="1" y="1" width="5" height="5" rx="1" fill="currentColor" opacity="0.6"/>
      <rect x="8" y="1" width="5" height="5" rx="1" fill="currentColor" opacity="0.6"/>
      <rect x="1" y="8" width="5" height="5" rx="1" fill="currentColor" opacity="0.6"/>
      <rect x="8" y="8" width="5" height="5" rx="1" fill="currentColor" opacity="0.6"/>
    </svg>
  ),
  Clients: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="4.5" r="2.5" fill="currentColor"/>
      <path d="M1.5 12c0-2.485 2.462-4.5 5.5-4.5s5.5 2.015 5.5 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  ),
  Projects: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1.5 4.5C1.5 3.4 2.4 2.5 3.5 2.5H5l1.5 2h4C11.6 4.5 12.5 5.4 12.5 6.5v4c0 1.1-.9 2-2 2h-7c-1.1 0-2-.9-2-2v-6z" fill="currentColor" opacity="0.7"/>
    </svg>
  ),
  Deliverables: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <rect x="2" y="1.5" width="10" height="11" rx="1.5" fill="currentColor" opacity="0.6"/>
      <path d="M4.5 5h5M4.5 7.5h5M4.5 10h3" stroke="#0a0a14" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  ),
  Messages: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1.5 2.5C1.5 1.95 1.95 1.5 2.5 1.5h9c.55 0 1 .45 1 1v7c0 .55-.45 1-1 1H4L1.5 12.5V2.5z" fill="currentColor" opacity="0.7"/>
    </svg>
  ),
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
      custom={5}
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="relative mt-16 mx-auto max-w-4xl"
    >
      {/* Glow behind the mockup */}
      <div
        className="absolute -inset-6 rounded-2xl blur-3xl opacity-25 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #e879f9 100%)' }}
      />

      {/* Browser window */}
      <div
        className="relative rounded-xl overflow-hidden"
        style={{
          border: '1px solid rgba(99, 102, 241, 0.3)',
          boxShadow: '0 0 60px rgba(99, 102, 241, 0.18), 0 0 120px rgba(99, 102, 241, 0.08)',
        }}
      >
        {/* Browser chrome bar */}
        <div
          className="flex items-center gap-3 px-4 py-3"
          style={{
            background: '#0d0d1f',
            borderBottom: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <span className="w-3 h-3 rounded-full bg-green-500/70" />
          </div>
          <div
            className="flex-1 max-w-xs mx-auto rounded-md px-3 py-1 text-xs text-gray-500 text-center"
            style={{ background: 'rgba(255,255,255,0.05)' }}
          >
            app.klientzo.com
          </div>
        </div>

        {/* Dashboard body */}
        <div className="flex" style={{ background: '#0a0a18', minHeight: '380px' }}>
          {/* Sidebar */}
          <div
            className="hidden md:flex flex-col w-52 px-3 py-4 gap-1 shrink-0"
            style={{
              background: '#0d0d1f',
              borderRight: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            {/* Logo row */}
            <div className="flex items-center gap-2 px-2 mb-5">
              <div
                className="w-7 h-7 rounded-md flex items-center justify-center text-white text-xs font-bold shrink-0"
                style={{ background: '#6366f1' }}
              >
                K
              </div>
              <span className="text-sm font-semibold text-white">Klientzo</span>
            </div>

            {/* Nav items */}
            {['Dashboard', 'Clients', 'Projects', 'Deliverables', 'Messages'].map((item, i) => {
              const active = i === 1
              return (
                <div
                  key={item}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors"
                  style={{
                    background: active ? 'rgba(99,102,241,0.15)' : 'transparent',
                    color: active ? '#818cf8' : '#64748b',
                  }}
                >
                  <span style={{ color: active ? '#818cf8' : '#475569' }}>
                    {SIDEBAR_ICONS[item]}
                  </span>
                  {item}
                </div>
              )
            })}
          </div>

          {/* Main content */}
          <div className="flex-1 p-5 md:p-6">
            <div className="text-xs text-gray-500 mb-0.5">Welcome back, Rahul.</div>
            <div className="text-sm font-semibold text-white mb-5">Your Clients</div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {clients.map((client) => (
                <div
                  key={client.name}
                  className="rounded-lg p-3.5"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs font-semibold text-white">{client.name}</span>
                    <span
                      className="text-[10px] px-2 py-0.5 rounded-full font-medium shrink-0"
                      style={{
                        background: `${client.color}18`,
                        color: client.color,
                      }}
                    >
                      {client.status}
                    </span>
                  </div>
                  <div className="text-[11px] text-gray-500">{client.tasks} active tasks</div>

                  {/* Expanded task list on FreshBite card */}
                  {client.name === 'FreshBite Foods' && (
                    <div
                      className="mt-3 pt-3 flex flex-col gap-2"
                      style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
                    >
                      {tasks.map((task) => (
                        <div key={task.name} className="flex items-center justify-between gap-2">
                          <span className="text-[10px] text-gray-400 truncate">{task.name}</span>
                          <span
                            className="text-[9px] px-2 py-0.5 rounded-full shrink-0 font-medium"
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
      className="mt-14 text-center"
    >
      <p className="text-xs text-gray-600 mb-4 uppercase tracking-widest">
        Trusted by agencies across India
      </p>
      <div className="w-full max-w-2xl mx-auto overflow-x-auto scrollbar-hide">
        <div
          className="inline-flex items-center gap-4 sm:gap-6 md:gap-8 px-6 py-3 rounded-full whitespace-nowrap"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          {AGENCIES.map((name, i) => (
            <span key={name} className="flex items-center gap-4 sm:gap-6 md:gap-8">
              <span
                className="text-xs sm:text-sm text-gray-500 font-semibold"
                style={{
                  fontFamily: i % 2 === 0 ? 'var(--font-heading)' : 'var(--font-body)',
                  fontStyle: i === 3 ? 'italic' : 'normal',
                  letterSpacing: i === 1 ? '0.1em' : i === 4 ? '-0.02em' : 'normal',
                }}
              >
                {name}
              </span>
              {i < AGENCIES.length - 1 && (
                <span className="text-gray-700 text-xs">•</span>
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
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <Badge />

        {/* Headline */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-8 font-[family-name:var(--font-heading)] font-bold text-white text-[32px] sm:text-[48px] md:text-[64px] lg:text-[72px] leading-[1.08] tracking-tight"
        >
          Your clients are tired of asking on
          <br />
          <span className="gradient-text">WhatsApp. Give them a portal.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-6 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto"
          style={{ color: '#94a3b8' }}
        >
          Klientzo gives your agency a beautiful client portal — share project updates, upload
          deliverables, get approvals. No WhatsApp. No email threads. Just clarity.
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
            className="inline-flex items-center justify-center h-14 px-8 rounded-xl text-white font-semibold text-base transition-all duration-300 hover:scale-[1.03] hover:brightness-110"
            style={{
              background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
              animation: 'pulse-glow 3s ease-in-out infinite',
            }}
          >
            Start Free Trial — 14 Days Free
          </a>
          <a
            href={APP_URL}
            className="inline-flex items-center justify-center h-14 px-8 rounded-xl text-white font-medium text-base transition-all duration-300 hover:border-white/30 hover:bg-white/[0.04]"
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
          <span><span className="text-green-400 mr-1">✓</span>No credit card required</span>
          <span><span className="text-green-400 mr-1">✓</span>Setup in 5 minutes</span>
          <span><span className="text-green-400 mr-1">✓</span>First 14 days free</span>
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
