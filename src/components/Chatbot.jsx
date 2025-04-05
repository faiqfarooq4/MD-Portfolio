import { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes, FaPaperPlane } from "react-icons/fa";
import aiRobot from "../../public/assets/robot.png";

function Chatbot({ isOpen, toggleChatbot }) {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const faqs = [
    { question: "Who are you?", answer: "I’m Muhammad Kamran’s AI Assistant, built to showcase his 5+ years as a Generative AI Engineer!" },
    { question: "What’s your phone number?", answer: "You can reach me at +447553828941. Let’s talk AI!" },
    { question: "What’s your email?", answer: "Drop me a line at md.kamran@devrolin.com—I’d love to connect!" },
    { question: "Which projects have you done?", answer: "I’ve built 'Website Analyzer' and 'YouTube AutoAgent'. For details, kindly contact me at +447553828941 or md.kamran@devrolin.com!" },
    { question: "What’s your Instagram?", answer: "Check out my AI insights at https://www.instagram.com/kamranaiinsights/?hl=en!" },
    { question: "What’s your LinkedIn?", answer: "Connect with me on LinkedIn: https://www.linkedin.com/in/muhammad-kamran-blouch-94334a19a/" },
    { question: "What can you do?", answer: "I can share my skills, projects, and contact info. Ask away!" },
  ];

  const visibleFaqs = faqs.slice(0, 3);

  const handleFaqClick = (answer) => {
    setResponse(answer);
  };

  const sendMessage = async () => {
    if (!message.trim()) return;

    const matchedFaq = faqs.find((faq) =>
      faq.question.toLowerCase().includes(message.toLowerCase())
    );
    if (matchedFaq) {
      setResponse(matchedFaq.answer);
      setMessage("");
      return;
    }

    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes("project") || lowerMessage.includes("detail") || lowerMessage.includes("info")) {
      setResponse("For project details or more info, kindly contact me at +447553828941 or md.kamran@devrolin.com!");
      setMessage("");
      return;
    }

    try {
      const res = await fetch(`http://localhost:8000/chatbot?message=${encodeURIComponent(message)}`);
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      setResponse(data.response);
      setMessage("");
    } catch (error) {
      setResponse("Hmm, I’m focused on my portfolio. Try asking about my projects, email, or socials!");
      console.error("Fetch error:", error);
    }
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleChatbot}
        className="fixed right-6 bottom-6 bg-[var(--primary)] p-4 rounded-full shadow-lg glow-effect z-50 hover-glow"
      >
        <img src={aiRobot} alt="AI Chatbot" className="w-8 h-8 object-contain" />
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="fixed right-6 bottom-20 w-96 bg-[var(--bg-dark)] rounded-xl shadow-2xl p-6 z-50 border border-[var(--primary)]"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-[var(--primary)] text-gradient">Kamran’s AI</h2>
            <motion.button
              whileHover={{ rotate: 90 }}
              onClick={toggleChatbot}
              className="text-[var(--primary)] hover:text-[var(--accent)]"
            >
              <FaTimes size={20} />
            </motion.button>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold text-[var(--primary)]">Quick Info</h3>
            <div className="max-h-20 overflow-y-auto scrollbar-thin scrollbar-thumb-[var(--primary)] scrollbar-track-[var(--bg-light)]">
              {visibleFaqs.map((faq, index) => (
                <motion.button
                  key={index}
                  whileHover={{ x: 5, color: "var(--accent)" }}
                  onClick={() => handleFaqClick(faq.answer)}
                  className="block text-left text-sm text-[var(--text-muted)] py-1 transition-colors"
                >
                  {faq.question}
                </motion.button>
              ))}
            </div>
            <p className="text-xs text-[var(--text-muted)] mt-2 italic">Ask me anything about my portfolio!</p>
          </div>

          <div className="h-48 overflow-y-auto bg-[var(--bg-light)] p-4 rounded-lg mb-4 scrollbar-thin scrollbar-thumb-[var(--primary)] scrollbar-track-[var(--bg-dark)]">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-[var(--secondary)] text-sm leading-relaxed"
            >
              {response || "Hey! I’m here to talk about Muhammad Kamran’s portfolio. What do you want to know?"}
            </motion.p>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 p-3 border border-[var(--primary)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--highlight)] bg-[var(--bg-dark)] text-[var(--secondary)] placeholder-[var(--text-muted)] transition-all"
              placeholder="Ask about me, my projects, or how to reach me..."
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={sendMessage}
              className="bg-[var(--accent)] text-[var(--secondary)] p-3 rounded-lg glow-effect"
            >
              <FaPaperPlane size={16} />
            </motion.button>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default Chatbot;