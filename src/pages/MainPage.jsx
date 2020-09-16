import React from 'react';
import './MainPage.css';
import NavigationBar from '../components/NavigationBar';
import FooterBar from '../components/FooterBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import GalleryPage from './GalleryPage';
import ContactPage from './ContactPage';
import whiteLogo from '../assets/logoTwo.png';

function MainPage() {
  return (
    <React.Fragment>
      <section>
      <img className="LogoImage" src={whiteLogo} width='50px' alt='logo' />
      <Router>
        <NavigationBar />
        <div className='Wrapper'>
          <Switch>
            <Route path='/HomePage' component={HomePage} />
            <Route path='/AboutPage' component={AboutPage} />
            <Route path='/GalleryPage' component={GalleryPage} />
            <Route path='/ContactPage' component={ContactPage} />
          </Switch>
        </div>
        <FooterBar />
      </Router>
      </section>
    </React.Fragment>
  );
}

export default MainPage;
