import { motion } from "framer-motion";
import InicioImg from "../assets/inicio.png";
import Branding from "../assets/bi_pen.png";
import WebDesign from "../assets/Group.png";
import GraphicDesign from "../assets/mdi_paint-outline.png";
import "./Inicio.css";

const Inicio = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="inicio-container">
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
            <img src={Branding} alt="Branding" />
            <a>Branding</a>
          </li>
          <li className="inicio-service-item">
            <img src={WebDesign} alt="Diseño Web" />
            <a>Diseño Web</a>
          </li>
          <li className="inicio-service-item">
            <img src={GraphicDesign} alt="Diseño Gráfico" />
            <a>Diseño Gráfico</a>
          </li>
        </motion.ul>
      </div>
      <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="inicio-image-container">
        <img src={InicioImg} alt="inicio" className="inicio-image" />
      </motion.div>
    </div>
  );
};

export default Inicio;
