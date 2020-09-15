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
      <img src={whiteLogo} width='50px' alt='logo' />
      <Router>
        <header>
          <NavigationBar />
        </header>

        <section>
          <nav>
            <ul>
              <li>
                <a href='#'>London</a>
              </li>
              <li>
                <a href='#'>Paris</a>
              </li>
              <li>
                <a href='#'>Tokyo</a>
              </li>
            </ul>
          </nav>
          <div className='Wrapper'>
            <Switch>
              <Route path='/HomePage' component={HomePage} />
              <Route path='/AboutPage' component={AboutPage} />
              <Route path='/GalleryPage' component={GalleryPage} />
              <Route path='/ContactPage' component={ContactPage} />
            </Switch>
          </div>

          <article>
            <h1>London</h1>
            <p>
              London is the capital city of England. It is the most populous
              city in the United Kingdom, with a metropolitan area of over 13
              million inhabitants.
            </p>
            <p>
              Standing on the River Thames, London has been a major settlement
              for two millennia, its history going back to its founding by the
              Romans, who named it Londinium.
            </p>
          </article>
        </section>

        <footer>
          <FooterBar />
        </footer>
      </Router>

      {/* <img src={whiteLogo} width='50px' alt='logo' />
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
      </Router> */}
    </React.Fragment>
  );
}

export default MainPage;
