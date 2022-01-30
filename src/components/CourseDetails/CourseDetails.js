import React, { Component, Fragment } from 'react'
import {Button,  Container,Row,Col} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import "video-react/dist/video-react.css"
import {Player, BigPlayButton} from 'video-react'

export default class CourseDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedPage p-0" >
                    <div className="topPageOverlay">
                       <Container className="topPageContentCourse">
                           <Row>
                               <Col lg={6} md={6} sm={12}>
                                   <h3 className='CourseFullTitle'>When you know who you are!</h3>
                                   <h5 className='CourseSubTitle'>Total Lecturar=30</h5>
                                   <h5 className='CourseSubTitle'>Total Student=30</h5>
                               </Col>
                               <Col lg={6} md={6} sm={12}>
                                   <p className='CourseSubDes'>When you know who you are, you can be wise about your goals, your dreams, your standards, your convictions. Knowing who you are allows you to live your life with purpose and meaning.</p>
                               </Col>
                           </Row>
                       </Container>
                    </div>
                </Container>

                <Container className='mt-5'>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h1 className='ServiceName'>Skill You Get</h1>
                            <ul>
                                <li className='ServiceDescription'>limited dynamik product cetagory</li>
                                <li className='ServiceDescription'>limited dynamik product cetagory</li>
                                <li className='ServiceDescription'>limited dynamik product cetagory</li>
                                <li className='ServiceDescription'>limited dynamik product cetagory</li>
                                <li className='ServiceDescription'>limited dynamik product cetagory</li>
                                <li className='ServiceDescription'>limited dynamik product cetagory</li>
                                <li className='ServiceDescription'>limited dynamik product cetagory</li>
                                <li className='ServiceDescription'>limited dynamik product cetagory</li>
                                <li className='ServiceDescription'>limited dynamik product cetagory</li>
                                <li className='ServiceDescription'>limited dynamik product cetagory</li>
                                <li className='ServiceDescription'>limited dynamik product cetagory</li>
                            </ul>
                            <Button variant="primary">More Info</Button>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                        <Player>
                        <source src='https://www.youtube.com/watch?v=orJSJGHjBLI' />
                        <BigPlayButton position="center" />
                    </Player>
                        </Col>
                    </Row>
                </Container>
                
            </Fragment>
        )
    }
}
