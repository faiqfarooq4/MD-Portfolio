import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const projects = [
    // Your Original Projects
    {
      title: "AI-Powered Chatbot",
      description:
        "A cutting-edge conversational agent powered by FastAPI and Hugging Face transformers, designed for real-time, human-like interactions with adaptive learning capabilities.",
      link: "#",
    },
    {
      title: "Real-Time Image Classifier",
      description:
        "An advanced image recognition system built with TensorFlow.js, optimized for low-latency performance across devices, from smartphones to desktops.",
      link: "#",
    },
    {
      title: "Sentiment Prediction Engine",
      description:
        "A sophisticated NLP tool that analyzes text to predict emotions, integrated with real-world applications like customer feedback systems.",
      link: "#",
    },
    {
      title: "Predictive Analytics Dashboard",
      description:
        "A futuristic dashboard leveraging machine learning to forecast trends, built with React and Python for seamless data visualization.",
      link: "#",
    },
    // Projects from Your Description
    {
      title: "Website Analyzer",
      description:
        "An AI tool built at Devrolin using LangChain and LangGraph to generate detailed webpage reports, saving time and enhancing site optimization with a sleek, user-friendly interface.",
      link: "#",
    },
    {
      title: "YouTube AutoAgent",
      description:
        "An in-progress AI automation tool leveraging PhiData and n8n to streamline video creation and publishing, boosting productivity for content creators with a smart, intuitive workflow.",
      link: "#",
    },
    // Additional 2025 Trend-Based Projects
    {
      title: "AI-Driven Supply Chain Optimizer",
      description:
        "A reinforcement learning system to predict and optimize supply chain logistics, reducing costs and delays with an interactive, real-time dashboard.",
      link: "#",
    },
    {
      title: "Autonomous Drone Navigation",
      description:
        "An AI-powered navigation system using computer vision and ROS for drones, solving last-mile delivery challenges with a robust, user-friendly control interface.",
      link: "#",
    },
    {
      title: "AI Healthcare Diagnostic Assistant",
      description:
        "A deep learning model trained on medical imaging and patient data to assist doctors in diagnosing diseases early, featuring an intuitive UI for clinicians.",
      link: "#",
    },
    {
      title: "Voice-Activated Smart Home Hub",
      description:
        "An edge AI solution integrating NLP and IoT to control home devices via voice, enhancing accessibility with a sleek, responsive app interface.",
      link: "#",
    },
    {
      title: "AI-Powered Code Review Tool",
      description:
        "A generative AI tool built with GPT models to analyze code, suggest improvements, and catch bugs, streamlining developer workflows with a clean UX.",
      link: "#",
    },
    {
      title: "Synthetic Data Generator",
      description:
        "A tool using GANs to create realistic datasets for training ML models, solving data privacy and scarcity issues with a simple, customizable interface.",
      link: "#",
    },
  ];

  return (
    <section className="py-24 px-4 bg-[#1A1A1A] text-white">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold text-[#FF6200] text-center mb-16"
      >
        My Projects
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px #FF6200" }}
          >
            <ProjectCard title={project.title} description={project.description} link={project.link} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;