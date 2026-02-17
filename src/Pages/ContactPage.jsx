import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import "./ContactPage.css";

export default function ContactPage() {
  const location = useLocation();

  const [plan, setPlan] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // ✅ Auto Plan Select
  useEffect(() => {
    if (location.state?.selectedPlan) {
      setPlan(location.state.selectedPlan);
    }
  }, [location.state]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      plan: plan,
      message: e.target.message.value,
    };

    try {
      await axios.post("http://localhost:5000/api/contact", formData);

      setSuccess(true);
      e.target.reset();
      setPlan("");

      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (error) {
      alert("Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <section className="contact-page">
      <motion.div
        className="contact-box"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Let's Build Your Project 🚀</h2>

        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Your Name" required />
          <input name="email" type="email" placeholder="Your Email" required />
          <input name="phone" placeholder="Phone Number" required />

          <input
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
            placeholder="Selected Plan"
            required
          />

          <textarea
            name="message"
            value={
              plan
                ? `Hi, I want to purchase the ${plan} Plan.`
                : ""
            }
            onChange={() => {}}
            placeholder="Your Message"
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {success && (
          <motion.div
            className="success-msg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Message Sent Successfully ✅
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
