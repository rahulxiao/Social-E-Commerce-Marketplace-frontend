# Social E-Commerce Marketplace

A modern e-commerce platform built with Next.js 15 that combines traditional online shopping with social media features. Users can buy, sell, and connect with other users in a social marketplace environment.

## 🚀 Features

- **User Authentication** - Login, signup, and password reset functionality
- **Product Catalog** - Browse products by category with dynamic routing
- **User Profiles** - Individual user pages with ratings and reviews
- **Social Features** - Follow users, send messages, and leave reviews
- **Responsive Design** - Works on all devices without CSS styling
- **Dynamic Routing** - SEO-friendly URLs for products, categories, and users

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.2
- **Language**: TypeScript
- **Styling**: No CSS (browser defaults)
- **Routing**: App Router with dynamic routes
- **State Management**: React hooks (useState)

## 📁 Project Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── login/
│   │   │   ├── forgot-password/
│   │   │   │   └── page.tsx          # Password reset page
│   │   │   ├── layout.tsx            # Login layout wrapper
│   │   │   └── page.tsx              # Login page
│   │   ├── signup/
│   │   │   └── page.tsx              # Signup page
│   │   ├── user/
│   │   │   └── [id]/
│   │   │       └── page.tsx          # Dynamic user profiles
│   │   ├── product/
│   │   │   └── [id]/
│   │   │       └── page.tsx          # Dynamic product pages
│   │   ├── category/
│   │   │   └── [name]/
│   │   │       └── page.tsx          # Dynamic category pages
│   │   ├── layout.tsx                # Root layout
│   │   └── page.tsx                  # Home page
│   └── components/
│       ├── Header.tsx                # Navigation header
│       ├── Footer.tsx                # Footer component
│       ├── LoginForm.tsx             # Login form component
│       ├── SignupForm.tsx            # Signup form component
│       └── ForgotPassword.tsx        # Password reset component
```

## 🏠 Home Page (`/`)

The main landing page that introduces the platform and showcases featured products.

### Code Structure:
```typescript
// src/app/page.tsx
export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <h1>Social E-Commerce Marketplace</h1>
        <p>Buy and sell products with the power of social media...</p>
        
        {/* Call-to-Action Buttons */}
        <div>
          <a href="/signup">Get Started</a>
          <a href="/login">Login</a>
        </div>

        {/* Features Section */}
        <section>
          <h2>Why Choose Our Platform?</h2>
          <div>
            <div>🛍️ Easy Shopping</div>
            <div>📱 Social Integration</div>
            <div>🔒 Secure Transactions</div>
          </div>
        </section>

        {/* Categories Section */}
        <section>
          <h2>Shop by Category</h2>
          <div>
            <div>📱 Electronics</div>
            <div>👗 Fashion</div>
            {/* ... more categories */}
          </div>
        </section>

        {/* Featured Products */}
        <section>
          <h2>Featured Products</h2>
          <div>
            <div>
              <h3>📱 Smartphone</h3>
              <p>Price: $599</p>
              <a href="/product/1">View Details</a>
            </div>
            {/* ... more products */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
```

## 🔐 Authentication System

### Login Page (`/login`)

```typescript
// src/app/login/page.tsx
export default function LoginPage() {
  return (
    <div>
      <main>
        <h1>Login to Your Account</h1>
        <p>Welcome back! Please sign in to your account to continue.</p>
        
        <section>
          <h2>Sign In</h2>
          <LoginForm />
        </section>
        
        <section>
          <h3>Don't have an account?</h3>
          <a href="/signup">Create Account</a>
        </section>
        
        <section>
          <h3>Forgot Password?</h3>
          <a href="/login/forgot-password">Reset Password</a>
        </section>
      </main>
    </div>
  );
}
```

### LoginForm Component

```typescript
// src/components/LoginForm.tsx
"use client"; // Marks this as a client component (runs in browser)

import { useState } from 'react'; // React hook for state management

export default function LoginForm() {
  // State variables to store form data
  const [email, setEmail] = useState('');        // Email input value
  const [password, setPassword] = useState('');  // Password input value
  
  // Form submission handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevents page refresh
    console.log("Email:", email);     // Logs email to console
    console.log("Password:", password); // Logs password to console
  };

  return (
    <form onSubmit={handleSubmit}> {/* Form with submit handler */}
      <label>Email</label>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} // Updates state on input change
      />

      <label>Password</label>
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} // Updates state on input change
      />
      
      <button type="submit">Login</button>
    </form>
  );
}
```

**Key Concepts:**
- **"use client"** - Tells Next.js this component needs to run in the browser
- **useState** - React hook for managing component state
- **Controlled Components** - Form inputs controlled by React state
- **Event Handlers** - Functions that respond to user interactions

### SignupForm Component

```typescript
// src/components/SignupForm.tsx
"use client";

