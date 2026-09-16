import { useParams, Link } from 'react-router-dom'
import { getTutorialBySlug } from '@/data/tutorials'
import CodeEditor from '@/components/CodeEditor'
import QuizPlayer from '@/components/QuizPlayer'

export default function TutorialPage() {
  const { slug } = useParams<{ slug: string }>()
  const tutorial = getTutorialBySlug(slug || '')

  if (!tutorial) {
    return (
      <div className="flex-1 flex items-center justify-center py-20">
        <div className="text-center">
          <div className="text-6xl mb-4">404</div>
          <h1 className="text-2xl font-bold mb-2">Tutorial Nahi Mila!</h1>
          <Link to="/tutorials" className="text-cobol-600 hover:underline">← Tutorials Page Par Jao</Link>
        </div>
      </div>
    )
  }

  const levelColors: Record<string, string> = {
    beginner: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
    intermediate: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300',
    advanced: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
    projects: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-500 mb-6">
        <Link to="/" className="hover:text-cobol-600">Home</Link><span>/</span>
        <Link to="/tutorials" className="hover:text-cobol-600">Tutorials</Link><span>/</span>
        <span className="text-slate-700 dark:text-slate-300 break-words">{tutorial.title}</span>
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${levelColors[tutorial.level]}`}>{tutorial.level}</span>
          <span className="text-sm text-slate-400">{tutorial.minutes} min read</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">{tutorial.title}</h1>
        <p className="text-lg text-slate-500 dark:text-slate-400">{tutorial.hindiTitle}</p>
      </div>

      {/* Sections */}
      <div className="space-y-8">
        {tutorial.sections.map((section, idx) => (
          <div key={idx} className="p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50">
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">{section.title}</h2>
            <div className="space-y-2">
              {section.content.split('\n').map((line, i) => (
                <p key={i} className="text-slate-700 dark:text-slate-300 leading-relaxed break-words">{line}</p>
              ))}
            </div>
            {section.code && <div className="mt-4"><CodeEditor initialCode={section.code} readOnly /></div>}
            {section.output && (
              <div className="mt-4 p-4 rounded-lg bg-slate-900 text-green-400 font-mono text-sm">
                <div className="text-xs text-slate-400 mb-2">OUTPUT:</div>
                <pre className="whitespace-pre-wrap">{section.output}</pre>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Quiz */}
      {tutorial.quiz.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-200">🎯 Quiz — Apna Knowledge Test Karo!</h2>
          <QuizPlayer questions={tutorial.quiz} />
        </div>
      )}

      {/* Navigation */}
      <div className="mt-12 flex flex-col sm:flex-row justify-between gap-3 sm:gap-4">
        {tutorial.prev ? (
          <Link to={`/tutorial/${tutorial.prev}`} className="w-full sm:w-auto text-center px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">← Previous</Link>
        ) : <div className="hidden sm:block" />}
        {tutorial.next && (
          <Link to={`/tutorial/${tutorial.next}`} className="w-full sm:w-auto text-center px-4 py-3 rounded-lg bg-cobol-600 text-white hover:bg-cobol-700 transition-colors">Next Tutorial →</Link>
        )}
      </div>
    </div>
  )
}
