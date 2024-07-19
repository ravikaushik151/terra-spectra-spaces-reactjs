import React from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react';
import logo from '../assets/img/logo/logo.png';
import faceIcon from '../assets/img/face.png';
import twitterIcon from '../assets/img/tw.png';
import instaIcon from '../assets/img/insta.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="tg-header__style-five">
      <div className="tg-header__top">
        <div className="container custom-container">
          <div className="row">
            <div className="col-lg-8">
              <ul className="tg-header__top-info left-side list-wrap">
                <li><i className="flaticon-phone-call"></i><Link to="tel:+919845653533">+91 9845653533</Link></li>
                <li><i className="flaticon-pin"></i>Level 15 Concord Tower 1 UB City, Vittal Mallya Road, Bangalore</li>
              </ul>
            </div>
            <div className="col-lg-4">
              <ul className="tg-header__top-right list-wrap">
                <li><i className="flaticon-envelope"></i><Link to="mailto:sheela@terraspectraspaces.com">sheela@terraspectraspaces.com</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="sticky-header" className="tg-header__area tg-header__area-five">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tgmenu__wrap">
                <nav className="tgmenu__nav">
                  <div className="logo">
                    <Link to="/">                      
                        <img src={logo} alt="Logo" />
                    </Link>
                  </div>
                  <div className={`tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex ${menuOpen ? 'open' : ''}`}>
                    <ul className="navigation">
                      <li className="active"><Link to="/">Home</Link></li>
                      <li><Link to="/about">About Us</Link></li>
                      <li><Link to="/service">Our Services</Link></li>
                      <li><Link to="/gallery">Gallery</Link></li>
                      <li><Link to="/blogs">Blogs</Link></li>
                      <li><Link to="/career">Careers</Link></li>
                      <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                  </div>
                  <div className="mobile-nav-toggler mobile-nav-toggler-two" onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none">
                      <path d="M0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2Z" fill="currentcolor" />
                      <path d="M0 9C0 7.89543 0.895431 7 2 7C3.10457 7 4 7.89543 4 9C4 10.1046 3.10457 11 2 11C0.895431 11 0 10.1046 0 9Z" fill="currentcolor" />
                      <path d="M0 16C0 14.8954 0.895431 14 2 14C3.10457 14 4 14.8954 4 16C4 17.1046 3.10457 18 2 18C0.895431 18 0 17.1046 0 16Z" fill="currentcolor" />
                      <path d="M7 2C7 0.895431 7.89543 0 9 0C10.1046 0 11 0.895431 11 2C11 3.10457 10.1046 4 9 4C7.89543 4 7 3.10457 7 2Z" fill="currentcolor" />
                      <path d="M7 9C7 7.89543 7.89543 7 9 7C10.1046 7 11 7.89543 11 9C11 10.1046 10.1046 11 9 11C7.89543 11 7 10.1046 7 9Z" fill="currentcolor" />
                      <path d="M7 16C7 14.8954 7.89543 14 9 14C10.1046 14 11 14.8954 11 16C11 17.1046 10.1046 18 9 18C7.89543 18 7 17.1046 7 16Z" fill="currentcolor" />
                      <path d="M14 2C14 0.895431 14.8954 0 16 0C17.1046 0 18 0.895431 18 2C18 3.10457 17.1046 4 16 4C14.8954 4 14 3.10457 14 2Z" fill="currentcolor" />
                      <path d="M14 9C14 7.89543 14.8954 7 16 7C17.1046 7 18 7.89543 18 9C18 10.1046 17.1046 11 16 11C14.8954 11 14 10.1046 14 9Z" fill="currentcolor" />
                      <path d="M14 16C14 14.8954 14.8954 14 16 14C17.1046 14 18 14.8954 18 16C18 17.1046 17.1046 18 16 18C14.8954 18 14 17.1046 14 16Z" fill="currentcolor" />
                    </svg>
                  </div>
                </nav>
              </div>
              <div className={`tgmobile__menu ${menuOpen ? 'open' : ''}`}>
                <nav className="tgmobile__menu-box">
                  <div className="close-btn" onClick={toggleMenu}><i className="fas fa-times"></i></div>
                  <div className="nav-logo">
                    <Link to="/">
                      <Link>
                        <img src={logo} alt="Logo" />
                      </Link>
                    </Link>
                  </div>
                  <div className="tgmobile__menu-outer">
                    {/* Here Menu Will Come Automatically Via Javascript / Same Menu as in Header */}
                  </div>
                  <div className="tgmobile__menu-bottom">
                    <div className="tg-header__social">
                      <ul className="list-wrap">
                        <li><Link to="javascript:void(0)"><img src={faceIcon} alt="Facebook" /></Link></li>
                        <li><Link to="javascript:void(0)"><img src={twitterIcon} alt="Twitter" /></Link></li>
                        <li><Link to="javascript:void(0)"><img src={instaIcon} alt="Instagram" /></Link></li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="menu-backdrop" onClick={toggleMenu}></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
