import './Sign.css'
import Logo from '../HomePage/Logo/Logo.jsx'
import { Link } from 'react-router-dom'
import React, { useState } from "react";

const Signup = () => {
  const [activeTab, setActiveTab] = useState("signup");

  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleSignupChange = (e) => {
    const { name, value } = e.target;

    setSignupData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLoginChange = (e) => {
    const { name, value, type, checked } = e.target;

    setLoginData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSignup = (e) => {
    e.preventDefault();

    // Replace this with your actual authentication logic
    window.location.href = "/dashboard";
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Replace this with your actual authentication logic
    window.location.href = "/dashboard";
  };

  return (
    <div className="auth-page">

      {/* ================= LEFT VISUAL ================= */}
      <div className="auth-visual">

        <Link to="/" className="auth-visual__logo"><Logo onDark size="md" /></Link>



        <div className="auth-stats">

          <div className="hero-stat">
            <b style={{ color: "#fff" }}>100+</b>
            <span>PATHWAYS</span>
          </div>

          <div className="hero-stat">
            <b style={{ color: "#fff" }}>100+</b>
            <span>VERIFIED CREDENTIALS</span>
          </div>

          <div className="hero-stat">
            <b style={{ color: "#fff" }}>100+</b>
            <span>CAREER ROLES MAPPED</span>
          </div>

        </div>
      </div>


      {/* ================= RIGHT FORM ================= */}
      <div className="auth-form-side">

        <div className="auth-box">

          <Link to="/" className="auth-box__logo"><Logo size="md" /></Link>


          {/* ================= TABS ================= */}
          <div className="authtabs">

            <button
              type="button"
              className={`authtab ${
                activeTab === "signup" ? "active" : ""
              }`}
              onClick={() => setActiveTab("signup")}
            >
              Create account
            </button>

            <button
              type="button"
              className={`authtab ${
                activeTab === "login" ? "active" : ""
              }`}
              onClick={() => setActiveTab("login")}
            >
              Log in
            </button>

          </div>


          {/* ================= SIGNUP ================= */}
          {activeTab === "signup" && (
            <div className="auth-panel active">

              <h1>Start learning today</h1>

              <p className="sub">
                Create your free SOLO profile — no credit card, ever.
              </p>

              <form onSubmit={handleSignup}>

                <div className="field">
                  <label htmlFor="signup-name">
                    Full name
                  </label>

                  <input
                    id="signup-name"
                    type="text"
                    name="name"
                    placeholder="Amara Nwosu"
                    value={signupData.name}
                    onChange={handleSignupChange}
                    required
                  />
                </div>


                <div className="field">
                  <label htmlFor="signup-email">
                    Email address
                  </label>

                  <input
                    id="signup-email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={signupData.email}
                    onChange={handleSignupChange}
                    required
                  />
                </div>


                <div className="field">
                  <label htmlFor="signup-password">
                    Password
                  </label>

                  <input
                    id="signup-password"
                    type="password"
                    name="password"
                    placeholder="Create a password"
                    value={signupData.password}
                    onChange={handleSignupChange}
                    required
                  />
                </div>


                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                >
                  Create my account
                </button>

              </form>


              <div className="divider">
                OR CONTINUE WITH
              </div>


              <div className="social-row">

                <button
                  type="button"
                  className="social-btn"
                >
                  Google
                </button>

                <button
                  type="button"
                  className="social-btn"
                >
                  Apple
                </button>

              </div>


              <p className="auth-foot">
                By signing up, you agree to SOLO's Terms &amp; Privacy Policy.
              </p>

            </div>
          )}


          {/* ================= LOGIN ================= */}
          {activeTab === "login" && (
            <div className="auth-panel active">

              <h1>Welcome back</h1>

              <p className="sub">
                Log in to continue your pathway.
              </p>

              <form onSubmit={handleLogin}>

                <div className="field">

                  <label htmlFor="login-email">
                    Email address
                  </label>

                  <input
                    id="login-email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={loginData.email}
                    onChange={handleLoginChange}
                    required
                  />

                </div>


                <div className="field">

                  <label htmlFor="login-password">
                    Password
                  </label>

                  <input
                    id="login-password"
                    type="password"
                    name="password"
                    placeholder="Your password"
                    value={loginData.password}
                    onChange={handleLoginChange}
                    required
                  />

                </div>


                <div className="field-row">

                  <label
                    htmlFor="remember"
                    style={{
                      fontWeight: 400,
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <input
                      id="remember"
                      type="checkbox"
                      name="remember"
                      checked={loginData.remember}
                      onChange={handleLoginChange}
                      style={{ width: "auto" }}
                    />

                    Remember me
                  </label>

                  <a href="#">
                    Forgot password?
                  </a>

                </div>


                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                >
                  Log in
                </button>

              </form>


              <div className="divider">
                OR CONTINUE WITH
              </div>


              <div className="social-row">

                <button
                  type="button"
                  className="social-btn"
                >
                  Google
                </button>

                <button
                  type="button"
                  className="social-btn"
                >
                  Apple
                </button>

              </div>

            </div>
          )}


          {/* ================= BACK HOME ================= */}
          <p className="auth-foot">
            <Link to="/">
              ← Back to home
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
};

export default Signup;