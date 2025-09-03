import Post from "../../components/Post/Post";
import { useDispatch, useSelector } from "react-redux";
import { getAll, reset } from "../../redux/posts/PostSlice";
import { useEffect } from "react";

const Posts = () => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPosts = async () => {
      await dispatch(getAll());
      await dispatch(reset());
    };
    fetchPosts();
  }, [dispatch]);

  const userPosts = posts?.filter((post) => post.user._id === user._id);

  return (
    <>
      <h1>My Posts</h1>
      {isLoading ? (
        "Loading..."
      ) : (
        userPosts.map((post) => <Post key={post._id} post={post} />)
      )}
    </>
  );
};

export default Posts;