import { useState } from "react";

export default function SignupForm() {
  // Multiple state variables for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return; // Stops form submission
    }

    // Logs form data to console
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      
      {/* Name field */}
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required // HTML5 validation
        />
      </div>

      {/* Email field */}
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      {/* Password fields */}
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>

      <button type="submit">Create Account</button>
    </form>
  );
}
```

**Key Features:**
- **Password Confirmation** - Validates that passwords match
- **HTML5 Validation** - Uses `required` and `type="email"` attributes
- **Form Validation** - Custom validation logic before submission
- **Multiple State Variables** - Manages multiple form fields independently

### ForgotPassword Component

```typescript
// src/components/ForgotPassword.tsx
"use client";

import { useState } from 'react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); // Boolean state for UI control

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Reset password for email:", email);
    setIsSubmitted(true); // Changes component state
  };

  // Conditional rendering based on submission state
  if (isSubmitted) {
    return (
      <div>
        <h2>Check Your Email</h2>
        <p>We've sent a password reset link to {email}</p>
        <a href="/login">Back to Login</a>
      </div>
    );
  }

  return (
    <div>
      <h2>Forgot Password</h2>
      <p>Enter your email address and we'll send you a link to reset your password.</p>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email Address:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <button type="submit">Send Reset Link</button>
      </form>
      
      <div>
        <a href="/login">Back to Login</a>
      </div>
    </div>
  );
}
```

**Key Features:**
- **Conditional Rendering** - Shows different UI based on submission state
- **Boolean State** - Uses `isSubmitted` to control component display
- **Form Accessibility** - Uses `htmlFor` and `id` for proper label association
- **User Feedback** - Provides clear confirmation message after submission

## 🛍️ Product System

### Dynamic Product Pages (`/product/[id]`)

```typescript
// src/app/product/[id]/page.tsx
// Next.js 15 async params pattern
export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: productId } = await params; // Extract ID from URL
  
  // Sample product database (in real app, this would come from API/database)
  const products: { [key: string]: any } = {
    "1": {
      name: "Smartphone",
      emoji: "📱",
      price: "$599",
      description: "Latest model smartphone with advanced features...",
      seller: "TechStore Pro",
      category: "Electronics"
    },
    "2": {
      name: "Designer Dress",
      emoji: "👗",
      price: "$199",
      description: "Elegant evening dress perfect for special occasions...",
      seller: "Fashion Boutique",
      category: "Fashion"
    },
    // More products...
  };

  // Find product by ID or show "not found" message
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
          {/* Product Information */}
          <div>
            <h2>{product.emoji} {product.name}</h2>
            <p><strong>Price:</strong> {product.price}</p>
            <p><strong>Seller:</strong> {product.seller}</p>
            <p><strong>Category:</strong> {product.category}</p>
          </div>
          
          {/* Product Description */}
          <div>
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>
          
          {/* Action Buttons */}
          <div>
            <button>Add to Cart</button>
            <button>Buy Now</button>
            <button>Contact Seller</button>
          </div>
        </section>
        
        {/* Related Products */}
        <section>
          <h3>Related Products</h3>
          <div>
            <a href="/product/1">📱 Smartphone</a>
            <a href="/product/2">👗 Designer Dress</a>
            <a href="/product/3">🏠 Home Decor</a>
          </div>
        </section>
      </main>
    </div>
  );
}
```

**Key Concepts:**
- **Dynamic Routing** - URL parameter `[id]` becomes `productId`
- **Async Params** - Next.js 15 requires awaiting the params object
- **Data Lookup** - Finds product by ID from sample data
- **Fallback Handling** - Shows "not found" for invalid IDs
- **Rich Product Data** - Multiple fields for comprehensive product display

### Dynamic Category Pages (`/category/[name]`)

```typescript
// src/app/category/[name]/page.tsx
export default async function CategoryPage({ params }: { params: Promise<{ name: string }> }) {
  const { name: categoryName } = await params;
  
  // Category data with nested products
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
    // More categories...
  };

  // Find category or show "not found"
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
            {/* Map through products in category */}
            {category.products.map((product: any) => (
              <div key={product.id}>
                <h3>{product.emoji} {product.name}</h3>
                <p>Price: {product.price}</p>
                <a href={`/product/${product.id}`}>View Details</a>
              </div>
            ))}
          </div>
        </section>
        
        {/* Navigation to other categories */}
        <section>
          <h3>Browse Other Categories</h3>
          <div>
            <a href="/category/electronics">📱 Electronics</a>
            <a href="/category/fashion">👗 Fashion</a>
            {/* More category links */}
          </div>
        </section>
      </main>
    </div>
  );
}
```

**Key Features:**
- **Nested Data Structure** - Categories contain arrays of products
- **Array Mapping** - Uses `.map()` to render multiple products
- **Dynamic Links** - Creates product links using template literals
- **Key Props** - React requires unique keys for mapped elements
- **Category Navigation** - Easy browsing between different categories

## 👤 User Profiles

### Dynamic User Pages (`/user/[id]`)

```typescript
// src/app/user/[id]/page.tsx
export default async function UserPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: userId } = await params;
  
  // User database with profile information
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

  // Find user or show "unknown user"
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
        
        {/* User Information Section */}
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
        
        {/* User's Products Section */}
        <section>
          <h2>User's Products</h2>
          <div>
            <div>
              <h3>📱 Smartphone</h3>
              <p>Latest model smartphone with advanced features</p>
              <p>Price: $599</p>
              <a href="/product/1">View Details</a>
            </div>
            {/* More products */}
          </div>
        </section>
        
        {/* User Reviews Section */}
        <section>
          <h2>User Reviews</h2>
          <div>
            <div>
              <h3>Great Seller! ⭐⭐⭐⭐⭐</h3>
              <p>"Excellent communication and fast shipping. Highly recommended!"</p>
              <p>- Buyer123</p>
            </div>
            {/* More reviews */}
          </div>
        </section>
        
        {/* Social Interaction Section */}
        <section>
          <h2>Contact User</h2>
          <div>
            <button>Send Message</button>
            <button>Follow User</button>
            <button>Report User</button>
          </div>
        </section>
      </main>
    </div>
  );
}
```

**Key Features:**
- **Rich User Data** - Multiple fields for comprehensive profiles
- **Social Features** - Ratings, reviews, and interaction buttons
- **Product Association** - Shows products sold by the user
- **Contact Options** - Multiple ways to interact with users
- **Profile Completeness** - Shows member since, location, and sales history

## 🧩 Components

### Header Component

```typescript
// src/components/Header.tsx
export default function Header() {
  return (
    <header>
      <a href="/">Home</a> {/* Logo/Brand link */}

      {/* Main Navigation */}
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </nav>

      {/* Authentication Links */}
      <div>
        <a href="/login">Login</a>
        <a href="/signup">Signup</a>
      </div>
    </header>
  );
}
```

**Structure:**
- **Semantic HTML** - Uses `<header>` and `<nav>` tags
- **Navigation Links** - Standard navigation menu
- **Auth Section** - Login/signup links
- **No State** - Pure presentational component

### Footer Component

```typescript
// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer>
      {/* Brand Information */}
      <div>
        <h2>Social E-Commerce Marketplace</h2>
        <p>Buy and Sell products with social media.</p>
      </div>

      {/* Quick Links */}
      <div>
        <h3>Quick Links</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      {/* Social Media Buttons */}
      <div>
        <h3>Follow Us</h3>
        <div>
          <button type="button" aria-label="Website">🌐</button>
          <button type="button" aria-label="Twitter">🐦</button>
          <button type="button" aria-label="Facebook">📘</button>
          <button type="button" aria-label="Instagram">📸</button>
        </div>
      </div>

      {/* Copyright */}
      <div>
        <p>© {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
      </div>
    </footer>
  );
}
```

**Key Features:**
- **Accessibility** - Uses `aria-label` for screen readers
- **Dynamic Year** - `new Date().getFullYear()` updates automatically
- **Semantic Structure** - Organized sections with clear headings
- **Social Integration** - Social media buttons for engagement

## 🔄 Dynamic Routing

The application uses Next.js 15's App Router with dynamic routes for SEO-friendly URLs:

### Route Structure:
- **Static Routes**: `/`, `/login`, `/signup`
- **Dynamic Routes**: 
  - `/user/[id]` → User profiles (e.g., `/user/1`, `/user/2`)
  - `/product/[id]` → Product details (e.g., `/product/1`, `/product/2`)
  - `/category/[name]` → Category pages (e.g., `/category/electronics`)

### Next.js 15 Compatibility:
All dynamic routes use the new async params pattern:

```typescript
// Before (Next.js 14)
export default function Page({ params }: { params: { id: string } }) {
  const productId = params.id;
}

