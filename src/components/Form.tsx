import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { Input } from "./Input";
import { Textarea } from "./TextArea";

interface FormData {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
}

const Form = () => {
  const [hovered, setHovered] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormData>({ mode: "onChange" });

  const onSubmit = (data: FormData): void => {
    const serviceID = "service_ecxaf14";
    const templateID = "template_f606mzo";
    const publicKey = "bDiVURJq6wZCKrmeH";

    emailjs
      .send(serviceID, templateID, data as unknown as Record<string, unknown>, publicKey)
      .then(() => {
        alert("¡Mensaje enviado correctamente!");
        reset(); // 🧼 Limpiar formulario
      })
      .catch((err) => {
        console.error("Error al enviar el email:", err);
        alert("Hubo un error al enviar el mensaje. Intentá de nuevo.");
      });
  };

  const styles = {
    button: {
      color: "white",
      padding: "10px 20px",
      backgroundColor: "#19A1F7",
      borderRadius: "8px",
      height: "41px",
      position: "relative" as const,
      width: 175,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "20px",
      cursor: isValid ? "pointer" : "not-allowed",
      opacity: hovered ? 1 : 0.6,
      transition: "opacity 0.2s ease",
      border: "none",
    },
    form: {
      width: 776,
      height: 545,
      display: "flex",
      flexDirection: "column" as const,
      justifyContent: "space-around",
      marginTop: 40,
      alignItems: "end",
    },
    error: {
      color: "#ff6b6b",
      fontSize: "14px",
      alignSelf: "flex-start",
      marginBottom: "12px",
    },
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div style={{ width: "100%" }}>
        <Input
          placeholder="Nombre (requerido)"
          {...register("nombre", { required: "Este campo es obligatorio" })}
        />
        {errors.nombre && <p style={styles.error}>{String(errors.nombre.message)}</p>}
      </div>

      <div style={{ width: "100%" }}>
        <Input
          placeholder="Tu correo electrónico (requerido)"
          type="email"
          {...register("email", {
            required: "El email es obligatorio",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Email inválido",
            },
          })}
        />
        {errors.email && <p style={styles.error}>{String(errors.email.message)}</p>}
      </div>

      <div style={{ width: "100%" }}>
        <Input
          placeholder="Asunto"
          {...register("asunto", { required: "El asunto es obligatorio" })}
        />
        {errors.asunto && <p style={styles.error}>{String(errors.asunto.message)}</p>}
      </div>

      <div style={{ marginBottom: "24px", width: "100%" }}>
        <Textarea
          placeholder="Mensaje"
          {...register("mensaje", {
            required: "Este campo es obligatorio",
            minLength: {
              value: 10,
              message: "Debe tener al menos 10 caracteres",
            },
            validate: (value) => {
              const lineCount = value.split("\n").length;
              return lineCount <= 4 || "Máximo 4 renglones permitidos";
            },
          })}
        />
        {errors.mensaje && (
          <p style={{ color: "#ff6b6b", fontSize: "14px", marginTop: "6px" }}>
            {String(errors.mensaje.message)}
          </p>
        )}
      </div>

      <button
        type="submit"
        style={styles.button}
        disabled={!isValid}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        Enviar
      </button>
    </form>
  );
};

export default Form;
