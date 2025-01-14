import React from "react";
import { Link } from "react-router-dom";
import "./tollbar.css";

export const categories = [
  "Technology",
  "Design",
  "Business",
  "Web Development",
  "Tech",
  "Startup",
  "News",
  "JavaScript",
  "Productivity",
  "Entrepreneurship",
  "Finance",
  "Entertainment",
  "Creativity",
  "Nodejs",
  "Gaming",
  "Programming",
  "Software Development",
  "Artificial Intelligence",
  "Machine Learning",
  "Data Science",
  "Cybersecurity",
  "Cloud Computing",
  "DevOps",
  "UI/UX Design",
  "Blockchain",
  "Game Development",
  "Mobile Development",
  "AR/VR",
  "Open Source",
  "Operating Systems",
  "Databases",
  "Backend Development",
  "Frontend Development",
  "Networking",
  "Programming Languages",
  "Robotics",
  "IT Support"
];



const TopicSidebar = ({
  currentCategory,
  onCategoryChange,
}: any) => {
  return (
    <div className="topic-sidebar">
      <h3>Popular Tags</h3>
      <ul>
        {categories.map((category:string) => (
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
const getCategoryIcon = (category:string) => {
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
    case "Web Development":
      return "🖥️";
    case "Tech":
      return "📱";
    case "Startup":
      return "🚀";
    case "News":
      return "📢";
    case "Self Improvement":
      return "💪";
    case "JavaScript":
      return "🖥️";
    case "Productivity":
      return "💪";
    case "Entrepreneurship":
      return "💡";
    case "Finance":
      return "💹";
    case "Entertainment":
      return "📺";
    case "Investing":
      return "📈";
    case "Creativity":
      return "👩‍🎨";
    case "Nodejs":
      return "🖥️";
    case "Gaming":
      return "🎮";
    case "Programming":
      return "⌨️";
    case "Software Development":
      return "💾";
    case "Artificial Intelligence":
      return "🤖";
    case "Machine Learning":
      return "🧠";
    case "Data Science":
      return "📊";
    case "Cybersecurity":
      return "🔒";
    case "Cloud Computing":
      return "☁️";
    case "DevOps":
      return "🔧";
    case "UI/UX Design":
      return "🎭";
    case "Blockchain":
      return "⛓️";
    case "Game Development":
      return "🎮";
    case "Mobile Development":
      return "📱";
    case "AR/VR":
      return "🕶️";
    case "Open Source":
      return "🌐";
    case "Operating Systems":
      return "🖥️";
    case "Databases":
      return "💽";
    case "Backend Development":
      return "⚙️";
    case "Frontend Development":
      return "🌐";
    case "Networking":
      return "🌍";
    case "Programming Languages":
      return "📜";
    case "Robotics":
      return "🤖";
    case "IT Support":
      return "🛠️";
    default:
      return "📚";
  }
};


export default TopicSidebar;
