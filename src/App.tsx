import { Routes, Route } from 'react-router-dom'
import './App.css'
import Coins from './pages/Coins'
import Bonus from './pages/Bonus'
import Rolls from './pages/Rolls'

function App() {

  return (
    <>
      <Routes>
        <Route path="/1" element={<Coins/>} />
        <Route path="/2" element={<Bonus/>} />
        <Route path="/3" element={<Rolls/>} />
      </Routes>
    </>
  )
}

export default App
