import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  // eslint-disable-next-line
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    highlights: {
      bullets: [
        "Full stack web development",
        "Specialty in Front End development",
        "React Javascript & Typescript",
        "Building REST API",
        "Managing database",
      ],
      heading: "Here are a Few Highlights:",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="about-me-highlight" key={i}>
        <div className="about-me-bullets"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              <p>
                Hi there and thank you for taking the time to view my portfolio!
                My name is Michael Henry, I am a Full Stack Web Developer based
                in Northern Ireland with +7 years experience in developing
                software & website applications with utmost efficiency.
              </p>
              <p>
                I am an experienced developer with a vast array of knowledge in
                many different frontend and backend languages, responsive
                frameworks, databases, and best coding practices.
              </p>
              <p>
                My objective is simply to become the best web developer that I
                can be and use my skills and knowledge that I have obtained over
                the years to be an asset for an organisation to achieve their
                objective and goals. I am always eager to learn from more
                seasoned developers while remaining humble and continuously
                making strides to learn all that I can about development.
              </p>
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
