
const styles = {
  container: {
    maxWidth: "90vw", 
    width: "100%",
    maxHeight: "45em",
    height: "45em",
    backgroundColor: "#ffffff1a",
    border: "1px solid",
    borderColor: "#ffffff4c",
    borderRadius: 16,
    padding: 20,
    boxSizing: "border-box" as const,
  },
  subtitle: {
    color: "#898989",
    fontSize: 12,
    letterSpacing: "2px",
  },
  title: {
    fontSize: 24,
    color: "#FFFFFF",
  },
  description: {
    fontSize: 16,
    color: "#898989",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "center" as const,
    paddingTop: 40,
    gap: 20,
    height: "90%",
  },
  imgContainer: {
    width: "100%",
  },
  img: {
    width: "100%",
    height: "auto",
    objectFit: "contain" as const,
  },
};

interface CardProps {
  title: string;
  subtitle: string;
  description: string;
  img: string;
}

const CardService = ({ service }: { service: CardProps }) => {
  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <div>
          <h3 style={styles.subtitle}>{service.subtitle}</h3>
          <h1 style={styles.title}>{service.title}</h1>
          <p style={styles.description}>{service.description}</p>
        </div>
        <div style={styles.imgContainer}>
          <img
            style={styles.img}
            src={service.img}
            alt="card image"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default CardService;
