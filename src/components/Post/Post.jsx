import { Link } from "react-router-dom";

const Post = ({ post }) => {
  if (!post) {
    return null;
  }

  return (
    <div key={post._id} className="post card mb-4 p-4">
      <h2 className="text-xl font-bold mb-2">{post.title}</h2>

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
  );
};

export default Post;