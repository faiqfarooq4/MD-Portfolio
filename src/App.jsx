import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Projects from "./pages/Projects";
import SkillsExpertise from "./pages/SkillsExpertise";
import ContactUs from "./pages/ContactUs";
import "./index.css";

function App() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(!localStorage.getItem("portfolioLoaded"));

  useEffect(() => {
    if (isInitialLoad) {
      console.log("Initial Load Detected");
      const timer = setTimeout(() => {
        setIsInitialLoad(false);
        localStorage.setItem("portfolioLoaded", "true");
        console.log("Initial Load Completed");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isInitialLoad]);

  const PageTransition = ({ children }) => {
    const location = useLocation();
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [lastPath, setLastPath] = useState(location.pathname);

    useEffect(() => {
      if (lastPath !== location.pathname && !isInitialLoad) {
        setIsTransitioning(true);
        const timer = setTimeout(() => {
          setIsTransitioning(false);
          setLastPath(location.pathname);
        }, 1000);
        return () => clearTimeout(timer);
      } else {
        setLastPath(location.pathname);
      }
    }, [location.pathname]);

    return (
      <>
        {isTransitioning && <Loader />}
        {children}
      </>
    );
  };

  return (
    <Router>
      <div className="relative min-h-screen">
        {isInitialLoad ? (
          <Loader />
        ) : (
          <>
            <Navbar />
            <main className="pt-20">
              <Routes>
                <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                <Route path="/about" element={<PageTransition><AboutUs /></PageTransition>} />
                <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
                <Route path="/skills" element={<PageTransition><SkillsExpertise /></PageTransition>} />
                <Route path="/contact" element={<PageTransition><ContactUs /></PageTransition>} />
              </Routes>
            </main>
            <Footer />
            <Chatbot isOpen={isChatbotOpen} toggleChatbot={() => setIsChatbotOpen(!isChatbotOpen)} />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;