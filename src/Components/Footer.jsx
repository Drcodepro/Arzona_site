import React from 'react';
import "./All_css/Footer.css";
import arzona_logo from "../assets/icons/arzona_logo.svg";

import insta_icon from "../assets/icons/insta_icon_0.png";
import facebook_icon from "../assets/icons/facebook_icon_0.png";
import telegram_icon from "../assets/icons/telegram_icon_0.png";
import gmail_icon from "../assets/icons/gmail_icon_0.png";
import twitter_icon from "../assets/icons/twitter_icon_0.png";





const Footer = () => {
  return (
    <div className="Home_footer_section" id="footer">
      <div className="footer_mainContent">

        <div className="Home_footer_info">
          <div className="Home_Footer_logo_container">
           <img src={arzona_logo}  loading="lazy" alt="" />
          </div>
          <div className="footer_info">Arzona pioneers AI technology, creating immersive worlds to redefine digital exploration and inspire future innovation.</div>
        </div>

        <div className="Important">
          <h2>Use Case</h2>
          <a href=""><p>Ecosystem</p></a>
          <a href=""><p>Farm Design</p></a>
          <a href=""><p>AI Mining System in Future</p></a>
        </div>

        <div className="Important">
          <h2>Important</h2>
          <a href="#navBar"><p>Home</p></a>
          <a href="#aboutSection"><p>About Us</p></a>
          <a href="#upCommingSection"><p>Features</p></a>
        </div>

        <div className="Important">
          <h2>Company</h2>
          <a href=""><p>About Us</p></a>
          <a href=""><p>Career</p></a>
          <a href=""><p>FAQs</p></a>
          <a href=""><p>Teams</p></a>
          <a href=""><p>Contact Us</p></a>

        </div>

      </div>

      <div className="contact_us">
            <h2>Follow Us</h2>
            <div className="social_media_icons">
              {/* <a href=""><img src={mail_icon} alt="" /></a> */}
              <a href=""><img src={twitter_icon} alt="" /></a>
              <a href=""><img src={gmail_icon} alt="" /></a> 
  
              <a href=""><img src={facebook_icon} alt="" /></a> 
              <a href=""><img src={insta_icon} alt="" /></a> 
              <a href=""><img src={telegram_icon} alt="" /></a>
            </div>
        </div>

        <div className="plicy_container">
          <a href=""><p>Privacy Policy</p></a>
          <a href=""><p>Terms of Use</p></a>
          <a href=""><p>Legal</p></a>
          <a href=""><p>Site Map</p></a>
        </div>

        <div className="footer_rights">
          <div className="rights">
            <p>@2024. All rights reserved </p>
          </div>
        </div>
    </div>
  );
};

export default Footer;