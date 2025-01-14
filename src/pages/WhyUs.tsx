import React from 'react';
import { Link } from 'react-router-dom';
import "./whyus.css";

const WhyDailyTech = () => {
  const techReasons = [
    {
      id: 1,
      title: "Stay Ahead of the Curve",
      description: "Discover cutting-edge technologies and trends before they become mainstream.",
      icon: "🚀"
    },
    {
      id: 2, 
      title: "Expert Insights",
      description: "Learn from industry professionals and thought leaders in technology.",
      icon: "💡"
    },
    {
      id: 3,
      title: "Practical Knowledge",
      description: "Transform theoretical concepts into actionable strategies for your career.",
      icon: "🛠️"
    },
  ];

  return (
    <section className="why-daily-tech">
      <div className="why-daily-tech-container">
        <h2>Why Daily Tech?</h2>
        <div className="tech-reasons-grid">
          {techReasons.map((reason) => (
            <div key={reason.id} className="tech-reason-card">
              <div className="tech-reason-icon">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
        <div className="why-daily-tech-cta">
          <Link to="/about" className="cta-button">
            Learn More About Our Mission
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyDailyTech;
