import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../../styles/footer.css'

const quickLinks = [
    {
        path: '/About',
        display: 'About'
    },
    {
        path: '#',
        display: 'Privacy Policy'
    },
    {
        path: '/cars',
        display: 'Car Listing'
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
                    <div className="logo footer-logo">
                        <h1>
                            <Link to='/home' className="d-flex align-items-center gap-1">
                                <i class="ri-roadster-line"></i>
                                <span>Los Santos Company</span>
                            </Link>
                        </h1>
                    </div>
                    <p className="footer-logo-content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptas, earum soluta quis nesciunt aliquam quisquam aut laborum, dicta et eos fugit natus! Neque iusto nobis quas quam saepe fugiat.
                    </p>
                </Col>

                <Col lg='2' md='4' sm='6'>
                    <div className="mb-4">
                        <h5 className="footer-link-title">Quick link</h5>
                        <ListGroup>
                            {
                                quickLinks.map((item, index) => (
                                    <ListGroupItem key={index} className="p-0 mt-3 quick-link">
                                        <Link to={item.path}>{item.display}
                                        </Link>

                                    </ListGroupItem>
                                ))
                            }
                        </ListGroup>
                    </div>
                </Col>

                <Col lg='4' md='4' sm='6'>
                    <div className="mb-4">
                        <h5 className="footer-link-title mb-4">Head Office</h5>
                        <p className="office-info">Los Santos Company, João Pessoa, Paraiba</p>
                        <p className="office-info">Phone: +55(83)9xxxx-xxxx</p>
                        <p className="office-info">Email: vaiteralgum@email.aqui.com</p>
                        <p className="office-info">Office Time 8am - 18pm</p>
                    </div>
                </Col>

                <Col lg='2' md='3' sm='0'>
                    <h5>Need Help</h5>
                    <p className="footer-help mb-4">
                        <i class="ri-phone-fill"></i> (+xx) xx xxxxx-xxxx
                    </p>
                    <button className="footer-btn btn">
                        <Link to='/contact'>
                            <i class="ri-phone-line"></i> Request a call
                        </Link>
                    </button>
                </Col>
                <Col lg='12'>
                    <div className="footer-bottom">
                        <p className="section-description d-flex align-items-center justify-content-center gap-1 pt-4">
                            <i class="ri-copyright-line"></i>Copyright {year}, Developed by xxxxx xxxxxx. All rights reserved.
                        </p>
                    </div>




                </Col>
            </Row>
        </Container>
    </footer>
}

export default Footer;