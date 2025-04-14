// App.tsx
import { useRef } from "react";
import Asesoria from "./components/Asesoria";
import CasosDeExito from "./components/CasosDeExito";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Inicio from "./components/Inicio";
import Servicios from "./components/Servicios";
import Whatsapp from "./components/Whatsapp";

const App = () => {
  const inicioRef = useRef<HTMLDivElement>(null);
  const serviciosRef = useRef<HTMLDivElement>(null);
  const clientesRef = useRef<HTMLDivElement>(null);
  const contactoRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header
        onInicio={() => scrollTo(inicioRef)}
        onServicios={() => scrollTo(serviciosRef)}
        onClientes={() => scrollTo(clientesRef)}
        onContacto={() => scrollTo(contactoRef)}
      />
      <div ref={inicioRef}><Inicio /></div>
      <Asesoria />
      <div ref={serviciosRef}><Servicios /></div>
      <div ref={clientesRef}><CasosDeExito /></div>
      <div ref={contactoRef}><Contacto /></div>
      <Footer />
      <Whatsapp />
    </>
  );
};

export default App;
