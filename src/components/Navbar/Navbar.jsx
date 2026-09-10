import "./Navbar.css";
import logo from "../../assets/images/logo.jpeg";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">

      <div className="logo">
        <img
          src={logo}
          alt="Space Planning Design Consulting Logo"
        />
      </div>

      <nav className={menuOpen ? "mobileMenu active" : "mobileMenu"}>

        <ul className="navLinks">

          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>

          <li>
            <a href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>
          </li>

          <li>
            <a href="#packages" onClick={() => setMenuOpen(false)}>
              Packages
            </a>
          </li>

          <li>
            <a href="#experience" onClick={() => setMenuOpen(false)}>
              Industries
            </a>
          </li>

          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>

        </ul>

<a href="#contact" className="consultButton">
    Book Consultation
</a>

      </nav>

      <div
        className="menuIcon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

    </header>
  );
}

export default Navbar;