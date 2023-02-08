import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Education.css";

export default function Education(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  // eslint-disable-next-line
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div
      className="education-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="education-parent">
        <ScreenHeading
          title={"Education"}
          subHeading={"Where have I studied?"}
        />
        <div className="education-card">
          <div className="education-profile"></div>
          <div className="education-details">
            <div className="education-heading">
              <div className="education-description">
                Ulster University, Coleraine
              </div>
              <div className="education-date">2012 - 2016</div>
            </div>
            <div className="education-title">
              BSc Honours Degree in Computing FT with Diploma in Professional
              Practice (2:1)
            </div>
          </div>
        </div>

        <div className="education-card mt-5">
          <div className="education-profile-2"></div>
          <div className="education-details">
            <div className="education-heading">
              <div className="education-description">
                St Patrick's College, Maghera
              </div>
              <div className="education-date">2005 - 2012</div>
            </div>
            <div className="education-title">
              3 A-Levels & 8 GCSEs including Maths & English
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
