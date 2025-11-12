import { motion } from 'framer-motion'

export function StaffCard({ name, role, bio, img }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="group bg-white rounded-2xl p-6 elevate border border-[var(--pt-shell)]/60 hover:shadow-xl transition-shadow"
    >
      <div className="aspect-[4/3] rounded-xl bg-[var(--pt-sage)]/50 mb-4 overflow-hidden" />
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium">{name}</h3>
          <p className="text-sm text-neutral-600">{role}</p>
        </div>
        <button className="text-xs uppercase tracking-wider text-neutral-700 group-hover:text-black">View</button>
      </div>
      {bio && <p className="text-sm text-neutral-700 mt-3">{bio}</p>}
    </motion.div>
  )
}

export function ProductCard({ name, price, img }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl p-5 elevate border border-[var(--pt-shell)]/60 hover:shadow-xl transition-shadow"
    >
      <div className="aspect-square rounded-xl bg-[var(--pt-sage)]/50 mb-4 overflow-hidden" />
      <div className="flex items-center justify-between">
        <h3 className="text-base font-medium">{name}</h3>
        <span className="text-sm text-neutral-700">{price}</span>
      </div>
    </motion.div>
  )
}
