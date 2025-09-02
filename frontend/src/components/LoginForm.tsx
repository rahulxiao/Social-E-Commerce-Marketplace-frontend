"use client";

import { useState } from 'react';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] =useState('');
    
    const handleSubmit = (e: React.FormEvent) => {e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
    }
  return (
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input 
      type="email" 
      value={email} 
      onChange={(e)=>setEmail(e.target.value)} />

      <label>Password</label>
      <input 
      type="password" 
      value={password} 
      onChange={(e)=>setPassword(e.target.value)} />
      
      <button type="submit">Login</button>
    </form>
  );
}
