import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import img1 from "../Images/Logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" }, // optional anchor
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

      {/* ===== LOGO ===== */}
      <motion.div
        className="logo"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
      >
        <Link to="/">
          <img src={img1} alt="Logo" />
        </Link>
      </motion.div>

      {/* ===== NAV LINKS ===== */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        {navLinks.map((link, i) => (
          <motion.li
            key={i}
            whileHover={{ y: -2, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={
              location.pathname === link.path ? "active-link" : ""
            }
          >
            {link.path.startsWith("#") ? (
              <a href={link.path}>{link.name}</a>
            ) : (
              <Link to={link.path}>{link.name}</Link>
            )}
          </motion.li>
        ))}
      </ul>

      {/* ===== GET STARTED BUTTON ===== */}
      <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="nav-btn"
        onClick={() => window.location.href = "/pricing"}
      >
        Get Started
      </motion.button>

      {/* ===== HAMBURGER ===== */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

    </nav>
  );
}
