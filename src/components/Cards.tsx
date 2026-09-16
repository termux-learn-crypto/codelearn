import { Link } from 'react-router-dom'

interface TutorialCardProps {
  slug: string
  title: string
  hindiTitle: string
  level: string
  minutes: number
  summary: string
  categoryId: string
}

export function TutorialCard({ slug, title, hindiTitle, level, minutes }: TutorialCardProps) {
  const levelColors: Record<string, string> = {
    beginner: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
    intermediate: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300',
    advanced: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
    projects: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
  }
  const levelLabels: Record<string, string> = { beginner: 'Beginner', intermediate: 'Intermediate', advanced: 'Advanced', projects: 'Project' }

  return (
    <Link to={`/tutorial/${slug}`} className="block p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 card-hover">
      <div className="flex items-center gap-2 mb-2">
        <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${levelColors[level] || levelColors.beginner}`}>{levelLabels[level] || level}</span>
        <span className="text-xs text-slate-400">{minutes} min</span>
      </div>
      <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">{title}</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">{hindiTitle}</p>
    </Link>
  )
}

interface SectionHeaderProps {
  title: string
  subtitle?: string
  icon?: string
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200">{title}</h2>
      {subtitle && <p className="mt-2 text-slate-500 dark:text-slate-400">{subtitle}</p>}
    </div>
  )
}
