import { useRef } from "react";
import Vector from "../assets/Vector 44.png";
import AsesoriaImg from "../assets/asesoria.png";
import Rocket from "../assets/Rocket.png";
import { motion, useInView } from "framer-motion";
import "./Asesoria.css";

const Asesoria = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  const fadeInRight = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const handleWhatsapp = () => {
    const phoneNumber = "543515505435"; 
    const message = "Hola, quiero más información"; 
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };
  
  return (
    <section className="asesoria-container">
      <img
        className="asesoria-vector"
        src={Vector}
        loading="lazy"
        alt="asesoria"
      />
      <div className="asesoria-subcontainer" ref={ref}>
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="asesoria-img-container"
        >
          <div className="asesoria-box"></div>
          <motion.img
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            src={AsesoriaImg}
            alt="Asesoria"
            className="stef-img"
            loading="lazy"
          />
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="asesoria-button"
            onClick={handleWhatsapp}
          >
            <a>Pedí tu asesoría gratis</a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="asesoria-text-container"
        >
          <h2 className="asesoria-text">Llevemos tu idea al siguiente</h2>
          <h1 className="asesoria-nivel">
            Nivel <img src={Rocket} alt="Rocket" loading="lazy" />
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default Asesoria;
