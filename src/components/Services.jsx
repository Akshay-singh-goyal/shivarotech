import { FaCode, FaSearch, FaRocket, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Services.css";

export default function Services() {
  const services = [
    {
      icon: <FaCode />,
      title: "Website Development",
      desc: "We build fast, scalable and high-performance websites using React, Next.js and modern UI technologies.",
      features: [
        "Custom UI/UX Design",
        "Responsive for All Devices",
        "SEO Friendly Structure",
        "High Speed Optimization",
      ],
    },
    {
      icon: <FaSearch />,
      title: "SEO Optimization",
      desc: "Rank your business higher on Google with our advanced on-page & technical SEO strategies.",
      features: [
        "Keyword Research",
        "Technical SEO Fixes",
        "On-Page Optimization",
        "Google Ranking Strategy",
      ],
    },
    {
      icon: <FaRocket />,
      title: "Digital Growth",
      desc: "Complete branding & marketing solutions to grow your business digitally.",
      features: [
        "Social Media Marketing",
        "Brand Identity Design",
        "Paid Ads Strategy",
        "Business Growth Planning",
      ],
    },
  ];

  return (
    <section className="services-page">

      {/* ===== HERO SECTION ===== */}
      <div className="services-hero">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Premium Services
        </motion.h1>

        <p>
          We provide complete digital solutions to help your business grow,
          scale and dominate in the online world.
        </p>
      </div>

      {/* ===== SERVICES GRID ===== */}
      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -15 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="icon-wrapper">{service.icon}</div>

            <h3>{service.title}</h3>
            <p>{service.desc}</p>

            <ul>
              {service.features.map((feature, i) => (
                <li key={i}>
                  <FaCheckCircle className="check-icon" /> {feature}
                </li>
              ))}
            </ul>

            <button className="service-btn">Get Started</button>
          </motion.div>
        ))}
      </div>

      {/* ===== CALL TO ACTION ===== */}
      <div className="services-cta">
        <h2>Ready to Grow Your Business?</h2>
        <p>Let’s build something amazing together 🚀</p>
        <button className="cta-btn">Contact Us</button>
      </div>
    </section>
  );
}
