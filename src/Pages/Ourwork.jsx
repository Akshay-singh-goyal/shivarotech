import React, { useEffect, useState } from "react";
import {
  Lightbulb,
  Settings,
  TrendingUp,
  Code,
  Megaphone,
  FileText,
  Briefcase,
  Home,
  Store,
  ShoppingCart,
  GraduationCap,
} from "lucide-react";
import "./Ourwork.css";

export default function OurWork() {
  const [count, setCount] = useState(0);

  // Counter Animation
  useEffect(() => {
    let start = 0;
    const end = 120;
    const duration = 2000;
    const stepTime = 20;
    const step = end / (duration / stepTime);

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  // Services List
  const services = [
    {
      icon: <Code size={26} />,
      title: "Web Development",
      url: "https://shivarotech.vercel.app",
    },
    {
      icon: <Megaphone size={26} />,
      title: "Digital Marketing",
      url: "https://shivarotech.vercel.app",
    },
    {
      icon: <Home size={26} />,
      title: "Real Estate",
      url: "https://shivarotech.vercel.app",
    },
    {
      icon: <ShoppingCart size={26} />,
      title: "E-Commerce",
      url: "https://utsav-aura.vercel.app",
    },
    {
      icon: <Store size={26} />,
      title: "Product Selling",
      url: "https://utsav-aura.vercel.app",
    },
    {
      icon: <GraduationCap size={26} />,
      title: "University Notes",
      url: "https://theitwallah.vercel.app",
    },
    {
      icon: <FileText size={26} />,
      title: "Project Work",
      url: "https://shivarotech.vercel.app",
    },
    {
      icon: <Briefcase size={26} />,
      title: "Freelancing",
      url: "https://shivarotech.vercel.app",
    },
  ];

  return (
    <section className="ourwork-section">
      {/* ================= COUNTER ================= */}
      <div className="counter-section">
        <div className="counter-box">
          <h2>{count}+</h2>
          <p>Happy Clients</p>
        </div>
        <div className="counter-box">
          <h2>75+</h2>
          <p>Projects Completed</p>
        </div>
        <div className="counter-box">
          <h2>8+</h2>
          <p>Business Domains</p>
        </div>
      </div>

      {/* ================= HOW WE WORK ================= */}
      <div className="section">
        <h2 className="section-title">How We Work</h2>

        <div className="auto-scroll-wrapper">
          <div className="auto-scroll-track">
            {[1, 2].map((_, index) => (
              <React.Fragment key={index}>
                <div className="premium-card">
                  <Lightbulb size={28} />
                  <h3>Strategy & Planning</h3>
                  <p>Deep research before execution.</p>
                </div>

                <div className="premium-card">
                  <Settings size={28} />
                  <h3>Design & Development</h3>
                  <p>Modern scalable systems.</p>
                </div>

                <div className="premium-card">
                  <TrendingUp size={28} />
                  <h3>Launch & Growth</h3>
                  <p>Marketing & performance boost.</p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* ================= SERVICES AUTO SCROLL ================= */}
      <div className="section">
        <h2 className="section-title">Our Business Areas</h2>

        <div className="auto-scroll-wrapper">
          <div className="auto-scroll-track">
            {[...services, ...services].map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="premium-card"
              >
                {item.icon}
                <h3>{item.title}</h3>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
