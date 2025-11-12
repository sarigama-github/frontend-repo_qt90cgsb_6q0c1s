import Section from '../components/Section'

export default function Memberships() {
  return (
    <main className="pt-20">
      <Section overline="Memberships" title="Exclusive benefits for discerning members">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            <div className="rounded-xl bg-white p-5 border border-[var(--pt-shell)]">
              <p className="font-medium">Founders Tier</p>
              <p className="text-sm text-neutral-600">Priority booking, quarterly treatments, members events</p>
            </div>
            <div className="rounded-xl bg-white p-5 border border-[var(--pt-shell)]">
              <p className="font-medium">Studio Tier</p>
              <p className="text-sm text-neutral-600">Monthly haircut, preferred pricing on products</p>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-6 elevate border border-[var(--pt-shell)]">
            <h3 className="font-medium mb-3">Register interest</h3>
            <form className="grid grid-cols-1 gap-3">
              <input className="border border-[var(--pt-shell)] rounded-md px-3 py-2 text-sm" placeholder="Full name" />
              <input className="border border-[var(--pt-shell)] rounded-md px-3 py-2 text-sm" placeholder="Email" />
              <button className="btn btn-primary" type="button">Sign Up</button>
            </form>
          </div>
        </div>
      </Section>
    </main>
  )
}
