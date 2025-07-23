import { useRef, useState } from "react";
import Exito1 from "../assets/exito1.webp";
import Exito2 from "../assets/exito2.webp";
import Exito3 from "../assets/exito3.webp";
import { motion, useInView } from "framer-motion";
import "./CasosDeExito.css"; 

const CasosDeExito = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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

  return (
    <section className="container" ref={ref}>
      <motion.div
        variants={fadeInRight}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-container"
      >
        <h2 className="title">Casos de Éxito</h2>
        <p className="text">
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
        className="image-container"
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Exito ${index + 1}`}
            className="image"
            loading="lazy"
            style={{
              width:
                hoveredIndex === null
                  ? "20em"
                  : hoveredIndex === index
                  ? "100%"
                  : "0px",
              opacity:
                hoveredIndex === null
                  ? 1
                  : hoveredIndex === index
                  ? 1
                  : 0,
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default CasosDeExito;
