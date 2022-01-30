import React, { Component, Fragment } from 'react'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import Footer from '../components/Footer/Footer'
import PrivacyDescription from '../components/PrivacyDescription/PrivacyDescription'

export default class PrivacyPage extends Component {
    componentDidMount(){
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
            <TopNavigation title='Privacy'/>
            <PageTop pageTitle="Privacy & Policy" />
            <PrivacyDescription />
            <Footer />
                
            </Fragment>
        )
    }
}
