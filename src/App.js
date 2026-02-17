import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./components/Home";
import Services from "./components/Services";
import Loader from "./Pages/Loader";
import Pricing from "./Pages/Priceing";
import ContactFloat from "./Pages/ContactFloat";
import ContactPage from "./Pages/ContactPage";

function App() {
  const [loading, setLoading] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState(null);

  // ===== Loader Logic =====
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 sec loader

    return () => clearTimeout(timer);
  }, []);

  // ===== Show Loader First =====
  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      {/* ===== Routes ===== */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
         <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/pricing"
          element={<Pricing onSelectPlan={setSelectedPlan} />}
        />
      </Routes>

      {/* ===== Global Contact Float (Outside Routes) ===== */}
      <ContactFloat
        selectedPlan={selectedPlan}
        clearPlan={() => setSelectedPlan(null)}
      />
    </BrowserRouter>
  );
}

export default App;
