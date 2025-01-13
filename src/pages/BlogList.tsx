import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./bloglist.css";

const BlogList = ({ blogs }: any) => {
const formattedDate =(d:string)=>{
  const date = new Date(d);
  // Format the date using Intl.DateTimeFormat
  const datef = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  }).format(date);
  return datef
}


  


  const [bookmarks, setBookmarks] = useState([]);
  useEffect(() => {
    (async () => {
      // Check if post is already bookmarked when component loads
      const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
      setBookmarks(bookmarks);
    })();
  }, []);

  const isBookmarked = useCallback(
    (id: string) => {
      return bookmarks.some((bookmarkId: any) => bookmarkId === id);
    },
    [bookmarks]
  );

  const handleBookmark = (id: string) => {
    (async () => {
      const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
      if (isBookmarked(id)) {
        // Remove bookmark
        const updatedBookmarks = bookmarks.filter(
          (bookmarkId: any) => bookmarkId !== id
        );
        localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
        setBookmarks(updatedBookmarks);
      } else {
        // Add bookmark
        bookmarks.push(id);
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
        setBookmarks(bookmarks);
      }
    })();
  };
  return (
    <div className="crayons-story__body">
      {blogs.map((blog: any) => (
        <div>
          <article className="crayons-story">
            <div className="crayons-story__body">
              <div className="crayons-story__top">
                <div className="crayons-story__meta">
                  <div className="crayons-story__author-pic">
                  {"Dev Daily"}

                  </div>
                  <div>
                    <Link
                      to={`/blog/${blog.id}`}
                      className="crayons-story__tertiary fs-xs"
                    >
                      <time dateTime={formattedDate(blog.date)}>{formattedDate(blog.date)}</time>
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
                  {blog.tags?.map((tag: any) => (
                    <Link
                      key={tag}
                      to={`/t/${tag?.toLowerCase().replace(/\s+/g, "-")}`}
                      className="crayons-tag crayons-tag--monochrome"
                    >
                      <span className="crayons-tag__prefix">#</span>
                      {tag}
                    </Link>
                  ))}
                </div>
                <div className="crayons-story__snippet">
                  {blog.excerpt?.replace(/<[^>]+>/g, "")?.substring(0, 150)}...
                </div>
                <div className="crayons-story__bottom">
                  <div className="crayons-story__details"></div>
                  <div className="crayons-story__save">
                    <small className="crayons-story__tertiary fs-xs mr-2">
                      {blog.category}
                    </small>
                    <button
                      type="button"
                      onClick={() => handleBookmark(blog.id)}
                      className="c-btn c-btn--icon-alone bookmark-button"
                      aria-label={`Save blog ${blog.title} to reading list`}
                    >
                      <span className="bm-initial">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          aria-hidden="true"
                        >
                          <path
                            d={
                              isBookmarked(blog.id)
                                ? "M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v1.574l4.5-2.82 4.5 2.82V6z"
                                : "M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z"
                            }
                          ></path>
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
