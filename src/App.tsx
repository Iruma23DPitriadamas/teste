import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login, Registration } from './pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Registration />} />
        <Route path="/leads" element={<h1>LEADS</h1>} />
        <Route path="/perfil" element={<h1>PERFIL</h1>} />
      </Routes>
    </Router>
  )
}

export default App
