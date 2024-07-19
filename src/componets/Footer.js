import React from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/img/logo/logo.png';
import faceIcon from '../assets/img/face.png';
import twitterIcon from '../assets/img/tw.png';
import instaIcon from '../assets/img/insta.png';
import footerShape1 from '../assets/img/images/footer_shape01.png';
import footerShape2 from '../assets/img/images/footer_shape02.png';
import footerShape3 from '../assets/img/images/footer_shape03.png';

export default function Footer() {
  return (
    <footer>
      <div className="footer-area">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="footer-widget">
                  <div className="fw-logo mb-25">
                    <Link to="/">
                      <img src={logo} alt="Logo" />
                    </Link>
                  </div>
                  <div className="footer-content">
                    <p>Felis consquat magnis fames sagittis ultrices plasodales porttitor quisque ultrice tempor turpis.</p>
                    <div className="footer-social">
                      <ul className="list-wrap">
                        <li><Link to="javascript:void(0)"><img src={faceIcon} alt="Facebook" /></Link></li>
                        <li><Link to="javascript:void(0)"><img src={twitterIcon} alt="Twitter" /></Link></li>
                        <li><Link to="javascript:void(0)"><img src={instaIcon} alt="Instagram" /></Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="footer-widget">
                  <h4 className="fw-title">Information</h4>
                  <div className="footer-info-list">
                    <ul className="list-wrap">
                      <li>
                        <div className="icon">
                          <i className="flaticon-phone-call"></i>
                        </div>
                        <div className="content">
                          <Link to="tel:+919845653533">+91 9845653533</Link>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="flaticon-envelope"></i>
                        </div>
                        <div className="content">
                          <Link to="mailto:sheela@terraspectraspaces.com">sheela@terraspectraspaces.com</Link>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="flaticon-pin"></i>
                        </div>
                        <div className="content">
                          <p>Level 15 Concord Tower 1 UB City, Vittal Mallya Road, Bangalore, Karnataka, 560001</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="footer-widget">
                  <h4 className="fw-title">Quick Links</h4>
                  <div className="footer-link-list">
                    <ul className="list-wrap">
                      <li className="">
                        <Link to="/about">About Us</Link>
                      </li>
                      <li className="">
                        <Link to="/service">Our Services</Link>
                      </li>
                      <li className="">
                        <Link to="/gallery">Gallery</Link>
                      </li>
                      <li className="">
                        <Link to="/blogs">Blogs</Link>
                      </li>
                      <li className="">
                        <Link to="/career">Careers</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="footer-widget">
                  <h4 className="fw-title">Get In Touch</h4>
                  <form id="contact-form" action="#" method="POST">
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <input type="text" className="form-control" name="name" placeholder="Name" />
                      </div>
                      <div className="col-md-6 mb-3">
                        <input type="email" className="form-control" name="email" placeholder="Email" />
                      </div>
                      <div className="col-md-12 mb-3">
                        <input type="number" className="form-control" name="phone" placeholder="Phone" />
                      </div>
                      <div className="col-md-12 mb-3">
                        <textarea name="message" className="form-control" placeholder="Message"></textarea>
                      </div>
                    </div>
                    <button type="submit" className="btn mx-auto d-block">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 text-center">
                <div className="copyright-text">
                  <p>© All Copyright 2024 by TerraSpectra</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-shape">
          <img src={footerShape1} alt="Footer Shape" data-aos="fade-right" data-aos-delay="400" />
          <img src={footerShape2} alt="Footer Shape" data-aos="fade-left" data-aos-delay="400" />
          <img src={footerShape3} alt="Footer Shape" data-parallax='{"x" : 100 , "y" : -100 }' />
        </div>
      </div>
    </footer>
  );
}
