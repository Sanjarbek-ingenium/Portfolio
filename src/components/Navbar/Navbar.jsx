import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div 
          className="logo" 
          onClick={scrollToTop} 
          style={{ cursor: 'pointer' }}
        >
          Ibragimov Sanjarbek
        </div>

        <ul className="desktop-menu">
          <li><a href="#about">Men haqimda</a></li>
          <li><a href="#skills">Ko'nikmalar</a></li>
          <li><a href="#projects">Loyihalar</a></li>
          <li><a href="#contact">Aloqa</a></li>
        </ul>

        <div className="hamburger" onClick={() => setOpen(true)}>
          ☰
        </div>
      </nav>

      <div className={`mobile-menu ${open ? "show" : ""}`}>
        <div className="close-btn" onClick={() => setOpen(false)}>
          ✕
        </div>

        <ul>
          <li><a href="#about" onClick={() => setOpen(false)}>Men haqimda</a></li>
          <li><a href="#skills" onClick={() => setOpen(false)}>Ko'nikmalar</a></li>
          <li><a href="#projects" onClick={() => setOpen(false)}>Loyihalar</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)}>Aloqa</a></li>
        </ul>
      </div>

      {open && <div className="overlay" onClick={() => setOpen(false)}></div>}
    </>
  );
}

export default Navbar;