import React from 'react';
import { Link } from 'react-router-dom';
import LogoWhite from './LogoWhite';
import Nav from './Nav';
import MobileMenu from './MobileMenu';
import OffCanvasStyleOne from './OffCanvasStyleOne';
import SearchButton from './SearchButton';

const HeaderThreeSticky = ({ data }) => {
  const profile = data.length > 0 ? data[0] : null;
  return (
    <div className="main-header-one__bottom">
      <div className="container-fluid">
        <div className="main-header-one__bottom-inner">
          <div className="main-header-one__bottom-left">
            <nav className="main-menu main-menu--1">
              <div className="main-menu__inner">
                <MobileMenu data={profile} />
                <div className="stricky-one-logo">
                  <LogoWhite />
                </div>
                <Nav />
              </div>
            </nav>
          </div>

          <div className="main-header-one__bottom-right">
            {/* <div className="search-box">
                    <SearchButton />
                  </div>

                  <div className="cart-btn">
                    <Link to={process.env.PUBLIC_URL + `/`}>
                      <span className="icon-shopping-bag-1"></span>
                      <span className="count">0</span>
                    </Link>
                  </div> */}

            <div className="main-header-one__bottom-right-btn">
              <a
                href="#service-one"
                className="thm-btn"
                data-text="Get Started +"
              >
                Get Started ++
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderThreeSticky;
