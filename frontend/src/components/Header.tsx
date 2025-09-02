export default function Header() {
  return (
    <header>
      <a href="/">Home</a>

      {/* Navigation */}
      <nav>
        <a href="/">Home</a>
        <a href ="/about">About</a>
        <a href ="services">Services</a>
        <a href ="contact">Contact</a>
      </nav>

    {/* Login and Signup */}
    <div>
        <button>Login</button>
        <button>Signup</button>
    </div>

    </header>
  );
}