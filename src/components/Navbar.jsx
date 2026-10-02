import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext";

const Navbar = () => {
  const { cartCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      <Link to="/" className="logo" onClick={closeMenu}>
        EmmyTech
      </Link>

      <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
        <Link to="/" onClick={closeMenu}>Home</Link>

        <Link to="/about" onClick={closeMenu}>About</Link>

        <Link to="/contact" onClick={closeMenu}>Contact</Link>

        <Link to="/cart" onClick={closeMenu}>
          🛒 Cart ({cartCount})
        </Link>

        <button className="mobile-login" onClick={closeMenu}>
          Login
        </button>
      </nav>

      <div className="desktop-login">
        <button>Login</button>
      </div>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>

    </header>
  );
};

export default Navbar;