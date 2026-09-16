import { Link } from 'react-router-dom'
import { tutorials } from '@/data/tutorials'
import { SectionHeader } from '@/components/Cards'

const projects = tutorials.filter((t) => t.categoryId === 'projects')

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <SectionHeader title="🛠️ Real World Projects" subtitle="COBOL ke real-world projects banakar practice karo" />
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Link key={project.slug} to={`/tutorial/${project.slug}`}
            className="p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 card-hover">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">Project</span>
              <span className="text-xs text-slate-400">{project.minutes} min</span>
            </div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">{project.title}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{project.hindiTitle}</p>
          </Link>
        ))}
      </div>
      <div className="mt-12 text-center">
        <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-600 to-cobol-600 text-white">
          <h2 className="text-2xl font-bold mb-4">Apna Khud Ka Project Banao!</h2>
          <p className="opacity-90 mb-6">Tutorials padh ke jo seekha hai use practice karo.</p>
          <Link to="/tutorials" className="inline-block px-6 py-2 rounded-lg bg-white text-purple-700 font-medium hover:bg-slate-100 transition-colors">Tutorials Dekho →</Link>
        </div>
      </div>
    </div>
  )
}
