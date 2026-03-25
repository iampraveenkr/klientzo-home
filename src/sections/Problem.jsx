import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

/* ── WhatsApp Chat Mockup ───────────────────────────────────── */

const MESSAGES = [
  { from: 'client', text: 'Hi, any update on the logo? 🙏', time: '9:02 AM' },
  { from: 'agency', text: 'Working on it! Will share today', time: '9:45 AM' },
  { from: 'client', text: 'Also what about the social media posts?', time: '10:15 AM' },
  { from: 'client', text: 'Hello? 👋', time: '12:30 PM' },
  { from: 'client', text: 'Seen??', time: '2:00 PM' },
  { from: 'agency', text: 'So sorry! Here it is', time: '4:30 PM', attachment: 'logo_v1_FINAL.png' },
  { from: 'client', text: 'Can you send a PDF version also?', time: '4:32 PM' },
  { from: 'client', text: 'And the Instagram size?', time: '4:33 PM' },
  { from: 'agency', text: 'Sure sending now', time: '4:35 PM' },
  { from: 'client', text: 'Bhai which version is final? v1 or v2?', time: 'Next Day', dayBreak: true },
]

function WhatsAppMockup() {
  return (
    <div
      className="relative w-full max-w-[320px] mx-auto rounded-[2rem] overflow-hidden"
      style={{
        background: '#111b21',
        border: '2px solid rgba(255,255,255,0.08)',
        animation: 'vibrate 0.3s ease-in-out infinite',
      }}
    >
      {/* Phone status bar */}
      <div className="flex items-center justify-between px-5 pt-3 pb-1 text-[10px] text-gray-400">
        <span>9:41</span>
        <div className="flex gap-1 items-center">
          <div className="w-3.5 h-2 border border-gray-500 rounded-sm relative">
            <div className="absolute inset-0.5 bg-gray-400 rounded-[1px]" style={{ width: '60%' }} />
          </div>
        </div>
      </div>

      {/* WhatsApp header */}
      <div
        className="flex items-center gap-3 px-4 py-2.5"
        style={{ background: '#1f2c34', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
      >
        <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-[10px] text-white font-bold">
          PC
        </div>
        <div className="flex-1">
          <div className="text-xs font-medium text-white">Priya's Clothing</div>
          <div className="text-[10px] text-gray-400">online</div>
        </div>
        {/* Unread badge */}
        <div className="w-5 h-5 rounded-full bg-[#25d366] flex items-center justify-center text-[9px] font-bold text-white">
          7
        </div>
      </div>

      {/* Chat area */}
      <div
        className="px-3 py-3 flex flex-col gap-1.5 h-[380px] overflow-hidden"
        style={{
          background: '#0b141a',
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.015\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      >
        {MESSAGES.map((msg, i) => (
          <div key={i}>
            {msg.dayBreak && (
              <div className="flex justify-center my-2">
                <span
                  className="text-[9px] px-3 py-0.5 rounded-full text-gray-400"
                  style={{ background: 'rgba(255,255,255,0.06)' }}
                >
                  NEXT DAY
                </span>
              </div>
            )}
            <div className={`flex ${msg.from === 'agency' ? 'justify-end' : 'justify-start'}`}>
              <div
                className="max-w-[220px] rounded-lg px-2.5 py-1.5 relative"
                style={{
                  background: msg.from === 'agency' ? '#005c4b' : '#1f2c34',
                  borderTopLeftRadius: msg.from === 'client' ? '2px' : undefined,
                  borderTopRightRadius: msg.from === 'agency' ? '2px' : undefined,
                }}
              >
                {msg.attachment && (
                  <div
                    className="flex items-center gap-1.5 mb-1 px-2 py-1 rounded text-[10px] text-gray-300"
                    style={{ background: 'rgba(0,0,0,0.2)' }}
                  >
                    <span>📎</span>
                    <span className="truncate">{msg.attachment}</span>
                  </div>
                )}
                <p className="text-[11px] text-gray-200 leading-relaxed">{msg.text}</p>
                <div className="flex items-center justify-end gap-1 mt-0.5">
                  <span className="text-[8px] text-gray-500">{msg.time}</span>
                  {msg.from === 'agency' && (
                    <svg width="12" height="8" viewBox="0 0 16 11" fill="none">
                      <path d="M11.07 1L5.5 7.56 3.93 5.5 2.5 7l3 3.5L12.5 2.5 11.07 1z" fill="#53bdeb" />
                      <path d="M7.07 1L1.5 7.56 3 9l4-4.5L12.5 2.5 11.07 1 7.07 1z" fill="#53bdeb" />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Typing bar */}
      <div
        className="flex items-center gap-2 px-3 py-2"
        style={{ background: '#1f2c34', borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        <div
          className="flex-1 rounded-full px-3 py-1.5 text-[10px] text-gray-500"
          style={{ background: '#2a3942' }}
        >
          Type a message...
        </div>
        <div className="w-7 h-7 rounded-full bg-[#00a884] flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
            <path d="M12 2C6.48 2 2 6.48 2 12l1.65 5.88L2 22l4.12-1.65C7.8 21.42 9.84 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
          </svg>
        </div>
      </div>
    </div>
  )
}

/* ── Klientzo Portal Card ───────────────────────────────────── */

function PortalCard() {
  return (
    <div
      className="relative w-full max-w-[360px] mx-auto rounded-xl overflow-hidden"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(99, 102, 241, 0.25)',
        boxShadow: '0 0 40px rgba(99, 102, 241, 0.1)',
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-5 py-4"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center text-sm font-bold text-primary-light">
            PC
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Priya&apos;s Clothing Brand</div>
            <div className="text-[11px] text-gray-500">3 active projects</div>
          </div>
        </div>
        <div className="w-2 h-2 rounded-full bg-green-400" />
      </div>

      {/* Tasks */}
      <div className="px-5 py-4 flex flex-col gap-3">
        {/* Task 1 — Approved */}
        <div
          className="flex items-center justify-between p-3 rounded-lg"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}
        >
          <div className="flex items-center gap-2.5">
            <span className="text-sm">✅</span>
            <span className="text-xs text-gray-300">Logo Design</span>
          </div>
          <span
            className="text-[10px] px-2 py-0.5 rounded-full font-medium"
            style={{ background: 'rgba(34, 197, 94, 0.12)', color: '#22c55e' }}
          >
            Approved
          </span>
        </div>

        {/* Task 2 — In Review */}
        <div
          className="flex items-center justify-between p-3 rounded-lg"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}
        >
          <div className="flex items-center gap-2.5">
            <span className="text-sm">🟡</span>
            <span className="text-xs text-gray-300">Instagram Posts</span>
          </div>
          <span
            className="text-[10px] px-2 py-0.5 rounded-full font-medium"
            style={{ background: 'rgba(234, 179, 8, 0.12)', color: '#eab308' }}
          >
            In Review
          </span>
        </div>

        {/* Activity */}
        <div className="flex items-center gap-2 mt-1">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
          <span className="text-[11px] text-gray-500">Client viewed 2 hours ago</span>
        </div>
      </div>

      {/* Footer badge */}
      <div
        className="mx-5 mb-4 flex items-center justify-center gap-2 py-2.5 rounded-lg"
        style={{ background: 'rgba(34, 197, 94, 0.08)', border: '1px solid rgba(34, 197, 94, 0.15)' }}
      >
        <span className="text-xs">💚</span>
        <span className="text-xs font-medium text-green-400">No WhatsApp needed</span>
      </div>
    </div>
  )
}

/* ── Pain Point Cards ───────────────────────────────────────── */

const PAIN_POINTS = [
  {
    icon: '🔴',
    title: 'Clients ghost you after you send files',
    desc: 'No way to know if they even opened it',
  },
  {
    icon: '🔴',
    title: 'Every revision gets lost in 200 messages',
    desc: "You're scrolling through chats to find feedback from 3 weeks ago",
  },
  {
    icon: '🔴',
    title: 'You look unprofessional compared to bigger agencies',
    desc: "While your competitor has a proper portal, you're sending PDFs on WhatsApp",
  },
]

function PainCard({ point, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="rounded-xl p-5 md:p-6"
      style={{
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        borderLeft: '3px solid rgba(239, 68, 68, 0.5)',
      }}
    >
      <div className="flex items-start gap-3.5">
        <span className="text-lg mt-0.5 shrink-0">{point.icon}</span>
        <div>
          <h3 className="text-sm md:text-base font-semibold text-white mb-1.5">
            {point.title}
          </h3>
          <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
            {point.desc}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

/* ── Problem Section ────────────────────────────────────────── */

export default function Problem() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  const comparisonRef = useRef(null)
  const comparisonInView = useInView(comparisonRef, { once: true, margin: '-60px' })

  return (
    <section id="problem" className="relative py-24 md:py-32 px-6 overflow-hidden">
      {/* Subtle red/amber ambient glow at edges */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #ef4444, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-[0.03]"
          style={{ background: 'radial-gradient(circle, #f59e0b, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 md:mb-20"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            The Problem
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight font-[family-name:var(--font-heading)]">
            Running an agency on WhatsApp is{' '}
            <span className="text-red-400">embarrassing</span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-gray-400 leading-relaxed">
            You&apos;re sending 50 messages a day just to answer &ldquo;what&apos;s the status?&rdquo;
            — and it&apos;s costing you clients.
          </p>
        </motion.div>

        {/* Before / After Comparison */}
        <motion.div
          ref={comparisonRef}
          initial={{ opacity: 0, y: 40 }}
          animate={comparisonInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid md:grid-cols-2 gap-8 md:gap-12 items-start max-w-5xl mx-auto mb-16 md:mb-20"
        >
          {/* Before — WhatsApp */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <span className="text-sm font-semibold text-red-400 uppercase tracking-wider">
                Before Klientzo
              </span>
            </div>
            <WhatsAppMockup />
            <p className="mt-5 text-sm font-semibold text-red-400">
              Every. Single. Day.
            </p>
          </div>

          {/* After — Klientzo */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-sm font-semibold text-green-400 uppercase tracking-wider">
                After Klientzo
              </span>
            </div>
            <PortalCard />
            <p className="mt-5 text-sm font-semibold text-green-400">
              One link. Full clarity.
            </p>
          </div>
        </motion.div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {PAIN_POINTS.map((point, i) => (
            <PainCard key={i} point={point} index={i} />
          ))}
        </div>
      </div>

      {/* Vibrate keyframe — scoped via style tag alternative: use CSS */}
      <style>{`
        @keyframes vibrate {
          0% { transform: translate(0, 0) rotate(0deg); }
          20% { transform: translate(-0.5px, 0.5px) rotate(-0.3deg); }
          40% { transform: translate(0.5px, -0.5px) rotate(0.3deg); }
          60% { transform: translate(-0.3px, -0.3px) rotate(-0.2deg); }
          80% { transform: translate(0.3px, 0.3px) rotate(0.2deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
      `}</style>
    </section>
  )
}
