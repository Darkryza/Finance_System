import React from 'react'
import Login from './pages/Login/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/Register/Register'
import Home from './pages/Home/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App