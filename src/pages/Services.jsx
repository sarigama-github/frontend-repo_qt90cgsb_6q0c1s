import Section from '../components/Section'

export default function Services() {
  return (
    <main className="pt-20">
      <Section overline="Services" title="Considered treatments for modern life">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <ul className="space-y-4">
              {[
                { name: 'Signature Haircut', desc: 'Consultation, precision cut, hot towel finish', price: '$85' },
                { name: 'Styling', desc: 'Wash, blow-dry, finish', price: '$55' },
                { name: 'Manicure', desc: 'Cuticle care, shape, buff', price: '$45' },
                { name: 'Esthetics', desc: 'Express facial, hydration, mask', price: '$95' }
              ].map((s) => (
                <li key={s.name} className="flex items-start justify-between gap-6 border-b border-[var(--pt-shell)] pb-4">
                  <div>
                    <p className="font-medium">{s.name}</p>
                    <p className="text-sm text-neutral-600">{s.desc}</p>
                  </div>
                  <span className="text-sm">{s.price}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="rounded-2xl bg-white p-6 elevate border border-[var(--pt-shell)]">
              <h3 className="font-medium mb-3">Book an Appointment</h3>
              <p className="text-sm text-neutral-700 mb-4">Scheduling integrates soon. For now, submit a request and well confirm availability.</p>
              <form className="grid grid-cols-1 gap-3">
                <input className="border border-[var(--pt-shell)] rounded-md px-3 py-2 text-sm" placeholder="Full name" />
                <input className="border border-[var(--pt-shell)] rounded-md px-3 py-2 text-sm" placeholder="Email" />
                <select className="border border-[var(--pt-shell)] rounded-md px-3 py-2 text-sm">
                  <option>Signature Haircut</option>
                  <option>Styling</option>
                  <option>Manicure</option>
                  <option>Esthetics</option>
                </select>
                <button className="btn btn-primary" type="button">Request Booking</button>
              </form>
            </div>
          </div>
        </div>
      </Section>

      <Section overline="Team" title="Meet the professionals" bg="tint">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1,2,3,4].map((i) => (
            <div key={i} className="rounded-xl bg-white p-5 border border-[var(--pt-shell)]">
              <div className="aspect-[4/3] rounded-lg bg-[var(--pt-sage)]/50 mb-3" />
              <p className="font-medium">Specialist {i}</p>
              <p className="text-sm text-neutral-600">Barber / Stylist</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  )
}
