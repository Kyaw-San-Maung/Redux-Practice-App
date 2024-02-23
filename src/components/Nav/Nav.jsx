import React from "react";

export const Nav = () => {
  return (
    <div
      style={{
        display: "flex",
        padding: "1rem",
        backgroundColor: "gray",
        justifyContent: "space-between",
        alignItems: "center",
        color: "black",
      }}
    >
      <ul
        style={{
          display: "flex",
          gap: "40px",
          listStyleType: "none",
        }}
      >
        <li>
          <a href="/" style={{ textDecoration: "none" }}>
            Home
          </a>{" "}
        </li>
        <li>Product</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
      <button>Login</button>
    </div>
  );
};
