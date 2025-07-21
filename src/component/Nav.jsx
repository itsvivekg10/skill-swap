import React from "react";
import { Share2 } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const navStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
    position: "sticky",
    top: 0,
    zIndex: 50,
  };

  const containerStyle = {
    maxWidth: "1120px",
    margin: "0 auto",
    padding: "0 1rem",
    height: "64px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const logoBoxStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  };

  const iconBoxStyle = {
    width: "32px",
    height: "32px",
    background: "linear-gradient(to right, #9333ea, #2563eb)",
    borderRadius: "0.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const brandStyle = {
    fontSize: "1.30rem",
    fontWeight: "800",
    background: "linear-gradient(to right, #9333ea, #2563eb)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const buttonContainer = {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
  };

  const loginBtn = {
    padding: "0.5rem 1rem",
    borderRadius: "0.375rem",
    color: "#374151", // text-gray-700
    background: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize:"1rem"
  };

  const getStartedBtn = {
    width:"130px",
    height:"40px",
    padding: "0.5rem 1rem",
    borderRadius: "0.375rem",
    color: "#fff",
    fontWeight: 500,
    border: "none",
    background: "linear-gradient(to right, #9333ea, #2563eb)",
    cursor: "pointer",
    fontSize:"1rem"
  };

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        {/* Logo */}
        <div style={logoBoxStyle}>
          <div style={iconBoxStyle}>
            <Share2 size={20} color="#fff" />
          </div>
          <span style={brandStyle}>SkillSwap</span>
        </div>

        {/* Nav Buttons */}
        <div style={buttonContainer}>
          <NavLink to="/login">
            <button style={loginBtn}>Login</button>
          </NavLink>
          <Link to="/login">
            <button style={getStartedBtn}>Get Started</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
