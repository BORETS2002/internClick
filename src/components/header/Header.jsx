import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <header className='header'>
      <div className='header__Logo'>
        <Link to='/' className='header__logo-link'>
          Logo
        </Link>
      </div>
      <nav>
        <ul className='header__list'>
          <li className='header__items'>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? "active" : "header__links"
              }
            >
              navbar1
            </NavLink>
          </li>
          <li className='header__items'>
            <NavLink
              to='/navbar2'
              className={({ isActive, header__links }) =>
                header__links
                  ? "header__links"
                  : isActive
                  ? "active"
                  : "header__links"
              }
            >
              navbar2
            </NavLink>
          </li>
          <li className='header__items'>
            <NavLink
              to='/navbar3'
              className={({ isActive, header__links }) =>
                header__links
                  ? "header__links"
                  : isActive
                  ? "active"
                  : "header__links"
              }
            >
              navbar3
            </NavLink>
          </li>
          <li className='header__items'>
            <NavLink
              to='/navbar4'
              className={({ isActive, header__links }) =>
                header__links
                  ? "header__links"
                  : isActive
                  ? "active"
                  : "header__links"
              }
            >
              navbar4
            </NavLink>
          </li>
          <li className='header__items'>
            <NavLink
              to='/navbar5'
              className={({ isActive, header__links }) =>
                header__links
                  ? "header__links"
                  : isActive
                  ? "active"
                  : "header__links"
              }
            >
              navbar5
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
