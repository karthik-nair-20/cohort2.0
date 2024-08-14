import './App.css'
import { Routes, Route } from 'react-router-dom'
import Assignment1 from './components/Assignment-1'
import Assignment2 from './components/Assignment-2'

function App() {

  return (
    <>
      <Routes>
        <Route path="/assignment1" element={<Assignment1 />} />
        <Route path="/assignment2" element={<Assignment2 />} />

      </Routes>
    </>
  )
}

export default App
