
import { FaWhatsapp } from "react-icons/fa";

const ButtonWhatsApp = ({ numero = "5491123456789", mensaje = "Hola! Quisiera más información." }) => {
  const urlWhatsapp = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

  return (
    <a
      href={urlWhatsapp}
      target="_blank"
      rel="noopener noreferrer"
      style={styles.boton}
      aria-label="Chat WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

const styles = {
  boton: {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    backgroundColor: "#25D366",
    color: "white",
    borderRadius: "50%",
    width: "56px",
    height: "56px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
    zIndex: 1000,
    cursor: "pointer",
    textDecoration: "none",
  },
};

export default ButtonWhatsApp;
