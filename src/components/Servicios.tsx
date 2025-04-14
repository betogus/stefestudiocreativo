import { motion, useInView } from "framer-motion";
import Branding from "../assets/Andes dean web 2.png";
import WebDesign from "../assets/Frame 61.png";
import GraphicDesign from "../assets/Group 99.png";
import CardService from "./CardService";
import { useRef } from "react";

const styles = {
  container: {
    background: "linear-gradient(0deg, #1A1A1A 50%, #1b1545   100%)",
    height: "100vh",
    paddingTop: 20,
    paddingLeft: 100,
    paddingRight: 100,
  },
  title: {
    color: "white",
    fontSize: 40,
    marginBottom: 80
  },
  cardContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
};

interface CardService {
  title: string;
  subtitle: string;
  description: string;
  img: string;
}

const services: CardService[] = [
  {
    title: "Branding / Marca",
    subtitle: "DESARROLLO INTEGRAL DE MARCA",
    description:
      "Desarrollamos identidades de marca sólidas y estratégicas, alineadas con los valores y objetivos de tu negocio. Desde la creación del logotipo hasta la construcción de un sistema visual coherente, potenciamos la conexión con tu audiencia y diferenciamos tu marca en el mercado.",
    img: Branding,
  },
  {
    title: "Diseño de Páginas Web",
    subtitle: "DESARROLLO WEB A MEDIDA",
    description:
      "Creamos sitios web funcionales, escalables y optimizados para ofrecer la mejor experiencia de usuario. Nos enfocamos en el diseño intuitivo, la usabilidad y el rendimiento, asegurando una presencia digital que impulse el crecimiento de tu negocio.",
    img: WebDesign,
  },
  {
    title: "Contenido para Redes",
    subtitle: "DESARROLLO WEB A MEDIDA",
    description:
      "Creamos sitios web funcionales, escalables y optimizados para ofrecer la mejor experiencia de usuario. Nos enfocamos en el diseño intuitivo, la usabilidad y el rendimiento, asegurando una presencia digital que impulse el crecimiento de tu negocio.",
    img: GraphicDesign,
  },
];

const Servicios = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  return (
    <div style={styles.container}>
      <motion.h1
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        style={styles.title}
      >
        NUESTROS SERVICIOS
      </motion.h1>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        style={styles.cardContainer}
        ref={ref}
      >
        {services.map((s) => (
          <CardService service={s} />
        ))}
      </motion.div>
    </div>
  );
};

export default Servicios;
