import Section from '../components/Section'

export default function Contact() {
  return (
    <main className="pt-20">
      <Section overline="Contact" title="Were here to help">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="rounded-2xl bg-white p-6 elevate border border-[var(--pt-shell)]">
            <h3 className="font-medium mb-3">Send a message</h3>
            <form className="grid grid-cols-1 gap-3">
              <input className="border border-[var(--pt-shell)] rounded-md px-3 py-2 text-sm" placeholder="Full name" />
              <input className="border border-[var(--pt-shell)] rounded-md px-3 py-2 text-sm" placeholder="Email" />
              <textarea className="border border-[var(--pt-shell)] rounded-md px-3 py-2 text-sm" rows="4" placeholder="How can we help?" />
              <button className="btn btn-primary" type="button">Send</button>
            </form>
          </div>
          <div>
            <div className="rounded-2xl bg-[var(--pt-sage)]/40 aspect-[4/3] mb-4" />
            <p className="text-sm text-neutral-700">Flagship: The Parks at Historic Walter Reed</p>
          </div>
        </div>
      </Section>
    </main>
  )
}
