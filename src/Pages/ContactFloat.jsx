import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaTimes,
  FaComments,
} from "react-icons/fa";
import axios from "axios";
import "./ContactFloat.css";

function ContactFloat({ selectedPlan, clearPlan = () => {} }) {
  const [openIcons, setOpenIcons] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [success, setSuccess] = useState(false);

  // 🔥 AUTO OPEN FORM WHEN PLAN SELECTED
  useEffect(() => {
    if (selectedPlan) {
      setOpenForm(true);
      setOpenIcons(false);
    }
  }, [selectedPlan]);

  // 🔥 HANDLE CLOSE
  const handleClose = () => {
    setOpenForm(false);
    clearPlan(); // reset selected plan
  };

  // 🔥 HANDLE FORM SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      await axios.post("http://localhost:5000/api/contact", formData);

      setSuccess(true);
      e.target.reset();

      setTimeout(() => {
        setSuccess(false);
        setOpenForm(false);
        clearPlan();
      }, 2000);
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <>
      {/* ================= FLOATING ICONS ================= */}
      <div className="floating-wrapper">
        <AnimatePresence>
          {openIcons && (
            <motion.div
              className="icon-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              {/* WhatsApp */}
              <a
                href="https://wa.me/917879680488"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp className="small-icon whatsapp" />
              </a>

              {/* Phone */}
              <a href="tel:+917879680488">
                <FaPhoneAlt className="small-icon phone" />
              </a>

              {/* Email Form Open */}
              <div onClick={() => {
                setOpenForm(true);
                setOpenIcons(false);
              }}>
                <FaEnvelope className="small-icon email" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Toggle Button */}
        <div
          className="main-button"
          onClick={() => setOpenIcons(!openIcons)}
        >
          {openIcons ? <FaTimes /> : <FaComments />}
        </div>
      </div>

      {/* ================= CONTACT PANEL ================= */}
      <AnimatePresence>
        {openForm && (
          <motion.div
            className="contact-panel"
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            exit={{ x: 400 }}
            transition={{ duration: 0.4 }}
          >
            <div className="panel-header">
              <h3>Contact Us</h3>
              <FaTimes onClick={handleClose} />
            </div>

            <form onSubmit={handleSubmit}>
              <input name="name" placeholder="Your Name" required />
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                required
              />
              <textarea
                name="message"
                defaultValue={
                  selectedPlan
                    ? `Hi, I want to purchase the ${selectedPlan} Plan.`
                    : ""
                }
                placeholder="Your Message"
                required
              />
              <button type="submit">Send Message</button>
            </form>

            {/* Success Popup */}
            {success && (
              <motion.div
                className="success-popup"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Message Sent Successfully ✅
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ContactFloat;
