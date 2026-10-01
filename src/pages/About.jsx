const About = () => {
  return (
    <div className="about-page">

      {/* About Hero */}
      <section className="about-hero">
        <div className="about-hero-content">
          <p className="about-small-title">ABOUT EmmyTech</p>

          <h1>
            Making Shopping
            <span> Simple & Better</span>
          </h1>

          <p>
            EmmyTech is a modern marketplace created to make it
            easier for customers to discover quality products,
            compare options, and shop conveniently.
          </p>
        </div>
      </section>


      {/* Who We Are */}
      <section className="about-intro">

        <div className="about-intro-image">
          <div className="about-image-placeholder">
            🛍️
          </div>
        </div>

        <div className="about-intro-text">

          <p className="about-small-title">
            WHO WE ARE
          </p>

          <h2>
            Your Trusted
            <span> Online Marketplace</span>
          </h2>

          <p>
            At EmmyTech, we believe shopping should be
            simple, convenient, and enjoyable.
          </p>

          <p>
            Our platform brings different products together
            in one place, helping customers find what they
            need without unnecessary stress.
          </p>

          <p>
            We focus on providing a smooth shopping experience,
            quality products, and excellent customer service.
          </p>

        </div>

      </section>


      {/* Mission & Vision */}
      <section className="mission-section">

        <div className="section-title">
          <p className="about-small-title">
            WHAT DRIVES US
          </p>

          <h2>
            Our Mission & Vision
          </h2>
        </div>

        <div className="mission-grid">

          <div className="mission-card">
            <div className="mission-icon">
              🎯
            </div>

            <h3>Our Mission</h3>

            <p>
              To make online shopping simple and accessible
              by connecting customers with quality products
              and reliable sellers.
            </p>
          </div>


          <div className="mission-card">
            <div className="mission-icon">
              🚀
            </div>

            <h3>Our Vision</h3>

            <p>
              To build a trusted marketplace where people
              can discover, compare, and purchase products
              with confidence.
            </p>
          </div>

        </div>

      </section>


      {/* Why Choose Us */}
      <section className="why-us">

        <div className="section-title">

          <p className="about-small-title">
            WHY EmmyTech
          </p>

          <h2>
            Why Shop With Us?
          </h2>

        </div>


        <div className="features-grid">

          <div className="feature-card">
            <div className="feature-icon">
              🛒
            </div>

            <h3>Easy Shopping</h3>

            <p>
              Find products easily and enjoy a simple
              shopping experience.
            </p>
          </div>


          <div className="feature-card">
            <div className="feature-icon">
              ⭐
            </div>

            <h3>Quality Products</h3>

            <p>
              We aim to provide customers with products
              they can trust.
            </p>
          </div>


          <div className="feature-card">
            <div className="feature-icon">
              🔒
            </div>

            <h3>Secure Experience</h3>

            <p>
              We focus on creating a safe and reliable
              environment for shoppers.
            </p>
          </div>


          <div className="feature-card">
            <div className="feature-icon">
              💬
            </div>

            <h3>Customer Support</h3>

            <p>
              We're committed to helping customers whenever
              they need assistance.
            </p>
          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="about-cta">

        <h2>
          Ready to Start Shopping?
        </h2>

        <p>
          Explore our products and find something you'll love.
        </p>

        <a href="/" className="btn btn-primary">
          Explore Products
        </a>

      </section>

    </div>
  );
};

export default About;