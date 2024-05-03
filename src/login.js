import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap

const LoginPage = () => {
  return (
    <div className="login-container" style={{ height: '100vh', display: 'flex' }}>
      {/* Left side with image */}
      <div
        className="image-side"
        style={{
          flex: 1,
          backgroundImage: 'url(https://i.pinimg.com/564x/b9/2c/55/b92c5560709fc3b68a9c82873804a3a4.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Intentionally left empty */}
      </div>

      {/* Right side with form */}
      <div
        className="form-side"
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
        }}
      >
        <div
          className="login-form"
          style={{
            width: '80%',
            background: 'white',
            padding: '2rem',
            borderRadius: '10px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          }}
        >
          <h2 className="text-center">Login</h2>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMe"
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember me
              </label>
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Login
            </button>
          </form>
          <hr />
          <p className="text-center">Or sign in with</p>
          <div className="social-login" style={{ textAlign: 'center', marginTop: '1rem' }}>
            <button className="btn btn-danger">Google</button>
            <button className="btn btn-secondary">GitHub</button>
            <button className="btn btn-info">Phone</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
