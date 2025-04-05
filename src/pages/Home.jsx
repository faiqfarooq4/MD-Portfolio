import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { useState, useEffect } from "react";

function Home() {
  const [ataAnimation, setAtaAnimation] = useState(null);

  // Fetch the animation data on component mount
  useEffect(() => {
    fetch("/assets/ata.json")
      .then((response) => response.json())
      .then((data) => setAtaAnimation(data))
      .catch((error) => console.error("Error loading ata.json:", error));
  }, []);

  return (
    <div className="min-h-screen gradient-bg text-white flex flex-col md:flex-row items-center justify-between py-20 px-4 relative overflow-hidden">
      {/* Left Side - Text */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="text-left max-w-lg z-10"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wide">
          Muhammad Kamran Blouch
        </h1>
        <p className="mt-6 text-lg md:text-xl lg:text-2xl font-light leading-relaxed">
          Architect of Tomorrow | Crafting AI Solutions for a Smarter World
        </p>
        <motion.button
          whileHover={{ scale: 1.1, boxShadow: "0 0 20px var(--highlight)" }}
          className="mt-8 bg-[var(--accent)] text-white py-3 px-6 md:py-4 md:px-8 rounded-full font-semibold glow-effect"
        >
          Discover My Journey
        </motion.button>
      </motion.div>

      {/* Right Side - Ata Animation */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="w-full md:w-1/2 lg:w-1/3 max-w-md z-10"
      >
        {ataAnimation ? (
          <Lottie animationData={ataAnimation} loop={true} className="w-full h-auto" />
        ) : (
          <p>Loading animation...</p> // Optional fallback
        )}
      </motion.div>
    </div>
  );
}

export default Home;