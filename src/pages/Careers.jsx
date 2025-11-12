import Section from '../components/Section'

export default function Careers() {
  return (
    <main className="pt-20">
      <Section overline="Careers" title="Join the Proper Trim Team">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Master Barber', type: 'Full-time' },
            { title: 'Stylist', type: 'Part-time' },
            { title: 'Front of House Lead', type: 'Full-time' }
          ].map((role) => (
            <div key={role.title} className="rounded-xl bg-white p-5 border border-[var(--pt-shell)]">
              <p className="font-medium">{role.title}</p>
              <p className="text-sm text-neutral-600">{role.type}</p>
              <button className="btn btn-ghost mt-4">View Details</button>
            </div>
          ))}
        </div>
      </Section>
    </main>
  )
}
