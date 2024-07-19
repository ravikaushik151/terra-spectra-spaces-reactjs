import React from 'react';
import { Navigation} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";


import Header from "../componets/Header";
import Footer from "../componets/Footer";
import Servicesection from '../componets/Servicesection';


import banner1 from '../assets/img/slider/banner1.webp';
import banner2 from '../assets/img/slider/banner2.webp';
import banner3 from '../assets/img/slider/banner3.webp';

import project1 from '../assets/img/project1.jpg';
import project2 from '../assets/img/project2.jpg';
import project3 from '../assets/img/project3.jpg';
import project4 from '../assets/img/project4.jpg';
import project5 from '../assets/img/project5.jpg';

import quoteIcon from '../assets/img/icon/quote.svg';

import PriceLockingIcon from '../assets/img/icon/Price-locking.png';
import InnovativeDesignsIcon from '../assets/img/icon/Innovative-Designs.png';
import ClientCenteredApproachIcon from '../assets/img/icon/Client-Centered-Approach.png';
import TimelyDeliveryIcon from '../assets/img/icon/Timely-Delivery.png';
import EnvironmentalResponsibilityIcon from '../assets/img/icon/Environmental-Responsibility.png';
import QualityCraftsmanshipIcon from '../assets/img/icon/Quality-Craftsmanship.png';
import EnergyEfficiencyIcon from '../assets/img/icon/Energy-Efficiency.png';
import SustainableMaterialsIcon from '../assets/img/icon/Sustainable-Materials.png';
import CustomizedSolutionsIcon from '../assets/img/icon/Customized-Solutions.png';

