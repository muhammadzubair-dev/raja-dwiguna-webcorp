import React from 'react';
import {Link} from "react-router-dom";
import LogoWhite from './LogoWhite';
import Nav from './Nav';
import MobileMenu from './MobileMenu';
import OffCanvasStyleOne from './OffCanvasStyleOne';
import SearchButton from './SearchButton';

const HeaderTwo = () => {
    return (
        <>
            <header className="main-header main-header-one main-header-one--two clearfix">
                <div className="main-header-one__wrapper">

                    <div className="main-header-one__top">
                        <div className="container-fluid">
                            <div className="main-header-one__top-inner">
                                <div className="main-header-one--two__left">
                                    <h4>Well Come To Our Const Construction Company</h4>
                                </div>

                                <div className="main-header-one--two__right">
                                    <div className="social-links">
                                        <div className="title">
                                            <h4>Follow Now</h4>
                                        </div>
                                        <ul>
                                            <li><a href="https://facebook.com"><span className="icon-facebook-app-symbol"></span></a></li>
                                            <li><a href="https://twitter.com"><span className="icon-twitter"></span></a></li>
                                            <li><a href="https://pinterest.com"><span className="icon-pinterest"></span></a></li>
                                            <li><a href="https://linkedin.com"><span className=" icon-linkedin"></span></a></li>
                                        </ul>
                                    </div>

                                    <div className="login-register-box">
                                        <ul>
                                            <li><Link to={process.env.PUBLIC_URL + `/`}>Login</Link></li>
                                            <li><Link to={process.env.PUBLIC_URL + `/`}>Register</Link></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="main-header-one__bottom">
                        <div className="container-fluid">
                            <div className="main-header-one__bottom-inner">

                                <div className="main-header-one__left">
                                    <LogoWhite />
                                </div>

                                <div className="main-header-one__bottom-left main-header-two__bottom-middle">
                                    <nav className="main-menu main-menu--1">
                                        <div className="main-menu__inner">
                                            <MobileMenu />
                                            <div className="stricky-one-logo">
                                                <LogoWhite />
                                            </div>
                                            <Nav />
                                        </div>
                                    </nav>
                                </div>


                                <div className="main-header-one__bottom-right">
                                    <div className="search-box">
                                        <SearchButton />
                                    </div>

                                    <div className="cart-btn">
                                        <Link to={process.env.PUBLIC_URL + `/`}>
                                            <span className="icon-shopping-bag-1"></span><span className="count">0</span>
                                        </Link>
                                    </div>

                                    <div className="main-header-one__right">
                                        <OffCanvasStyleOne />
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </header>

            
        </>
    )
}

export default HeaderTwo;