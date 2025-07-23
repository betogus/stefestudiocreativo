import { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import { motion } from "framer-motion";
import "./Header.css"; // Importamos el archivo CSS

interface HeaderProps {
  onInicio: () => void;
  onServicios: () => void;
  onClientes: () => void;
  onContacto: () => void;
}

const Header = ({
  onInicio,
  onServicios,
  onClientes,
  onContacto,
}: HeaderProps) => {
  const [showHeader, setShowHeader] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY < 100 || isMobile) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile]);

  const fadeInDOwn = {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState("inicio");

  const handleClick = (section: string, callback: () => void) => {
    setActiveSection(section);
    callback();
    if (isMobileMenuOpen) setIsMobileMenuOpen(false); // Cerrar el menú móvil al hacer clic
  };

  const handleWhatsapp = () => {
    const phoneNumber = "543515505435"; 
    const message = "Hola, quiero más información"; 
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const getNavItemStyle = (name: string) => ({
    position: "relative" as const,
    color: activeSection === name ? "#ffffff" : "#898989",
    cursor: "pointer",
    paddingBottom: "4px",
    transition: "color 0.3s ease",
  });

  const getUnderlineStyle = (name: string) => ({
    position: "absolute" as const,
    left: 0,
    bottom: 0,
    height: "2px",
    width: hoveredItem === name ? "100%" : "0%",
    background: "linear-gradient(90deg, rgb(139, 15, 229), rgb(59, 51, 190))",
    transition: "width 0.4s ease",
  });

  return (
    <motion.div
      className="header-container"
      variants={fadeInDOwn}
      initial="hidden"
      animate={showHeader ? "visible" : "hidden"}
    >
      <div className="header-logo">
        <img src={Logo} alt="Logo" loading="lazy" />
      </div>

      {/* Icono de menú móvil */}
      <div
        className="mobile-menu-icon"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <div className="mobile-menu-line" />
        <div className="mobile-menu-line" />
        <div className="mobile-menu-line" />
      </div>

      {/* Menú de navegación principal */}
      <ul className="navbar">
        {[
          { name: "inicio", onClick: onInicio },
          { name: "servicios", onClick: onServicios },
          { name: "clientes", onClick: onClientes },
          { name: "contacto", onClick: onContacto },
        ].map((item) => (
          <li
            key={item.name}
            onClick={() => handleClick(item.name, item.onClick)}
            onMouseEnter={() => setHoveredItem(item.name)}
            onMouseLeave={() => setHoveredItem(null)}
            style={getNavItemStyle(item.name)}
          >
            {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
            <span style={getUnderlineStyle(item.name)} />
          </li>
        ))}
      </ul>

      {/* Menú móvil (en pantallas pequeñas) */}
      <ul className={`navbar-mobile ${isMobileMenuOpen ? "open" : ""}`}>
        {[
          { name: "inicio", onClick: onInicio },
          { name: "servicios", onClick: onServicios },
          { name: "clientes", onClick: onClientes },
          { name: "contacto", onClick: onContacto },
        ].map((item) => (
          <li
            key={item.name}
            onClick={() => handleClick(item.name, item.onClick)}
            style={getNavItemStyle(item.name)}
          >
            {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
            <span style={getUnderlineStyle(item.name)} />
          </li>
        ))}
      </ul>
      {!isMobile && (
        <div>
          <div className="button" onClick={handleWhatsapp}>
            Pedí tu asesoría GRATIS
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Header;
