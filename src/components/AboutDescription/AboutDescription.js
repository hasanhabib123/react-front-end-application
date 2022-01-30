import React, { Component, Fragment } from 'react'
import {Container,Row,Col} from "react-bootstrap";

export default class AboutDescription extends Component {
    render() {
        return (
            <Fragment>
            <Container className='mt-5'>
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <h1 className='ServiceName'>Who I Am</h1>
                        <hr />
                        <p className='ServiceDescription'>When you know who you are, you can be wise about your goals, your dreams, your standards, your convictions. Knowing who you are allows you to live your life with purpose and meaning.When you know who you are, you can be wise about your goals, your dreams, your standards, your convictions. Knowing who you are allows you to live your life with purpose and meaning.When you know who you are, you can be wise about your goals, your dreams, your standards, your convictions. Knowing who you are allows you to live your life with purpose and meaning</p>

                        <h1 className='ServiceName'>My Mission</h1>
                        <hr />
                        <p className='ServiceDescription'>When you know who you are, you can be wise about your goals, your dreams, your standards, your convictions. Knowing who you are allows you to live your life with purpose and meaning.When you know who you are, you can be wise about your goals, your dreams, your standards, your convictions. Knowing who you are allows you to live your life with purpose and meaning.When you know who you are, you can be wise about your goals, your dreams, your standards, your convictions. Knowing who you are allows you to live your life with purpose and meaning</p>
                    
                        <h1 className='ServiceName'>My Vission</h1>
                        <hr />
                        <p className='ServiceDescription'>When you know who you are, you can be wise about your goals, your dreams, your standards, your convictions. Knowing who you are allows you to live your life with purpose and meaning.When you know who you are, you can be wise about your goals, your dreams, your standards, your convictions. Knowing who you are allows you to live your life with purpose and meaning.When you know who you are, you can be wise about your goals, your dreams, your standards, your convictions. Knowing who you are allows you to live your life with purpose and meaning</p>
                    
                    </Col>
                </Row>
            </Container>
                
            </Fragment>
        )
    }
}
