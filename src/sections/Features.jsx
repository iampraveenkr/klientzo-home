import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

/* ── Animation Helpers ──────────────────────────────────────── */

function AnimatedRow({ children, reversed, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const textDir = reversed ? 1 : -1
  const mockDir = reversed ? -1 : 1

  return (
    <div
      ref={ref}
      className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
        reversed ? 'md:[direction:rtl]' : ''
      }`}
    >
      {/* Text block */}
      <motion.div
        initial={{ opacity: 0, x: textDir * 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="md:[direction:ltr]"
      >
        {children[0]}
      </motion.div>

      {/* Mockup block */}
      <motion.div
        initial={{ opacity: 0, x: mockDir * 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="md:[direction:ltr]"
      >
        {children[1]}
      </motion.div>
    </div>
  )
}

function FeatureText({ icon, title, body, bullets }) {
  return (
    <div>
      <span className="text-3xl mb-4 block">{icon}</span>
      <h3 className="text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-heading)] mb-4">
        {title}
      </h3>
      <p className="text-gray-400 leading-relaxed mb-6">{body}</p>
      <ul className="flex flex-col gap-2.5">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300">
            <span className="text-primary mt-0.5 shrink-0">✓</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* Shared glass card wrapper for mockups */
function MockupFrame({ children, className = '' }) {
  return (
    <div
      className={`relative rounded-xl overflow-hidden ${className}`}
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(99,102,241,0.15)',
        boxShadow: '0 0 30px rgba(99,102,241,0.08)',
      }}
    >
      {children}
    </div>
  )
}

/* ── Mockup 1 — Client Portal (phone) ──────────────────────── */

function PortalMockup() {
  return (
    <MockupFrame className="max-w-[300px] mx-auto">
      {/* Phone status bar */}
      <div
        className="flex items-center justify-between px-4 pt-3 pb-2 text-[10px] text-gray-500"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
      >
        <span>9:41</span>
        <span className="text-[9px] tracking-wide">app.klientzo.com</span>
        <span>●●●</span>
      </div>

      <div className="p-4">
        {/* Client header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center text-sm font-bold text-primary-light">
            R
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Riya&apos;s Boutique</div>
            <div className="text-[11px] text-gray-500">2 active projects</div>
          </div>
        </div>

        {/* Project cards */}
        {[
          { name: 'Brand Identity', progress: 75, tasks: '6/8 tasks' },
          { name: 'Social Media — March', progress: 40, tasks: '4/10 tasks' },
        ].map((p) => (
          <div
            key={p.name}
            className="mb-3 p-3.5 rounded-lg"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-xs font-medium text-white">{p.name}</span>
              <span className="text-[10px] text-gray-500">{p.tasks}</span>
            </div>
            {/* Progress bar */}
            <div className="h-1.5 rounded-full bg-white/5">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${p.progress}%`,
                  background: 'linear-gradient(90deg, #6366f1, #a78bfa)',
                }}
              />
            </div>
          </div>
        ))}

        {/* Approved badge */}
        <div
          className="flex items-center justify-center gap-2 py-2.5 rounded-lg mt-2"
          style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)' }}
        >
          <span className="text-xs font-medium text-green-400">✅ 2 tasks approved</span>
        </div>
      </div>
    </MockupFrame>
  )
}

/* ── Mockup 2 — Task Tracking ───────────────────────────────── */

