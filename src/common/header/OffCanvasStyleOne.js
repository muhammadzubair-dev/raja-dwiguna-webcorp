import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

function OffCanvasStyleOne() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <div className="side-content-button">
            <Link to="#" variant="primary" className="navSidebar-button" onClick={handleShow}>
                <span className="decor"></span>
                <span className="decor"></span>
                <span className="decor"></span>
            </Link>

            <Offcanvas show={show} onHide={handleClose} className="xs-sidebar-group info-group info-sidebar isActive">
                <div className="xs-overlay xs-bg-black"></div>
                    <div className="xs-sidebar-widget">
                        <div className="sidebar-widget-container">
                            <Offcanvas.Header closeButton className="close-side-widget">
                            </Offcanvas.Header>
                            <div className="sidebar-textwidget">
                                <div className="sidebar-info-contents">
                                    <div className="content-inner">
                                        <div className="logo">
                                            <Link to="/"><img src="/assets/images/resources/logo-1.png" alt="" /></Link>
                                        </div>
                                        <div className="content-box">
                                            <h4>About Us</h4>
                                            <div className="inner-text">
                                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                                                    roots in a piece of classical Latin literature from 45 BC, making it over
                                                    2000 years old.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="form-inner">
                                            <h4>Get a free quote</h4>
                                            <form action="index.html" method="post">
                                                <div className="form-group">
                                                    <input type="text" name="name" placeholder="Name" required="" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="email" name="email" placeholder="Email" required="" />
                                                </div>
                                                <div className="form-group">
                                                    <textarea name="message" placeholder="Message..."></textarea>
                                                </div>
                                                <div className="form-group message-btn">
                                                    <button className="thm-btn" data-text="Submit Now +" type="submit" data-loading-text="Please wait...">Submit Now</button>
                                                </div>
                                            </form>
                                        </div>

                                        <div className="sidebar-contact-info">
                                            <h4>Contact Info</h4>
                                            <ul>
                                                <li>
                                                    <span className=" icon-maps-and-flags"></span> 88 broklyn street, New York
                                                </li>
                                                <li>
                                                    <span className="icon-phone-call-1"></span>
                                                    <a href="tel:123456789">+1 555-9990-153</a>
                                                </li>
                                                <li>
                                                    <span className="icon-email-1"></span>
                                                    <a href="mailto:info@example.com">info@example.com</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="thm-social-link1">
                                            <ul className="social-box">
                                                <li className="facebook">
                                                    <a href="https://facebook.com"><i className="icon-facebook-app-symbol" aria-hidden="true"></i></a>
                                                </li>
                                                <li className="twitter">
                                                    <a href="https://twitter.com"><i className="icon-twitter" aria-hidden="true"></i></a>
                                                </li>
                                                <li className="linkedin">
                                                    <a href="https://linkedin.com"><i className="icon-linkedin" aria-hidden="true"></i></a>
                                                </li>
                                                <li className="gplus">
                                                    <a href="https://google.com"><i className="icon-google-plus-logo" aria-hidden="true"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </Offcanvas>
        </div>
    </>
  );
}

export default OffCanvasStyleOne;