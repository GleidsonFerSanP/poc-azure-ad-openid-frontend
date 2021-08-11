import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link  className="nav-link" to="/about">About</Link>
                  </li>
                </ul>
                <form className="d-flex">
                  <Link  className="btn btn-info" to="/login">Logout</Link>
                </form>
              </div>
            </div>
          </nav>
    )
}

export default NavBar;