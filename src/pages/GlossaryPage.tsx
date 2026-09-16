import { useState } from 'react'
import { glossary, searchGlossary } from '@/data/glossary'
import { SectionHeader } from '@/components/Cards'

export default function GlossaryPage() {
  const [query, setQuery] = useState('')
  const filtered = query ? searchGlossary(query) : glossary

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <SectionHeader title="📖 COBOL Glossary" subtitle="COBOL ke terms ka Hinglish mein matlab" />
      <div className="mb-8">
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Term search karo..."
          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-cobol-500" />
      </div>
      <div className="space-y-4">
        {filtered.map((term) => (
          <div key={term.term} className="p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50">
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200">{term.term}</h3>
            <p className="text-sm text-cobol-600 dark:text-cobol-400 mt-1">{term.hindiMeaning}</p>
            <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{term.description}</p>
            {term.example && <div className="mt-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-900 font-mono text-sm text-slate-700 dark:text-slate-300">{term.example}</div>}
          </div>
        ))}
        {filtered.length === 0 && <div className="text-center py-12 text-slate-500"><div className="text-4xl mb-4">🔍</div><p>&quot;{query}&quot; se match koi term nahi mila.</p></div>}
      </div>
    </div>
  )
}
