
import React, { useState } from "react";
import { Link } from "react-router-dom"; // If using React Router for navigation

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  // Function to handle form submission
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Validate email and password (dummy validation for demonstration)
    if (email === "user@example.com" && password === "password") {
      // Simulate successful login
      console.log("Login successful!");
      // Redirect to another page
      window.location.href = '/one';
    } else {
      // Display error message for incorrect credentials
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-form">
        <h2 className="text-center mb-4">Login</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block mt-4">
            Login
          </button>
        </form>
        <div className="text-center mt-5">
          <p className="mb-0">Don't have an account? <Link to="/signup">Sign up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
