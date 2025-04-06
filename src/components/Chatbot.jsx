import { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes, FaPaperPlane } from "react-icons/fa";

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
      const res = await fetch(`https://mdbackend-vert.vercel.app/api/chatbot?message=${encodeURIComponent(message)}`);
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
        className="fixed right-4 bottom-4 md:right-6 md:bottom-6 bg-[var(--primary)] p-3 md:p-4 rounded-full shadow-lg glow-effect z-50 hover-glow"
      >
        <img src="/assets/robot.png" alt="AI Chatbot" className="w-6 h-6 md:w-8 md:h-8 object-contain" />
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="fixed inset-0 md:inset-auto md:right-6 md:bottom-20 md:w-96 md:h-[500px] bg-[var(--bg-dark)] rounded-t-xl md:rounded-xl shadow-2xl z-50 border border-[var(--primary)] flex flex-col"
        >
          <div className="flex justify-between items-center p-4 md:p-6 border-b border-[var(--primary)]">
            <h2 className="text-xl md:text-2xl font-bold text-[var(--primary)] text-gradient">Kamran’s AI</h2>
            <motion.button
              whileHover={{ rotate: 90 }}
              onClick={toggleChatbot}
              className="text-[var(--primary)] hover:text-[var(--accent)]"
            >
              <FaTimes size={20} />
            </motion.button>
          </div>

          <div className="p-4 md:p-6 flex-shrink-0">
            <h3 className="text-base md:text-lg font-semibold text-[var(--primary)] mb-2">Quick Info</h3>
            <div className="max-h-20 overflow-y-auto scrollbar-thin scrollbar-thumb-[var(--primary)] scrollbar-track-[var(--bg-light)]">
              {visibleFaqs.map((faq, index) => (
                <motion.button
                  key={index}
                  whileHover={{ x: 5, color: "var(--accent)" }}
                  onClick={() => handleFaqClick(faq.answer)}
                  className="block text-left text-xs md:text-sm text-[var(--text-muted)] py-1 transition-colors w-full"
                >
                  {faq.question}
                </motion.button>
              ))}
            </div>
            <p className="text-[10px] md:text-xs text-[var(--text-muted)] mt-2 italic">Ask me anything about my portfolio!</p>
          </div>

          <div className="flex-1 overflow-y-auto bg-[var(--bg-light)] p-4 md:p-4 mx-4 md:mx-6 rounded-lg scrollbar-thin scrollbar-thumb-[var(--primary)] scrollbar-track-[var(--bg-dark)]">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-[var(--secondary)] text-xs md:text-sm leading-relaxed"
            >
              {response || "Hey! I’m here to talk about Muhammad Kamran’s portfolio. What do you want to know?"}
            </motion.p>
          </div>

          <div className="p-4 md:p-6 flex-shrink-0 border-t border-[var(--primary)]">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 p-2 md:p-3 border border-[var(--primary)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--highlight)] bg-[var(--bg-dark)] text-[var(--secondary)] placeholder-[var(--text-muted)] text-xs md:text-base transition-all"
                placeholder="Ask about me, my projects..."
                onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={sendMessage}
                className="bg-[var(--accent)] text-[var(--secondary)] p-2 md:p-3 rounded-lg glow-effect"
              >
                <FaPaperPlane size={14} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default Chatbot;