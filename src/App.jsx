import { useState } from 'react'
import TheHeader from "./components/TheHeader/TheHeader"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Home from './components/Home/Home'

function App() {

  return (
    <div>
      <BrowserRouter>
      <TheHeader />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
