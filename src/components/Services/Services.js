import React, { Component, Fragment } from 'react';
import {Col, Container, Row } from 'react-bootstrap';
import graphicsLogo from '../../asset/image/graphics.svg';
import webLogo from '../../asset/image/web.svg';
import mobileLogo from '../../asset/image/mobile.svg';


class Services extends Component {
    render() {
        return (
            <Fragment>
            <Container className="text-center">
            <h1 className='ServiceMainTitle'>MY SERVICES</h1>
                <Row>
                    <Col lg={4} md={6} sm={12}>
                        <div className="ServiceCard text-center">
                            <img alt="Logo" src={webLogo}/>
                            <h2 className='ServiceName'>Web Development</h2>
                            <p className='ServiceDescription'>I design and develop statik and dynamik web sites as per your requirements as we believe, "web is world's next home". </p>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                    <div className="ServiceCard text-center">
                            <img alt="Logo" src={mobileLogo}/>
                            <h2 className='ServiceName'>Mobile Development</h2>
                            <p className='ServiceDescription'>I build native and cross platfrom mobile app for your business and instiution as per as your requirements.</p>
                    </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                    <div className="ServiceCard text-center">
                            <img alt="Logo" src={graphicsLogo}/>
                            <h2 className='ServiceName'>Graphics Design</h2>
                            <p className='ServiceDescription'>I design modern user interface and other graphical components for your business and instiution.</p>
                    </div>
                    </Col>
                </Row>
            </Container>
            </Fragment>
        );
    }
}

export default Services;