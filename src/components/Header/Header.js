import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

export default function Header() {
  return (
    <header className='header wrapper'>
      <div className="container header__container padding">
        <div className="logo">
          <span className="logo__text">
            <span className="logo__no-part">No</span>
            thing.
          </span>
        </div>
        <ul className="linkset header__linkset">
          <li className="linkset__list-item header__linkset-list-item">
            <Link to='/' className="linkset__link header__linkset-link">Home</Link>
          </li>
          <li className="linkset__list-item header__linkset-list-item">
            <Link to='/result' className="linkset__link header__linkset-link">Result</Link>
          </li>
          <li className="linkset__list-item header__linkset-list-item">
            <Link to='/about' className="linkset__link header__linkset-link">About</Link>
          </li>
          <li className="linkset__list-item header__linkset-list-item">
            <Link to='/contacts' className="linkset__link header__linkset-link">Contact us</Link>
          </li>
          {/* <li className="linkset__list-item header__linkset-list-item">
            <Link to='/homepage' className="linkset__link header__linkset-link"></Link>
          </li> */}
        </ul>
      </div>
    </header>
  )
}
