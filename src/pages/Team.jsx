// TODO: replace with the real roster
const members = [
  { name: 'Student Name', role: 'Team Captain / Programming' },
  { name: 'Student Name', role: 'Mechanical Lead' },
  { name: 'Student Name', role: 'CAD / Design' },
  { name: 'Student Name', role: 'Outreach' },
  { name: 'Mentor Name', role: 'Mentor' },
]

export default function Team() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-4xl font-extrabold">Meet the Team</h1>
      <p className="mt-4 max-w-2xl text-gray-300">
        The students and mentors behind Automated Androids.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((member) => (
          <div
            key={member.name + member.role}
            className="rounded-lg border border-slate-800 bg-slate-900/50 p-5"
          >
            <div className="mb-4 h-16 w-16 rounded-full bg-slate-800" aria-hidden="true" />
            <p className="font-semibold text-white">{member.name}</p>
            <p className="text-sm text-gray-400">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
