import ProductCard from "../components/ProductCard";

const Home = () => {
  const products = [
    {
      id: 1,
      name: "Smartphone",
      price: 250000,
      description: "Latest smartphone with great features.",
      image: "/images/Smartphone.jpg",
    },
    {
      id: 2,
      name: "Laptop",
      price: 550000,
      description: "Powerful laptop for work and school.",
      image: "/images/Laptop.jpg",
    },
    {
      id: 3,
      name: "Headphones",
      price: 45000,
      description: "Wireless headphones with clear sound.",
      image: "/images/Headphones.jpg",
    },
    {
      id: 4,
      name: "Smart Watch",
      price: 75000,
      description: "Modern smartwatch for everyday use.",
      image: "/images/Smart Watch.jpg",
    },
  ];

  return (
    <div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">

          <div className="hero-text">
            <h1>
              Shop Everything You Need
              <span> in One Place</span>
            </h1>

            <p>
              Discover quality products at affordable prices.
              Shop from the comfort of your home.
            </p>

            <div className="hero-buttons">

          <button
              className="btn btn-primary"
              onClick={() => {
    document.getElementById("products").scrollIntoView({
      behavior: "smooth",
    });
  }}
>
  Shop Now
</button>

            <button
                className="btn btn-secondary"
                 onClick={() => {
                      document.getElementById("products").scrollIntoView({
                    behavior: "smooth",
      });
    }}
  >
    Explore Products
  </button>

</div>
            </div>
          </div>

      </section>


      {/* Products Section */}
      <section id="products" className="section">

        <div className="section-title">
          <h2>Popular Products</h2>

          <p>
            Check out some of our popular products
          </p>
        </div>


        <div className="product-grid">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </section>

    </div>
  );
};

export default Home;