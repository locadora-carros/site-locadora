import React from "react";

import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import '../../styles/header.css'

const navLinks = [
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '/about',
        display: 'About'
    },
    {
        path: '/cars',
        display: 'Cars'
    },
    {
        path: '/contact',
        display: 'Contact'
    },
]


const Header = () => {
    return <header className="header">

        {/* ========= Cabeça ========= */}
        <div className="header-top">
            <Container>
                <Row>
                    <Col lg='6' md='6' sm='6'>
                        <div className="logo">
                            <h1>
                                <Link to='/home' className="d-flex align-items-center gap-1">
                                <i class="ri-roadster-line"></i>
                                <span>Los Santos Company</span>
                            </Link> 
                            </h1>
                        </div>
                    </Col>
     

                    <Col lg='6' md='6' sm='6'>
                        <div className="header-top-right d-flex align-items-center justify-content-end gap-3">
                            <Link to="/login" className="d-flex align-items-center gap-1">
                                <i class="ri-login-circle-line"></i> Login
                            </Link>

                            <Link to="/register" className="d-flex align-items-center gap-1">
                                <i class="ri-user-line"></i> Register
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        {/* ========= Navegação ========= */}
        <div className="main-navbar">
            <Container>

                <div className="navigation-wrapper d-flex align-items-center justify-content-between">
                    <span className="mobile-menu">
                        <i class="ri-menu-line"></i>
                    </span>

                    <div className="navigation">
                        <div className="menu">
                            {navLinks.map((item, index) => (
                                <NavLink to={item.path} className={navClass => navClass.isActive ? 'nav-active  nav-item' : 'nav-item'}
                                    key={index}>
                                    {item.display}
                                    </NavLink>
                            ))
                            }
                        </div>
                    </div>

                    <div className="nav-right">
                        <div className="search-box">
                            <input type="text" placeholder="Search" />
                            <span><i class="ri-search-line"></i></span>
                        </div>
                    </div>
                </div>
            </Container>

        </div>

    </header>
}
export default Header;