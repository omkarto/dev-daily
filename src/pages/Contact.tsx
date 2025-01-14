import  { useState } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
      to_email: 'recipient@example.com',
      from_name: 'Sender Name',
      message: 'This is a test email sent using EmailJS'
    }, 'YOUR_PUBLIC_KEY')
    .then((result) => {
      console.log('Email sent successfully');
    }, (error) => {
      console.log('Failed to send email:', error);
    });

  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach out for any inquiries or collaboration.</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-section">
            <h2>Contact Information</h2>
            <div className="contact-details">
              <div className="detail-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>350, William street, Melbourne.</span>
              </div>
              <div className="detail-item">
                <i className="fas fa-envelope"></i>
                <span> devdailyblog@gmail.com </span>
              </div>
              <div className="detail-item">
                {/* <i className="fas fa-phone"></i> */}
                {/* <span>+1 (555) 123-4567</span> */}
              </div>
            </div>
          </div>

          <div className="social-links">
            <h2>Connect with Us</h2>
            <div className="social-icons">
              <a href="https://github.com/devTechdaily" className="social-icon"><i className="fab fa-linkedin"></i></a>
              <a href="https://www.linkedin.com/in/devdaily-blog-74890a346/" className="social-icon"><i className="fab fa-github"></i></a>
              <a href="https://www.facebook.com/profile.php?id=61571694884586" className="social-icon"><i className="fab fa-facebook"></i></a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="collaboration">Collaboration</option>
                <option value="feedback">Feedback</option>
                <option value="support">Support</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
