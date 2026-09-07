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

      <section className="mt-20 border-t border-slate-800 pt-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
          Season Archive
        </p>
        <h2 className="mt-2 text-3xl font-extrabold">2025&ndash;2026 Robot</h2>
        <p className="mt-4 max-w-2xl text-gray-300">
          As a third-year FTC team, our 2025&ndash;2026 robot sorted and launched purple and
          green balls using dual flywheels and a two-stage loading system with a center flipper.
          We ran a command-based paradigm on WPILib and Road Runner, and navigated with an IMU,
          dead wheels, and a Limelight 3A camera.
        </p>

        <ul className="mt-6 grid gap-3 text-sm text-gray-300 sm:grid-cols-2">
          <li className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
            Dual-flywheel launcher for sorting and rapid-firing purple/green balls
          </li>
          <li className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
            Two-stage loading system with a center flipper for sorting
          </li>
          <li className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
            Command-based programming with WPILib and Road Runner
          </li>
          <li className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
            Navigation via IMU, dead wheels, and a Limelight 3A camera
          </li>
        </ul>

        <details className="mt-8 rounded-lg border border-slate-800 bg-slate-900/40 p-4">
          <summary className="cursor-pointer font-semibold text-white">
            Build Story: From Prototype to Competition
          </summary>
          <div className="mt-4 space-y-4 text-sm text-gray-300">
            <p>
              <strong className="text-white">Original goBILDA robot:</strong> Helped us learn the
              game, but lacked an intake and shot inaccurately &mdash; we scrapped it and moved to
              CAD.
            </p>
            <p>
              <strong className="text-white">New design:</strong> Inspired by hooded shooters, we
              CAD&apos;d a dual-chute launcher that sorted balls into two ramps before
              accelerator wheels shot them out.
            </p>
            <p>
              <strong className="text-white">Color sort:</strong> Used RGB sensor readings and
              Java to distinguish and sort green vs. purple balls.
            </p>
            <p>
              <strong className="text-white">Hood &amp; launcher:</strong> 3D-printed a hood at
              home and stabilized ball flight with cardboard strips and a curved profile.
            </p>
            <p>
              <strong className="text-white">Intake:</strong> Adopted a spinning rubber-band gear
              system, tuned for traction &mdash; tight enough to grip, loose enough to flex.
            </p>
            <p>
              <strong className="text-white">Ramp:</strong> Tested cardboard and foam before
              settling on a textured plastic that balanced sturdiness with flexibility.
            </p>
            <p>
              <strong className="text-white">Scrimmage fixes:</strong> After inconsistent launches
              at the Gobble Squabble scrimmage, we added motors and gearing to increase ball
              acceleration.
            </p>
            <p>
              <strong className="text-white">Wire management, camera, flipper:</strong> Dedicated
              a wire channel at the top of the robot, mounted the camera up front for visibility,
              and drilled a mount point to center the flipper in the intake-outtake system.
            </p>
          </div>
        </details>

        <details className="mt-4 rounded-lg border border-slate-800 bg-slate-900/40 p-4">
          <summary className="cursor-pointer font-semibold text-white">
            Challenges &amp; Solutions
          </summary>
          <div className="mt-4 space-y-4 text-sm text-gray-300">
            <p>
              <strong className="text-white">Balls jamming in the chutes:</strong> Re-engineered
              the cardboard ramp geometry so balls could move freely instead of catching on loose
              pieces.
            </p>
            <p>
              <strong className="text-white">Robot exceeded the size limit:</strong> Trimmed and
              recentered the base plate to stay within regulation while keeping weight balanced.
            </p>
            <p>
              <strong className="text-white">Weak intake/outtake power:</strong> Replaced the
              original motor setup with a chain-driven system for consistent leverage and a
              steadier ball climb.
            </p>
          </div>
        </details>

        <details className="mt-4 rounded-lg border border-slate-800 bg-slate-900/40 p-4">
          <summary className="cursor-pointer font-semibold text-white">
            Outreach &amp; Community Connections
          </summary>
          <div className="mt-4 space-y-3 text-sm text-gray-300">
            <p>
              <strong className="text-white">FLL team mentoring:</strong> Shared robotics
              expertise and feedback with a local FIRST LEGO League team.
            </p>
            <p>
              <strong className="text-white">FRC partnership:</strong> Partnered with Cherry Creek
              High School's FRC team for CAD mentoring and attended their scrimmages.
            </p>
            <p>
              <strong className="text-white">Instagram:</strong>{' '}
              <a
                href="https://www.instagram.com/automatedandroids23239/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:underline"
              >
                @automatedandroids23239
              </a>{' '}
              &mdash; sharing our engineering process and team news.
            </p>
            <p>
              <strong className="text-white">Community demos:</strong> Presented the robot at
              Mudra Dance Studio and to Cherry Creek High School's AP Chemistry classes.
            </p>
          </div>
        </details>

        <details className="mt-4 rounded-lg border border-slate-800 bg-slate-900/40 p-4">
          <summary className="cursor-pointer font-semibold text-white">
            2025&ndash;2026 Roster (past season)
          </summary>
          <p className="mt-3 text-xs text-gray-500">
            Team membership has changed since this season &mdash; see the current{' '}
            <a href="/team" className="text-blue-400 hover:underline">
              Team page
            </a>{' '}
            for this year's roster.
          </p>
          <ul className="mt-4 grid gap-2 text-sm text-gray-300 sm:grid-cols-2">
            <li>Andrew Chang &mdash; Hardware / Lead Driver</li>
            <li>Leran Wang &mdash; Hardware / Driver</li>
            <li>Niels Novotny &mdash; Programmer / Hardware / Driver</li>
            <li>Sophia Zhang &mdash; CAD / Assembly</li>
            <li>Ethan Zhang &mdash; Hardware</li>
            <li>Jeremy Xu &mdash; Hardware</li>
            <li>Lucas Brunkan &mdash; Hardware</li>
            <li>Katherine Ning &mdash; CAD / Hardware</li>
            <li>Josh Liu &mdash; Mechanical Design</li>
            <li>Reva Aggarwal &mdash; Programmer / Outreach</li>
            <li>Anusha Unadkat &mdash; Programmer / Outreach</li>
            <li>Avi Novotny &mdash; Programmer / Outreach</li>
            <li>Zihe Chen &mdash; Hardware</li>
          </ul>
          <p className="mt-4 text-sm text-gray-300">
            Coaches: John Novotny (Software Engineer) and Bin Xu (Engineer)
          </p>
        </details>
      </section>
    </div>
  )
}
