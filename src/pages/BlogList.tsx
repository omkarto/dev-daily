import React from 'react';
import { Link } from 'react-router-dom';
import './bloglist.css';

const BlogList = ({ blogs }) => {
  return (
    <div className="crayons-story__body">
      {blogs.map(blog => (
        <div>
   <article className="crayons-story">
           <div className="crayons-story__body">
             <div className="crayons-story__top">
               <div className="crayons-story__meta">
                 <div className="crayons-story__author-pic">
                   <Link to={`/author/${blog?.author?.toLowerCase().replace(/\s+/g, '-')}`} className="crayons-avatar crayons-avatar--l">
                     <img src={blog.authorImage} alt={`${blog.author} profile`} className="crayons-avatar__image" loading="lazy" />
                   </Link>
                 </div>
                 <div>
                   <Link to={`/author/${blog.author?.toLowerCase()?.replace(/\s+/g, '-')}`} className="crayons-story__secondary fw-medium">
                     {blog.author}
                   </Link>
                   <Link to={`/blog/${blog.id}`} className="crayons-story__tertiary fs-xs">
                     <time dateTime={blog.date}>{blog.date}</time>
                   </Link>
                 </div>
               </div>
             </div>
     
             <div className="crayons-story__indention">
               <h2 className="crayons-story__title">
                 <Link to={`/blog/${blog.id}`} id={`article-link-${blog.id}`}>
                   {blog.title}
                 </Link>
               </h2>
               <div className="crayons-story__tags">
                 {blog.tags?.map(tag => (
                   <Link key={tag} to={`/t/${tag?.toLowerCase().replace(/\s+/g, '-')}`} className="crayons-tag crayons-tag--monochrome">
                     <span className="crayons-tag__prefix">#</span>{tag}
                   </Link>
                 ))}
               </div>
               <div className="crayons-story__snippet">{blog.body?.replace(/<[^>]+>/g, '')?.substring(0, 150)}...</div>
               <div className="crayons-story__bottom">
                 <div className="crayons-story__details">
                   <Link to={`/blog/${blog.id}#comments`} className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="comment-icon">
                       <title id="comment-icon">Comments</title>
                       <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                     </svg>
                     <span className="hidden s:inline">Add Comment</span>
                   </Link>
                 </div>
                 <div className="crayons-story__save">
                   <small className="crayons-story__tertiary fs-xs mr-2">
                     {blog.category}
                   </small>
                   <button type="button" className="c-btn c-btn--icon-alone bookmark-button" aria-label={`Save blog ${blog.title} to reading list`}>
                     <span className="bm-initial">
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true">
                         <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z"></path>
                       </svg>
                     </span>
                   </button>
                 </div>
               </div>
             </div>
           </div>
         </article>


        </div>
        
      ))}
    </div>
  );
};

export default BlogList;
