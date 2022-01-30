import React, { Component, Fragment } from 'react'
import {Container,Row,Col} from "react-bootstrap";

export default class RefundSection extends Component {
    render() {
        return (
            <Fragment>
            <Container className='mt-5'>
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <ul>
                            <li>First 30 Day Money Back!</li>
                            <li>This Not a Buy-And-Try A Product.</li>
                            <li>Before you make a purchase, you may decide to review the refund policy of a given website or store to make sure you are comfortable with the terms.Before you make a purchase, you may decide to review the refund policy of a given website or store to make sure you are comfortable with the terms.Before you make a purchase, you may decide to review the refund policy of a given website or store to make sure you are comfortable with the terms.</li>
                            <li>Refund policy is exactly as it sounds - a policy that dictates the terms of any refunds or returns which may be offered by the website or eCommerce store.</li>
                            <li>Before you make a purchase, you may decide to review the refund policy.</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
                
            </Fragment>
        )
    }
}
