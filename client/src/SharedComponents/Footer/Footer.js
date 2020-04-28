import React, { Component } from 'react';
import './Footer.css';
import facebookicon from '../../images/socialmedia-icons/facebookicon.svg';
import instagramicon from '../../images/socialmedia-icons/instagramicon.svg';
import twittericon from '../../images/socialmedia-icons/twittericon.svg';
import youtubeicon from '../../images/socialmedia-icons/youtubeicon.svg';
class Footer extends Component {
  render() {
    return (
      <div className="main-footer">
        <div className="container">
          <div className="footer-text"> © 2020 Gaza Sky Geeks.</div>
          <div className="footer-icons">
            <a href="https://www.facebook.com/GazaSkyGeeks" target="_blank" rel="noopener noreferrer">
              <img
                className="icon-img"
                src={facebookicon}
                alt="facebook icon"
              />
            </a>
            <a href="https://www.instagram.com/gazaskygeeks" target="_blank" rel="noopener noreferrer">
              <img
                className="icon-img"
                src={instagramicon}
                alt=" instagrm icon"
              />
            </a>
            <a href="https://twitter.com/gazaskygeeks" target="_blank" rel="noopener noreferrer">
              <img className="icon-img" src={twittericon} alt=" twitter icon" />
            </a>
            <a href="https://www.youtube.com/gazaskygeeks" target="_blank" rel="noopener noreferrer">
              <img className="icon-img" src={youtubeicon} alt="youtube icon" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
