import { useState } from 'react'
import TheHeader from "./components/TheHeader/TheHeader"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import PostDetail from './redux/posts/PostDetail'
import Profile from './components/Profile/Profile'

function App() {

  return (
    <div>
        <BrowserRouter>
          <TheHeader />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/posts/id/:id' element={<PostDetail />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
