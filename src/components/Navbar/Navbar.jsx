import "./Navbar.css";
import "./Navbar.css";
import logo from "../../assets/images/logo.jpeg";

function Navbar() {
  return (
    <header className="navbar">

<div className="logo">
    <img src={logo} alt="Space Planning Design Consulting Logo" />
</div>

      <nav>

        <ul className="navLinks">

          <li><a href="#about">About</a></li>

          <li><a href="#services">Services</a></li>

          <li><a href="#packages">Packages</a></li>

          <li><a href="#experience">Experience</a></li>

          <li><a href="#contact">Contact</a></li>

        </ul>

      </nav>

      <button>
        Book Consultation
      </button>

    </header>
  );
}

export default Navbar;