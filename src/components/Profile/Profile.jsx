import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAll } from '../../redux/posts/PostSlice'
import { Link } from 'react-router-dom'

const Profile = () => {
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)
    const { posts, isLoading } = useSelector((state) => state.posts)

    useEffect(() => {
        dispatch(getAll())
    }, [dispatch])

    if (isLoading) {
        return <p>Loading posts...</p>
    }

    const userPosts = posts.filter(post => post.user._id === user._id)

    return (
        <>
            <h1>Profile</h1>
            <p>{user?.name}</p>
            <p>{user?.email}</p>
            <p>{user?.age}</p>

            <h2>My posts:</h2>
            <Link to="/my-posts">
                My Posts
            </Link>
            <Link to="/create-post">
                Create Post
            </Link>
            {userPosts.length > 0 ? (
                <ul>
                    {userPosts.map(post => (
                        <li key={post._id}>
                            <h3>{post.title}</h3>
                            <p>{post.description}</p>
                            {post.image && <img src={post.image} alt={post.title} width="200" />}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>You have not posted anything yet.</p>
            )}
        </>
    )
}

export default Profile