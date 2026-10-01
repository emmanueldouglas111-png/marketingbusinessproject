const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>EmmyTech</h2>
          <p>
            Your trusted marketplace for quality products at affordable prices.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: info@EmmyTech.com</p>
          <p>Phone: +234 806 814 6744</p>
          <p>Nigeria</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 EmmyTech. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;