import Post from "../../components/Post/Post"
import { useDispatch, useSelector } from "react-redux"
import { getAll, reset } from "../../redux/posts/PostSlice"
import { useEffect } from "react"

const Posts = () => {
  const { isLoading } = useSelector((state) => state.posts)
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchPosts = async () => {
      await dispatch(getAll())
      await dispatch(reset())
    }
    fetchPosts()
  }, [dispatch])
  return (
    <>
        <h1>Posts</h1>
        {isLoading ? 'Loading...' : <Post />}
    </>
  )
}
export default Posts