import React, { Component, Fragment } from 'react'
import { Col, Container, Row} from "react-bootstrap";
import { Link } from 'react-router-dom';
import img2 from '../../asset/image/office.png'

class Courses extends Component {
    render() {
        return (
            <Fragment>
            <Container className="text-center">
            <h1 className="ServiceMainTitle">OUR COURSES</h1>
            <Row>
                <Col lg={6} md={12} sm={12} className='p-2'>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <img className='coursesImg' src={img2} alt='photo2' />
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h5 className='text-justify coursesTitle'>Web Development</h5>
                            <p className='text-justify coursesDes'>The grim realities discrimination come light entitled but upright cityThe grim realities discrimination.</p>
                            <Link to='/CourseDetails' className='coursesDetails float-left'>Details</Link>
                        </Col>
                    </Row>
                </Col>
                <Col lg={6} md={12} sm={12} className='p-2'>
                <Row>
                        <Col lg={6} md={6} sm={12}>
                        <img className='coursesImg' src={img2} alt='photo2' />
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h5 className='text-justify coursesTitle'>Web Development</h5>
                            <p className='text-justify coursesDes'>The grim realities discrimination come light entitled but upright cityThe grim realities discrimination.</p>
                            <Link to='/CourseDetails' className='coursesDetails float-left'>Details</Link>
                        </Col>
                </Row>
                </Col>
            </Row>
            <Row>
                <Col lg={6} md={12} sm={12} className='p-2'>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <img className='coursesImg' src={img2} alt='photo2' />
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h5 className='text-justify coursesTitle'>Web Development</h5>
                            <p className='text-justify coursesDes'>The grim realities discrimination come light entitled but upright cityThe grim realities discrimination.</p>
                            <Link to='/CourseDetails' className='coursesDetails float-left'>Details</Link>
                        </Col>
                    </Row>
                </Col>
                <Col lg={6} md={12} sm={12} className='p-2'>
                <Row>
                        <Col lg={6} md={6} sm={12}>
                        <img className='coursesImg' src={img2} alt='photo2' />
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h5 className='text-justify coursesTitle'>Web Development</h5>
                            <p className='text-justify coursesDes'>The grim realities discrimination come light entitled but upright cityThe grim realities discrimination.</p>
                            <Link to='/CourseDetails' className='coursesDetails float-left'>Details</Link>
                        </Col>
                </Row>
                </Col>
            </Row>
            </Container>
                
            </Fragment>
        );
    }
}

export default Courses;