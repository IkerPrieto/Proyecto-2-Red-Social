import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import PostService from './PostService'

const initialState = {
  posts: [],
  isLoading: false,
  post: {}
}

export const createPost = createAsyncThunk(
  "posts/createPost",
  async ({ postData, token }, { rejectWithValue }) => {
    try {
      return await PostService.createPost(postData, token)
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message)
    }
  }
)

export const getAll = createAsyncThunk("posts/getAll", async () => {
  try {
    return await PostService.getAll()
  } catch (error) {
    console.error(error)
  }
})

export const getById = createAsyncThunk("posts/getById", async (id) => {
  try {
    return await PostService.getById(id)
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
    builder.addCase(createPost.pending, (state) => {
      state.isLoading = true
    })
      .addCase(createPost.fulfilled, (state, action) => {
        state.isLoading = false
        state.posts.unshift(action.payload)
      })
      .addCase(createPost.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })

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