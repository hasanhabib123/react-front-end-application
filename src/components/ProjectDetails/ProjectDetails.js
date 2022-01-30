import React, { Component, Fragment } from 'react'
import { Container, Row,Col,Button } from 'react-bootstrap'
import img3 from '../../asset/image/profileq.png'

export default class ProjectDetails extends Component {
    render() {
        return (
            <Fragment>
            <Container className='mt-5'>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                    <img src={img3} alt='project' />

                    </Col>
                    <Col lg={6} md={6} sm={12}>
                    <h2 className='ServiceName'>Fall Bazzar</h2>
                    <p className='ServiceDescription'>There are enough articles on this site to fill multiple books, so it can sometimes be daunting to know where to start. </p>
                    <ul>
                        <li className='ServiceDescription'>A Charity You Should Know About.</li>
                        <li className='ServiceDescription'>A Charity You Should Know About.</li>
                        <li className='ServiceDescription'>A Charity You Should Know About.</li>
                        <li className='ServiceDescription'>A Charity You Should Know About.</li>
                        <li className='ServiceDescription'>A Charity You Should Know About.</li>
                        <li className='ServiceDescription'>A Charity You Should Know About.</li>
                        <li className='ServiceDescription'>A Charity You Should Know About.</li>
                        <li className='ServiceDescription'>A Charity You Should Know About.</li>
                        <li className='ServiceDescription'>A Charity You Should Know About.</li>
                        
                    </ul>
                    <Button variant="primary">Live Previw</Button>

                    </Col>
                </Row>
            </Container>
                
            </Fragment>
        );
    }
}
