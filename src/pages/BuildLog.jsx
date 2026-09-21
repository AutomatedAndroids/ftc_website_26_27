import { buildLog } from '../data/buildLog.js'

function formatDate(dateStr) {
  return new Date(`${dateStr}T00:00:00`).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BuildLog() {
  const entries = [...buildLog].sort((a, b) => (a.date < b.date ? 1 : -1))

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-extrabold">Build Log</h1>
      <p className="mt-4 text-gray-300">A day-by-day record of what the team worked on.</p>

      <div className="mt-10 space-y-8">
        {entries.length === 0 && (
          <p className="text-gray-500">No entries yet — check back once the build season starts.</p>
        )}

        {entries.map((entry) => (
          <div key={entry.date} className="rounded-lg border border-slate-800 bg-slate-900/50 p-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-400">
              {formatDate(entry.date)}
            </p>
            <ul className="mt-3 space-y-4">
              {entry.items.map((item, i) => (
                <li key={i} className="text-gray-300">
                  <span className="font-medium text-white">{item.who}</span> &mdash; {item.what}
                  {item.photos?.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {item.photos.map((src) => (
                        <img
                          key={src}
                          src={src}
                          alt={item.what}
                          className="max-h-96 rounded-lg border border-slate-800 object-cover"
                        />
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
