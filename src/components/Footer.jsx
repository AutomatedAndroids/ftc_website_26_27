export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-4 py-8 text-center text-sm text-gray-400">
      <p>
        Automated Androids &middot; FTC Team #23239 &middot; {year} Season
      </p>
      <p className="mt-1">
        <a href="mailto:john.novotny@gmail.com" className="text-blue-400 hover:underline">
          john.novotny@gmail.com
        </a>
      </p>
    </footer>
  )
}