// After (Next.js 15)
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id: productId } = await params;
}
```

### Route Parameter Extraction:
```typescript
// URL: /product/123
// params = { id: "123" }
const { id: productId } = await params;
// productId = "123"

// URL: /category/electronics  
// params = { name: "electronics" }
const { name: categoryName } = await params;
// categoryName = "electronics"
```

**Why This Change:**
- **Performance** - Better streaming and rendering performance
- **Consistency** - Aligns with other async patterns in Next.js
- **Future-Proof** - Prepares for more advanced async features

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rahulxiao/Social-E-Commerce-Marketplace-frontend.git
   cd Social-E-Commerce-Marketplace-frontend
   ```

2. **Install dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Features Overview

### 🔐 Authentication
- **Login/Logout** - User authentication with email/password
- **Signup** - New user registration with validation
- **Password Reset** - Forgot password functionality
- **Form Validation** - Client-side validation for all forms

### 🛍️ E-Commerce
- **Product Catalog** - Browse all available products
- **Product Details** - Individual product pages with descriptions
- **Category Filtering** - Browse products by category
- **Search & Filter** - Find specific products easily

### 👥 Social Features
- **User Profiles** - Individual user pages with ratings
- **User Reviews** - Customer feedback and ratings system
- **Follow Users** - Social networking functionality
- **Messaging** - Direct communication between users

