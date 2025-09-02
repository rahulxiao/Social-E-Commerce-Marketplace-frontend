import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      
      <main>
        <h1>Social E-Commerce Marketplace</h1>
        <p>Buy and sell products with the power of social media. Connect with sellers, discover amazing products, and build your online business.</p>
        
        <div>
          <a href="/signup">Get Started</a>
          <a href="/login">Login</a>
        </div>

        <section>
          <h2>Why Choose Our Platform?</h2>
          <div>
            <div>
              <div>🛍️</div>
              <h3>Easy Shopping</h3>
              <p>Browse and purchase products with an intuitive interface designed for seamless shopping experience.</p>
            </div>
            <div>
              <div>📱</div>
              <h3>Social Integration</h3>
              <p>Connect with sellers, share products, and build your network within our social marketplace.</p>
            </div>
            <div>
              <div>🔒</div>
              <h3>Secure Transactions</h3>
              <p>Safe and secure payment processing with buyer protection and seller verification.</p>
            </div>
          </div>
        </section>

        <section>
          <h2>Shop by Category</h2>
          <div>
            <div>
              <div>📱</div>
              <h3>Electronics</h3>
              <a href="/category/electronics">Browse Electronics</a>
            </div>
            <div>
              <div>👗</div>
              <h3>Fashion</h3>
              <a href="/category/fashion">Browse Fashion</a>
            </div>
            <div>
              <div>🏠</div>
              <h3>Home & Garden</h3>
              <a href="/category/home">Browse Home & Garden</a>
            </div>
            <div>
              <div>⚽</div>
              <h3>Sports</h3>
              <a href="/category/sports">Browse Sports</a>
            </div>
            <div>
              <div>📚</div>
              <h3>Books</h3>
              <a href="/category/books">Browse Books</a>
            </div>
            <div>
              <div>💄</div>
              <h3>Beauty</h3>
              <a href="/category/beauty">Browse Beauty</a>
            </div>
            <div>
              <div>🧸</div>
              <h3>Toys</h3>
              <a href="/category/toys">Browse Toys</a>
            </div>
            <div>
              <div>🚗</div>
              <h3>Automotive</h3>
              <a href="/category/automotive">Browse Automotive</a>
            </div>
          </div>
        </section>

        <section>
          <h2>Featured Products</h2>
          <div>
            <div>
              <h3>📱 Smartphone</h3>
              <p>Latest model smartphone with advanced features</p>
              <p>Price: $599</p>
              <a href="/product/1">View Details</a>
            </div>
            
            <div>
              <h3>👗 Designer Dress</h3>
              <p>Elegant evening dress for special occasions</p>
              <p>Price: $199</p>
              <a href="/product/2">View Details</a>
            </div>
            
            <div>
              <h3>🏠 Home Decor</h3>
              <p>Beautiful wall art to enhance your living space</p>
              <p>Price: $89</p>
              <a href="/product/3">View Details</a>
            </div>
          </div>
          <div>
            <a href="/user/1">View All Products</a>
          </div>
        </section>

        <section>
          <h2>Ready to Start Your Journey?</h2>
          <p>Join thousands of users who are already buying and selling on our platform.</p>
          <a href="/signup">Create Your Account Today</a>
        </section>
      </main>

      <Footer />
    </div>
  );
}
