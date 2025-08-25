import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createPost as createPostThunk } from "../../redux/posts/PostSlice";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");

  const { user, token } = useSelector((state) => state.auth);
  const { isLoading, error: postError } = useSelector((state) => state.posts);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !token) {
      navigate("/profile");
    }
  }, [user, token, navigate]);

  if (!user || !token) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      setError("Title and description are required");
      return;
    }

    const newPost = { title, description, image };

    try {
      const result = await dispatch(
        createPostThunk({ postData: newPost, token })
      );

      if (createPostThunk.fulfilled.match(result)) {
        setTitle("");
        setDescription("");
        setImage("");
        navigate("/");
      } else {
        setError(result.payload || "Failed to create post");
      }
    } catch (err) {
      setError(err.message || "Something went wrong");
    }
  };

  return (
    <div className="container">
      <div className="main-content mt-5">
        <div className="card">
          <h1 className="text-2xl mb-4">Create new post</h1>

          {(error || postError) && (
            <div className="alert alert-error">{error || postError}</div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="form-input"
                placeholder="Enter a title"
                maxLength={100}
              />
            </div>

            <div className="form-group mb-3">
              <label className="form-label">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-textarea"
                placeholder="Write your post..."
                maxLength={500}
              />
              <div className="text-sm text-secondary mt-1">
                {description.length}/500 characters
              </div>
            </div>

            <div className="form-group mb-3">
              <label className="form-label">Image URL (optional)</label>
              <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="form-input"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                disabled={!title.trim() || !description.trim() || isLoading}
                className="btn btn-primary"
              >
                {isLoading ? "Publishing..." : "Publish Post"}
              </button>

              <button
                type="button"
                onClick={() => navigate("/")}
                className="btn btn-secondary"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;