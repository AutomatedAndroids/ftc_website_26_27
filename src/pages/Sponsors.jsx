// TODO: add more sponsors as they're confirmed
const sponsors = [{ name: 'Google.org', tier: 'Development Grant Partner' }]

export default function Sponsors() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-4xl font-extrabold">Our Sponsors</h1>
      <p className="mt-4 max-w-2xl text-gray-300">
        Automated Androids couldn't compete without the generous support of our sponsors.
        {/* TODO: sponsorship pitch */}
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {sponsors.map((sponsor) => (
          <div
            key={sponsor.name}
            className="flex h-32 flex-col items-center justify-center rounded-lg border border-slate-800 bg-slate-900/50 p-5 text-center"
          >
            <p className="font-semibold text-white">{sponsor.name}</p>
            <p className="text-sm text-gray-400">{sponsor.tier}</p>
          </div>
        ))}
      </div>

      <section className="mt-16 rounded-lg border border-blue-900 bg-blue-950/40 p-8 text-center">
        <h2 className="text-2xl font-bold">Interested in Sponsoring Us?</h2>
        <p className="mx-auto mt-3 max-w-xl text-gray-300">
          Reach out to learn about sponsorship tiers and how your support helps our students
          build robots and grow in STEM.
        </p>
        <a
          href="mailto:john.novotny@gmail.com"
          className="mt-6 inline-block rounded-md bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-500"
        >
          Contact Us
        </a>
      </section>
    </div>
  )
}
