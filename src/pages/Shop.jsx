import Section from '../components/Section'

export default function Shop() {
  return (
    <main className="pt-20">
      <Section overline="Shop" title="Premium grooming for everyday rituals">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1,2,3,4,5,6,7,8].map((i) => (
            <div key={i} className="rounded-xl bg-white p-5 border border-[var(--pt-shell)]">
              <div className="aspect-square rounded-lg bg-[var(--pt-sage)]/50 mb-3" />
              <p className="font-medium">Product {i}</p>
              <p className="text-sm text-neutral-600">$48</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-sm text-neutral-700">In-store pickup available at our flagship.</div>
      </Section>
    </main>
  )
}
