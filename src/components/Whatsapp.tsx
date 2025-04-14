import { motion } from "framer-motion";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const styles = {
  container: {
    width: 80,
    height: 80,
    borderRadius: "50%",
    backgroundColor: "#25D366",
    position: "fixed",
    bottom: 40,
    right: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  icon: {
    color: "white",
    width: 46,
    height: 46,
  },
};

const Whatsapp = () => {
  const [isHovered, setIsHovered] = useState(false);
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
      variants={fadeInUp}
      initial="hidden"
      animate={"visible"}
      style={{
        ...styles.container,
        backgroundColor: isHovered ? "#4AFF8D" : "#25D366",
        position: "fixed" as const, 
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}

    >
      <FaWhatsapp style={styles.icon} />
    </motion.div>
  );
};

export default Whatsapp;
