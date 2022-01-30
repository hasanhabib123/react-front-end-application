import React, { Component, Fragment } from 'react'
import {Col, Container, Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faYoutube} from '@fortawesome/free-brands-svg-icons'
import {Link, NavLink} from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <Fragment>
            <Container fluid={true} className='FooterSection text-center'>
                <Row>
                    <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                        <h1 className='ServiceName'>Follow Me</h1>
                        <a href='#' className='socialLink'><FontAwesomeIcon icon={faFacebook} /> Facebook</a><br />
                        <a href='#' className='socialLink'><FontAwesomeIcon icon={faYoutube} /> YouTube</a>
                    </Col>
                    <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                        <h1 className='ServiceName'>Address</h1>
                        <p className='ServiceDescription'>#79/9 Padma Residantional Area, 10 Floor Front side, Narsingdi</p>
                        <p className='ServiceDescription'> <FontAwesomeIcon icon={faEnvelope} /> hasanhabib@gmail.com</p>
                        <p className='ServiceDescription'><FontAwesomeIcon icon={faPhone} /> +8801860509231</p>
                    </Col>
                    <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                        <h1 className='ServiceName'>Information</h1>
                        <Link to='/about' className='footerLink'>About Me</Link><br />
                        <Link to='/contact' className='footerLink'>Contract Me</Link>
                    </Col>
                    <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                        <h1 className='ServiceName'>Legal</h1>
                        <Link to='/Refund' className='footerLink'>Refund Policy</Link><br />
                        <Link to='/Terms' className='footerLink'>Tearms And Condition</Link><br />
                        <Link to='/Privacy' className='footerLink'>Privacy Policy</Link>
                    </Col>
                </Row>
            </Container>
            <Container fluid={true} className='text-center copyrightSection'>
                <a href='#' className='copyrightLink'>Hasan.com &copy; 2022-2023</a>
            </Container>
                
            </Fragment>
        )
    }
}
