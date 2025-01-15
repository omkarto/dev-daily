import pageData from '../../page.json';
import { Link } from 'react-router-dom';
import './detail.css';
import OpenGraphTags from '../OpenGraphTag';
import { baseUrl } from '../App';
import { formattedDate } from './BlogList';

const BlogPost = ( ) => {
  const post = pageData;

    const handleShare = async () => {
      if (navigator.share) {
        try {
          await navigator.share({
            title: post.title,
            text: post.body.substring(0, 160),
            url: window.location.href,
          });
          console.log('Content shared successfully');
        } catch (error) {
          console.error('Error sharing content:', error);
        }
      } else {
        console.log('Web Share API not supported');
        // Implement fallback sharing method here
      }
    };

  return (
    <article className="blog-detail">

      <OpenGraphTags 
        title={post.title}
        description={post.body.substring(0, 160)}
        image={`${baseUrl}${post.heroImage}`}
        url={`${baseUrl}/blog/${post.id}`}
        type="article"
      />
      
      <div className="hero-image" style={{backgroundImage: `url(${post.heroImage})`}}>
        <div className="hero-overlay">
          <h1>{post.title}</h1>
          <div className="meta">
            <span className="date">{formattedDate(post.date)}</span>
          </div>
        </div>
      </div>
      <div className="content-wrapper">
        <aside className="sidebar">
          <div className="category-tag">{post.category}</div>
          <div className="share-buttons">
            <button onClick={handleShare}>
            <i className="fas fa-share-alt"></i> Share
             </button>
          </div>
        </aside>
        <main className="main-content">
          <div className="body" dangerouslySetInnerHTML={{ __html: post.body }} />
          <div className="tags">
            {post.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
          {/* <div className="author-bio">
            <img src={post.authorImage} alt={post.author} className="author-image" />
            <div className="author-info">
              <h3>{post.author}</h3>
              <p>{post.authorBio}</p>
            </div>
          </div> */}
        </main>
      </div>
      <Link to="/" className="back-link">Back to Blog</Link>
    </article>
  );
};

export default BlogPost;

