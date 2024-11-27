import React from "react";
import { Link } from "react-scroll"; // Install this package
import { Link as RouterLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./login";
const Navbar = () => {
  return (
    <div>
      <div className="navbarcontain">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <a
              href="/"
              className="d-inline-flex link-body-emphasis text-decoration-none"
            >
              <svg
                className="bi"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              >
                {/* <use xlink:href="#bootstrap"></use> */}
              </svg>
            </a>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="nav-link px-2 link-secondary"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="our-story"
                smooth={true}
                duration={500}
                className="nav-link px-2"
              >
                Our Story
              </Link>
            </li>
            <li>
              <Link
                to="contributors"
                smooth={true}
                duration={500}
                className="nav-link px-2"
              >
                Contributors
              </Link>
            </li>
            <li>
              <Link
                to="contact-us"
                smooth={true}
                duration={500}
                className="nav-link px-2"
              >
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="col-md-3 text-end mx-5">
            <RouterLink to="/login">
              <button type="button" className="btn btn-outline-primary me-2">
                Login
              </button>
            </RouterLink>
          </div>
          {/* <div className="App">
          <button type="button" className="btn btn-outline-primary me-2">
                <a href="/login">Login</a>
              </button>
          </div> */}
        </header>
      </div>
    </div>
  );
};

export default Navbar;
