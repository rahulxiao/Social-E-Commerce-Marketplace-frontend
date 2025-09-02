import ForgotPassword from "@/components/ForgotPassword";

export default function ForgotPasswordPage() {
  return (
    <div>
      <main>
        <h1>Reset Your Password</h1>
        <p>Don't worry, we'll help you get back into your account.</p>
        
        <section>
          <ForgotPassword />
        </section>
        
        <section>
          <h3>Need Help?</h3>
          <p>If you're still having trouble accessing your account, please contact our support team.</p>
          <a href="/contact">Contact Support</a>
        </section>
        
        <section>
          <h3>Remember Your Password?</h3>
          <p>If you remember your password, you can sign in directly.</p>
          <a href="/login">Sign In</a>
        </section>
      </main>
    </div>
  );
}
