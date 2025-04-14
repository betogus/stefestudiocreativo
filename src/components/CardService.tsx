const styles = {
  container: {
    maxWidth: 500,
    width: 500,
    height: 650,
    maxHeight: 650,
    backgroundColor: "#ffffff1a",
    border: "1px solid",
    borderColor: "#ffffff4c",
    borderRadius: 16,
  },
  subtitle: {
    color: "#898989",
    fontSize: 12,
    letterSpacing: "2px",
  },
  title: {
    fontSize: 30,
    color: "#FFFFFF",
  },
  description: {
    fontSize: 18,
    color: "#898989",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "space-between", 
    alignItems: "center", 
    width: 400,
    margin: "0 auto",
    textAlign: "center",
    paddingTop: 70,
    height: 560,
  }
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
        <div>
          <img src={service.img} alt="card image" />
        </div>
      </div>
    </div>
  );
};

export default CardService;
