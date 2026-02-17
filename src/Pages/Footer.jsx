import { Link } from "react-router-dom";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import img1 from "../Images/Logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* ===== Company Info ===== */}
        <div className="footer-section company">
          <Link to="/" className="footer-logo">
            <img src={img1} alt="Company Logo" />
          </Link>

          <p className="footer-description">
            We build premium websites & digital solutions to grow your business
            online with modern design and powerful backend systems.
          </p>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaWhatsapp /></a>
          </div>
        </div>

        {/* ===== Quick Links ===== */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* ===== Services ===== */}
        <div className="footer-section">
          <h3>Our Services</h3>
          <p>Website Development</p>
          <p>E-Commerce Solutions</p>
          <p>Portfolio Websites</p>
          <p>Business Websites</p>
        </div>

        {/* ===== Contact Info ===== */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: Theitwallah@email.com</p>
          <p>Phone: +91 7879680488</p>
          <p>Location: India</p>
        </div>
      </div>

      {/* ===== Bottom Bar ===== */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Shivora Tech. All Rights Reserved.
      </div>
    </footer>
  );
}
