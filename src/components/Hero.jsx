import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, 120])
  const opacity = useTransform(scrollY, [0, 400], [1, 0.5])

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[var(--pt-ivory)]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-[var(--pt-ivory)] pointer-events-none"></div>

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <p className="uppercase tracking-[0.35em] text-xs text-neutral-700 mb-4">Proper Trim</p>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight text-neutral-900 max-w-3xl">
          Reimagining the barbershop. Luxury. Precision. Craft.
        </h1>
        <p className="mt-6 text-neutral-700 max-w-xl">
          A modern sanctuary where craftsmanship meets technology. Experience premium grooming with cinematic calm.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="/services" className="btn btn-primary">Book an Appointment</a>
          <a href="/shop" className="btn btn-ghost">Shop Products</a>
        </div>
      </motion.div>
    </section>
  )
}
