function Spec({ label, value }) {
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
      <p className="text-xs uppercase tracking-wide text-gray-500">{label}</p>
      <p className="mt-1 font-semibold text-white">{value}</p>
    </div>
  )
}

export default function Robot() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
        {/* TODO: this season's game name */}
        2026&ndash;2027 Game
      </p>
      <h1 className="mt-2 text-4xl font-extrabold">Our Robot</h1>
      <p className="mt-4 max-w-2xl text-gray-300">
        {/* TODO: robot overview / strategy summary */}
        Details, photos, and CAD renders of this season's robot will go here once the build
        season kicks off.
      </p>

      <div className="mt-10 flex aspect-video items-center justify-center rounded-xl border border-dashed border-slate-700 bg-slate-900/40 text-gray-500">
        Robot photo / render placeholder
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        <Spec label="Drivetrain" value="TBD" />
        <Spec label="Weight" value="TBD" />
        <Spec label="Key Mechanisms" value="TBD" />
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-bold">Engineering Notebook</h2>
        <p className="mt-4 text-gray-300">
          {/* TODO: link to the team's engineering notebook / build blog */}
          Our engineering notebook documenting the design process will be linked here.
        </p>
      </section>
    </div>
  )
}
