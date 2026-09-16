import { Link } from 'react-router-dom'
import { SectionHeader } from '@/components/Cards'

const timeline = [
  { year: '1959', event: 'CODASYL ne COBOL banaya' },
  { year: '1960', event: 'Pehli standard COBOL aayi' },
  { year: '1968', event: 'COBOL-68 standard release hui' },
  { year: '1974', event: 'COBOL-74 update aaya' },
  { year: '1985', event: 'COBOL-85 major update' },
  { year: '2002', event: 'COBOL 2002 — OOP support aaya' },
  { year: '2014', event: 'COBOL 2014 release' },
  { year: '2022', event: 'COBOL 2022 — JSON, regex support' },
]

const facts = [
  '95% ATM transactions COBOL se chalte hain',
  'Duniya mein 200+ billion lines COBOL code hain',
  'COBOL 60+ saal purani hai lekin abhi bhi chal rahi hai',
  'Banking, insurance, airlines sab COBOL par depend karte hain',
  'COBOL developers ki demand abhi bhi bahut zyada hai',
  'Average COBOL programmer ki salary bahut achhi hai',
]

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <SectionHeader title="COBOL Ke Baare Mein" subtitle="Duniya ki sabse zyada use hone wali programming language" />

      <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 mb-8">
        <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">COBOL Kya Hai?</h2>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
          COBOL (Common Business-Oriented Language) ek high-level programming language hai jo 1959 mein bani thi. Ye language business, finance, aur administrative systems ke liye design ki gayi thi.
        </p>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          Aaj bhi duniya ke 95% ATM transactions, banking systems, insurance companies, airlines, aur government offices COBOL use karte hain.
        </p>
      </div>

      <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 mb-8">
        <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">🎯 Interesting Facts</h2>
        <div className="space-y-3">
          {facts.map((fact, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-cobol-600 mt-1">✓</span>
              <span className="text-slate-600 dark:text-slate-400">{fact}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 mb-8">
        <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-6">📅 COBOL Ki Yatra</h2>
        <div className="space-y-4">
          {timeline.map((t) => (
            <div key={t.year} className="flex items-start gap-4">
              <div className="w-16 text-right font-mono font-bold text-cobol-600">{t.year}</div>
              <div className="w-px bg-slate-300 dark:bg-slate-600 mt-2" />
              <div className="text-slate-600 dark:text-slate-400">{t.event}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <Link to="/tutorials" className="inline-block px-8 py-3 rounded-xl bg-cobol-600 text-white font-medium hover:bg-cobol-700 transition-colors">
          COBOL Seekhna Shuru Karein →
        </Link>
      </div>
    </div>
  )
}
