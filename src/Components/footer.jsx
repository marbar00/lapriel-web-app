import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-dark mt-auto border-top py-3 handlee-font">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <strong>Lapriel Floral Design</strong> &copy; 2025. All rights reserved.
          </div>
          <div className="col-md-6">
            <ul className="nav justify-content-center justify-content-md-end">
              <li className="nav-item">
                <Link className="nav-link px-2 text-dark" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-2 text-dark" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-2 text-dark" to="/pricing">Pricing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-2 text-dark" to="/booking">Book Now</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
