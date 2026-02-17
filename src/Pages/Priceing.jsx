import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import "./Pricing.css";

export default function Pricing() {
  const navigate = useNavigate();

  const basePlans = [
    {
      name: "Silver",
      price: 9999,
      features: [
        "5 Page Website",
        "Responsive Design",
        "Basic SEO Setup",
        "Contact Form Integration",
        "1 Month Free Support",
      ],
    },
    {
      name: "Gold",
      price: 19999,
      highlight: true,
      features: [
        "10 Page Website",
        "Premium UI/UX Design",
        "Advanced SEO Setup",
        "Speed Optimization",
        "3 Months Free Support",
      ],
    },
    {
      name: "Platinum",
      price: 34999,
      features: [
        "Unlimited Pages",
        "Custom Animations",
        "Full SEO Optimization",
        "Google Analytics Setup",
        "6 Months Support",
      ],
    },
    {
      name: "Diamond",
      price: 59999,
      features: [
        "Custom Web Application",
        "Advanced Security Setup",
        "Full Digital Marketing",
        "Priority Support",
        "1 Year Maintenance",
      ],
    },
  ];

  const [plans, setPlans] = useState([]);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    let offerEndTime = localStorage.getItem("offerEndTime");
    let discounts = JSON.parse(localStorage.getItem("offerDiscounts"));
    const now = Date.now();

    // 🔥 Generate new offer if expired
    if (!offerEndTime || now > Number(offerEndTime)) {
      offerEndTime = now + 24 * 60 * 60 * 1000;

      discounts = [
        15 + Math.floor(Math.random() * 3),
        18 + Math.floor(Math.random() * 3),
        22 + Math.floor(Math.random() * 3),
        25 + Math.floor(Math.random() * 4),
      ];

      localStorage.setItem("offerEndTime", offerEndTime.toString());
      localStorage.setItem("offerDiscounts", JSON.stringify(discounts));
    }

    // 🔥 Update plans with discount
    const updatedPlans = basePlans.map((plan, index) => {
      const discount = discounts[index];
      const newPrice = Math.floor(plan.price - (plan.price * discount) / 100);

      return { ...plan, discount, newPrice };
    });

    setPlans(updatedPlans);

    // 🔥 Countdown
    const interval = setInterval(() => {
      const remaining = Math.floor(
        (Number(offerEndTime) - Date.now()) / 1000
      );

      if (remaining <= 0) {
        clearInterval(interval);
        localStorage.removeItem("offerEndTime");
        localStorage.removeItem("offerDiscounts");
        window.location.reload();
      } else {
        setTimeLeft(remaining);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");

    return `${hrs}:${mins}:${secs}`;
  };

  return (
    <section className="pricing-section">
      <h1 className="pricing-title">🔥 Limited Time Offer</h1>

      <p className="offer-timer">
        Offer Ends In: <span>{formatTime(timeLeft)}</span>
      </p>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className={`pricing-card ${plan.highlight ? "highlight" : ""}`}
            whileHover={{ y: -15 }}
            transition={{ duration: 0.3 }}
          >
            {/* Discount Badge */}
            <div className="offer-badge">{plan.discount}% OFF</div>

            {/* Plan Name */}
            <h2>{plan.name}</h2>

            {/* Pricing */}
            <div className="price-box">
              <span className="old-price">₹{plan.price}</span>
              <span className="new-price">₹{plan.newPrice}</span>
            </div>

            {/* Features */}
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>
                  <FaCheckCircle className="check-icon" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Button */}
            <button
              className="plan-btn"
              onClick={() =>
                navigate("/contact", {
                  state: { selectedPlan: plan.name },
                })
              }
            >
              Grab {plan.discount}% Offer
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
