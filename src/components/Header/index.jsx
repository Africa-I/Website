import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'gatsby';
import styled from 'styled-components';
import './index.scss';
import Sidebar from './Sidebar';

const Logo = styled.img`
  width: 75px;
  height: 75px;
  padding-top: 30px;
`;

const Header = () => {
  const [open, setOpen] = useState(false);
  const logoUrl = useSelector((state) => state.ui.logoUrl);

  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <div className="nav-wrapper__container">
            <Link to="/" className="brand-logo">
              <Logo src={logoUrl} alt="Africa I" className="nav-wrapper__logo" />
            </Link>
            <ul
              id="nav-mobile"
              className="right hide-on-med-and-down"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
            <button
              className="toggle"
              onClick={() => setOpen(!open)}
              type="button"
            >
              <div className="line" />
              <div className="line" />
              <div className="line" />
            </button>
          </div>
        </div>
      </nav>
      <Sidebar open={open} setOpen={setOpen} />
    </>
  );
};

export default Header;