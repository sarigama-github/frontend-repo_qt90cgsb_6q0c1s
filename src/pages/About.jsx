import Section from '../components/Section'

export default function About() {
  return (
    <main className="pt-20">
      <Section overline="Our Story" title="A flagship for modern grooming">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="prose prose-neutral max-w-none">
            <p>
              Proper Trim was born in The Parks at Historic Walter Reed to honor the ritual of grooming with contemporary sensibility.
            </p>
            <p>
              Opening June 1, 2026 — we welcome you to experience an environment where design, hospitality, and mastery become one.
            </p>
          </div>
          <div className="rounded-2xl bg-[var(--pt-sage)]/40 aspect-[4/3]" />
        </div>
      </Section>

      <Section overline="Craftsmanship" title="Luxury without the noise" bg="tint">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <div key={i} className="p-6 bg-white rounded-xl border border-[var(--pt-shell)]">
              <h3 className="font-medium mb-2">Principle {i}</h3>
              <p className="text-sm text-neutral-700">Considered materials. Quiet confidence. Precision at every step.</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  )
}
