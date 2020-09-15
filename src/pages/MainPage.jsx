import React from 'react';
import NavigationBar from '../components/NavigationBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FooterBar from '../components/FooterBar';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import GalleryPage from './GalleryPage';
import ContactPage from './ContactPage';
import whiteLogo from '../assets/logoTwo.png';

function MainPage() {
  return (
    <React.Fragment>
      <img src={whiteLogo} width='50px' alt='logo' />
      <Router>
        <NavigationBar />
        <Switch>
          <Route path='/HomePage' component={HomePage} />
          <Route path='/AboutPage' component={AboutPage} />
          <Route path='/GalleryPage' component={GalleryPage} />
          <Route path='/ContactPage' component={ContactPage} />
        </Switch>
      </Router>
      <FooterBar />
    </React.Fragment>
  );
}

export default MainPage;
