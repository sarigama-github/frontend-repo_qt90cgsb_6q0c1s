import Section from '../components/Section'

export default function Events() {
  return (
    <main className="pt-20">
      <Section overline="Events" title="Host within a refined setting">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="rounded-2xl bg-[var(--pt-sage)]/40 aspect-[4/3]" />
          <div className="rounded-2xl bg-white p-6 elevate border border-[var(--pt-shell)]">
            <h3 className="font-medium mb-3">Event Inquiry</h3>
            <form className="grid grid-cols-1 gap-3">
              <input className="border border-[var(--pt-shell)] rounded-md px-3 py-2 text-sm" placeholder="Full name" />
              <input className="border border-[var(--pt-shell)] rounded-md px-3 py-2 text-sm" placeholder="Email" />
              <input className="border border-[var(--pt-shell)] rounded-md px-3 py-2 text-sm" placeholder="Estimated guest count" />
              <textarea className="border border-[var(--pt-shell)] rounded-md px-3 py-2 text-sm" rows="4" placeholder="Tell us about your event" />
              <button className="btn btn-primary" type="button">Submit</button>
            </form>
          </div>
        </div>
      </Section>
    </main>
  )
}
