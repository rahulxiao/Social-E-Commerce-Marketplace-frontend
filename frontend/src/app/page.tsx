import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section>
        <div>
          <h1>Social E-Commerce Marketplace</h1>
          <p>
            Buy and sell products with the power of social media. Connect with sellers,
            discover amazing products, and build your online business.
          </p>
          <div>
            <Link href="/signup">Get Started</Link>
            <Link href="/login">Login</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <div>
          <h2>Why Choose Our Platform?</h2>
          <div>
            <div>
              <div>🛍️</div>
              <h3>Easy Shopping</h3>
              <p>
                Browse and purchase products with an intuitive interface designed for seamless shopping experience.
              </p>
            </div>
            <div>
              <div>📱</div>
              <h3>Social Integration</h3>
              <p>
                Connect with sellers, share products, and build your network within our social marketplace.
              </p>
            </div>
            <div>
              <div>🔒</div>
              <h3>Secure Transactions</h3>
              <p>
                Safe and secure payment processing with buyer protection and seller verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section>
        <div>
          <h2>Shop by Category</h2>
          <div>
            {[
              { name: "Electronics", emoji: "📱" },
              { name: "Fashion", emoji: "👗" },
              { name: "Home & Garden", emoji: "🏠" },
              { name: "Sports", emoji: "⚽" },
              { name: "Books", emoji: "📚" },
              { name: "Beauty", emoji: "💄" },
              { name: "Toys", emoji: "🧸" },
              { name: "Automotive", emoji: "🚗" }
            ].map((category, index) => (
              <div key={index}>
                <div>{category.emoji}</div>
                <h3>{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div>
          <h2>Ready to Start Your Journey?</h2>
          <p>
            Join thousands of users who are already buying and selling on our platform.
          </p>
          <Link href="/signup">Create Your Account Today</Link>
        </div>
      </section>
    </div>
  );
}
