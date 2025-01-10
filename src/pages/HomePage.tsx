import  { useState } from 'react';
import { Link } from 'react-router-dom';
import './screen.css'
import blogData from '../../list.json';

const HomePage = () => {
const postsData = blogData.posts;
  const [posts, setPosts] = useState(postsData || []);
  return (
    <div className="home-page">
      <h1>Welcome to My Blog</h1>
      <div className="post-list">
        {posts.map((post:any) => (
          <div key={post.id} className="post-item">
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <Link to={`/blog/${post.id}`}>Read more</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
