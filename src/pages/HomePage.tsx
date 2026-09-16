import { useState } from 'react'
import { Link } from 'react-router-dom'
import { tutorials } from '@/data/tutorials'
import { categories } from '@/data/categories'
import { TutorialCard, SectionHeader } from '@/components/Cards'

const stats = [
  { icon: '📚', label: 'Tutorials', value: tutorials.length },
  { icon: '💻', label: 'Programs', value: '50+' },
  { icon: '🎯', label: 'Quiz Questions', value: '80+' },
  { icon: '📖', label: 'Glossary Terms', value: '30+' },
]

const features = [
  { icon: '🇮🇳', title: 'Hinglish Mein', desc: 'Sab kuch Hindi-English mix mein — samajhna easy hai.' },
  { icon: '🆓', title: '100% Free', desc: 'Koi hidden fees nahi, sab kuch free hai.' },
  { icon: '💻', title: 'Live Code Examples', desc: 'Har topic ke saath runnable code examples.' },
  { icon: '🎯', title: 'Interactive Quiz', desc: 'Quiz khel kar apna knowledge test karo.' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cobol-50 to-green-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-cobol-100 dark:bg-cobol-900/40 text-cobol-700 dark:text-cobol-300 text-sm font-medium mb-6">
            🚀 COBOL Seekho — Hinglish Mein!
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            <span className="text-cobol-600">COBOL</span> Sikho
            <br />
            <span className="text-2xl md:text-3xl text-slate-600 dark:text-slate-400">Beginner Se Advanced Tak</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
            COBOL programming Hinglish mein seekhein — banking, mainframe, aur enterprise applications.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/tutorials" className="px-8 py-3 rounded-xl bg-cobol-600 text-white font-medium hover:bg-cobol-700 transition-colors shadow-lg shadow-cobol-600/25">
              Abhi Shuru Karein →
            </Link>
            <Link to="/compiler" className="px-8 py-3 rounded-xl border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              💻 Online Compiler
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl mb-1">{s.icon}</div>
                <div className="text-2xl font-bold text-slate-800 dark:text-slate-200">{s.value}</div>
                <div className="text-sm text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader title="Kyun Seekhein COBOL?" subtitle="COBOL world ki sabse zyada use hone wali language hai" />
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 card-hover">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-semibold mb-2 text-slate-800 dark:text-slate-200">{f.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader title="Topics Explore Karein" subtitle="Apni level ke hisaab se seekhein" />
          <div className="grid md:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link key={cat.id} to={`/tutorials?category=${cat.id}`} className={`p-6 rounded-xl bg-gradient-to-br ${cat.gradient} text-white card-hover`}>
                <div className="text-3xl mb-3">{cat.icon}</div>
                <h3 className="font-bold text-lg mb-1">{cat.hindiName}</h3>
                <p className="text-sm opacity-90">{cat.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Tutorials */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader title="Shuru Kahan Se Karein" subtitle="Pehle ye tutorials padho" />
          <div className="grid md:grid-cols-3 gap-6">
            {tutorials.slice(0, 6).map((t) => (
              <TutorialCard key={t.slug} {...t} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/tutorials" className="px-6 py-2 rounded-lg border border-cobol-600 text-cobol-600 hover:bg-cobol-50 dark:hover:bg-cobol-900/20 transition-colors">
              Saare Tutorials Dekho →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-cobol-600 to-green-600 text-white">
            <h2 className="text-3xl font-bold mb-4">Abhi Shuru Karein COBOL Seekhna!</h2>
            <p className="text-lg opacity-90 mb-6">COBOL seekh kar banking, insurance, aur mainframe jobs paao.</p>
            <Link to="/tutorials" className="inline-block px-8 py-3 rounded-xl bg-white text-cobol-700 font-medium hover:bg-slate-100 transition-colors">
              Pehla Tutorial Padho →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
