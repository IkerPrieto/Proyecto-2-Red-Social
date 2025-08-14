import { configureStore } from '@reduxjs/toolkit'
import auth from '../redux/auth/authSlice'
import post from '../redux/posts/PostSlice'

export const store = configureStore({
  reducer: {
    auth,
    posts: post
  },
})