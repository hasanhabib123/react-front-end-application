import React from 'react';
//import ContactPage from './pages/ContactPage';
//import ServicePage from './pages/ServicePage';
//import PortfolioPage from './pages/PortfolioPage';
//import CoursesPage from './pages/CoursesPage';
//import AboutDescription from './components/AboutDescription/AboutDescription';
//import PageTop from './components/PageTop/PageTop';
//import TopNavigation from './components/TopNavigation/TopNavigation';
//import AboutPage from './pages/AboutPage';
//import HomePage from './pages/HomePage';
import {BrowserRouter} from 'react-router-dom';
import AppRoute from './router/AppRoute';
function App() {
    return (
        <BrowserRouter>
            <AppRoute />
        </BrowserRouter>
    );
}
export default App;