import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Skills.css";

export default function Skills(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  // eslint-disable-next-line
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const programmingSkillsDetails = [
    { skill: "React", ratingPercentage: 95 },
    { skill: "Typescript", ratingPercentage: 90 },
    { skill: "Javascript", ratingPercentage: 90 },
    { skill: "Bootstrap", ratingPercentage: 95 },
    { skill: "Material UI", ratingPercentage: 95 },
    { skill: "HTML", ratingPercentage: 85 },
    { skill: "CSS", ratingPercentage: 80 },
    { skill: "C#", ratingPercentage: 75 },
    { skill: "Microsoft Azure", ratingPercentage: 75 },
    { skill: "SQL", ratingPercentage: 70 },
    { skill: "PHP", ratingPercentage: 50 },
    { skill: "Java", ratingPercentage: 50 },
  ];

  return (
    <div
      className="skills-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="skills-parent">
        <ScreenHeading
          title={"Programming Skills"}
          subHeading={"What can I do well?"}
        />
        <div className="skills-card">
          <div
            className="resume-screen-container programming-skills-container"
            key="programming-skills"
          >
            {programmingSkillsDetails.map((skill, index) => (
              <div className="skill-parent" key={index}>
                <span>{skill.skill}</span>
                <div className="skill-percentage">
                  <div
                    style={{ width: skill.ratingPercentage + "%" }}
                    className="active-percentage-bar"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
