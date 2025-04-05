import { motion } from "framer-motion";
import SkillCard from "../components/SkillCard";

function SkillsExpertise() {
  const skills = [
    { title: "Python", description: "Building scalable AI/ML pipelines for real-time applications and data-driven solutions." },
    { title: "TensorFlow", description: "Designing deep learning models for image, text, and time-series analysis." },
    { title: "PyTorch", description: "Crafting flexible neural networks for research and production-grade AI systems." },
    { title: "NLP", description: "Developing language models for chatbots, sentiment analysis, and voice interfaces." },
    { title: "FastAPI", description: "Creating high-speed APIs for AI services and microservices architecture." },
    { title: "React.js", description: "Building dynamic, responsive UIs with a focus on user experience." },
    { title: "Data Science", description: "Extracting insights with statistical modeling and predictive analytics." },
    { title: "Reinforcement Learning", description: "Optimizing decision-making systems for logistics and personalization." },
    { title: "Computer Vision", description: "Powering image classifiers, object detection, and drone navigation." },
    { title: "Generative AI", description: "Leveraging GANs and transformers for synthetic data and content creation." },
    { title: "Scikit-Learn", description: "Implementing classical ML algorithms for quick prototyping and analysis." },
    { title: "Keras", description: "Simplifying neural network development for rapid experimentation." },
    { title: "Hugging Face Transformers", description: "Fine-tuning state-of-the-art models for NLP and multimodal tasks." },
    { title: "TensorFlow Lite", description: "Deploying AI models on edge devices for low-latency solutions." },
    { title: "OpenCV", description: "Processing and analyzing visual data for real-time computer vision apps." },
    { title: "Pandas & NumPy", description: "Manipulating and analyzing large datasets with efficiency." },
    { title: "Matplotlib & Seaborn", description: "Visualizing data trends with interactive, publication-quality graphics." },
    { title: "ROS (Robot Operating System)", description: "Enabling autonomous systems like drones and robots." },
    { title: "SQL", description: "Managing and querying databases for AI-driven insights." },
    { title: "Cloud Computing (AWS/GCP)", description: "Deploying scalable AI models in production environments." },
    { title: "Docker", description: "Containerizing AI applications for consistent deployment." },
    { title: "Kubernetes", description: "Orchestrating AI workloads for high availability and scalability." },
    { title: "Ethical AI", description: "Ensuring fairness, transparency, and accountability in AI systems." },
    { title: "Time-Series Analysis", description: "Forecasting trends for dashboards and predictive maintenance." },
    { title: "IoT Integration", description: "Connecting AI with smart devices for real-world automation." },
    { 
      title: "Machine Learning with LangChain & LangGraph", 
      description: "Architecting intelligent workflows and knowledge graphs for advanced AI agents like Website Analyzer and YouTube AutoAgent." 
    },
    { 
      title: "VR/AR with Unity & ML", 
      description: "Creating immersive virtual reality experiences powered by ML for training simulations and interactive AI-driven environments." 
    },
    // New Skills Requested
    { 
      title: "Agentic AI", 
      description: "Developing autonomous AI agents that reason, plan, and execute tasks independently, enhancing productivity and decision-making." 
    },
    { 
      title: "AI with Blockchain", 
      description: "Integrating AI with blockchain for secure, decentralized solutions like smart contracts and data provenance tracking." 
    },
    { 
      title: "Crypto Trading Bot Development", 
      description: "Building ML-driven trading bots for cryptocurrency markets, optimizing strategies with real-time data and predictive analytics." 
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
        Skills & Expertise
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px #FF6200" }}
          >
            <SkillCard title={skill.title} description={skill.description} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default SkillsExpertise;