function Home() {  
  return (
    <>
    <Header />
    <main className="fix">
        <section className="slider__area">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop={true} // Enable looping
                modules={[Navigation]} // Include Navigation module
                autoplay={{ delay: 5000 }} // Example autoplay configuration
                navigation={{
                nextEl: '.button-swiper-next',
                prevEl: '.button-swiper-prev',
                }}
                className="swiper-container slider_baner__active slider_baner_home6"
            >
                <SwiperSlide className="swiper-slide slider__single">
                    <img className="img-fluid w-100" src={banner1} alt="Banner 1" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide slider__single">
                    <img className="img-fluid w-100" src={banner2} alt="Banner 2" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide slider__single">
                    <img className="img-fluid w-100" src={banner3} alt="Banner 3" />
                </SwiperSlide>
            </Swiper>

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
        </section>
        <section style={{
                background: '#042c5d',
                padding: '80px 0',
                backgroundPosition: 'center',
                backgroundSize: 'auto',
                backgroundRepeat: 'no-repeat'
              }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="section-title white-title text-center mb-50">
                            <span className="sub-title">OUR UNIQUENESS</span>
                            <h2 className="title tg-element-title">
                                Distinctive Features That Define Us
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <img src={require("../assets/img/services.png")} className="img-fluid" alt="Services" />
                    </div>
                </div>
            </div>
        </section>
        <Servicesection />
        <section className="services__area-three services__bg-three" style={{ background: '#042c5d' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="section-title white-title text-center mb-50 tg-heading-subheading animation-style3">
                            <span className="sub-title">WHY CHOOSE US</span>
                            <h2 className="title tg-element-title">
                                Your Trusted Partner in Construction Excellence
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center gutter-24">
                    <div className="col-lg-4 col-md-6">
                        <div className="services__item-three">
                            <div className="services__item-top">
                                <div className="services__icon-three">
                                    <img src={PriceLockingIcon} alt="Price Locking" />
                                </div>
                                <div className="services__item-top-title">
                                    <h2 className="title"><a to="#">Price locking</a></h2>
                                </div>
                            </div>
                            <div className="services__content-three d-none">
                                <p>
                                    Mauris utenim sitamet lacus ornar eary ullamcperson Praesent
                                    plaacera treat neque eu purus rhoncu
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="services__item-three">
                            <div className="services__item-top">
                                <div className="services__icon-three">
                                    <img src={InnovativeDesignsIcon} alt="Innovative Designs" />
                                </div>
                                <div className="services__top-title">
                                    <h2 className="title"><a to="#">Innovative Designs</a></h2>
                                </div>
                            </div>
                            <div className="services__content-three d-none">
                                <p>
                                    Mauris utenim sitamet lacus ornar eary ullamcperson Praesent
                                    plaacera treat neque eu purus rhoncu
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="services__item-three">
                            <div className="services__item-top">
                                <div className="services__icon-three">
                                    <img src={ClientCenteredApproachIcon} alt="Client-Centered Approach" />
                                </div>
                                <div className="services__top-title">
                                    <h2 className="title">
                                        <a to="#">Client-Centered Approach</a>
                                    </h2>
                                </div>
                            </div>
                            <div className="services__content-three d-none">
                                <p>
                                    Mauris utenim sitamet lacus ornar eary ullamcperson Praesent
                                    plaacera treat neque eu purus rhoncu
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="services__item-three">
                            <div className="services__item-top">
                                <div className="services__icon-three">
                                    <img src={TimelyDeliveryIcon} alt="Timely Delivery" />
                                </div>
                                <div className="services__top-title">
                                    <h2 className="title"><a to="#">Timely Delivery</a></h2>
                                </div>
                            </div>
                            <div className="services__content-three d-none">
                                <p>
                                    Mauris utenim sitamet lacus ornar eary ullamcperson Praesent
                                    plaacera treat neque eu purus rhoncu
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="services__item-three">
                            <div className="services__item-top">
                                <div className="services__icon-three">
                                    <img src={EnvironmentalResponsibilityIcon} alt="Environmental Responsibility" />
                                </div>
                                <div className="services__top-title">
                                    <h2 className="title">
                                        <a to="#">Environmental Responsibility</a>
                                    </h2>
                                </div>
                            </div>
                            <div className="services__content-three d-none">
                                <p>
                                    Mauris utenim sitamet lacus ornar eary ullamcperson Praesent
                                    plaacera treat neque eu purus rhoncu
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="services__item-three">
                            <div className="services__item-top">
                                <div className="services__icon-three">
                                    <img src={QualityCraftsmanshipIcon} alt="Quality Craftsmanship" />
                                </div>
                                <div className="services__top-title">
                                    <h2 className="title"><a to="#">Quality Craftsmanship</a></h2>
                                </div>
                            </div>
                            <div className="services__content-three d-none">
                                <p>
                                    Mauris utenim sitamet lacus ornar eary ullamcperson Praesent
                                    plaacera treat neque eu purus rhoncu
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="services__item-three">
                            <div className="services__item-top">
                                <div className="services__icon-three">
                                    <img src={EnergyEfficiencyIcon} alt="Energy Efficiency" />
                                </div>
                                <div className="services__item-top-title">
                                    <h2 className="title"><a to="#">Energy Efficiency</a></h2>
                                </div>
                            </div>
                            <div className="services__content-three d-none">
                                <p>
                                    Mauris utenim sitamet lacus ornar eary ullamcperson Praesent
                                    plaacera treat neque eu purus rhoncu
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="services__item-three">
                            <div className="services__item-top">
                                <div className="services__icon-three">
                                    <img src={SustainableMaterialsIcon} alt="Sustainable Materials" />
                                </div>
                                <div className="services__top-title">
                                    <h2 className="title"><a to="#">Sustainable Materials</a></h2>
                                </div>
                            </div>
                            <div className="services__content-three d-none">
                                <p>
                                    Mauris utenim sitamet lacus ornar eary ullamcperson Praesent
                                    plaacera treat neque eu purus rhoncu
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="services__item-three">
                            <div className="services__item-top">
                                <div className="services__icon-three">
                                    <img src={CustomizedSolutionsIcon} alt="Customized Solutions" />
                                </div>
                                <div className="services__top-title">
                                    <h2 className="title"><a to="#">Customized Solutions</a></h2>
                                </div>
                            </div>
                            <div className="services__content-three d-none">
                                <p>
                                    Mauris utenim sitamet lacus ornar eary ullamcperson Praesent
                                    plaacera treat neque eu purus rhoncu
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="project__area-three project__bg-three" data-background={require("../assets/img/bg/h3_project_bg.jpg")}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-12 col-lg-12">
                        <div className="section-title text-center mb-50 tg-heading-subheading animation-style3">
                            <span className="sub-title">OUR PROJECTS</span>
                            <h2 className="title tg-element-title">
                                Explore Our Ongoing Journey in Construction
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Swiper 
                        spaceBetween={0} 
                        slidesPerView={1} 
                        loop={true}
                        modules={[Navigation]} // Include Navigation module
                        navigation={{
                            nextEl: '.project-button-next',
                            prevEl: '.project-button-prev',
                        }} 
                        className="swiper-container project-active">
                            <SwiperSlide className="swiper-slide">
                                <div className="project__item-three shine-animate-item">
                                    <div className="project__content-three">
                                        <h2 className="title">
                                            <Link to="/gallery#project1">Project 1</Link>
                                        </h2>
                                        <p>Location</p>
                                        <Link className="btn btn-two" to="/gallery#project1">See Details</Link>
                                    </div>
                                    <div className="project__thumb-three shine-animate">
                                        <img src={project1} alt="Project 1" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="project__item-three shine-animate-item">
                                    <div className="project__content-three">
                                        <h2 className="title">
                                            <Link to="/gallery#project2">Project 2</Link>
                                        </h2>
                                        <p>Location</p>
                                        <Link className="btn btn-two" to="/gallery#project2">See Details</Link>
                                    </div>
                                    <div className="project__thumb-three shine-animate">
                                        <img src={project2} alt="Project 2" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="project__item-three shine-animate-item">
                                    <div className="project__content-three">
                                        <h2 className="title">
                                            <Link to="/gallery#project3">Project 3</Link>
                                        </h2>
                                        <p>Location</p>
                                        <Link className="btn btn-two" to="/gallery#project3">See Details</Link>
                                    </div>
                                    <div className="project__thumb-three shine-animate">
                                        <img src={project3} alt="Project 3" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="project__item-three shine-animate-item">
                                    <div className="project__content-three">
                                        <h2 className="title">
                                            <Link to="/gallery#project4">Project 4</Link>
                                        </h2>
                                        <p>Location</p>
                                        <Link className="btn btn-two" to="/gallery#project4">See Details</Link>
                                    </div>
                                    <div className="project__thumb-three shine-animate">
                                        <img src={project4} alt="Project 4" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="project__item-three shine-animate-item">
                                    <div className="project__content-three">
                                        <h2 className="title">
                                            <Link to="/gallery#project5">Project 5</Link>
                                        </h2>
                                        <p>Location</p>
                                        <Link className="btn btn-two" to="/gallery#project5">See Details</Link>
                                    </div>
                                    <div className="project__thumb-three shine-animate">
                                        <img src={project5} alt="Project 5" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                        <div className="project__nav-wrap">
                            <div className="project-button-prev">
                                <i className="flaticon-right-arrow"></i>
                            </div>
                            <div className="project-button-next">
                                <i className="flaticon-right-arrow"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project__shape-wrap-three">
                <img src={require("../assets/img/project/h3_project_shape01.png")} alt="" data-aos="fade-left" data-aos-delay="400" />
                <img src={require("../assets/img/project/h3_project_shape02.png")} alt="" className="alltuchtopdown" />
            </div>
        </section>
        <section  className="brand-area">            
            <div className="container">               
                <div className="marquee">
                    <div>
                        <img src={require("../assets/img/brand/drfix.webp")} alt="" />
                        <img src={require("../assets/img/brand/kajaria.webp")} alt="" />
                        <img src={require("../assets/img/brand/acc.webp")} alt="" />
                        <img src={require("../assets/img/brand/kamdhenu.webp")} alt="" />
                        <img src={require("../assets/img/brand/kajaria.webp")} alt="" />
                        <img src={require("../assets/img/brand/drfix.webp")} alt="" />
                        <img src={require("../assets/img/brand/kajaria.webp")} alt="" />
                        <img src={require("../assets/img/brand/acc.webp")} alt="" />
                        <img src={require("../assets/img/brand/kamdhenu.webp")} alt="" />
                        <img src={require("../assets/img/brand/kajaria.webp")} alt="" />
                    </div>
                </div>
            </div>
        </section>
        <section className="testimonial__area-two">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="section-title white-title text-center mb-50 tg-heading-subheading animation-style3">
                            <span className="sub-title">Clients Testimonial</span>
                            <h2 className="title">Words of Appreciation and Trust</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center gutter-24">
                    <div className="col-12">
                        <Swiper 
                        spaceBetween={30} 
                        slidesPerView={3} 
                        navigation={{
                            nextEl: '.testimonials-button-next',
                            prevEl: '.testimonials-button-prev',
                        }} loop={true} 
                         modules={[Navigation]} 
                        className="swiper-container testiminials-active">
                            <SwiperSlide className="swiper-slide">
                                <div className="testimonial__item-two">
                                    <div className="testimonial__info-two">
                                        <h2 className="title">Ramesh M</h2>
                                    </div>
                                    <div className="testimonial__rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <p>
                                        Working with Terra Spectra Spaces was a game-changer for our project. Their attention to detail, commitment to quality, and timely delivery were impressive. Our new office space in Bangalore is a testament to their excellence.
                                    </p>
                                    <div className="icon">
                                        <img src={quoteIcon} alt="Quote Icon" />
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="swiper-slide">
                                <div className="testimonial__item-two">
                                    <div className="testimonial__info-two">
                                        <h2 className="title">Priyanka S</h2>
                                    </div>
                                    <div className="testimonial__rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <p>
                                        I highly recommend Terra Spectra Spaces company for any building needs. They transformed our vision into reality with exceptional professionalism and dedication. Our new home is everything we hoped for and more.
                                    </p>
                                    <div className="icon">
                                        <img src={quoteIcon} alt="Quote Icon" />
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="swiper-slide">
                                <div className="testimonial__item-two">
                                    <div className="testimonial__info-two">
                                        <h2 className="title">Arjun M</h2>
                                    </div>
                                    <div className="testimonial__rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <p>
                                        From start to finish, the team was incredible. They communicated clearly, adhered to timelines, and ensured the highest quality standards. Our commercial building in Bangalore stands out thanks to their expertise.
                                    </p>
                                    <div className="icon">
                                        <img src={quoteIcon} alt="Quote Icon" />
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="swiper-slide">
                                <div className="testimonial__item-two">
                                    <div className="testimonial__info-two">
                                        <h2 className="title">Ashish Jain</h2>
                                    </div>
                                    <div className="testimonial__rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <p>
                                        Choosing Terra Spectra Spaces for our construction project was the best decision we made. Their innovative solutions and sustainable practices exceeded our expectations. Our eco-friendly Villa is now a model for others.
                                    </p>
                                    <div className="icon">
                                        <img src={quoteIcon} alt="Quote Icon" />
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="swiper-slide">
                                <div className="testimonial__item-two">
                                    <div className="testimonial__info-two">
                                        <h2 className="title">Vikram R</h2>
                                    </div>
                                    <div className="testimonial__rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <p>
                                        Their commitment to excellence is evident in every aspect of their work. The construction team delivered a stunning and functional space for us. We couldn't be happier with the result. Good luck to Terra Spectra Spaces Team
                                    </p>
                                    <div className="icon">
                                        <img src={quoteIcon} alt="Quote Icon" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className="testimonial__shape-two">
                <img src={require("../assets/img/images/h2_testimonial_shape.png")} alt="" data-aos="fade-up" data-aos-delay="400" />
            </div>
        </section>
        <section className="blog__post-area-four">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-12">
                        <div className="section-title text-center mb-50 tg-heading-subheading animation-style3">
                            <span className="sub-title">OUR BLOGS</span>
                            <h2 className="title tg-element-title">
                                Insights, Ideas, and Inspiration
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-4 col-lg-6 col-md-10">
                        <div className="blog-post-item blog__post-three shine-animate-item">
                            <div className="blog-post-thumb blog__post-thumb-three">
                                <Link className="shine-animate" to="#"><img src={require("../assets/img/blog/blog1.jpg")} alt="" /></Link>
                            </div>
                            <div className="blog-post-content blog__post-content-three">
                                <h2 className="title">
                                    <Link to="#">The Advantages of Hiring a Professional Building
                                        Construction Company</Link>
                                </h2>
                                <div className="blog-post-meta mb-20">
                                    <ul className="list-wrap">
                                        <li><i className="fas fa-calendar-alt"></i>July 15, 2024</li>
                                    </ul>
                                </div>
                                <Link className="btn" to="#">Continue Reading</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-10">
                        <div className="blog-post-item blog__post-three shine-animate-item">
                            <div className="blog-post-thumb blog__post-thumb-three">
                                <Link className="shine-animate" to="#"><img src={require("../assets/img/blog/blog2.jpg")} alt="" /></Link>
                            </div>
                            <div className="blog-post-content blog__post-content-three">
                                <h2 className="title">
                                    <Link to="#">10 Key Factors to Make Your Home Construction
                                        Eco-Friendly</Link>
                                </h2>
                                <div className="blog-post-meta mb-20">
                                    <ul className="list-wrap">
                                        <li><i className="fas fa-calendar-alt"></i>July 5, 2024</li>
                                    </ul>
                                </div>
                                <Link className="btn" to="#">Continue Reading</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-10">
                        <div className="blog-post-item blog__post-three shine-animate-item">
                            <div className="blog-post-thumb blog__post-thumb-three">
                                <Link className="shine-animate" to="#"><img src={require("../assets/img/blog/blog3.jpg")} alt="" /></Link>
                            </div>
                            <div className="blog-post-content blog__post-content-three">
                                <h2 className="title">
                                    <Link to="#">Things You Need to Know Before Building Your Dream
                                        Home</Link>
                                </h2>
                                <div className="blog-post-meta mb-20">
                                    <ul className="list-wrap">
                                        <li><i className="fas fa-calendar-alt"></i>July 1, 2024</li>
                                    </ul>
                                </div>
                                <Link className="btn" to="#">Continue Reading</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="faqs__area-six" style={{ background: '#042c5d' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-12">
                        <div className="section-title white-title text-center mb-50 tg-heading-subheading animation-style3">
                            <span className="sub-title">Frequently asked questions</span>
                            <h2 className="title tg-element-title">Featured News And Insights</h2>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-10">
                        <div className="box-faq-right">
                            <div className="block-faqs">
                                <div className="accordion wow fadeInUp" id="accordionFAQ">
                                    <div className="accordion-item">
                                        <h5 className="accordion-header" id="headingOne">
                                            <button className="accordion-button text-heading-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                What types of homes do you build?
                                            </button>
                                        </h5>
                                        <div className="accordion-collapse collapse" id="collapseOne" aria-labelledby="headingOne" data-bs-parent="#accordionFAQ">
                                            <div className="accordion-body">
                                                We specialize in building a wide range of homes,
                                                including single-family homes, townhouses, condominiums,
                                                and custom-built homes tailored to your specific needs.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h5 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button text-heading-5 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Do you provide design services?
                                            </button>
                                        </h5>
                                        <div className="accordion-collapse collapse" id="collapseTwo" aria-labelledby="headingTwo" data-bs-parent="#accordionFAQ">
                                            <div className="accordion-body">
                                                Yes, our team of experienced architects and designers
                                                offers comprehensive design services to help you create
                                                the perfect home that reflects your style and
                                                preferences.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h5 className="accordion-header" id="headingThree">
                                            <button className="accordion-button text-heading-5 collapsed text-heading-5 type=" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                How long does the construction process take?
                                            </button>
                                        </h5>
                                        <div className="accordion-collapse collapse" id="collapseThree" aria-labelledby="headingThree" data-bs-parent="#accordionFAQ">
                                            <div className="accordion-body">
                                                The duration of the construction process depends on
                                                various factors such as the size and complexity of the
                                                project. However, we strive to complete projects in a
                                                timely manner without compromising on quality.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h5 className="accordion-header" id="headingfour">
                                            <button className="accordion-button text-heading-5 collapsed text-heading-5 type=" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapseThree">
                                                What measures do you take to ensure quality
                                                construction?
                                            </button>
                                        </h5>
                                        <div className="accordion-collapse collapse" id="collapsefour" aria-labelledby="headingfour" data-bs-parent="#accordionFAQ">
                                            <div className="accordion-body">
                                                We employ strict quality control measures at every stage
                                                of the construction process, using high-quality
                                                materials and working with skilled craftsmen to ensure
                                                that your home is built to the highest standards.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h5 className="accordion-header" id="headingfive">
                                            <button className="accordion-button text-heading-5 collapsed text-heading-5 type=" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapseThree">
                                                How many projects have been delivered?
                                            </button>
                                        </h5>
                                        <div className="accordion-collapse collapse" id="collapsefive" aria-labelledby="headingfive" data-bs-parent="#accordionFAQ">
                                            <div className="accordion-body">
                                                Terra Spectra Spaces has delivered over 20+ Projects,
                                                across 2 cities in Bangalore and Mysore.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h5 className="accordion-header" id="headingsix">
                                            <button className="accordion-button text-heading-5 collapsed text-heading-5 type=" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapseThree">
                                                Do you offer warranty protection?
                                            </button>
                                        </h5>
                                        <div className="accordion-collapse collapse" id="collapsesix" aria-labelledby="headingsix" data-bs-parent="#accordionFAQ">
                                            <div className="accordion-body">
                                                Yes, we stand behind the quality of our workmanship and
                                                materials and offer warranty protection to give you
                                                peace of mind after your home is completed.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h5 className="accordion-header" id="headingseven">
                                            <button className="accordion-button text-heading-5 collapsed text-heading-5 type=" data-bs-toggle="collapse" data-bs-target="#collapseseven" aria-expanded="false" aria-controls="collapseThree">
                                                How do I get started with Terra Spectra Spaces?
                                            </button>
                                        </h5>
                                        <div className="accordion-collapse collapse" id="collapseseven" aria-labelledby="headingseven" data-bs-parent="#accordionFAQ">
                                            <div className="accordion-body">
                                                Simply reach out to us through our website or contact us
                                                directly to schedule a consultation. We'll discuss your
                                                project goals, timeline, and budget to create a
                                                customized plan for your home.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h5 className="accordion-header" id="headingeight">
                                            <button className="accordion-button text-heading-5 collapsed text-heading-5 type=" data-bs-toggle="collapse" data-bs-target="#collapseeight" aria-expanded="false" aria-controls="collapseThree">
                                                Can I visit your previous projects?
                                            </button>
                                        </h5>
                                        <div className="accordion-collapse collapse" id="collapseeight" aria-labelledby="headingeight" data-bs-parent="#accordionFAQ">
                                            <div className="accordion-body">
                                                Yes, we're proud of our portfolio of completed projects,
                                                and we welcome you to visit them to see the quality of
                                                our work first hand.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h5 className="accordion-header" id="headingnine">
                                            <button className="accordion-button text-heading-5 collapsed text-heading-5 type=" data-bs-toggle="collapse" data-bs-target="#collapsenine" aria-expanded="false" aria-controls="collapseThree">
                                                What sets Terra Spectra Spaces apart from other
                                                construction companies?
                                            </button>
                                        </h5>
                                        <div className="accordion-collapse collapse" id="collapsenine" aria-labelledby="headingnine" data-bs-parent="#accordionFAQ">
                                            <div className="accordion-body">
                                                Our commitment to quality, craftsmanship, and customer
                                                satisfaction sets us apart. We prioritize communication,
                                                transparency, and attention to detail to ensure that
                                                every aspect of your home exceeds your expectations.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <Footer />
    </>
  )
}

export default Home