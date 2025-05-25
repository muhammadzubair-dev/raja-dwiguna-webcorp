import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LogoWhite from './LogoWhite';
import Nav from './Nav';
import MobileMenu from './MobileMenu';
import OffCanvasStyleOne from './OffCanvasStyleOne';
import SearchButton from './SearchButton';

const HeaderThree = ({ data }) => {
  const profile = data.length > 0 ? data[0] : null;
   const { t } = useTranslation();

  return (
    <>
      <header className="main-header main-header-one clearfix">
        <div className="main-header-one__wrapper">
          <div className="main-header-one__top">
            <div className="container-fluid">
              <div className="main-header-one__top-inner">
                <div className="main-header-one__left">
                  <LogoWhite />
                </div>

                <div className="main-header-one__middle">
                  <ul>
                    <li style={{ maxWidth: 650 }}>
                      <div className="icon">
                        <span className="icon-pin"></span>
                      </div>

                      <div className="text">
                        <span>{t('header.ourLocation')}</span>
                        <p>{profile?.location}</p>
                      </div>
                    </li>

                    {/* <li>
                      <div className="icon">
                        <span className="icon-email"></span>
                      </div>

                      <div className="text">
                        <span>Online Support</span>
                        <p className="email">
                          <a href="mailto:needhelp@company.com">
                            info@Const24.com
                          </a>
                        </p>
                      </div>
                    </li> */}

                    <li>
                      <div className="icon">
                        <span className="icon-phone-call"></span>
                      </div>

                      <div className="text">
                        <span>{t('header.contact')}</span>
                        <p className="number">
                          <a href={`tel:${profile?.phone}`}>{profile?.phone}</a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* <div className="main-header-one__right">
                  <OffCanvasStyleOne />
                </div> */}
              </div>
            </div>
          </div>

          {/* <div className="main-header-one__bottom">
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
                  <div className="search-box">
                    <SearchButton />
                  </div>

                  <div className="cart-btn">
                    <Link to={process.env.PUBLIC_URL + `/`}>
                      <span className="icon-shopping-bag-1"></span>
                      <span className="count">0</span>
                    </Link>
                  </div>

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
          </div> */}
        </div>
      </header>
    </>
  );
};

export default HeaderThree;
