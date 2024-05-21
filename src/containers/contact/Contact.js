import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import email from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


export default function Contact() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact" id="contact">
        <div className="contact-div-main">
          <div className="contact-text">
          <div
              className={
                isDark ? "dark-mode contact-header" : "contact-header"
              }
            >
              {contactInfo.title}
              </div>
              <div
              className={
                isDark ? "dark-mode-contact-line" : "contact-line"
              }
            >
              {contactInfo.subtitle}
              </div>
            <div
              className={
                isDark ? "dark-mode contact-des-div" : "contact-des-div"
              }
            >
              {contactInfo.designation}
              </div> 
              <div
              className={
                isDark ? "dark-mode contact-location-div" : "contact-location-div"
              }
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              {' '}
              {contactInfo.location}
              </div> 
              <div
              className={
                isDark ? "dark-mode contact-email-div" : "contact-email-div"
              }
            >
              {contactInfo.email_address}
              </div> 
              <br />
              <SocialMedia />
            </div>
          <div className="contact-image-div" style={{ marginTop: '-60px' }}>
              <DisplayLottie 
              animationData={email}
              className="lottie-animation"
               />
          </div>
        </div>
      </div>
    </Fade>
  );
}
