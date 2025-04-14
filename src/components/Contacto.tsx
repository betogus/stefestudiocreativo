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
      padding: 80,
    },
    title: {
      color: "white",
      fontSize: 60,
    },
    text: {
      color: "white",
      fontSize: 24,
    },
    formContainer: {
      display: "flex",
      justifyContent: "center",
    },
  };

  return (
    <motion.div
      style={styles.container}
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <h1 style={styles.title}>CONTACTO</h1>
      <p style={styles.text}>
        Si preferís, dejános tus <b>dudas o consultas</b> a través del
        formulario y nos contactaremos con vos cuánto antes.
      </p>

      <div style={styles.formContainer}>
        <Form />
      </div>
    </motion.div>
  );
};



export default Contacto;
