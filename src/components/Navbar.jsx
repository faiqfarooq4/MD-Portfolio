import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="gradient-bg text-white p-4 fixed w-full top-0 z-50 shadow-lg"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold tracking-tight">
          Muhammad Kamran Blouch
        </Link>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg font-semibold">
          <Link to="/" className="hover:text-[var(--accent)] transition-colors">Home</Link>
          <Link to="/about" className="hover:text-[var(--accent)] transition-colors">About</Link>
          <Link to="/projects" className="hover:text-[var(--accent)] transition-colors">Projects</Link>
          <Link to="/skills" className="hover:text-[var(--accent)] transition-colors">Skills</Link>
          <Link to="/contact" className="hover:text-[var(--accent)] transition-colors">Contact</Link>
        </div>
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-[var(--primary)] text-white p-4 space-y-4"
        >
          <Link to="/" onClick={() => setIsOpen(false)} className="block hover:text-[var(--accent)]">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block hover:text-[var(--accent)]">About</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)} className="block hover:text-[var(--accent)]">Projects</Link>
          <Link to="/skills" onClick={() => setIsOpen(false)} className="block hover:text-[var(--accent)]">Skills</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block hover:text-[var(--accent)]">Contact</Link>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;