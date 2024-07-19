import React from 'react';
import { Link } from "react-router-dom";
import Header from "../componets/Header";
import Footer from "../componets/Footer";

function Home() {
  return (
    <>
    <Header />
    <main class="fix">
        <section className="slider__area">
            <div className="swiper-container slider_baner__active slider_baner_home6">
                <div className="swiper-wrapper">
                    <div className="swiper-slide slider__single">
                        <img className="img-fluid w-100" src={require("../assets/img/slider/banner1.webp")} alt="Banner 1" />
                    </div>
                    <div className="swiper-slide slider__single">
                        <img className="img-fluid w-100" src={require("../assets/img/slider/banner2.webp")} alt="Banner 2" />
                    </div>
                    <div className="swiper-slide slider__single">
                        <img className="img-fluid w-100" src={require("../assets/img/slider/banner3.webp")} alt="Banner 3" />
                    </div>
                </div>
            </div>
            <div className="box-button-slider-bottom">
                <div className="container">
                    <div className="testimonial__nav-four">
                        <div className="testimonial-two-button-prev button-swiper-prev">
                            <i className="flaticon-right-arrow"></i>
                        </div>
                        <div className="testimonial-two-button-next button-swiper-next">
                            <i className="flaticon-right-arrow"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="features__area">
            <div className="container-fluid p-0">
                <div className="row justify-content-center mt-4 mb-3">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <h2 className="title tg-element-title">Overview</h2>
                        </div>
                    </div>
                </div>
                <div className="features__item-wrap">
                    <div className="row g-0">
                        <div className="col-lg-3 col-md-6 col-6">
                            <div className="features__item">
                                <div className="features__icon">
                                    <img src={require("../assets/img/icon/On-Going-Projects.png")} alt="On Going Projects" />
                                </div>
                                <div className="features__content">
                                    <h4 className="title"><Link to="#">On Going Projects</Link></h4>
                                    <p>10+</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-6">
                            <div className="features__item">
                                <div className="features__icon">
                                    <img src={require("../assets/img/icon/Completed-Projects.png")} alt="Completed Projects" />
                                </div>
                                <div className="features__content">
                                    <h4 className="title"><Link to="#">Completed Projects</Link></h4>
                                    <p>500+</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-6">
                            <div className="features__item">
                                <div className="features__icon">
                                    <img src={require("../assets/img/icon/Year-of-Experience.png")} alt="Year of Experience" />
                                </div>
                                <div className="features__content">
                                    <h4 className="title"><Link to="#">Year of Experience</Link></h4>
                                    <p>25+ years</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-6">
                            <div className="features__item">
                                <div className="features__icon">
                                    <img src={require("../assets/img/icon/Sq.ft.-Built.png")} alt="Sq.ft. Built" />
                                </div>
                                <div className="features__content">
                                    <h4 className="title"><Link to="#">Sq.ft. Built</Link></h4>
                                    <p>20,000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="about__area-two about__bg" data-background="../assets/img/bg/about_bg.jpg">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-8">
                        <div className="about__img-wrap-two">
                            <img src={require("../assets/img/ABOUT.jpg")} alt="About" />
                            <div className="shape">
                                <img src={require("../assets/img/images/h2_about_img_shape.png")} alt="Shape" className="alltuchtopdown" />
                            </div>
                            <div className="experience__box-two">
                                <div className="experience__shape">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82 295" fill="none" preserveAspectRatio="none">
                                        <path d="M70.7685 260.479C77.6405 257.127 82 250.15 82 242.503L82 44.8205C82 36.5032 76.8524 29.054 69.0724 26.1128L0 0V295L70.7685 260.479Z" fill="currentcolor" />
                                    </svg>
                                </div>
                                <div className="experience__content d-none">
                                    <h4 className="title">25</h4>
                                    <p>Years Of <br /> Experiences</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about__content-two">
                            <div className="section-title mb-20 tg-heading-subheading animation-style3">
                                <span className="sub-title">About</span>
                                <h2 className="title tg-element-title">We Provide Brilliant Ideas & Adding Success To Your Business Motion.</h2>
                            </div>
                            <p>
                                Terra Spectra Spaces excels in delivering comprehensive interior design solutions for residential, luxury residences, and commercial ventures. Our strong presence in the Indian market is a result of our expertise in crafting opulent, elegant interiors that stand the test of time, boasting exceptional design and functionality while reflecting the unique preferences and desires of our clients. Crucially, we prioritize our client's budgets and adhere to established timelines.
                            </p>
                            <div className="about-bottom">
                                <Link className="btn btn-two" to="#">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about__shape-wrap-two">
                <img src={require("../assets/img/images/h2_about_shape01.png")} alt="Shape 1" data-parallax='{"x" : -80 , "y" : 80 , "rotateZ":80}' />
                <img src={require("../assets/img/images/h2_about_shape02.png")} alt="Shape 2" data-parallax='{"y" : 100 }' />
                <img src={require("../assets/img/images/h2_about_shape03.png")} alt="Shape 3" data-aos="fade-left" data-aos-delay="400" />
            </div>
        </section>
    </main>
    <Footer />
    </>
  )
}

export default Home