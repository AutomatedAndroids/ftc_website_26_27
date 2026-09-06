import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <section className="mx-auto max-w-5xl px-4 py-20 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
          FTC Team #XXXXX &middot; 2026&ndash;2027 Season
        </p>
        <h1 className="text-4xl font-extrabold sm:text-6xl">Automated Androids</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
          {/* TODO: team mission statement */}
          A FIRST Tech Challenge robotics team building competitive robots, growing STEM skills,
          and giving back to our community.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/robot"
            className="rounded-md bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-500"
          >
            See This Season's Robot
          </Link>
          <Link
            to="/sponsors"
            className="rounded-md border border-slate-700 px-5 py-3 font-semibold text-gray-200 hover:bg-slate-800"
          >
            Become a Sponsor
          </Link>
        </div>
      </section>

      <section className="border-t border-slate-800 bg-slate-900/50 px-4 py-16">
        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-3">
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-400">{/* TODO */}#</p>
            <p className="mt-1 text-sm text-gray-400">Team Members</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-400">{/* TODO */}#</p>
            <p className="mt-1 text-sm text-gray-400">Seasons Competed</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-400">{/* TODO */}#</p>
            <p className="mt-1 text-sm text-gray-400">Awards Won</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-2xl font-bold">About Us</h2>
        <p className="mt-4 max-w-3xl text-gray-300">
          {/* TODO: replace with the team's real story */}
          Automated Androids is a FIRST Tech Challenge team competing in the 2026&ndash;2027
          season. We design, build, and program a competitive robot each year while practicing
          the FIRST core values of gracious professionalism and coopertition.
        </p>
      </section>
    </div>
  )
}
