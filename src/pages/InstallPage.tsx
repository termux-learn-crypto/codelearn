import { Link } from 'react-router-dom'
import { SectionHeader } from '@/components/Cards'
import { useState } from 'react'

const platforms = [
  {
    id: 'ubuntu',
    icon: '🐧',
    title: 'Ubuntu / Debian Linux',
    steps: [
      { cmd: 'sudo apt update', desc: 'Package list update karo' },
      { cmd: 'sudo apt install gnucobol4', desc: 'GnuCOBOL install karo' },
      { cmd: 'cobc --version', desc: 'Version check karo — "cobc (GnuCOBOL)" dikhna chahiye' },
    ],
    note: 'Ubuntu 22.04+ pe gnucobol4 available hai. Purane versions ke liye `gnucobol` ya `gnucobol3` try karo.',
  },
  {
    id: 'fedora',
    icon: '🎩',
    title: 'Fedora / RHEL / CentOS',
    steps: [
      { cmd: 'sudo dnf install gnucobol-devel', desc: 'GnuCOBOL develop package install karo' },
      { cmd: 'cobc --version', desc: 'Verify karo' },
    ],
    note: 'Fedora pe gnucobol-devel mein compiler + libraries dono milte hain.',
  },
  {
    id: 'macos',
    icon: '🍎',
    title: 'macOS',
    steps: [
      { cmd: 'brew install gnucobol', desc: 'Homebrew se install karo' },
      { cmd: 'cobc --version', desc: 'Verify karo' },
    ],
    note: 'Homebrew nahi hai to pehle install karo: /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"',
  },
  {
    id: 'windows',
    icon: '🪟',
    title: 'Windows',
    steps: [
      { cmd: 'winget install GnuCOBOL', desc: 'Windows Package Manager se (Windows 10/11)' },
      { cmd: 'cobc --version', desc: 'Verify karo' },
    ],
    note: 'Alternative: Chocolatey se `choco install gnucobol`. Ya MSYS2 use karo: `pacman -S mingw-w64-x86_64-gnucobol`.',
    alternate: [
      { cmd: 'choco install gnucobol', desc: 'Chocolatey se install' },
      { cmd: 'pacman -S mingw-w64-x86_64-gnucobol', desc: 'MSYS2 se install (MinGW64 environment mein)' },
    ],
  },
  {
    id: 'termux',
    icon: '📱',
    title: 'Termux (Android)',
    steps: [
      { cmd: 'pkg update', desc: 'Packages update karo' },
      { cmd: 'pkg install gnucobol', desc: 'GnuCOBOL install karo' },
      { cmd: 'cobc --version', desc: 'Verify karo' },
    ],
    note: 'Termux pe GnuCOBOL kaam karta hai. ARM64 architecture pe tested hai.',
  },
  {
    id: 'docker',
    icon: '🐳',
    title: 'Docker',
    steps: [
      { cmd: 'docker pull ubuntu:22.04', desc: 'Ubuntu image pull karo' },
      { cmd: 'docker run -it ubuntu:22.04 bash', desc: 'Container start karo' },
      { cmd: 'apt update && apt install -y gnucobol4', desc: 'Container mein GnuCOBOL install karo' },
    ],
    note: 'Docker mein GnuCOBOL easily chalta hai. Project files mount karo: -v $(pwd):/app',
  },
]

const firstProgram = `IDENTIFICATION DIVISION.
PROGRAM-ID. HELLO-WORLD.

PROCEDURE DIVISION.
    DISPLAY "Namaste Duniya!".
    DISPLAY "COBOL seekhna shuru ho gaya!".
    STOP RUN.`

const compileRun = [
  { step: 'Code likho', cmd: 'nano hello.cob', desc: 'Ya koi bhi editor use karo (.cob ya .cbl extension)' },
  { step: 'Compile karo', cmd: 'cobc -x hello.cob', desc: '"-x" flag se executable banta hai' },
  { step: 'Chalao', cmd: './hello', desc: 'Output dikhega: Namaste Duniya!' },
  { step: 'Optional: Object file', cmd: 'cobc -c hello.cob', desc: 'Sirf .o file banti hai, run nahi hoga' },
]

