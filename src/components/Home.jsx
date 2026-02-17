import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Globe,
  Rocket,
} from "lucide-react";

import "./home.css";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import ContactFloat from "../Pages/ContactFloat";
import Priceing from "../Pages/Priceing";
import Footer from "../Pages/Footer";
import Ourwork from "../Pages/Ourwork";



export default function Home() {

  useEffect(() => {
    document.title = "Shivora Tech | Website Development & SEO Services";
  }, []);

  return (
    <div className="home">

      <Navbar />

      {/* HERO SECTION */}
      <section className="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            Build Your <span className="gradient-text">Digital Presence</span><br />
            With Shivora Tech
          </h1>

          <p>
            We create modern, SEO optimized and high-performance websites
            that help businesses grow online and generate real revenue.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Start Project</button>
            <button className="btn-outline">View Services</button>
          </div>
        </motion.div>
      </section>

      {/* SERVICES */}
      <Services />

      <Priceing/>

      {/* WHY SECTION */}
      <section className="why">
        <div className="why-container">

          <div className="why-left">
            <h2 className="section-title">Why Choose Shivora Tech?</h2>
            <p className="section-subtitle">
              We combine technology + strategy + SEO to deliver
              measurable business growth.
            </p>

            <div className="why-features">
              <div className="feature">
                <ShieldCheck size={22} />
                <span>Fast & Secure Development</span>
              </div>

              <div className="feature">
                <Globe size={22} />
                <span>SEO Optimized Structure</span>
              </div>

              <div className="feature">
                <Rocket size={22} />
                <span>Growth Focused Strategy</span>
              </div>
            </div>
          </div>

          <div className="why-right">
            <div className="why-box">
              <h3>Shivora Tech</h3>
              <p>
                We design premium websites that not only look beautiful
                but convert visitors into customers.
              </p>
            </div>
          </div>

        </div>
      </section>
      {/* Our work */}
      <Ourwork/>
      {/* FOOTER */}
      <Footer/>

      {/* Floating Contact (Always Fixed Right Side) */}
      <ContactFloat />

    </div>
  );
}
