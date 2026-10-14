import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";

import { CartProvider } from "./CartContext";
function App() {

  <section className="products-section" id="products">

  <div className="products-header">
    <h2>Featured Products</h2>

    <p>
      Discover quality products at affordable prices.
    </p>
  </div>

  <div className="products-grid">

    {products.map((product) => (
      <ProductCard
        key={product.id}
        product={product}
        onAddToCart={(product) => {
          console.log("Added to cart:", product);
        }}
      />
    ))}

  </div>

</section>
  return (
    <CartProvider>
      <div className="app">

        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </CartProvider>
  );
}

export default App;