export default function InstallPage() {
  const [copied, setCopied] = useState<string | null>(null)

  const copyCmd = (cmd: string) => {
    navigator.clipboard.writeText(cmd)
    setCopied(cmd)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <SectionHeader title="GnuCOBOL Install Karein" subtitle="Apne system pe GnuCOBOL compiler install karke khud code likho aur chalao" />

      {/* Platforms */}
      <div className="space-y-6 mb-12">
        {platforms.map((p) => (
          <div key={p.id} className="p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50">
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
              <span className="text-2xl">{p.icon}</span> {p.title}
            </h3>
            <div className="space-y-3">
              {p.steps.map((s, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="text-xs font-mono text-slate-400 shrink-0 w-5">{i + 1}.</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <code className="px-3 py-1.5 rounded-lg bg-slate-900 text-green-400 font-mono text-sm break-all">{s.cmd}</code>
                      <button onClick={() => copyCmd(s.cmd)} className="shrink-0 p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors" title="Copy">
                        {copied === s.cmd ? (
                          <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        ) : (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                        )}
                      </button>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 ml-0 sm:ml-7">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            {p.alternate && (
              <div className="mt-4 p-3 rounded-lg bg-slate-50 dark:bg-slate-900/50">
                <p className="text-xs text-slate-500 mb-2">Ya phir:</p>
                {p.alternate.map((a, i) => (
                  <div key={i} className="flex items-center gap-2 mb-1">
                    <code className="px-2 py-1 rounded bg-slate-800 text-green-400 font-mono text-xs">{a.cmd}</code>
                    <span className="text-xs text-slate-400">— {a.desc}</span>
                  </div>
                ))}
              </div>
            )}
            {p.note && <p className="mt-3 text-sm text-yellow-600 dark:text-yellow-400">💡 {p.note}</p>}
          </div>
        ))}
      </div>

      {/* First Program */}
      <div className="mb-12">
        <SectionHeader title="Pehla Program Likho" subtitle="Install karne ke baad ye try karo" />

        <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 mb-6">
          <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-3">📝 Code — hello.cob</h3>
          <pre className="p-4 rounded-lg bg-slate-900 text-slate-100 font-mono text-sm overflow-x-auto whitespace-pre">{firstProgram}</pre>
        </div>

        <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50">
          <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-4">▶ Compile aur Run</h3>
          <div className="space-y-4">
            {compileRun.map((s, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="shrink-0 w-6 h-6 rounded-full bg-cobol-100 dark:bg-cobol-900/40 text-cobol-700 dark:text-cobol-300 flex items-center justify-center text-xs font-bold">{i + 1}</span>
                <div>
                  <p className="font-medium text-slate-800 dark:text-slate-200">{s.step}</p>
                  <code className="block mt-1 px-3 py-1.5 rounded-lg bg-slate-900 text-green-400 font-mono text-sm">{s.cmd}</code>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="p-6 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 mb-8">
        <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3">🎯 Useful Compiler Flags</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { flag: 'cobc -x file.cob', desc: 'Executable banao' },
            { flag: 'cobc -c file.cob', desc: 'Object file banao (.o)' },
            { flag: 'cobc -std=cobol2014', desc: 'COBOL 2022 standard use karo' },
            { flag: 'cobc -free', desc: 'Free-form code allow karo' },
            { flag: 'cobc -x -optimize', desc: 'Optimized executable' },
            { flag: 'cobc -x -debug', desc: 'Debug mode mein compile karo' },
          ].map((f) => (
            <div key={f.flag} className="p-2 rounded bg-white dark:bg-slate-800/50">
              <code className="text-xs text-cobol-600 dark:text-cobol-400 font-mono">{f.flag}</code>
              <p className="text-xs text-slate-500 mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <Link to="/tutorials" className="inline-block px-8 py-3 rounded-xl bg-cobol-600 text-white font-medium hover:bg-cobol-700 transition-colors">
          Tutorials Dekho →
        </Link>
      </div>
    </div>
  )
}
