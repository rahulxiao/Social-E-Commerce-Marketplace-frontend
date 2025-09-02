export default function LoginLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div>
        <header>Login Header</header>
        <main>{children}</main>
        <footer>Login Footer</footer>
      </div>
    );
  }
  