import { useState } from 'react'
import { tutorials } from '@/data/tutorials'
import QuizPlayer from '@/components/QuizPlayer'
import { SectionHeader } from '@/components/Cards'

export default function QuizPage() {
  const allQuizzes = tutorials.filter((t) => t.quiz.length > 0).map((t) => ({ title: t.title, slug: t.slug, questions: t.quiz }))
  const [selectedQuiz, setSelectedQuiz] = useState(0)

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <SectionHeader title="🎯 COBOL Quiz" subtitle="Apna knowledge test karo — har topic ke quizzes hain" />
      <div className="mb-8 grid md:grid-cols-2 gap-4">
        {allQuizzes.map((q, idx) => (
          <button key={q.slug} onClick={() => setSelectedQuiz(idx)}
            className={`p-4 rounded-xl border text-left transition-colors ${selectedQuiz === idx ? 'border-cobol-600 bg-cobol-50 dark:bg-cobol-900/20' : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'}`}>
            <div className="font-medium text-slate-800 dark:text-slate-200">{q.title}</div>
            <div className="text-sm text-slate-500 mt-1">{q.questions.length} questions</div>
          </button>
        ))}
      </div>
      {allQuizzes[selectedQuiz] && (
        <div>
          <h2 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-200">{allQuizzes[selectedQuiz].title}</h2>
          <QuizPlayer questions={allQuizzes[selectedQuiz].questions} />
        </div>
      )}
    </div>
  )
}
