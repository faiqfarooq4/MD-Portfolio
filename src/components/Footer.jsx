import { FaLinkedin, FaInstagram, FaEnvelope, FaFacebook, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="gradient-bg text-white py-12 text-center">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm font-light mb-6">© 2025 Muhammad Kamran Blouch. All Rights Reserved.</p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/muhammad-kamran-blouch-94334a19a/"
            target="_blank"
            className="hover:text-[var(--accent)] transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/kamranaiinsights/?hl=en"
            target="_blank"
            className="hover:text-[var(--accent)] transition-colors"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="mailto:md.kamran@devrolin.com"
            className="hover:text-[var(--accent)] transition-colors"
          >
            <FaEnvelope size={24} />
          </a>
          <a
            href="https://wa.me/447553828941"
            target="_blank"
            className="hover:text-[var(--accent)] transition-colors"
          >
            <FaWhatsapp size={24} />
          </a>
        </div>
        <p className="text-sm font-light mt-6">Contact me: +44 7553 828941</p>
      </div>
    </footer>
  );
}

export default Footer;