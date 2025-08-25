import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Post from '../../components/Post/Post';

const Home = () => {
  const { user } = useSelector(state => state.auth);

  if (!user) {
    return (
      <div className="container">
        <div className="flex flex-center">
          <div className="card">
            <h1 className="text-3xl mb-4">Welcome</h1>
            <Post />
            <p className="text-secondary mb-5">
              Join our community and share your thoughts with the world.
            </p>
            <div className="flex gap-3 flex-center">
              <Link to="/register" className="btn btn-primary btn-lg">
                Create Count
              </Link>
              <Link to="/login" className="btn btn-secondary btn-lg">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="flex gap-4">
        <aside className="sidebar">
          <div className="profile-card">
            <img 
              src={user.avatar || 'https://via.placeholder.com/80'} 
              alt="Avatar" 
              className="profile-card-avatar"
            />
            <h2 className="profile-card-name">{user.name}</h2>
            <p className="profile-card-username">@{user.username}</p>
            
            <div className="profile-card-stats">
              <div className="profile-card-stats-item">
                <span className="profile-card-stats-item-count">{user.postsCount || 0}</span>
                <span className="profile-card-stats-item-label">Posts</span>
              </div>
              <div className="profile-card-stats-item">
                <span className="profile-card-stats-item-count">{user.followersCount || 0}</span>
                <span className="profile-card-stats-item-label">Followers</span>
              </div>
              <div className="profile-card-stats-item">
                <span className="profile-card-stats-item-count">{user.followingCount || 0}</span>
                <span className="profile-card-stats-item-label">Following</span>
              </div>
            </div>
          </div>

          <div className="card mt-4">
            <h4 className="mb-3">Quick Actions</h4>
            <Link to="/create-post" className="btn btn-primary">
              Create New Post
            </Link>
            <Link to="/profile" className="btn btn-secondary">
              My Profile
            </Link>
          </div>
        </aside>

        <main className="main-content">
          <div className="card mb-4">
            <h2 className="text-xl mb-3">What are you thinking?</h2>
            <Link to="/create-post" className="btn btn-primary">
              Create Post
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;