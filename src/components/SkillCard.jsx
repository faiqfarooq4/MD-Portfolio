import { motion } from "framer-motion";

function SkillCard({ title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
      className="bg-white p-6 rounded-xl shadow-lg"
    >
      <h3 className="text-xl font-semibold text-[var(--primary)]">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </motion.div>
  );
}

export default SkillCard;