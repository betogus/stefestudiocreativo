import { useRef, useState } from "react";
import Exito1 from "../assets/exito1.png";
import Exito2 from "../assets/exito2.png";
import Exito3 from "../assets/exito3.png";
import { motion, useInView } from "framer-motion";

const CasosDeExito = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const fadeInRight = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };
  const fadeInLeft = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const images = [Exito1, Exito2, Exito3];

  const styles = {
    container: {
      height: 555,
      background: "linear-gradient(45deg, #1F1CA9 0%, #BF3378 100%)",
      display: "flex",
      padding: 100,
    },
    textContainer: {
      width: "50%",
      color: "white",
      paddingRight: 50,
    },
    imageContainer: {
      width: "830px",
      height: "100%",
      overflow: "hidden",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      gap: 10,
    },
    title: {
      fontSize: 72,
    },
    text: {
      fontSize: 24,
    },
    image: (index: unknown) => ({
      objectFit: "cover",
      width:
        hoveredIndex === null
          ? "250px"
          : hoveredIndex === index
          ? "830px"
          : "0px",
      height: "100%",
      display: "block",
      opacity: hoveredIndex === null ? 1 : hoveredIndex === index ? 1 : 0,
      transition: "all 0.5s ease",
    }),
  };

  return (
    <div style={styles.container} ref={ref}>
      <motion.div
        variants={fadeInRight}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        style={styles.textContainer}
      >
        <h1 style={styles.title}>Casos de Éxito</h1>
        <p style={styles.text}>
          En Stef Estudio Creativo, nos llena de orgullo trabajar junto a
          clientes que <b>confían en nuestra experiencia y creatividad</b>.
          Desde emprendimientos en crecimiento hasta grandes compañías, cada
          proyecto es una oportunidad para innovar y crear soluciones a medida
          que generan impacto. Su éxito es nuestro mayor logro, y seguimos
          comprometidos en ofrecer resultados que superen expectativas. 🚀
        </p>
      </motion.div>

      <motion.div
        variants={fadeInLeft}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        style={styles.imageContainer}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Exito ${index + 1}`}
            style={styles.image(index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default CasosDeExito;
