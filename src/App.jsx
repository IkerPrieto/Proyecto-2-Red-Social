import { useState } from 'react'
import TheHeader from "./components/TheHeader/TheHeader"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import PostDetail from './redux/posts/PostDetail'
import Profile from './components/Profile/Profile'
import MyPosts from './pages/Posts/MyPosts'
import CreatePost from './pages/Posts/CreatePost'
import AllPosts from './pages/Posts/AllPosts'

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
            <Route path='/my-posts' element={<MyPosts />} />
            <Route path='/create-post' element={<CreatePost />} />
            <Route path='/posts/id/:id' element={<PostDetail />} />
            <Route path='/posts/getAll' element={<AllPosts />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
