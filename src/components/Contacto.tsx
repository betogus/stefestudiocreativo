import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Form from "./Form";

const Contacto = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

const styles = {
  container: {
    padding: "clamp(1rem, 5vw, 4rem)",
    textAlign: "center",
  },
  title: {
    color: "white",
    fontSize: "clamp(2.5rem, 5vw, 4rem)",
    lineHeight: 1.2,
    marginBottom: "1rem",
  },
  text: {
    color: "white",
    fontSize: "clamp(1rem, 2vw, 1.5rem)",
    lineHeight: 1.6,
    marginBottom: "2rem",
  },
  formContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
};

  return (
    <motion.section
      style={{ padding: "clamp(1rem, 5vw, 4rem)", textAlign: "center" }}
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <h2 style={styles.title}>CONTACTO</h2>
      <p style={styles.text}>
        Si preferís, dejános tus <b>dudas o consultas</b> a través del
        formulario y nos contactaremos con vos cuánto antes.
      </p>

      <div style={styles.formContainer}>
        <Form />
      </div>
    </motion.section>
  );
};



export default Contacto;
