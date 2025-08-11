import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getById } from './PostSlice'

const PostDetail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  const { post, isLoading } = useSelector((state) => state.post)

  useEffect(() => {
    if (id) {
      dispatch(getById(id))
    }
  }, [dispatch, id])

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (!post || Object.keys(post).length === 0) {
    return <p>Post not found</p>
  }

  return (
    <div>
      <h1>PostDetail</h1>
      <h2>{post.title}</h2>
      <p>{post.content}</p>

      <h3>Comments:</h3>
      <ul>
        {post.comments.map(comment => (
          <li key={comment._id}>
            <strong>{comment.user.name}:</strong> {comment.text}
          </li>
        ))}
      </ul>

    </div>
  )
}

export default PostDetail