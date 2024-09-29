import React from "react";
import { Link } from "react-router-dom";
// import userSvg from "../Assets/images/user.svg";
// import cartSvg from "../Assets/images/cart.svg";
// import Logo from "../Assets/images/kft_logo.png";

function Navbar() {
  return (
    <>
      <nav
        className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
        arial-label="Furni navigation bar"
      >
        <div className="container">
          <a className="navbar-brand" href="index.html">
            Logo<span>.</span>
            {/* <img
              src={Logo}
              alt="logo"
              className="img-fluid"
              style={{ width: "8%" }}
            /> */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsFurni"
            aria-controls="navbarsFurni"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarsFurni">
            <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
              <li>
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/about-kft-foods">
                  Our Story
                </Link>
              </li>
              {/* <li>
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li> */}
              <li className={`nav-item`}>
                <Link className="nav-link" to="/contact-us">
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              <li>
                <Link className="nav-link" to="#">
                  <img src={userSvg} alt="User" />
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/cart">
                  <img src={cartSvg} alt="Cart" />
                </Link>
              </li>
            </ul> */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
