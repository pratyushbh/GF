import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <p className="footer-title">PARADISE</p>
        <div className="email">
          <input
            className="email-input"
            type="email"
            placeholder="Your Email Address"
          ></input>
          <button className="arrow-btn">
            <i className="arrow right"></i>
          </button>
        </div>
      </div>
    </>
  );
}
