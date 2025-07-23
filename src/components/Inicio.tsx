import { motion } from "framer-motion";
import InicioImg from "../assets/inicio.webp";
import Branding from "../assets/Branding.png";
import WebDesign from "../assets/Diseño Web.png";
import GraphicDesign from "../assets/Diseño Gráfico.png";
import "./Inicio.css";

const Inicio = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <section className="inicio-container">
      <div className="inicio-title-container">
        <motion.h1
          className="inicio-title"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          Contenido digital a medida
        </motion.h1>
        <motion.p
          className="inicio-subtitle"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          Somos una agencia especializada en{" "}
          <b>branding, diseño y desarrollo web.</b>
          <br />
          Combinamos <b>creatividad, innovación y tecnología</b> para ayudar a
          marcas y emprendedores a destacarse en el mundo digital.
        </motion.p>
        <motion.ul
          className="inicio-services"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <li className="inicio-service-item">
            <img src={Branding} alt="Branding" loading="lazy"/>
            <a>Branding</a>
          </li>
          <li className="inicio-service-item">
            <img src={WebDesign} alt="Diseño Web" loading="lazy"/>
            <a>Diseño Web</a>
          </li>
          <li className="inicio-service-item">
            <img src={GraphicDesign} alt="Diseño Gráfico" loading="lazy"/>
            <a>Diseño Gráfico</a>
          </li>
        </motion.ul>
      </div>
      <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="inicio-image-container">
        <img src={InicioImg} alt="inicio" className="inicio-image" loading="lazy"/>
      </motion.div>
    </section>
  );
};

export default Inicio;
