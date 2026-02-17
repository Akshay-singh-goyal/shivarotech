import React from "react";
import { Helmet } from "react-helmet-async";

import {
  Phone,
  Mail,
  MapPin,
  Home,
  Building2,
  IndianRupee,
  MessageCircle,
} from "lucide-react";
import "./RealEstate.css";

export default function RealEstate() {
  return (
    <div className="realestate">

      {/* ================= SEO ================= */}
      <Helmet>
        <title>Real Estate in Indore | Buy, Sell & Rent Properties</title>
        <meta
          name="description"
          content="Looking for property in Indore? We help you buy, sell and rent apartments, villas and commercial shops with trusted real estate guidance."
        />
        <meta
          name="keywords"
          content="Real Estate Indore, Buy Property Indore, Sell Property Indore, Rent House Indore, Villas in Indore"
        />
        <meta name="author" content="Theitwallah Real Estate" />
      </Helmet>

      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-content">
          <h1>Best Real Estate Services in Indore</h1>
          <p>
            Buy, Sell & Rent Residential and Commercial Properties with Trusted Experts.
          </p>

          <div className="hero-buttons">
            <a href="tel:+917879680488" className="primary-btn">
              <Phone size={18} /> Call Now
            </a>

            <a
              href="https://wa.me/917879680488"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ================= PROPERTIES ================= */}
      <section className="properties">
        <h2>Featured Properties in Indore</h2>

        <div className="property-grid">
          <div className="property-card">
            <img
              src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
              alt="2BHK Apartment for sale in Indore"
            />
            <div className="property-info">
              <h3><Home size={18}/> 2BHK Apartment</h3>
              <p><MapPin size={16}/> Indore, Madhya Pradesh</p>
              <p className="price"><IndianRupee size={16}/> Price on Request</p>
              <a href="/contact" className="enquire-btn">
                Enquire Now
              </a>
            </div>
          </div>

          <div className="property-card">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
              alt="Luxury Villa in Indore"
            />
            <div className="property-info">
              <h3><Building2 size={18}/> Luxury Villa</h3>
              <p><MapPin size={16}/> Indore, Madhya Pradesh</p>
              <p className="price"><IndianRupee size={16}/> Price on Request</p>
              <a href="/contact" className="enquire-btn">
                Enquire Now
              </a>
            </div>
          </div>

          <div className="property-card">
            <img
              src="https://images.unsplash.com/photo-1501183638710-841dd1904471"
              alt="Commercial Shop in Indore"
            />
            <div className="property-info">
              <h3><Building2 size={18}/> Commercial Shop</h3>
              <p><MapPin size={16}/> Indore, Madhya Pradesh</p>
              <p className="price"><IndianRupee size={16}/> Price on Request</p>
              <a href="/contact" className="enquire-btn">
                Enquire Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="about">
        <h2>About Our Real Estate Services</h2>
        <p>
          We are trusted real estate consultants in Indore helping clients buy,
          sell and rent residential flats, luxury villas and commercial
          properties. Our mission is to provide transparent, secure and
          profitable property deals for every client.
        </p>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="contact">
        <h2>Contact Real Estate Expert in Indore</h2>
        <div className="contact-info">
          <p><Phone size={18}/> +91 7879680488</p>
          <p><Mail size={18}/> theitwallah@email.com</p>
          <p><MapPin size={18}/> Indore, Madhya Pradesh, India</p>
        </div>
      </section>

    </div>
  );
}
