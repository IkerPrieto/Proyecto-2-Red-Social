import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getAll } from "../../redux/posts/PostSlice";

const AllPosts = () => {
  const dispatch = useDispatch();
  const { posts = [], isLoading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading posts...</p>;
  }

  if (!posts.length) {
    return <p>No posts yet</p>;
  }

  return (
    <>
      {posts.map((post) => (
        <div key={post._id} className="post card mb-4 p-4">
          <h2 className="text-xl font-bold mb-2">
            <Link to={`/post/${post._id}`}>{post.title}</Link>
          </h2>

          {post.image && (
            <img
              src={`http://localhost:3000/${post.image}`}
              alt={post.title}
              className="rounded-lg mb-3 max-h-64 object-cover"
            />
          )}

          <p className="text-gray-700 mb-3">{post.description}</p>

          <div className="text-sm text-gray-500">
            <span>By {post.user?.name || "Unknown"}</span>
            {" • "}
            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default AllPosts;