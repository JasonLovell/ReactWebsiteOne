import React from 'react';
import './FooterBar.css';
// import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faFacebook,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

function FooterBar() {
  return (
    <React.Fragment>
      <div>
        <div className='socialBlock'>
          <p>Social Icons and links</p>
          <FontAwesomeIcon  class="zoom" icon={faGoogle} />
          <FontAwesomeIcon  class="zoom"  icon={faFacebook} />
          <FontAwesomeIcon  class="zoom"  icon={faTwitter} />
        </div>
        <div className='wrapper'>
          <h4 className=''>Footer Bar</h4>
          <h6 className=''>Company Name &copy; 2020</h6>
        </div>
      </div>
    </React.Fragment>
  );
}

export default FooterBar;
