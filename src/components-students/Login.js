import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const hardcodedPassword = 'test123'; // Hardcoded password for testing

  // Cualquier email va a entrar
  const handleEmailPasswordLogin = (e) => {
    e.preventDefault();

    // Passwordnecesario para entrar
    if (password === hardcodedPassword) {
      console.log('Login Successful with Email/Password');
      alert('Login successful');
    } else {
      console.log('Incorrect email or password');
      alert('Incorrect email or password');
    }
  };

  // GoogleSSO
  const handleGoogleLogin = (response) => {
    if (response.credential) {
      
      console.log('Google login successful! User data:', response);
      alert('Google login successful');
    } else {
      console.log('Google login failed');
      alert('Google login failed');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      
      {/* Email/Password Login Form */}
      <form onSubmit={handleEmailPasswordLogin}>
        <div>
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter your email" 
            required 
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Enter your password" 
            required 
          />
        </div>
        <button type="submit">Login with Email/Password</button>
      </form>

      {/* Google Login Button */}
      <GoogleOAuthProvider clientId="748466444748-kr738h7tobmfrqdfbq4cem5cia78ak36.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={handleGoogleLogin}
          onError={() => console.log('Login Failed')}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default Login;