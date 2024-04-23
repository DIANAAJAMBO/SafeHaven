import React from 'react'

const Adminlogin = () => {
    return (
<div id="body-of-admin">
  <div className="title">Safehaven Admin Login</div>
  <div className="admin-container">
    <div className="login-card">
      <span id="instruction-text">Please fill in your unique admin login details below</span>
     <form>
        <div className="form-group">
          <label id="admin-login-label" for="email">Email</label>
          <input type="email" id="email" className="form-control" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label id="admin-login-label" for="password">Password</label>
          <input type="password" id="password" className="form-control" placeholder="Password" />
        </div>
        <div className="remember-me-parent">
          <div>       
          <input type="checkbox"  id="remember-me-checkbox"/>
          <label id="admin-login-label" for="remember-me">Remember me</label>
        </div>
          <a href="#" className="password">Forgot password?</a>
        </div>
        <button type="submit" className="admin-btn">Sign In</button>
      </form>
    </div>
  </div>

  </div>
    );
    }
export default Adminlogin; 
