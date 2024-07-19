import React from 'react';
import { Link } from "react-router-dom";

function Servicesection() {
  return (
    <>
        <section className="our_team__area-six">
            <div className="container">
                <div className="section-title mb-30 tg-heading-subheading animation-style3 text-center">
                    <span className="sub-title text-capitalize">OUR SERVICES</span>
                    <h2 className="title tg-element-title">
                        Building Dreams with Expertise and Care
                    </h2>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card-team-area-six">
                            <div className="card-image">
                                <img src={require("../assets/img/images/smart-construction.jpg")} />
                            </div>
                            <div className="card-info">
                                <div className="card-title">
                                    <Link to="smart-construction">CONSTRUCTION</Link>
                                </div>
                                <div className="card-desc">
                                    At Terra Spectra Spaces, we redefine the art of building with our Smart Construction approach, combining cutting-edge technology....
                                </div>
                                <Link className="btn" to="smart-construction">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card-team-area-six">
                            <div className="card-image">
                                <img src={require("../assets/img/images/smart-home-automation.jpg")} />
                            </div>
                            <div className="card-info">
                                <div className="card-title">
                                    <Link to="smart-automation">SMART AUTOMATION</Link>
                                </div>
                                <div className="card-desc">
                                    At Terra Spectra Spaces, we revolutionize the way you live and interact with your home. Our Smart Automation Service integrates cutting-edge....
                                </div>
                                <Link className="btn" to="smart-automation">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card-team-area-six">
                            <div className="card-image">
                                <img src={require("../assets/img/images/sustainble-home.jpg")} />
                            </div>
                            <div className="card-info">
                                <div className="card-title">
                                    <Link to="sustainable building">SUSTAINABLE BUILDING</Link>
                                </div>
                                <div className="card-desc">
                                    At Terra Spectra Spaces, we're committed to building a better future through Sustainable Construction practices that minimize....
                                </div>
                                <Link className="btn" to="sustainable building">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card-team-area-six">
                            <div className="card-image">
                                <img src={require("../assets/img/images/smart-interior.jpg")} />
                            </div>
                            <div className="card-info">
                                <div className="card-title">
                                    <Link to="smart-interiors">SMART INTERIORS</Link>
                                </div>
                                <div className="card-desc">
                                    At Terra Spectra Spaces, we revolutionize the way you live and interact with your home. Our Smart Interiors Service integrates....
                                </div>
                                <Link className="btn" to="smart-interiors">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card-team-area-six">
                            <div className="card-image">
                                <img src={require("../assets/img/images/smart-design.jpg")} />
                            </div>
                            <div className="card-info">
                                <div className="card-title">
                                    <Link to="smart-design">SMART DESIGN </Link>
                                </div>
                                <div className="card-desc">
                                    At Terra Spectra Spaces, we redefine the art of building with our SMART DESIGN approach, combining innovative technology....
                                </div>
                                <Link className="btn" to="smart-design">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card-team-area-six">
                            <div className="card-image">
                                <img src={require("../assets/img/images/smart-support.jpg")} />
                            </div>
                            <div className="card-info">
                                <div className="card-title">
                                    <Link to="smart-support">SMART SUPPORT</Link>
                                </div>
                                <div className="card-desc">
                                    At Terra Spectra Spaces, we understand the importance of support and assistance in ensuring successful project delivery....
                                </div>
                                <Link className="btn" to="smart-support">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Servicesection