import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { tutorials } from '@/data/tutorials'
import { categories } from '@/data/categories'
import { TutorialCard, SectionHeader } from '@/components/Cards'

const levels = ['all', 'beginner', 'intermediate', 'advanced', 'projects']
const levelLabels: Record<string, string> = { all: 'Sab', beginner: 'Beginner', intermediate: 'Intermediate', advanced: 'Advanced', projects: 'Projects' }

export default function TutorialsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [activeLevel, setActiveLevel] = useState(searchParams.get('level') || 'all')
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'all')

  const filtered = tutorials.filter((t) => {
    const levelMatch = activeLevel === 'all' || t.level === activeLevel
    const catMatch = activeCategory === 'all' || t.categoryId === activeCategory
    return levelMatch && catMatch
  })

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <SectionHeader title="Sab COBOL Tutorials" subtitle="Apni level aur topic ke hisaab se tutorials chunein" />
      <div className="mb-8 space-y-4">
        <div className="flex flex-wrap gap-2">
          {levels.map((l) => (
            <button key={l} onClick={() => { setActiveLevel(l); setSearchParams({ level: l, category: activeCategory }) }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeLevel === l ? 'bg-cobol-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'}`}>
              {levelLabels[l]}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          <button onClick={() => { setActiveCategory('all'); setSearchParams({ level: activeLevel, category: 'all' }) }}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeCategory === 'all' ? 'bg-green-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'}`}>
            All Topics
          </button>
          {categories.map((c) => (
            <button key={c.id} onClick={() => { setActiveCategory(c.id); setSearchParams({ level: activeLevel, category: c.id }) }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeCategory === c.id ? 'bg-green-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'}`}>
              {c.icon} {c.hindiName}
            </button>
          ))}
        </div>
      </div>
      <div className="mb-4 text-sm text-slate-500">{filtered.length} tutorials mile</div>
      {filtered.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-6">
          {filtered.map((t) => <TutorialCard key={t.slug} {...t} />)}
        </div>
      ) : (
        <div className="text-center py-16 text-slate-500">
          <div className="text-4xl mb-4">🔍</div>
          <p>Is combination mein koi tutorial nahi mila.</p>
        </div>
      )}
    </div>
  )
}
