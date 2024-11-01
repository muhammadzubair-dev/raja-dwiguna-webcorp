import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div className="main-menu text-center">
            <nav>
                <ul className="main-menu__list">
                    {/* <li className="dropdown current">
                        <Link to={process.env.PUBLIC_URL + `/`}>Home</Link>
                        <ul>
                            <li><Link to={process.env.PUBLIC_URL + `/`}>Home</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/home-two`}>Home Two</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/home-three`}>Home Three</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/home-four`}>Home Four</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/home-five`}>Home Five</Link></li>
                            <li className="dropdown">
                                <Link to={process.env.PUBLIC_URL + `/`}>Header Styles</Link>
                                <ul>
                                    <li><Link to={process.env.PUBLIC_URL + `/`}>Header One</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + `/home-two`}>Header Two</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + `/home-three`}>Header Three</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + `/home-four`}>Header Four</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + `/home-five`}>Header Five</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li> */}
                     <li className="current"><Link to={process.env.PUBLIC_URL + `/`}>Home</Link></li>
                     <li><Link to={process.env.PUBLIC_URL + `/about`}>About</Link></li>
                    {/* <li className="dropdown">
                        <Link to={process.env.PUBLIC_URL + `#`}>About</Link>
                        <ul>
                            <li><Link to={process.env.PUBLIC_URL + `/about-one`}>About One</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/about-two`}>About Two</Link></li>
                        </ul>
                    </li> */}
                    <li className="dropdown">
                        <Link to={process.env.PUBLIC_URL + `#`}>Services</Link>
                        <ul>
                            <li><Link to={process.env.PUBLIC_URL + `/services`}>Services</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/general-contracting`}>General Contracting</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/metrial-managment`}>Metrial Managment</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/building-renovation`}>Building Renovation</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/architecture-design`}>Architecture Design</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/multistory-build`}>Multistory Build</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <Link to={process.env.PUBLIC_URL + `#`}>Pages</Link>
                        <ul>
                            <li><Link to={process.env.PUBLIC_URL + `/portfolio`}>Portfolio</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/portfolio-details`}>Portfolio Details</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/team`}>Team</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/team-details`}>Team Details</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/testimonials`}>Testimonials</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/pricing`}>Pricing</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/faq`}>Faq</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/error`}>Error</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <Link to={process.env.PUBLIC_URL + `#`}>Blog</Link>
                        <ul>
                            <li><Link to={process.env.PUBLIC_URL + `/blog`}>Blog</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/blog-grid`}>Blog Grid</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/blog-list`}>Blog List</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/blog-standard`}>Blog Standard</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + `/blog-details`}>Blog Details</Link></li>
                        </ul>
                    </li>
                    <li><Link to={process.env.PUBLIC_URL + `/contact`}>Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;


