import { useState } from 'react';
import { Link } from 'react-router-dom';
import useEmailForm from "../hooks/useEmailForm";
import './header.css';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [subscriptionType, setSubscriptionType] = useState(null);
  const { formData, handleChange, handleSubmit } = useEmailForm("Header-subscribe");

  const openModal = (type:any) => {
    setSubscriptionType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSubscriptionType(null);
  };

  const handleSubscription = (e:any) => {
    e.preventDefault();
    // Add subscription logic here
    handleSubmit(e)
    closeModal();
  };

  return (
    <header className="site-header">
      <div className="logo">
        <Link to="/">The Dev Tech Daily</Link>
      </div>

      <nav className="main-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="header-actions">
        <button 
          className="subscribe-btn newsletter"
          onClick={() => openModal('newsletter')}
          aria-label="Subscribe to newsletter"
        >
          Newsletter
        </button>
        <button 
          className="subscribe-btn premium"
          onClick={() => openModal('premium')}
          aria-label="Get premium access"
        >
          Premium Access
        </button>
      </div>

      {isModalOpen && (
        <div className="subscription-modal">
          <div className="modal-content">
            <span className="close-btn" onClick={closeModal} aria-label="Close modal">×</span>
            <h2>
              {subscriptionType === 'newsletter' 
                ? 'Subscribe to Our Newsletter' 
                : 'Request Premium Access'}
            </h2>
            <form onSubmit={handleSubscription}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                required 
                aria-label="Email address"
                value={formData.email}
                onChange={handleChange}
              />
            
              <button type="submit">
                {subscriptionType === 'newsletter' 
                  ? 'Subscribe' 
                  : 'Request Access'}
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
