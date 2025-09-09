import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import SearchBar from './Components/Search'
import Home from './Pages/Home'
import Experience from './Pages/Experience'
import Services from './Pages/Services'


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex justify-center mt-4">
          <SearchBar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<div className="p-8"><Experience /></div>} />
          <Route path="/services" element={<div className="p-8"><Services /></div>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
