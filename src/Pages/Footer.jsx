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
            <img src={img1} alt="Shivora Tech Logo" />
          </Link>

          <p className="footer-description">
            We build premium websites & digital solutions to grow your business
            online with modern design and powerful backend systems.
          </p>

          {/* ===== Social Media Links ===== */}
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://wa.me/917879680488"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
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
          <p>
            Email:{" "}
            <a href="mailto:theitwallah@email.com">
              theitwallah@email.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+917879680488">
              +91 7879680488
            </a>
          </p>
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
