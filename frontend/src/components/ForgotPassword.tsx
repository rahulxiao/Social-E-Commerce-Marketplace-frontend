"use client";

import { useState } from 'react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Reset password for email:", email);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div>
        <h2>Check Your Email</h2>
        <p>We've sent a password reset link to {email}</p>
        <p>Please check your email and click the link to reset your password.</p>
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
