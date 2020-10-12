import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">AMDB</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
      </form>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav navbar-right ml-auto">
          <Link className="nav-item nav-link active" to="/auth">Sign In</Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
