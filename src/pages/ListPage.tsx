import blogData1 from "../../data/list.json";
import Footer from "../Footer";
import BlogList from "./BlogList";
import "./screen.css";

const List = () => {
  const postsData1 = blogData1.posts;
  return (
    <>
    <div className="home-page">
      <h1>Latest Blog Posts</h1>
      <BlogList blogs={postsData1} />
    </div>
        <Footer />
    </>
  );
};

export default List;
