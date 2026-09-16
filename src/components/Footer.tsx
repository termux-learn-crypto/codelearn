import { Link } from 'react-router-dom'

const footerLinks = [
  { title: 'Seekhein', links: [{ href: '/tutorials', label: 'Tutorials' }, { href: '/projects', label: 'Projects' }, { href: '/quiz', label: 'Quiz' }, { href: '/glossary', label: 'Glossary' }] },
  { title: 'Resources', links: [{ href: '/compiler', label: 'Online Compiler' }, { href: '/about', label: 'About COBOL' }] },
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="font-bold text-lg">
              <span className="text-cobol-600 dark:text-cobol-400">COBOL</span>
              <span className="text-slate-700 dark:text-slate-200">Sikho</span>
            </Link>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">COBOL programming Hinglish mein seekhein.</p>
          </div>
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">{group.title}</h3>
              <ul className="space-y-2">
                {group.links.map((l) => (
                  <li key={l.href}><Link to={l.href} className="text-sm text-slate-500 dark:text-slate-400 hover:text-cobol-600 dark:hover:text-cobol-400 transition-colors">{l.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} COBOL Sikho. Sabhi rights reserved.
        </div>
      </div>
    </footer>
  )
}
