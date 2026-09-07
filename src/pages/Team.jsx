// Drop a photo in public/team/<filename> and it'll show up automatically.
// If a file is missing, the card just falls back to a blank circle.
const members = [
  {
    name: 'Niels Novotny',
    role: 'Team Captain & Software Engineering Lead',
    bio: 'Eager to build an autonomous-capable robot, driving technical focus for the team.',
    photo: '/team/niels-novotny.jpg',
  },
  {
    name: 'Avi Novotny',
    role: 'Outreach & Publicity Officer',
    bio: 'Presents the robot to local schools and community sites, manages social media, and puts together the team portfolio, engineering notebook, and final presentation.',
    photo: '/team/avi-novotny.jpg',
  },
  {
    name: 'Lucas Brunkan',
    role: 'Mechanical',
    bio: 'Passionate about hands-on mechanical work — integrating 3D printers and mills with sharp problem-solving to build the robot.',
    photo: '/team/lucas-brunkan.jpg',
  },
  {
    name: 'Josh Lau',
    role: 'CAD Lead',
    bio: 'Specializes in Computer-Aided Design, sketching intake, movement, and energy components with creative vision. Pioneered last year’s ramp.',
    photo: '/team/josh-lau.jpg',
  },
  {
    name: 'Ryan Park',
    role: 'Mechanical',
    bio: 'Took a leading role developing the chassis system to maximize compatibility with this year’s small ball.',
    photo: '/team/ryan-park.jpg',
  },
  {
    name: 'Andrew Chang',
    role: 'Assembly Lead & Robot Pilot',
    bio: 'Integrated flippers for last year’s system using elaborate rubber bands; handles real-time issues on the field.',
    photo: '/team/andrew-chang.jpg',
  },
  {
    name: 'Leran Wang',
    role: 'Mechanical Lead',
    bio: 'Interdisciplinary skills; created the team’s points-per-second sheet and communicates well with judges.',
    photo: '/team/leran-wang.jpg',
  },
  {
    name: 'Ethan',
    role: 'Hardware',
    bio: 'Hardware expert; built the practice course in the basement and helped the software team organize their agenda.',
    photo: '/team/ethan.jpg',
  },
]

const coaches = [
  {
    name: 'John Novotny',
    role: 'Coach',
    bio: 'Software Engineer at Google; hosts the team, excited to build the robot with precision and imagination, bringing AI into the process.',
    photo: '/team/john-novotny.jpg',
  },
  {
    name: 'Bin Xu',
    role: 'Coach',
    bio: 'Electrical component expert; intertwines code with game vision, and built a starter bot with simple functions as the base for the final model.',
    photo: '/team/bin-xu.jpg',
  },
]

function MemberCard({ name, role, bio, photo }) {
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-5">
      <div className="relative mb-4 h-16 w-16 overflow-hidden rounded-full bg-slate-800">
        {photo && (
          <img
            src={photo}
            alt={name}
            className="absolute inset-0 h-full w-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        )}
      </div>
      <p className="font-semibold text-white">{name}</p>
      <p className="text-sm text-blue-400">{role}</p>
      <p className="mt-2 text-sm text-gray-400">{bio}</p>
    </div>
  )
}

export default function Team() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-4xl font-extrabold">Meet the Team</h1>
      <p className="mt-4 max-w-2xl text-gray-300">
        The students and coaches behind Automated Androids.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((member) => (
          <MemberCard key={member.name} {...member} />
        ))}
      </div>

      <h2 className="mt-16 text-2xl font-bold">Coaches</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {coaches.map((coach) => (
          <MemberCard key={coach.name} {...coach} />
        ))}
      </div>
    </div>
  )
}
