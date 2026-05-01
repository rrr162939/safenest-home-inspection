import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [show, setShow] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const lastScroll = useRef(0); // ✅ FIX: useRef instead of state

  // 🌙 Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  // 🔽 Hide/Show Navbar on Scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScroll.current) {
        setShow(false);
      } else {
        setShow(true);
      }
      lastScroll.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${show ? "show" : "hide"}`}>

      {/* Logo */}
      <h2 className="logo">SafeNest</h2>

      {/* Desktop Menu */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/booking">Book</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* Right Side Controls */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        
        {/* 🌙 Dark Mode Toggle */}
        <button
          className="dark-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        {/* ☰ Mobile Toggle */}
        <div
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
        <Link to="/booking" onClick={() => setMenuOpen(false)}>Book</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>

    </nav>
  );
}

export default Navbar;