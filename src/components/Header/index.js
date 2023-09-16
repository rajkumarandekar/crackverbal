import React, { useState } from "react";
import "./index.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        behavior: "smooth",
        top: section.offsetTop,
      });
      setIsMenuOpen(false);  
    }
  };

  return (
    <header className="header">
      <img
        src="https://res.cloudinary.com/dofzu13gt/image/upload/v1694748464/ORYp4YJaLy5EZ1F5HYzYt_ui1O3sD5WgkI5QGNpX6JckALm6GHeNs0gxoCs6uy7e99I9JoXFsETtuFIf0kxK7v3nRlXmS5e8-Oc_s0_sw20bu.png"
        alt="YourLogo"
        className="img-logo"
      />

      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a
              href="#freetrail"
              className="nav-link"
              onClick={() => scrollToSection("freetrail")}
            >
              Free Trial
            </a>
          </li>
          <li>
            <a
              href="#gmatprep"
              className="nav-link"
              onClick={() => scrollToSection("gmatprep")}
            >
              GMAT Prep
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="nav-link"
              onClick={() => scrollToSection("about")}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="nav-link"
              onClick={() => scrollToSection("testimonials")}
            >
              Testimonials
            </a>
          </li>
        </ul>
      </nav>

      <div className="subscribe">
        <a
          href="#subscribe"
          className="nav-link"
          onClick={() => scrollToSection("subscribe")}
        >
          Subscribe
        </a>
      </div>
    </header>
  );
}

export default Header;
