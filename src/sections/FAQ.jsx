import { useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef } from 'react'

const FAQS = [
  {
    q: 'Do my clients need to create an account?',
    a: 'No. Your clients get a magic link by email. They click it and they\u2019re inside their portal instantly. No password, no app download, no confusion.',
  },
  {
    q: 'Can my clients see other clients\u2019 data?',
    a: 'Absolutely not. Each client portal is completely isolated. Client A cannot see anything about Client B. Total data separation.',
  },
  {
    q: 'What types of files can I upload?',
    a: 'Images (JPG, PNG, GIF, WebP), PDFs, Word documents, Excel files, MP4 videos, and ZIP files. Max 50MB per file.',
  },
  {
    q: 'Is Klientzo built for Indian agencies specifically?',
    a: 'Yes. INR pricing, Razorpay payments, GST-compliant invoices, and servers hosted in India for fast loading. Built by an Indian founder who understands how Indian agencies work.',
  },
  {
    q: 'Can I white label it with my own brand?',
    a: 'Yes \u2014 on the Pro plan. Your clients see your agency\u2019s name and logo, not Klientzo. Custom domain support coming soon.',
  },
  {
    q: 'What happens after my 14-day trial?',
    a: 'You choose a plan and add your payment details. If you don\u2019t upgrade, your account is paused (your data is safe \u2014 nothing is deleted).',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. No contracts, no cancellation fees. Cancel from your dashboard in one click.',
  },
]

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
      >
        <span className="text-sm md:text-base font-medium text-white">{faq.q}</span>
        <motion.svg
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="w-5 h-5 text-gray-500 shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-4 text-sm text-gray-400 leading-relaxed" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
              <div className="pt-3">{faq.a}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section id="faq" className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight font-[family-name:var(--font-heading)]">
            Questions? <span className="text-gray-500">We&apos;ve got answers.</span>
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
