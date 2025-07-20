import { Link, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import navbarLogo from '../assets/navbarLogo.png'

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg shadow-sm py-1">
      <div className="container">
        <Link className="navbar-brand fw-bold text-primary" to="/">
          <img src={navbarLogo} alt="Lapriel Floral Design" className="navbar-logo"/>
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

        <div className="collapse navbar-collapse justify-content-end handlee-font" id="navbarNav">
          <ul className="navbar-nav align-items-lg-center">
            <li className="nav-item mx-2">
              <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className={`nav-link ${location.pathname === '/pricing' ? 'active' : ''}`} to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="btn border border-dark px-2 py-2" to="/booking">Book Now</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
