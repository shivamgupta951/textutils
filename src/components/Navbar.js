import React from 'react';
// ✅ Using NavLink for internal routing
import { NavLink } from 'react-router-dom';

export default function Navbar(props) {
  const Updatemode = () => {
    return props.lightmodebutton === "true";
  };

  const mystyle = {
    width: "500px",
    fontSize: "12px",
    marginRight: "80px",
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg ${
          Updatemode() ? "navbar-light bg-warning" : "navbar-dark bg-dark"
        }`}
        style={Updatemode() ? { backgroundColor: "#ef6228" } : {}}
      >
        <div className="container-fluid">
          {/* ✅ Replaced <a> with <NavLink> to prevent page reload */}
          <NavLink className="navbar-brand" to="/">
            <strong>{props.title}</strong>
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" end>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  {props.about}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contactus">
                  Contact Us
                </NavLink>
              </li>
            </ul>

            <form className="d-flex" role="search">
              <div
                className={`${Updatemode() ? "text-dark" : "text-white"}`}
                style={mystyle}
              >
                <strong>
                  TextUtils is a simple and powerful tool to quickly manipulate your
                  text. Convert case, remove extra spaces, count
                  words/characters, and more — all in one place!
                </strong>
              </div>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ width: "300px" }}
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
