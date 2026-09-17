import { Link } from 'react-router-dom'
import { SectionHeader } from '@/components/Cards'
import CodeEditor from '@/components/CodeEditor'

const defaultCode = `IDENTIFICATION DIVISION.
PROGRAM-ID. HELLO.

PROCEDURE DIVISION.
    DISPLAY "Namaste COBOL!".
    STOP RUN.`

export default function CompilerPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <SectionHeader title="Online COBOL Compiler" subtitle="Apna COBOL code yahan likhein aur chalayein" />
      <div className="grid lg:grid-cols-2 gap-6">
        <div>
          <CodeEditor initialCode={defaultCode} language="cobol" />
        </div>
        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50">
            <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-3">📖 Quick Reference</h3>
            <div className="space-y-2 text-sm overflow-x-auto">
              <div className="p-2 rounded bg-slate-50 dark:bg-slate-900 font-mono whitespace-nowrap"><span className="text-cobol-600">IDENTIFICATION</span> DIVISION.</div>
              <div className="p-2 rounded bg-slate-50 dark:bg-slate-900 font-mono whitespace-nowrap"><span className="text-cobol-600">PROGRAM-ID.</span> MY-PROGRAM.</div>
              <div className="p-2 rounded bg-slate-50 dark:bg-slate-900 font-mono whitespace-nowrap"><span className="text-cobol-600">PROCEDURE</span> DIVISION.</div>
              <div className="p-2 rounded bg-slate-50 dark:bg-slate-900 font-mono whitespace-nowrap"><span className="text-green-600">DISPLAY</span> "Hello".</div>
              <div className="p-2 rounded bg-slate-50 dark:bg-slate-900 font-mono whitespace-nowrap"><span className="text-green-600">STOP</span> RUN.</div>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800">
            <p className="text-sm text-yellow-700 dark:text-yellow-300">⚠️ Online compiler jaldi aayega! Abhi GnuCOBOL install karke try karo — <Link to="/install" className="underline font-medium">Installation Guide →</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}
