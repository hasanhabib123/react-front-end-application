import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Modal, Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import "video-react/dist/video-react.css"
import {Player, BigPlayButton} from 'video-react'

export default class Video extends Component {

    constructor(){
        super();
        this.state={
            show:false
        }
    }

    modalClose=()=>this.setState({show:false})
    modalOpen=()=>this.setState({show:true})

    render() {
        return (
            <Fragment>
            <Container className="text-center">
                <Row>
                    <Col lg={12} md={12} sm={12} className='VideoCard'>
                        <div>
                        <p className='VideoTitle'>How I Do</p>
                        <p className='VideoDes'>Corley is a financial planner and author who spent five years studying millionaires. He wasn’t out to discover the investment strategies they shared. He wanted to find out general stuff, like how they lived, what TV shows they watched, what they ate. Those habits can be as crucial to building wealth as investing in the right stocks.</p>
                        <p><FontAwesomeIcon onClick={this.modalOpen} className="PlayBtn" icon={faPlayCircle} /></p>

                        </div>
                    </Col>
                </Row>
            </Container>

            <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
                <Modal.Body>
                    <Player>
                        <source src='https://www.youtube.com/watch?v=orJSJGHjBLI' />
                        <BigPlayButton position="center" />
                    </Player>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={this.modalClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>


            </Fragment>
        )
    }
}
