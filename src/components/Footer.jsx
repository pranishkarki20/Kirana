import "./Footer.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section1">
          <h3>Kinara.com</h3>
          <p className="tagline">Simple shopping for everyday products.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#Products">Products</a></li>
            <li><a href="/pages/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li>Contact us</li>
            <li>Returns</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Social Media</h4>
          <div className="social-icons">
            <a href="https://www.pranishkarki.com.np" aria-label="Facebook">
              <FaFacebook />
            </a>
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>(c) 2026 Kinara. All rights reserved.</p>
      </div>
    </footer>
  );
}
