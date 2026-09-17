import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import TutorialsPage from './pages/TutorialsPage'
import TutorialPage from './pages/TutorialPage'
import CompilerPage from './pages/CompilerPage'
import QuizPage from './pages/QuizPage'
import GlossaryPage from './pages/GlossaryPage'
import ProjectsPage from './pages/ProjectsPage'
import AboutPage from './pages/AboutPage'
import InstallPage from './pages/InstallPage'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tutorials" element={<TutorialsPage />} />
          <Route path="/tutorial/:slug" element={<TutorialPage />} />
          <Route path="/compiler" element={<CompilerPage />} />
          <Route path="/install" element={<InstallPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/glossary" element={<GlossaryPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
