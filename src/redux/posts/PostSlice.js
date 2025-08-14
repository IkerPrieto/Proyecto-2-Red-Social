import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import postService from './PostService'

const initialState = {
  posts: [],
  isLoading: false,
  post: {}
}

export const getAll = createAsyncThunk("posts/getAll", async () => {
  try {
    return await postService.getAll();
  } catch (error) {
    console.error(error);
  }
})

export const getById = createAsyncThunk("posts/getById", async (id) => {
  try {
    return await authService.getById(id)
  } catch (error) {
    console.error(error)
  }
})

export const postsSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.isLoading = false
      state.posts = action.payload
    }).addCase(getAll.pending, (state) => {
      state.isLoading = true
    })
    
    builder.addCase(getById.fulfilled, (state, action) => {
      state.post = action.payload.post
      state.isLoading = false
    })
  },
})
export const { reset } = postsSlice.actions
export default postsSlice.reducer