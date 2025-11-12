import { motion } from 'framer-motion'

export default function Section({ overline, title, children, bg = 'white' }) {
  return (
    <section className={`py-20 sm:py-28 ${bg === 'tint' ? 'bg-[var(--pt-sage)]/40' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[0.3em] text-xs text-neutral-600 mb-4"
        >
          {overline}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="font-serif text-3xl sm:text-4xl text-neutral-900 mb-8"
        >
          {title}
        </motion.h2>
        <div>
          {children}
        </div>
      </div>
    </section>
  )
}
