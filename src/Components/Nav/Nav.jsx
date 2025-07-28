import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg position-fixed top-0 start-0 w-100 z-3">
      <div className="container py-3 text-uppercase fw-bold">
        <Link className="navbar-brand" to={'/'}>Start Framework</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item ms-lg-3">
              <NavLink className="nav-link px-2" to={'/about'}>About</NavLink>
            </li>
            <li className="nav-item ms-lg-3">
              <NavLink className="nav-link px-2" to={'/portfolio'}>Portfolio</NavLink>
            </li>
            <li className="nav-item ms-lg-3">
              <NavLink className="nav-link px-2" to={'/contact'}>Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav