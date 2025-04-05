import { motion } from "framer-motion";
import { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    try {
      const response = await fetch("http://localhost:8000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        setStatus(result.message); // "Form submitted successfully"
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorData = await response.json();
        setStatus(`Error: ${errorData.detail}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("Error: Unable to submit form. Please try again later.");
    }
  };

  return (
    <section className="py-24 px-4 bg-[#1A1A1A] text-white flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="max-w-lg w-full bg-[#2A2A2A] p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-5xl font-bold text-[#FF6200] text-center mb-8">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 bg-[#1A1A1A] border border-[#FF6200] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#FF6200]"
              required
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 bg-[#1A1A1A] border border-[#FF6200] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#FF6200]"
              required
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 bg-[#1A1A1A] border border-[#FF6200] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#FF6200]"
              required
            />
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px #FF6200" }}
            type="submit"
            className="w-full bg-[#FF6200] text-white py-3 rounded-lg font-semibold hover:bg-[#FF4500] transition"
          >
            Send Message
          </motion.button>
        </form>
        {status && <p className="mt-4 text-center text-[#FF6200]">{status}</p>}
      </motion.div>
    </section>
  );
}

export default ContactUs;