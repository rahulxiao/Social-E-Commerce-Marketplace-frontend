import LoginForm from "@/components/LoginForm";

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
          <p>Create a new account to start buying and selling on our platform.</p>
          <a href="/signup">Create Account</a>
        </section>
        
        <section>
          <h3>Forgot Password?</h3>
          <p>If you've forgotten your password, we can help you reset it.</p>
          <a href="/login/forgot-password">Reset Password</a>
        </section>
        
        <section>
          <h3>Why Login?</h3>
          <ul>
            <li>Access your personal dashboard</li>
            <li>Manage your products and listings</li>
            <li>Track your orders and sales</li>
            <li>Connect with other users</li>
            <li>Get personalized recommendations</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
