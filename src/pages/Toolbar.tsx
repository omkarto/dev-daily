import React from "react";
import { Link } from "react-router-dom";
import "./tollbar.css";

const TopicSidebar = ({
  categories,
  currentCategory,
  onCategoryChange,
}: any) => {
  return (
    <div className="topic-sidebar">
      <h3>Popular Tags</h3>
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            className={category === currentCategory ? "active" : ""}
          >
            <a
              href={`#${category.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={(e) => {
                e.preventDefault();
                onCategoryChange(category);
              }}
              aria-current={category === currentCategory ? "page" : undefined}
            >
              <span className="category-icon">{getCategoryIcon(category)}</span>
              <span className="category-name">{category}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const getCategoryIcon = (category) => {
  switch (category) {
    case "Technology":
      return "💻";
    case "Design":
      return "🎨";
    case "Business":
      return "💼";
    case "Lifestyle":
      return "🌿";
    case "Travel":
      return "✈️";
    default:
      return "📚";
  }
};

export default TopicSidebar;
