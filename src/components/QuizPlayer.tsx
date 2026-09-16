"use client";

import { useState } from "react";

interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
}

interface QuizPlayerProps {
  questions: QuizQuestion[];
}

export default function QuizPlayer({ questions }: QuizPlayerProps) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = questions[current];

  const handleSelect = (idx: number) => {
    if (showAnswer) return;
    setSelected(idx);
    setShowAnswer(true);
    if (idx === q.correct) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (current + 1 >= questions.length) {
      setDone(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setShowAnswer(false);
    }
  };

  if (done) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="text-center p-8 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50">
        <div className="text-4xl mb-4">🎯</div>
        <h3 className="text-xl font-bold mb-2">Quiz Complete!</h3>
        <p className="text-2xl font-bold text-cobol-600 mb-2">
          {score}/{questions.length} ({pct}%)
        </p>
        <p className="text-slate-500 mb-4">
          {pct >= 80 ? "Bahut badhiya! 🎉" : pct >= 50 ? "Accha hai, aur practice karo!" : "Phir se try karo!"}
        </p>
        <button
          onClick={() => { setCurrent(0); setSelected(null); setShowAnswer(false); setScore(0); setDone(false); }}
          className="px-4 py-2 rounded-lg bg-cobol-600 text-white hover:bg-cobol-700 transition-colors"
        >
          Retry Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-slate-400">
          Question {current + 1} / {questions.length}
        </span>
        <span className="text-sm font-medium text-cobol-600">Score: {score}</span>
      </div>

      <h3 className="text-lg font-semibold mb-4 text-slate-800 dark:text-slate-200">
        {q.question}
      </h3>

      <div className="space-y-2">
        {q.options.map((opt, idx) => {
          let cls = "w-full text-left p-3 rounded-lg border transition-colors ";
          if (!showAnswer) {
            cls += "border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50";
          } else if (idx === q.correct) {
            cls += "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300";
          } else if (idx === selected) {
            cls += "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300";
          } else {
            cls += "border-slate-200 dark:border-slate-700 opacity-50";
          }

          return (
            <button key={idx} onClick={() => handleSelect(idx)} className={cls}>
              <span className="font-medium mr-2">{String.fromCharCode(65 + idx)}.</span>
              {opt}
            </button>
          );
        })}
      </div>

      {showAnswer && (
        <button
          onClick={handleNext}
          className="mt-4 w-full py-2 rounded-lg bg-cobol-600 text-white hover:bg-cobol-700 transition-colors"
        >
          {current + 1 >= questions.length ? "Finish Quiz" : "Next Question →"}
        </button>
      )}
    </div>
  );
}
