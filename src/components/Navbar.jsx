import { Link } from "react-router-dom";
import { useCart } from "../CartContext";

const Navbar = () => {
  const { cartCount } = useCart();

  return (
    <div>
      <header className="navbar">

        <h1 className="logo">EmmyTech</h1>

        <nav>
          <ul className="logo-links">

            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>

            <li>
              <Link to="/cart">
                Cart ({cartCount})
              </Link>
            </li>

          </ul>
        </nav>

        <div className="logo-btn">
          <button>Login</button>
        </div>

      </header>
    </div>
  );
};

export default Navbar;