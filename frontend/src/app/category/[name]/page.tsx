export default async function CategoryPage({ params }: { params: Promise<{ name: string }> }) {
  const { name: categoryName } = await params;
  
  // Sample category data
  const categories: { [key: string]: any } = {
    "electronics": {
      name: "Electronics",
      emoji: "📱",
      description: "Latest gadgets, smartphones, computers, and electronic devices.",
      products: [
        { id: "1", name: "Smartphone", price: "$599", emoji: "📱" },
        { id: "6", name: "Laptop", price: "$999", emoji: "💻" },
        { id: "7", name: "Headphones", price: "$199", emoji: "🎧" }
      ]
    },
    "fashion": {
      name: "Fashion",
      emoji: "👗",
      description: "Trendy clothing, accessories, and fashion items for all occasions.",
      products: [
        { id: "2", name: "Designer Dress", price: "$199", emoji: "👗" },
        { id: "8", name: "Sneakers", price: "$129", emoji: "👟" },
        { id: "9", name: "Handbag", price: "$89", emoji: "👜" }
      ]
    },
    "home": {
      name: "Home & Garden",
      emoji: "🏠",
      description: "Beautiful home decor, furniture, and garden essentials.",
      products: [
        { id: "3", name: "Home Decor", price: "$89", emoji: "🏠" },
        { id: "10", name: "Garden Tools", price: "$49", emoji: "🌱" },
        { id: "11", name: "Furniture", price: "$299", emoji: "🪑" }
      ]
    },
    "sports": {
      name: "Sports",
      emoji: "⚽",
      description: "Sports equipment, fitness gear, and athletic accessories.",
      products: [
        { id: "4", name: "Sports Equipment", price: "$149", emoji: "⚽" },
        { id: "12", name: "Yoga Mat", price: "$39", emoji: "🧘" },
        { id: "13", name: "Running Shoes", price: "$119", emoji: "👟" }
      ]
    },
    "books": {
      name: "Books",
      emoji: "📚",
      description: "Books, literature, educational materials, and reading accessories.",
      products: [
        { id: "5", name: "Book Collection", price: "$49", emoji: "📚" },
        { id: "14", name: "Novel", price: "$19", emoji: "📖" },
        { id: "15", name: "Textbook", price: "$79", emoji: "📕" }
      ]
    },
    "beauty": {
      name: "Beauty",
      emoji: "💄",
      description: "Beauty products, cosmetics, skincare, and personal care items.",
      products: [
        { id: "16", name: "Makeup Kit", price: "$59", emoji: "💄" },
        { id: "17", name: "Skincare Set", price: "$89", emoji: "🧴" },
        { id: "18", name: "Perfume", price: "$79", emoji: "🌸" }
      ]
    },
    "toys": {
      name: "Toys",
      emoji: "🧸",
      description: "Toys, games, educational materials, and entertainment for all ages.",
      products: [
        { id: "19", name: "Action Figure", price: "$29", emoji: "🧸" },
        { id: "20", name: "Board Game", price: "$39", emoji: "🎲" },
        { id: "21", name: "Puzzle", price: "$19", emoji: "🧩" }
      ]
    },
    "automotive": {
      name: "Automotive",
      emoji: "🚗",
      description: "Car accessories, automotive tools, and vehicle-related products.",
      products: [
        { id: "22", name: "Car Accessories", price: "$99", emoji: "🚗" },
        { id: "23", name: "Car Care Kit", price: "$49", emoji: "🧽" },
        { id: "24", name: "Phone Mount", price: "$29", emoji: "📱" }
      ]
    }
  };

  const category = categories[categoryName] || {
    name: "Category Not Found",
    emoji: "❓",
    description: "This category could not be found.",
    products: []
  };

  return (
    <div>
      <main>
        <h1>{category.emoji} {category.name}</h1>
        <p>{category.description}</p>
        
        <section>
          <h2>Products in {category.name}</h2>
          <div>
            {category.products.map((product: any) => (
              <div key={product.id}>
                <h3>{product.emoji} {product.name}</h3>
                <p>Price: {product.price}</p>
                <a href={`/product/${product.id}`}>View Details</a>
              </div>
            ))}
          </div>
        </section>
        
        <section>
          <h3>Browse Other Categories</h3>
          <div>
            <a href="/category/electronics">📱 Electronics</a>
            <a href="/category/fashion">👗 Fashion</a>
            <a href="/category/home">🏠 Home & Garden</a>
            <a href="/category/sports">⚽ Sports</a>
            <a href="/category/books">📚 Books</a>
            <a href="/category/beauty">💄 Beauty</a>
            <a href="/category/toys">🧸 Toys</a>
            <a href="/category/automotive">🚗 Automotive</a>
          </div>
        </section>
        
        <section>
          <h3>Navigation</h3>
          <div>
            <a href="/">Back to Home</a>
            <a href="/user/1">View All Products</a>
          </div>
        </section>
      </main>
    </div>
  );
}
