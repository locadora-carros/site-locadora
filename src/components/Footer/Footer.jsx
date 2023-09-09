import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import '../../styles/footer.css';

const quickLinks = [
    {
        path: '/about',
        display: 'About'
    },
    {
        path: '#',
        display: 'Privacy Policy'
    },
    {
        path: '/cars',
        display: 'Cars Listing'
    },
    {
        path: '/blogs',
        display: 'Blog'
    },
    {
        path: '/contact',
        display: 'Contact'
    },
]

const Footer = () => {

    const date = new Date()
    const year = date.getFullYear()
    return <footer className="footer">
        <Container>
            <Row>
                <Col lg='4' md='4' sm='12'>
                    <div className="logo footer__logo">
                        <h1>
                            <Link to='/home' className="d-flex align-items-center gap-2">
                                <i class="ri-car-line"></i>
                                <span>
                                    Los Santos<br />Company
                                </span>
                            </Link>
                        </h1>
                    </div>
                    <p className="footer__logo-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo a est ad quasi delectus tempora architecto quidem consequatur rerum eum cum, dignissimos cupiditate modi atque ex excepturi commodi provident debitis.
                    </p>
                </Col>

                <Col lg='2' md='4' sm='6'>
                    <div className="mb-4">
                        <h5 className="footer__link-title">Quick Links</h5>
                        <ListGroup>
                            {
                                quickLinks.map((item, index) => (
                                    <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                                        <Link to={item.path}>{item.display}</Link>
                                    </ListGroupItem>
                                ))
                            }
                        </ListGroup>
                    </div>
                </Col>

                <Col lg='3' md='4' sm='6'>
                    <div className="mb-4">
                        <h5 className="footer__link-title mb-4">Head Office</h5>

                        <p className="office__info"><span><i class="ri-home-2-line"></i></span>
                            S/N UFPB, Rio Tinto, Paraiba</p>

                        <p className="office__info"><span><i class="ri-phone-line"></i></span>
                            Phone: (00)00000-0000</p>

                        <p className="office__info"> <span><i class="ri-mail-line"></i></span>
                            Email: defantefante@gmail.com
                        </p>

                        <p className="office__info"> <span><i class="ri-time-line"></i></span>
                            Office Time: 7am - 17pm</p>
                    </div>
                </Col>

                <Col lg='3' md='4'>
                    <div className="mb-4">
                        <h5 className="footer__link-title">Newsletter</h5>
                        <p className="section__description">Subscribe our newsletter</p>
                        <div className="newsletter">
                            <input type="email" placeholder="Email" />
                            <span>
                                <i class="ri-send-plane-line"></i>
                            </span>
                        </div>
                    </div>
                </Col>

                <Col lg='12'>
                    <div className="footer__bottom">
                        <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                            <i class="ri-copyright-line"></i>Copyright {year}, Developed by ****** *****. All rights reserved.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
}
export default Footer;