import React, { Component, Fragment } from 'react'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import Footer from '../components/Footer/Footer'
import TermsDescription from '../components/Terms Description/TermsDescription'

export default class TermsPage extends Component {
    componentDidMount(){
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
            <TopNavigation title='Terms & Condition'/>
            <PageTop pageTitle="Terms And Condition" />
            <TermsDescription />
            <Footer />
                
            </Fragment>
        )
    }
}
