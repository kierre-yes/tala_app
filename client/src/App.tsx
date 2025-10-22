import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Translator from './pages/Translator'
import Bills from './pages/Bills'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/translator" element={<Translator />} />
          <Route path="/bills" element={<Bills />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
