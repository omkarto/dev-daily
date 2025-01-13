import React from 'react';
import { Link } from 'react-router-dom';
import './about.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <header className="about-header">
        <h1>About Us</h1>
      </header>

      <section className="about-content">
        <div className="intro">
          <h2>Welcome to Dev Tech Daily!</h2>
          <p>
            At Dev Tech Daily, we're passionate about empowering tech enthusiasts and developers through knowledge, creativity, and continuous learning. Our mission is to provide insightful articles, tips, and resources to help you stay ahead in the ever-evolving world of technology.
          </p>
          <p>
            Whether you're an aspiring developer or an experienced tech professional, we bring you the latest trends, best practices, and thought-provoking ideas from the world of development, programming, and technology.
          </p>
        </div>

        <div className="team-section">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>

        <div className="cta-section">
          <h2>Join Our Tech Community!</h2>
          <p>Be part of a growing community of tech lovers who are always learning, exploring, and innovating. Get the latest updates, tutorials, and more.</p>
          <Link to="/subscribe" className="cta-button">Subscribe Now</Link>
        </div>
      </section>
    </div>
  );
};

const teamMembers = [
  {
    name: "Omkar Tondawalkar",
    role: "Content Strategist & Lead Developer",
    bio: "Omkar is a passionate software developer with 10+ years of experience in full-stack development. He Writes in Dev Tech Daily to share his knowledge and experiences with the tech community.",
    image: "../assets/profile.jpg"
  },
  {
    name: "Arti Kharade",
    role: "Founder & Editor",
    bio: "Arti is a content expert who loves to write and curate engaging tech content. She is dedicated to making complex topics accessible and enjoyable for readers of all skill levels.",
    image: "../assets/profile.jpg"
  },
  {
    name: "Mark Johnson",
    role: "Community Manager",
    bio: "Mark builds and nurtures our online community of tech enthusiasts. He is passionate about engaging with readers and helping them grow their tech skills through discussions and collaborations.",
    image: "../assets/profile.jpg"
  }
];

export default AboutUs;
