import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer container">
      <p>
        Lucy Jmenez. Todos los derechos reservados. &copy;{" "}
        {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
