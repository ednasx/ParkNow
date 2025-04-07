import React from 'react';
import "../../styles/login.css";
import userIcon from "../../assets/user-icon.png";
import passwordIcon from "../../assets/password-icon.png";
import { useNavigate } from "react-router-dom";

const LoginUI = ({ username, setUsername, password, setPassword, handleLogin, handleRegister }) => {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <div className="login-background">
      {/* Header */}
      <h1 className="park-now">ParkNow</h1>

      {/* Login Form */}
      <form className="login-form" onSubmit={handleLogin}>
        {/* Username Input */}
        <div className="input-container">
          <img src={userIcon} alt="User Icon" className="user-icon" />
          <input
            className="input-text"
            type="text"
            value={username}
            placeholder="Username"
            aria-label="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {/* Password Input */}
        <div className="input-container">
          <img src={passwordIcon} alt="Password Icon" className="password-icon" />
          <input
            className="input-text"
            type="password"
            value={password}
            placeholder="Password"
            aria-label="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Login Button */}
        <button className="login-button" type="submit">
          Login
        </button>
      </form>

      {/* Register Button */}
      <button className="register-button" onClick={() => navigate("/login/register")}>
        Register
      </button>
    </div>
  );
};

export default LoginUI;