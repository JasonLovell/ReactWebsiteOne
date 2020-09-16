import React from 'react';
import './HomePage.css';
import Marquee from '../components/keyframeMarquee';
import CardBox from '../components/CardBox';

function HomePage() {
  return (
    <React.Fragment>
      <section>
      <h5>App Page Title</h5>
      <div className='titleBlock'>
        <h1>HomePage</h1>
        <h4>Website Test 2020 in React</h4>
        </div>
        <article>
        <Marquee />
        </article>
        <CardBox />
        </section>
    </React.Fragment>
  );
}

export default HomePage;
