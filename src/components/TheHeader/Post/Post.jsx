import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Post = () => {
  const { posts } = useSelector((state) => state.post)
  return (
    <>
      {posts.map((post, index) => (
        <div key={post._id} className="post">
          <Link to={`/post/${post._id}`}>Post nº {index}</Link>
          <p>{post.content}</p>
          <img
            src={`http://localhost:3000/${post.post_img}`}
            alt=""
          />
        </div>
      ))}
    </>
  )
}
export default Post