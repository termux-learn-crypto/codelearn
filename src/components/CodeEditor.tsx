import { useState } from "react";

interface CodeEditorProps {
  initialCode?: string;
  language?: string;
  readOnly?: boolean;
}

export default function CodeEditor({
  initialCode = "",
  language = "cobol",
  readOnly = false,
}: CodeEditorProps) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("");
  const [running, setRunning] = useState(false);

  const runCode = () => {
    setRunning(true);
    // Simulated output for demo
    setTimeout(() => {
      setOutput("COBOL Compiler available soon!\nAapka code:\n" + code);
      setRunning(false);
    }, 1000);
  };

  const clearOutput = () => {
    setCode("");
    setOutput("");
  };

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
      {/* Toolbar */}
      <div className="flex items-center justify-between gap-2 px-3 sm:px-4 py-2 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="flex items-center gap-2 min-w-0">
          <div className="flex gap-1.5 shrink-0">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <span className="text-xs text-slate-500 ml-2 uppercase truncate">{language}</span>
        </div>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={clearOutput}
            className="px-3 py-1 text-xs rounded-md bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
          >
            Clear
          </button>
          <button
            onClick={runCode}
            disabled={running || readOnly}
            className="px-3 py-1 text-xs rounded-md bg-cobol-600 text-white hover:bg-cobol-700 disabled:opacity-50 transition-colors"
          >
            {running ? "Running..." : "▶ Run"}
          </button>
        </div>
      </div>

      {/* Code Area */}
      <div className="relative">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          readOnly={readOnly}
          className="w-full h-48 sm:h-64 p-4 bg-slate-900 text-slate-100 font-mono text-xs sm:text-sm leading-relaxed resize-y focus:outline-none"
          placeholder="Yahan apna COBOL code likhein..."
          spellCheck={false}
        />
      </div>

      {/* Output */}
      {output && (
        <div className="border-t border-slate-200 dark:border-slate-700">
          <div className="px-4 py-2 bg-slate-800 text-xs text-slate-400 uppercase tracking-wider">
            Output
          </div>
          <pre className="p-4 bg-slate-950 text-green-400 font-mono text-sm whitespace-pre-wrap">
            {output}
          </pre>
        </div>
      )}
    </div>
  );
}
