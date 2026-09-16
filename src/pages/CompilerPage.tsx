import { SectionHeader } from '@/components/Cards'

export default function CompilerPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <SectionHeader title="Online COBOL Compiler" subtitle="Apna COBOL code yahan likhein aur chalayein" />
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <span className="text-xs text-slate-500 ml-2">COBOL</span>
            </div>
            <button className="px-3 py-1 text-xs rounded-md bg-cobol-600 text-white hover:bg-cobol-700 transition-colors">▶ Run</button>
          </div>
          <textarea
            className="w-full h-64 sm:h-96 p-4 bg-slate-900 text-slate-100 font-mono text-xs sm:text-sm leading-relaxed resize-y focus:outline-none"
            placeholder={'IDENTIFICATION DIVISION.\nPROGRAM-ID. HELLO.\n\nPROCEDURE DIVISION.\n    DISPLAY "Namaste COBOL!".\n    STOP RUN.'}
            spellCheck={false}
          />
        </div>
        <div className="space-y-6">
          <div className="rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="px-4 py-2 bg-slate-800 text-xs text-slate-400 uppercase tracking-wider">Output</div>
            <div className="p-4 bg-slate-950 min-h-[200px]"><pre className="text-green-400 font-mono text-sm" /></div>
          </div>
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
            <p className="text-sm text-yellow-700 dark:text-yellow-300">⚠️ Online compiler jaldi aayega! Abhi tutorials mein code examples padho aur GnuCOBOL install karke try karo.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
