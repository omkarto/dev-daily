import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            We are passionate about sharing knowledge and insights across
            various domains of technology, design, and innovation.
          </p>

          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/devdaily-blog-74890a346/"
              className="social-icon"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61571694884586"
              className="social-icon"
            >
              <i className="fab fa-facebook"></i>
            </a>

            <a href="https://github.com/devTechdaily" className="social-icon">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>
            <i className="fas fa-map-marker-alt"></i> 350, William street,
            Melbourne.
          </p>
          <p>
            <i className="fas fa-envelope"></i> devdailyblog@gmail.com
          </p>
          {/* <p>
            <i className="fas fa-phone"></i> +1 (555) 123-4567
          </p> */}
        </div>

        <div className="footer-section newsletter">
          <h3>Subscribe to Our Newsletter</h3>
          <form>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 devdaily.xyz All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