function TaskMockup() {
  const tasks = [
    { name: 'Logo Concepts', status: 'Done', color: '#22c55e', bg: 'rgba(34,197,94,0.1)' },
    { name: 'Brand Guidelines', status: 'In Progress', color: '#6366f1', bg: 'rgba(99,102,241,0.1)', active: true },
    { name: 'Social Media Creatives', status: 'Todo', color: '#64748b', bg: 'rgba(100,116,139,0.1)' },
    { name: 'Website Banner', status: 'Todo', color: '#64748b', bg: 'rgba(100,116,139,0.1)' },
  ]

  const statusOptions = ['Todo', 'In Progress', 'In Review', 'Done']

  return (
    <MockupFrame>
      <div className="p-5">
        <div className="text-xs text-gray-500 mb-1">Brand Identity Project</div>
        <div className="text-sm font-semibold text-white mb-4">Tasks</div>

        <div className="flex flex-col gap-2">
          {tasks.map((t) => (
            <div
              key={t.name}
              className="relative flex items-center justify-between p-3 rounded-lg"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div>
                <div className="text-xs font-medium text-gray-200">{t.name}</div>
                <div className="text-[10px] text-gray-500 mt-0.5">Due: Mar 25</div>
              </div>
              <span
                className="text-[10px] px-2.5 py-1 rounded-full font-medium"
                style={{ background: t.bg, color: t.color }}
              >
                {t.status}
              </span>

              {/* Status dropdown open on active task */}
              {t.active && (
                <div
                  className="absolute right-3 top-full mt-1 z-10 rounded-lg p-1.5 min-w-[120px]"
                  style={{
                    background: 'rgba(15,15,26,0.98)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                  }}
                >
                  {statusOptions.map((s) => (
                    <div
                      key={s}
                      className="px-2.5 py-1.5 rounded text-[10px] cursor-pointer"
                      style={{
                        color: s === 'In Progress' ? '#818cf8' : '#94a3b8',
                        background: s === 'In Progress' ? 'rgba(99,102,241,0.1)' : 'transparent',
                      }}
                    >
                      {s}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Internal note */}
        <div
          className="mt-4 p-3 rounded-lg flex items-start gap-2"
          style={{ background: 'rgba(234,179,8,0.06)', border: '1px solid rgba(234,179,8,0.12)' }}
        >
          <span className="text-xs shrink-0">🔒</span>
          <div>
            <div className="text-[10px] text-yellow-500/80 font-medium mb-0.5">Internal Note</div>
            <div className="text-[11px] text-gray-400">Client wants the blue to match their store signage. Check reference photo in Drive.</div>
          </div>
        </div>
      </div>
    </MockupFrame>
  )
}

/* ── Mockup 3 — Deliverable Approval ────────────────────────── */

function ApprovalMockup() {
  return (
    <MockupFrame>
      <div className="p-5">
        <div className="text-xs text-gray-500 mb-1">Deliverables</div>
        <div className="text-sm font-semibold text-white mb-4">Logo Design</div>

        {/* Approved deliverable */}
        <div
          className="p-3.5 rounded-lg mb-3"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(34,197,94,0.15)' }}
        >
          <div className="flex items-start gap-3">
            {/* File thumbnail */}
            <div
              className="w-14 h-14 rounded-lg flex items-center justify-center text-lg shrink-0"
              style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.15)' }}
            >
              🎨
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-medium text-white">Logo_Final_v2.png</div>
              <div className="text-[10px] text-gray-500 mt-0.5">Uploaded 2 days ago · 2.4 MB</div>
              <div className="flex items-center gap-1.5 mt-2">
                <span className="text-[10px] text-green-400">✅</span>
                <span className="text-[10px] text-green-400 font-medium">Approved by Riya</span>
              </div>
            </div>
          </div>
        </div>

        {/* Revision requested */}
        <div
          className="p-3.5 rounded-lg mb-3"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(234,179,8,0.15)' }}
        >
          <div className="flex items-start gap-3">
            <div
              className="w-14 h-14 rounded-lg flex items-center justify-center text-lg shrink-0"
              style={{ background: 'rgba(234,179,8,0.08)', border: '1px solid rgba(234,179,8,0.15)' }}
            >
              📄
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-medium text-white">Brand_Guidelines.pdf</div>
              <div className="text-[10px] text-gray-500 mt-0.5">Uploaded 1 day ago · 5.1 MB</div>
              <div
                className="mt-2 px-2.5 py-1.5 rounded text-[10px] text-amber-400"
                style={{ background: 'rgba(234,179,8,0.06)' }}
              >
                &ldquo;Can we change the tagline font to something more modern?&rdquo;
              </div>
            </div>
          </div>
        </div>

        {/* Pending approval — buttons visible */}
        <div
          className="p-3.5 rounded-lg"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="flex items-start gap-3">
            <div
              className="w-14 h-14 rounded-lg flex items-center justify-center text-lg shrink-0"
              style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.15)' }}
            >
              🖼️
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-medium text-white">Insta_Post_Set1.zip</div>
              <div className="text-[10px] text-gray-500 mt-0.5">Uploaded just now · 12.8 MB</div>
              <div className="flex items-center gap-2 mt-2.5">
                <button
                  className="px-3 py-1.5 rounded-md text-[10px] font-semibold text-white"
                  style={{ background: 'linear-gradient(135deg, #22c55e, #16a34a)' }}
                >
                  ✓ Approve
                </button>
                <button
                  className="px-3 py-1.5 rounded-md text-[10px] font-medium text-amber-400"
                  style={{ background: 'rgba(234,179,8,0.1)', border: '1px solid rgba(234,179,8,0.2)' }}
                >
                  Request Revision
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MockupFrame>
  )
}

/* ── Mockup 4 — Email Notification ──────────────────────────── */

function NotificationMockup() {
  return (
    <MockupFrame>
      <div className="p-5">
        {/* Email header */}
        <div className="flex items-center gap-3 mb-4 pb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-white text-xs font-bold">
            K
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-semibold text-white">Klientzo Notification</div>
            <div className="text-[10px] text-gray-500">notifications@klientzo.com</div>
          </div>
          <div className="text-[10px] text-gray-500">2m ago</div>
        </div>

        {/* Email body */}
        <div className="mb-5">
          <div className="text-lg mb-1">✅</div>
          <h4 className="text-sm font-semibold text-white mb-2">Riya approved your logo design!</h4>
          <p className="text-xs text-gray-400 leading-relaxed mb-1">
            Your deliverable <span className="text-gray-300">&ldquo;Logo_Final_v2.png&rdquo;</span> for the project
            <span className="text-gray-300"> Brand Identity</span> has been approved.
          </p>
          <p className="text-[11px] text-gray-500 mt-2">Approved on Mar 24, 2026 at 3:42 PM</p>
        </div>

        {/* CTA button */}
        <a
          href="#"
          className="block text-center py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200"
          style={{ background: 'linear-gradient(135deg, #6366f1, #4f46e5)' }}
        >
          View Task →
        </a>

        {/* Footer */}
        <div className="mt-4 pt-3 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="text-[10px] text-gray-600">
            You&apos;re receiving this because you&apos;re on the <span className="text-gray-500">Brand Identity</span> project.
          </div>
        </div>
      </div>

      {/* Bell notification badge — floating */}
      <div
        className="absolute top-4 right-4 flex items-center gap-2 px-2.5 py-1.5 rounded-full"
        style={{ background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.2)' }}
      >
        <span className="text-xs">🔔</span>
        <span className="text-[10px] text-primary-light font-medium">3 new</span>
      </div>
    </MockupFrame>
  )
}

/* ── Features Section ───────────────────────────────────────── */

const FEATURES = [
  {
    icon: '🔗',
    title: 'One link. Your client is in.',
    body: 'No passwords to remember, no app to download. Send your client a magic link — they click it and instantly see their project. That\'s it.',
    bullets: [
      'Magic link login — no password needed',
      'Client sees only their projects',
      'Works on mobile, tablet, desktop',
    ],
    mockup: <PortalMockup />,
  },
  {
    icon: '📋',
    title: 'Stop explaining. Start showing.',
    body: 'Create projects, break them into tasks, update statuses — your client sees it in real time. No more \'will share update by EOD\' messages.',
    bullets: [
      'Kanban-style status (Todo → In Progress → Done)',
      'Due dates visible to client',
      'Internal notes only you can see',
    ],
    mockup: <TaskMockup />,
    reversed: true,
  },
  {
    icon: '✅',
    title: 'Get approvals in one click',
    body: 'Upload your designs, documents, or videos. Client sees them, clicks Approve or requests revision with a note. You get notified instantly.',
    bullets: [
      'Upload any file type (design, PDF, video)',
      'Client clicks Approve or Request Revision',
      'Email notification the moment they respond',
      'Full revision history saved',
    ],
    mockup: <ApprovalMockup />,
  },
  {
    icon: '🔔',
    title: 'Always know what\'s happening',
    body: 'Get instant email alerts when a client approves work, requests a revision, or leaves a comment. Your client gets notified when you upload something new.',
    bullets: [
      'Email alerts for every action',
      'In-app notification bell',
      'Client gets notified when files are ready',
    ],
    mockup: <NotificationMockup />,
    reversed: true,
  },
]

export default function Features() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section id="features" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            Features
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight font-[family-name:var(--font-heading)]">
            Everything your agency needs.{' '}
            <span className="text-gray-500">Nothing it doesn&apos;t.</span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-gray-400 leading-relaxed">
            Built specifically for how Indian agencies work — not adapted from some US tool.
          </p>
        </motion.div>

        {/* Feature rows */}
        <div className="flex flex-col gap-24 md:gap-32">
          {FEATURES.map((f, i) => (
            <AnimatedRow key={i} reversed={f.reversed} index={i}>
              <FeatureText icon={f.icon} title={f.title} body={f.body} bullets={f.bullets} />
              {f.mockup}
            </AnimatedRow>
          ))}
        </div>
      </div>
    </section>
  )
}
