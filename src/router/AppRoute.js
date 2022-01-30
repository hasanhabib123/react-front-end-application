import React, { Component, Fragment } from 'react'
import {Route, Routes} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CoursesPage from '../pages/CoursesPage';
import PortfolioPage from '../pages/PortfolioPage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import ServicePage from '../pages/ServicePage';
import RefundPage from '../pages/RefundPage';
import TermsPage from '../pages/TermsPage';
import PrivacyPage from '../pages/PrivacyPage';
import ProjectsDetailsPage from '../pages/ProjectsDetailsPage';
import CourseDetailsPage from '../pages/CourseDetailsPage';

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
            <Routes>
                <Route exact path="/" element={<HomePage/>} />
                <Route exact path="/service" element={<ServicePage/>} />
                <Route exact path="/courses" element={<CoursesPage/>} />
                <Route exact path="/portfolio" element={<PortfolioPage/>} />
                <Route exact path="/Contact" element={<ContactPage/>} />
                <Route exact path="/about" element={<AboutPage/>} />
                <Route exact path="/Refund" element={<RefundPage/>} />
                <Route exact path="/Terms" element={<TermsPage/>} />
                <Route exact path="/Privacy" element={<PrivacyPage/>} />
                <Route exact path="/ProjectDetails" element={<ProjectsDetailsPage/>} />
                <Route exact path="/CourseDetails" element={<CourseDetailsPage/>} />

            </Routes>
                
            </Fragment>
        );
    }
}

export default AppRoute;