import { useRef } from "react";
import Logo from "../assets/logo.png";
import { FaInstagram } from "react-icons/fa";
import { PiTiktokLogoLight } from "react-icons/pi";
import { motion, useInView } from "framer-motion";
import "./Footer.css";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="footer-container"
      ref={ref}
    >
      <div className="footer-inner">
        <h3 className="footer-title">Contactanos</h3>
        <div>
          <p className="footer-text">Te: +54 351 550 5435</p>
          <p className="footer-text">email: stefestudiocreativo@gmail.com</p>
        </div>
      </div>
      <div className="footer-inner">
        <img src={Logo} alt="logo" className="footer-logo" />
      </div>
      <div className="footer-inner">
        <h3 className="footer-title">Seguinos</h3>
        <div className="footer-right">
          <p>
            <FaInstagram className="footer-icon" />
            <a className="footer-text">stefestudiocreativo</a>
          </p>
          <p>
            <PiTiktokLogoLight className="footer-icon" />
            <a className="footer-text">Stef Estudio Creativo</a>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
