import  { useState } from 'react';
import pageData from '../../page.json';

const BlogPost = () => {
  const [post, _] = useState(pageData as any) ;
  if (!post) {
    return <div>Post not found</div>;
  }
  return (
    <div className="blog-post">
      <h1>{post.title}</h1>
      <p className="post-meta">Published on {new Date(post.date).toLocaleDateString()}</p>
      <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default BlogPost;
