import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import { AiOutlineBars } from 'react-icons/ai';
import { CgChevronDown, CgChevronLeft } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const menuData = [
    {
        title: 'Home',
        path: '/',
        iconClosed: <CgChevronLeft />,
        iconOpened: <CgChevronDown />,

        subNav: [
            {
                title: 'Home',
                path: '/',
            },
            {
                title: 'Home Two',
                path: '/home-two',
            },
            {
                title: 'Home Three',
                path: '/home-three',
            },
            {
                title: 'Home Four',
                path: '/home-four',
            },
            {
                title: 'Home Five',
                path: '/home-five',
            },
        ],
    },
    {
        title: 'About',
        path: '/',
        iconClosed: <CgChevronLeft />,
        iconOpened: <CgChevronDown />,

        subNav: [
            {
                title: 'About One',
                path: '/about-one',
            },
            {
                title: 'About Two',
                path: '/about-two',
            },
        ],
    },

    {
        title: 'Services',
        path: '#',

        iconClosed: <CgChevronLeft />,
        iconOpened: <CgChevronDown />,

        subNav: [
            {
                title: 'Services',
                path: '/services',
                cName: 'sub-nav',
            },
            {
                title: 'General Contracting',
                path: '/general-contracting',
                cName: 'sub-nav',
            },
            {
                title: 'Metrial Managment',
                path: '/metrial-managment',
            },
            {
                title: 'Building Renovation',
                path: '/building-renovation',
            },
            {
                title: 'Architecture Design',
                path: '/architecture-design',
            },
            {
                title: 'Multistory Build',
                path: '/multistory-build',
            },
        ],
    },

    {
        title: 'Page',
        path: '#',

        iconClosed: <CgChevronLeft />,
        iconOpened: <CgChevronDown />,

        subNav: [
            {
                title: 'Portfolio',
                path: '/portfolio',
                cName: 'sub-nav',
            },
            {
                title: 'Portfolio Details',
                path: '/portfolio-details',
                cName: 'sub-nav',
            },
            {
                title: 'Team',
                path: '/team',
            },
            {
                title: 'Team Details',
                path: '/team-details',
            },
            {
                title: 'Testimonials',
                path: '/testimonials',
            },
            {
                title: 'Pricing',
                path: '/pricing',
            },
            {
                title: 'FAQ',
                path: '/faq',
            },
            {
                title: 'Error',
                path: '/error',
            },
        ],
    },

    {
        title: 'Blog',
        path: '#',

        iconClosed: <CgChevronLeft />,
        iconOpened: <CgChevronDown />,

        subNav: [
            {
                title: 'Blog',
                path: '/blog',
                cName: 'sub-nav',
            },
            {
                title: 'Blog Grid',
                path: '/blog-grid',
                cName: 'sub-nav',
            },
            {
                title: 'Blog List',
                path: '/blog-list',
            },
            {
                title: 'Blog Standard',
                path: '/blog-standard',
            },
            {
                title: 'Blog Details',
                path: '/blog-details',
            },
        ],
    },

    {
        title: 'Contact',
        path: '/contact',
    },
];

const SidebarLink = styled(Link)`
    display: flex;
    color: #fff;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 50px;
    text-decoration: none;
    font-size: 16px;
    font-weight: 400;
    &:hover {
        background: #ff5e14;
        color: #fff;
        cursor: pointer;
    }
`;

const SidebarLabel = styled.span`
    margin-left: 16px;
    color: #fff;
    font-weight: 400;
`;

const DropdownLink = styled(Link)`
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    &:hover,
    &:active {
        background: #ff5e14;
        cursor: pointer;
        color: #fff;
    }
`;

const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);

    return (
        <>
            <SidebarLink to={process.env.PUBLIC_URL + `${item.path}`} onClick={item.subNav && showSubnav}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                    {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
                </div>
            </SidebarLink>
            {subnav &&
                item.subNav.map((data, index) => (
                    <DropdownLink to={process.env.PUBLIC_URL + `${data.path}`} key={index}>
                        {item.icon}
                        <SidebarLabel>{data.title}</SidebarLabel>
                    </DropdownLink>
                ))}
        </>
    );
};

const NavIcon = styled(Link)`
    color: #ff5e14;
    font-size: 2rem;
    height: 50px;
    display: flex;
    align-items: center;
    margin-left: 20px;
`;

const SidebarNav = styled.nav`
    background-color: #001659;
    width: 300px;
    height: 100%;
    position: fixed;
    overflow-y: scroll;
    scroll-behavior: smooth;
    -webkit-scroll-behavior: smooth;
    box-shadow: 0 13px 35px -12px rgba(35, 35, 35, 0.15);
    top: 0;
    right: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 99999;
`;

const SidebarWrap = styled.div`
    width: 100%;
`;

const MobileMenu = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    let publicUrl = process.env.PUBLIC_URL+'/'

    return (
        <>
            <>
                <NavIcon to="#" style={{ justifyContent: 'flex-end' }}>
                    <AiOutlineBars onClick={showSidebar} />
                </NavIcon>

                <SidebarNav sidebar={sidebar}>
                    <SidebarWrap>
                        <div className="mobile-nav__content">
                            <div className="logo-box">
                                <Link to={process.env.PUBLIC_URL + `/`} aria-label="logo image"><img src={publicUrl+"assets/images/resources/logo-1.png"} width="155" alt="" /></Link>
                            </div>
                            <NavIcon to="#">
                                <AiIcons.AiOutlineClose
                                    style={{
                                        color: 'white',
                                        fontSize: '18px',
                                        justifyContent: 'flex-start',
                                    }}
                                    onClick={showSidebar}
                                />
                            </NavIcon>
                            {menuData.map((item, index) => (
                                <SubMenu item={item} key={index} />
                            ))}
                            <ul className="mobile-nav__contact list-unstyled">
                                <li>
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                    <a href="mailto:needhelp@packageName__.com">needhelp@const.com</a>
                                </li>
                                <li>
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                    <a href="tel:666-888-0000">666 888 0000</a>
                                </li>
                            </ul>
                            <div className="mobile-nav__top">
                                <div className="mobile-nav__social">
                                    <a href="https://twitter.com/"><span className="fab fa-twitter"></span></a>
                                    <a href="https://facebook.com/"><span className="fab fa-facebook-square"></span></a>
                                    <a href="https://pinterest.com/"><span className="fab fa-pinterest-p"></span></a>
                                    <a href="https://instagram.com/"><span className="fab fa-instagram"></span></a>
                                </div>
                            </div>
                        </div>
                    </SidebarWrap>
                </SidebarNav>
            </>
        </>
    );
};

export default MobileMenu;