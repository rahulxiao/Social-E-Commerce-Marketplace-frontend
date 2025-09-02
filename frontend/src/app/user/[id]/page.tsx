export default async function UserPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: userId } = await params;
  
  // Sample user data based on ID
  const users: { [key: string]: any } = {
    "1": {
      name: "John Smith",
      email: "john@example.com",
      location: "New York, USA",
      memberSince: "2023",
      rating: "4.8",
      totalSales: "156",
      avatar: "👨‍💼",
      bio: "Professional seller with quality products and excellent customer service."
    },
    "2": {
      name: "Sarah Johnson",
      email: "sarah@example.com", 
      location: "Los Angeles, USA",
      memberSince: "2022",
      rating: "4.9",
      totalSales: "89",
      avatar: "👩‍💼",
      bio: "Fashion enthusiast selling trendy clothing and accessories."
    },
    "3": {
      name: "Mike Chen",
      email: "mike@example.com",
      location: "Toronto, Canada", 
      memberSince: "2024",
      rating: "4.7",
      totalSales: "42",
      avatar: "👨‍💻",
      bio: "Tech expert offering the latest electronics and gadgets."
    }
  };

  const user = users[userId] || {
    name: "Unknown User",
    email: "unknown@example.com",
    location: "Unknown",
    memberSince: "Unknown",
    rating: "N/A",
    totalSales: "0",
    avatar: "👤",
    bio: "This user profile could not be found."
  };

  return (
    <div>
      <main>
        <h1>User Profile</h1>
        
        <section>
          <div>
            <h2>{user.avatar} {user.name}</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Location:</strong> {user.location}</p>
            <p><strong>Member Since:</strong> {user.memberSince}</p>
            <p><strong>Rating:</strong> {user.rating} ⭐</p>
            <p><strong>Total Sales:</strong> {user.totalSales}</p>
          </div>
          
          <div>
            <h3>About</h3>
            <p>{user.bio}</p>
          </div>
        </section>
        
        <section>
          <h2>User's Products</h2>
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
        </section>
        
        <section>
          <h2>User Reviews</h2>
          <div>
            <div>
              <h3>Great Seller! ⭐⭐⭐⭐⭐</h3>
              <p>"Excellent communication and fast shipping. Highly recommended!"</p>
              <p>- Buyer123</p>
            </div>
            
            <div>
              <h3>Quality Products ⭐⭐⭐⭐⭐</h3>
              <p>"Products exactly as described. Will buy again!"</p>
              <p>- HappyCustomer</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2>Contact User</h2>
          <div>
            <button>Send Message</button>
            <button>Follow User</button>
            <button>Report User</button>
          </div>
        </section>
        
        <section>
          <h3>Navigation</h3>
          <div>
            <a href="/">Back to Home</a>
            <a href="/user/1">View All Users</a>
            <a href="/product/1">Browse Products</a>
          </div>
        </section>
      </main>
    </div>
  );
}
