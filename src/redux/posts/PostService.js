import axios from "axios"

const API_URL = "http://localhost:3000/posts"

const createPost = async (postData, token) => {
  if (!token) {
    throw new Error("No token provided");
  }

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    }
  }

  const response = await axios.post(API_URL, postData, config)
  return response.data
}

const getAll = async () => {
  const res = await axios.get(API_URL + "/getAll")
  return res.data.posts
}

const getById = async (id) => {
  const res = await axios.get(API_URL + "/id/" + id)
  return res.data
}

const authService = {
  getAll,
  getById,
  createPost
}

export default authService