### 🎨 Design
- **Responsive Design** - Works on all device sizes
- **No CSS Framework** - Uses browser default styles
- **Semantic HTML** - Accessible and SEO-friendly markup
- **Clean UI** - Simple, intuitive user interface

## 🔧 Technical Implementation

### State Management
- **React Hooks** - useState for local component state
- **Form State** - Controlled components for form inputs
- **Client Components** - "use client" directive for interactive components

#### React Hooks Usage:
```typescript
// Single state variable
const [email, setEmail] = useState('');

// Multiple state variables
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

// Boolean state for UI control
const [isSubmitted, setIsSubmitted] = useState(false);
```

#### Event Handling:
```typescript
// Input change handler
onChange={(e) => setEmail(e.target.value)}

// Form submission handler
onSubmit={handleSubmit}

// Button click handler
onClick={() => setIsLogin(true)}
```

### Data Flow
- **Static Data** - Sample data stored in component files
- **Dynamic Routing** - URL parameters for dynamic content
- **Component Props** - Data passed between components

#### Static Data Storage:
```typescript
// Products database (in component file)
const products: { [key: string]: any } = {
  "1": { name: "Smartphone", price: "$599", ... },
  "2": { name: "Designer Dress", price: "$199", ... },
  // ...
};

// Categories database
const categories: { [key: string]: any } = {
  "electronics": { name: "Electronics", products: [...] },
  "fashion": { name: "Fashion", products: [...] },
  // ...
};
```

#### Dynamic Data Retrieval:
```typescript
// Get product by ID
const product = products[productId] || fallbackProduct;

// Get category by name
const category = categories[categoryName] || fallbackCategory;
```

### Performance
- **Server Components** - Default for static content
- **Client Components** - Only where interactivity is needed
- **Dynamic Imports** - Lazy loading for better performance

#### Server vs Client Components:
```typescript
// Server Component (default) - Renders on server
export default function Header() {
  return <header>...</header>;
}

// Client Component - Renders in browser
"use client";
export default function LoginForm() {
  const [email, setEmail] = useState('');
  // ...
}
```

**Benefits:**
- **Server Components** - Better performance, SEO, initial load
- **Client Components** - Interactivity, state management, user events

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms
- **Netlify** - Static site hosting
- **AWS Amplify** - Full-stack hosting
- **Railway** - Container-based deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- React team for the component library
- All contributors and supporters

---

**Note**: This is a frontend-only implementation. For a production application, you would need to integrate with a backend API for data persistence, user authentication, and real-time features.