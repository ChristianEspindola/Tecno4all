import { Link } from "react-router-dom";
import Cardwidget from "../Cartwidget";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Tecno4All
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Inicio
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/productos">
                productos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productos/apple">
                Iphone
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productos/samsung">
                Samsung
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productos/xiaomi">
                Xiaomi
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/nosotros">
                Nosotros
              </Link>
            </li>
            <li>
              <Cardwidget />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
