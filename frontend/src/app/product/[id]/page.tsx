export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: productId } = await params;
  
  // Sample product data based on ID
  const products: { [key: string]: any } = {
    "1": {
      name: "Smartphone",
      emoji: "📱",
      price: "$599",
      description: "Latest model smartphone with advanced features, high-resolution camera, and long-lasting battery.",
      seller: "TechStore Pro",
      category: "Electronics"
    },
    "2": {
      name: "Designer Dress",
      emoji: "👗",
      price: "$199",
      description: "Elegant evening dress perfect for special occasions. Made with premium materials and exquisite craftsmanship.",
      seller: "Fashion Boutique",
      category: "Fashion"
    },
    "3": {
      name: "Home Decor",
      emoji: "🏠",
      price: "$89",
      description: "Beautiful wall art to enhance your living space. Handcrafted design that adds elegance to any room.",
      seller: "Home & Style",
      category: "Home & Garden"
    },
    "4": {
      name: "Sports Equipment",
      emoji: "⚽",
      price: "$149",
      description: "Professional quality sports gear for athletes. Durable construction and superior performance.",
      seller: "Sports Central",
      category: "Sports"
    },
    "5": {
      name: "Book Collection",
      emoji: "📚",
      price: "$49",
      description: "Set of classic novels and modern literature. Perfect for book lovers and collectors.",
      seller: "Book Haven",
      category: "Books"
    }
  };

  const product = products[productId] || {
    name: "Product Not Found",
    emoji: "❓",
    price: "N/A",
    description: "This product could not be found.",
    seller: "Unknown",
    category: "Unknown"
  };

  return (
    <div>
      <main>
        <h1>Product Details</h1>
        
        <section>
          <div>
            <h2>{product.emoji} {product.name}</h2>
            <p><strong>Price:</strong> {product.price}</p>
            <p><strong>Seller:</strong> {product.seller}</p>
            <p><strong>Category:</strong> {product.category}</p>
          </div>
          
          <div>
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>
          
          <div>
            <button>Add to Cart</button>
            <button>Buy Now</button>
            <button>Contact Seller</button>
          </div>
        </section>
        
        <section>
          <h3>Related Products</h3>
          <div>
            <a href="/product/1">📱 Smartphone</a>
            <a href="/product/2">👗 Designer Dress</a>
            <a href="/product/3">🏠 Home Decor</a>
          </div>
        </section>
        
        <section>
          <h3>Navigation</h3>
          <div>
            <a href="/">Back to Home</a>
            <a href="/user/1">View All Products</a>
            <a href={`/category/${product.category.toLowerCase().replace(' & ', '-').replace(' ', '-')}`}>
              Browse {product.category}
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
