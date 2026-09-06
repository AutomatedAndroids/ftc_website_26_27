export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-4 py-8 text-center text-sm text-gray-400">
      <p>
        Automated Androids &middot; FTC Team #{/* TODO: team number */ 'XXXXX'} &middot; {year}{' '}
        Season
      </p>
      <p className="mt-1">
        <a
          href="mailto:automatedandroids@example.com"
          className="text-blue-400 hover:underline"
        >
          {/* TODO: real team contact email */ 'automatedandroids@example.com'}
        </a>
      </p>
    </footer>
  )
}
