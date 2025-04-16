import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import "./Whatsapp.css";

const Whatsapp = () => {

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const handleClick = () => {
    const phoneNumber = "543515505435";
    const message = "Hola, quiero más información";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <motion.div
      className="whatsapp-container"
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      
      onClick={handleClick}
    >
      <FaWhatsapp className="whatsapp-icon" />
    </motion.div>
  );
};

export default Whatsapp;
