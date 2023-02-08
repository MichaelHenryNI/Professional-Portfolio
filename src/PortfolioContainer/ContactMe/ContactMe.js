import React from "react";
import Typical from "react-typical";

import imgBack from "../../../src/images/mailz.jpeg";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Footer from "../../PortfolioContainer/footer/Footer";
import "./ContactMe.css";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  // eslint-disable-next-line
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical loop={Infinity} steps={["Get In Touch 📲", 2000]} />
          </h2>
        </div>
        <div className="back-form">
          <div className="img-back">
            <img src={imgBack} alt="not found" />
          </div>
        </div>
        <div className="social">
          <h5>
            Feel free to get in touch with me on one of the following options
            below. I am always open to discussing new opportunities to be part
            of something that matches the same ambitions as my own!
          </h5>
          <a
            aria-label="Email"
            rel="noreferrer"
            href="mailto:Michael10Henry@gmail.com"
          >
            <i className="fa fa-envelope" />
          </a>
          <a
            aria-label="Linked In"
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/michaelhenryni/"
          >
            <i className="fa fa-linkedin-square" />
          </a>
          <a
            aria-label="Instagram"
            rel="noreferrer"
            target="_blank"
            href="https://www.instagram.com/michael_10_henry/"
          >
            <i className="fa fa-instagram" />
          </a>
          <a
            aria-label="Twitter"
            rel="noreferrer"
            target="_blank"
            href="https://twitter.com/_MichaelHenry"
          >
            <i className="fa fa-twitter" />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
