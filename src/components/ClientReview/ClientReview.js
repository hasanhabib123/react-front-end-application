import React, { Component, Fragment } from 'react'
import {Col, Container, Row} from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from '../../asset/image/profileq.png'

export default class ClientReview extends Component {
    render() {
            var settings = {
              autoplaySpeed:3000,
              autoplay:true,
              dots: true,
              infinite: true,
              speed: 3000,
              vertical: true,
              verticalSwiping: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
            };
        return (
            <Fragment>
            <Container className='text-center'>
              <h1 className='ServiceMainTitle'>CLIENT SAY</h1>
              <Slider {...settings}>
                <div>
                  <Row className='text-center justify-content-center'>
                    <Col lg={6} md={6} sm={12}>
                      <img className='circleImg' src={img1} alt='photo1' />
                      <h1 className='ServiceName'>Web Development</h1>
                      <p className='ServiceDescription'>Corley is a financial millionaires. He wasn’t out to discover the investment strategies they shared. He wanted to find out general stuff, like how they lived, what TV shows they watched, what they ate.</p>
                    </Col>
                  </Row>
                </div>
                <div>
                  <Row className='text-center justify-content-center'>
                    <Col lg={6} md={6} sm={12}>
                      <img className='circleImg' src={img1} alt='photo1' />
                      <h1 className='ServiceName'>Web And softwer Developer</h1>
                      <p className='ServiceDescription'>Corley is a financial millionaires. He wasn’t out to discover the investment strategies they shared. He wanted to find out general stuff, like how they lived, what TV shows they watched, what they ate.</p>
                    </Col>
                  </Row>
                </div>
                <div>
                  <Row className='text-center justify-content-center'>
                    <Col lg={6} md={6} sm={12}>
                      <img className='circleImg' src={img1} alt='photo1' />
                      <h1 className='ServiceName'>Web Designer</h1>
                      <p className='ServiceDescription'>Corley is a financial millionaires. He wasn’t out to discover the investment strategies they shared. He wanted to find out general stuff, like how they lived, what TV shows they watched, what they ate.</p>
                    </Col>
                  </Row>
                </div>
              </Slider>
            </Container>
                
            </Fragment>
        )
    }
}
