import Hero from '../components/Hero'
import Section from '../components/Section'
import { StaffCard, ProductCard } from '../components/Cards'

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />

      <Section overline="Our Philosophy" title="Craftsmanship with a technological calm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="prose prose-neutral max-w-none">
            <p>
              Proper Trim is a sanctuary of precision. Our masters pair centuries-old techniques with modern tools and a serene, cinematic atmosphere.
            </p>
            <p>
              Each visit is choreographed: refined consultation, meticulous cut, restorative finish.
            </p>
          </div>
          <div className="prose prose-neutral max-w-none">
            <p>
              We obsess over material choices, lighting, and sound. Everything you touch is intentional— from warm towels to titanium shears.
            </p>
          </div>
          <div className="prose prose-neutral max-w-none">
            <p>
              Designed for thinkers, founders, and craftspeople who value time as much as taste.
            </p>
          </div>
        </div>
      </Section>

      <Section overline="Featured Team" title="Barbers and artists you can trust" bg="tint">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1,2,3,4].map((i) => (
            <StaffCard key={i} name={`Barber ${i}`} role="Master Barber" />
          ))}
        </div>
      </Section>

      <Section overline="Products" title="Premium grooming, made to last">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1,2,3,4].map((i) => (
            <ProductCard key={i} name={`Serum ${i}`} price="$48" />
          ))}
        </div>
        <div className="mt-8">
          <a href="/shop" className="btn btn-ghost">Explore the shop</a>
        </div>
      </Section>
    </main>
  )
}
