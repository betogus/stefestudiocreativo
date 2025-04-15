import { useEffect, useState } from "react";
import CardService from "./CardService";
import Branding from "../assets/Andes dean web 2.png";
import WebDesign from "../assets/Frame 61.png";
import GraphicDesign from "../assets/Group 99.png";
import useWindowWidth from "../hooks/useWindowWidth";

const services = [
  {
    title: "Branding / Marca",
    subtitle: "DESARROLLO INTEGRAL DE MARCA",
    description:       "Desarrollamos identidades de marca sólidas y estratégicas, alineadas con los valores y objetivos de tu negocio. Desde la creación del logotipo hasta la construcción de un sistema visual coherente, potenciamos la conexión con tu audiencia y diferenciamos tu marca en el mercado.",
    img: Branding,
  },
  {
    title: "Diseño de Páginas Web",
    subtitle: "DESARROLLO WEB A MEDIDA",
    description:
    "Creamos sitios web funcionales, escalables y optimizados para ofrecer la mejor experiencia de usuario. Nos enfocamos en el diseño intuitivo, la usabilidad y el rendimiento, asegurando una presencia digital que impulse el crecimiento de tu negocio.",    img: WebDesign,
  },
  {
    title: "Contenido para Redes",
    subtitle: "DESARROLLO DE CONTENIDO",
    description: "Diseñamos contenido visual atractivo y alineado con la identidad de tu marca, optimizado para generar impacto en redes sociales. Desde publicaciones hasta campañas estratégicas, creamos piezas que potencian tu comunicación y fortalecen tu presencia digital.",
    img: GraphicDesign,
  },
];

const Servicios = () => {
  const width = useWindowWidth();
  const isCarousel = width < 1024;

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = width < 768 ? 1 : 2;
  const maxIndex = Math.ceil(services.length / itemsPerSlide) - 1;

  // Auto slide cada 4 segundos
  useEffect(() => {
    if (!isCarousel) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [isCarousel, maxIndex]);

  const nextSlide = () => setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>NUESTROS SERVICIOS</h1>

      {isCarousel ? (
        <div style={styles.carousel}>
          <button onClick={prevSlide} style={styles.navButton}>◀</button>
          <div style={styles.sliderWrapper}>
            <div
              style={{
                ...styles.slider,
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {services.map((service, index) => (
                <div
                  key={index}
                  style={{
                    flex: `0 0 ${100 / itemsPerSlide}%`,
                    transition: "all 0.5s ease",
                    boxSizing: "border-box",
                    padding: "0 10px",
                  }}
                >
                  <CardService service={service} />
                </div>
              ))}
            </div>
          </div>
          <button onClick={nextSlide} style={styles.navButton}>▶</button>
        </div>
      ) : (
        <div style={styles.flexGroup}>
          {services.map((service, index) => (
            <div style={{ flex: "1", margin: "0 10px", maxWidth: "32%" }} key={index}>
              <CardService service={service} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    background: "linear-gradient(0deg, #1A1A1A 50%, #1b1545 100%)",
    minHeight: "100vh",
    padding: 20,
    boxSizing: "border-box" as const,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 40,
    marginBottom: 40,
    textAlign: "center" as const,
  },
  flexGroup: {
    display: "flex",
    justifyContent: "center",
    width: "80%",
  },
  carousel: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    maxWidth: "1000px",
    justifyContent: "space-between",
  },
  navButton: {
    backgroundColor: "transparent",
    border: "2px solid white",
    color: "white",
    fontSize: 24,
    cursor: "pointer",
    padding: "10px 20px",
    borderRadius: 8,
  },
  sliderWrapper: {
    overflow: "hidden",
    width: "100%",
  },
  slider: {
    display: "flex",
    transition: "transform 0.5s ease",
  },
};

export default Servicios;
