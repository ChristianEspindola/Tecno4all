import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>
            Estamos aquí para ayudarte. ¡Contáctanos para cualquier consulta!
          </p>
          <p>Email: tecno4all@gmail.com</p>
          <p>Teléfono: 1130314111</p>
        </div>
        <div className="footer-section">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li>
              <Link aria-current="page" to="/">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/productos">productos</Link>
            </li>
            <li>
              <Link to="/nosotros">Nosotros</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Síguenos en las Redes Sociales</h3>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Tecno4all. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
