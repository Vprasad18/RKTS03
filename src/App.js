import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import CompletedProjects from "./pages/portfolio/CompletedProjects";
import OngoingProjects from "./pages/portfolio/OngoingProjects";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading ? (
        <div className="loader">
          <div className="logo" />
          <p className="font-tinos font-medium text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl bg-gradient-to-r from-yellow-400 to-red-600 text-transparent bg-clip-text text-center px-2">
            RK Technical Support - Professional Safety & Security Solutions
          </p>
        </div>
      ) : (
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/portfolio/completed"
              element={<CompletedProjects />}
            />
            <Route path="/portfolio/ongoing" element={<OngoingProjects />} />
          </Routes>
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
