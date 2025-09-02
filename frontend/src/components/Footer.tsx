export default function Footer() {
    return (
      <footer>
        {/* Brand / Logo */}
        <div>
          <h2>Social E-Commerce Marketplace</h2>
          <p>Buy and Sell products with social media.</p>
        </div>
  
        {/* Navigation Links */}
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
  
        {/* Socials */}
        <div>
          <h3>Follow Us</h3>
          <div>
            <button type="button" aria-label="Website">🌐</button>
            <button type="button" aria-label="Twitter">🐦</button>
            <button type="button" aria-label="Facebook">📘</button>
            <button type="button" aria-label="Instagram">📸</button>
          </div>
        </div>
  
        {/* Bottom Section */}
        <div>
          <p>© {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  