import React from 'react';
import NavigationBar from '../components/NavigationBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import GalleryPage from './GalleryPage';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';

function MainPage() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path='/HomePage' component={HomePage} />
          <Route path='/AboutPage' component={AboutPage} />
          <Route path='/ContactPage' component={ContactPage} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default MainPage;
