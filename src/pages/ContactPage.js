import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import ContactSection from '../components/ContactSection/ContactSection'
import PageTop from '../components/PageTop/PageTop'
import Footer from '../components/Footer/Footer'
export default class ContactPage extends Component {
    componentDidMount(){
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title='Contact' />
                <PageTop pageTitle='Contract' />
                <ContactSection />
                <Footer />
            </Fragment>
        )
    }
}
