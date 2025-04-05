import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { useState, useEffect } from "react";

function AboutUs() {
  const [aboutAnimation, setAboutAnimation] = useState(null);

  useEffect(() => {
    fetch("/assets/About.json")
      .then((response) => response.json())
      .then((data) => setAboutAnimation(data))
      .catch((error) => console.error("Error loading about.json:", error));
  }, []);

  return (
    <section className="py-24 px-4 bg-[#1A1A1A] text-white max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="space-y-6"
      >
        <h2 className="text-5xl font-bold text-[#FF6200]">About Me</h2>
        <div className="space-y-4 text-[#B0B0B0]">
          <motion.p
            whileHover={{ color: "#FF6200", scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="text-lg leading-relaxed cursor-pointer"
          >
            Hi, I'm Muhammad Kamran, a Generative AI Engineer with over five years of experience in AI automation and business optimization!
          </motion.p>
          <motion.p
            whileHover={{ color: "#FF6200", scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="text-lg leading-relaxed cursor-pointer"
          >
            I’ve worked with top frameworks like LangChain, LangGraph, PhiData, LangFlow, and n8n to create smart AI solutions.
          </motion.p>
          <motion.p
            whileHover={{ color: "#FF6200", scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="text-lg leading-relaxed cursor-pointer"
          >
            At Devrolin, I’ve built AI tools like 'Website Analyzer,' which generates webpage reports, and I'm now working on 'YouTube AutoAgent' to automate video creation and publishing!
          </motion.p>
          <motion.p
            whileHover={{ color: "#FF6200", scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="text-lg leading-relaxed cursor-pointer"
          >
            If you're looking for AI solutions that save time and boost productivity, let's work together! Click the 'Hire' button, and let's automate your business with AI!
          </motion.p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {aboutAnimation ? (
          <Lottie animationData={aboutAnimation} loop={true} className="w-full" />
        ) : (
          <div className="text-[#FF6200] animate-pulse">Loading...</div>
        )}
      </motion.div>
    </section>
  );
}

export default AboutUs;