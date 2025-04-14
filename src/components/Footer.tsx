import { useRef } from "react";
import Logo from "../assets/logo.png";
import { FaInstagram } from "react-icons/fa";
import { PiTiktokLogoLight } from "react-icons/pi";
import { motion, useInView } from "framer-motion";

const styles = {
  container: {
    height: 555,
    background: "linear-gradient(0deg, rgb(0, 0, 0)  0%, #1A1A1A  100%)",
    display: "flex",
    justifyContent: "space-between", 
    alignItems: "center",
    width: "100%",
  },
  title: {
    color: "white",
    fontSize: 60,
  },
  text: {
    color: "white",
    fontSize: 24,
  },
  icon: {
    width: 24,
    height: 24,
    color: "#777777",
    marginBottom: -5,
    marginRight: 5,
  },
  rightContainer: {
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
  },
  innerContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column" as const,
  },
};

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
      style={styles.container}
      ref={ref}
    >
      <div style={styles.innerContainer}>
        <h3 style={styles.title}>Contactanos</h3>
        <div>
          <p style={styles.text}>Te: +54 351 550 5435</p>
          <p style={styles.text}>email: stefestudiocreativo@gmail.com</p>
        </div>
      </div>
      <div style={styles.innerContainer}>
        <img src={Logo} alt="logo" />
      </div>
      <div style={styles.innerContainer}>
        <h3 style={styles.title}>Seguinos</h3>
        <div style={styles.rightContainer}>
          <p>
            <FaInstagram style={styles.icon} />
            <a style={styles.text}>stefestudiocreativo</a>
          </p>
          <p>
            <PiTiktokLogoLight style={styles.icon} />
            <a style={styles.text}>Stef Estudio Creativo</a>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
