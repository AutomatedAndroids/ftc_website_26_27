import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Robot from './pages/Robot.jsx'
import Sponsors from './pages/Sponsors.jsx'
import Team from './pages/Team.jsx'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-white">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/robot" element={<Robot />} />
          <Route path="/team" element={<Team />} />
          <Route path="/sponsors" element={<Sponsors />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
