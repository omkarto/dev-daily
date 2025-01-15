import { Link } from "react-router-dom";
import "./screen.css";
import blogData1 from "../../list.json";
import blogData2 from "../../list2.json";
import Footer from "../Footer";
import TopicSidebar, { categories } from "./Toolbar";
import ImageSlider from "./ImageSlide";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { AnimatedSVG } from "../back";
import WhyDailyTech from "./WhyUs";
import OpenGraphTags from "../OpenGraphTag";
import { baseUrl } from "../App";

const HomePage = () => {
  const postsData1 = blogData1.posts;
  const postsData2 = blogData2.posts;
  const groupedPosts = {
    "Latest": postsData1,
    "Relevant": postsData2,
    "Our Pick": postsData2,

  };

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const handleCategoryChange = (category: any) => {
    setCurrentCategory(category);
  };

  const slides = [
    {
      url: "http://localhost:3000/image-1.jpg",
      title: "The Future of Artificial Intelligence in Web Development",
      component: AnimatedSVG(1),
      id:"1",
      count:"30"
    },
    {
      url: "http://localhost:3000/image-2.jpg",
      component: AnimatedSVG(2),
      title: "The Power of CSS Grid",
      id:"1",
      count:"30"
    },
    {
      url: "http://localhost:3000/image-3.jpg",
      component: AnimatedSVG(3),
      title: "JavaScript ES6 Features You Should Know",
      id:"1",
      count:"30"
    },
  ];

  return (
    <>
      <OpenGraphTags 
        title="Daily Tech Blog"
        description="Stay updated with the latest in technology and web development."
        image={`${baseUrl}/images/homepage-og-image.jpg`}
        url={baseUrl}
      />
      <Helmet>
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Dev Tech Daily",
            "url": "https://www.devtechdaily.com",
            "description": "Your go-to resource for cutting-edge tech insights, creative solutions, and inspiring ideas."
          }
        `}
        </script>
        <title>Dev Tech Daily - Cutting-edge Tech Insights</title>
        <meta
          name="description"
          content="Your go-to resource for cutting-edge tech insights, creative solutions, and inspiring ideas. Empower your mind and elevate your skills daily."
        />
        <meta
          name="keywords"
          content="tech insights, creative solutions, tech skills, dev tech"
        />
      </Helmet>
      <div className="home-page">
        <div className="hero">
          <div className="hero-content">
            <h1>Welcome to Dev Tech Daily</h1>
            <p>
              Your go-to resource for cutting-edge tech insights, creative
              solutions, and inspiring ideas.
            </p>
            <p>Empower your mind and elevate your skills, one day at a time.</p>
          </div>
        </div>

        <div className="content-wrapper">
          <aside className="sidebar">
            <TopicSidebar
              currentCategory={currentCategory}
              onCategoryChange={handleCategoryChange}
            />
          </aside>
          <main className="main-content">
            {Object.entries(groupedPosts).map(([category, categoryPosts]) => (
              <section key={category} className="blog-section">
                <h2>{category}</h2>
                <div className="post-list">
                  {categoryPosts.map((post) => (
                    <div key={post.id} className="post-item">
                      <div className="post-item-content">
                        <h3>{post.title}</h3>
                        <p>{post.excerpt}</p>
                        <Link to={`/blog/${post.id}`}>Read more</Link>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="view-all-container">
                  <Link
                    to={`/blogs/${category.toLowerCase().replace(/\s+/g, "-")}`}
                    className="view-all-button"
                  >
                    View All {category} Posts
                  </Link>
                </div>
              </section>
            ))}
          </main>
        </div>
        <ImageSlider slides={slides} />
        <br />
        <br />
        <br />
        <br />

        <div>
        <WhyDailyTech />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
