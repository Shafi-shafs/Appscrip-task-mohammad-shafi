"use client";
import React, { useState } from 'react';
import '../css/footer.css';  // Importing CSS for styling

const Footer = () => {
  // State to control the collapse of each section on mobile
  const [isMuseOpen, setMuseOpen] = useState(false);
  const [isQuickLinksOpen, setQuickLinksOpen] = useState(false);
  const [isFollowUsOpen, setFollowUsOpen] = useState(false);

  // Handlers to toggle each section's visibility
  const toggleMuse = () => setMuseOpen(!isMuseOpen);
  const toggleQuickLinks = () => setQuickLinksOpen(!isQuickLinksOpen);
  const toggleFollowUs = () => setFollowUsOpen(!isFollowUsOpen);

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Newsletter Signup */}
        <div className="footer-section">
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from mettā muse.</p>
          <div className="subscribe-container">
            <input type="email" placeholder="Enter your e-mail..." className="subscribe-input" />
            <button className="subscribe-button">SUBSCRIBE</button>
          </div>
        </div>

        <div className="footer-section">
        </div>
        
        {/* Right Section - Contact & Currency */}
        <div className="footer-section">
          <h4>CONTACT US</h4>
          <p>+91 999 55875 789</p>
          <p>customercare@mettamuse.com</p>

          <div className="currency-info">
            <h4>Currency</h4>
            <p><img src="/images/us-flag.svg" alt="USD" /> USD</p>
            <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
          </div>
        </div>
      </div>

      {/* Mettā Muse Section */}
      <div className="footer-container">
        <div className="footer-section">
          <h4 onClick={toggleMuse}>
            mettā muse <span className='foooter-arrow1'>{isFollowUsOpen ? '▲' : '▼'}</span>
          </h4>
          <ul className={`footer-links ${isMuseOpen ? 'open' : ''}`}>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h4 onClick={toggleQuickLinks}>
            QUICK LINKS <span className='foooter-arrow2'>{isFollowUsOpen ? '▲' : '▼'}</span>
          </h4>
          <ul className={`footer-links ${isQuickLinksOpen ? 'open' : ''}`}>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="footer-section">
          <h4 onClick={toggleFollowUs}>
            FOLLOW US <span className='foooter-arrow3'>{isFollowUsOpen ? '▲' : '▼'}</span>
          </h4>
          <div className={`social-container ${isFollowUsOpen ? 'open' : ''}`}>
            <div className="social-icons">
              <a href="#"><img src="/images/instagram-icon.svg" alt="Instagram" /></a>
              <a href="#"><img src="/images/linkedin-icon.svg" alt="LinkedIn" /></a>
            </div>
            <div className="payment-icons">
              <img src="/images/google-pay.svg" alt="Google Pay" />
              <img src="/images/mastercard.svg" alt="Mastercard" />
              <img src="/images/paypal.svg" alt="PayPal" />
              <img src="/images/amex.svg" alt="AMEX" />
              <img src="/images/apple-pay.svg" alt="Apple Pay" />
              <img src="/images/stripe.svg" alt="Stripe" />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
