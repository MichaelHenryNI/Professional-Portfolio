import React from "react";
import { Link } from "react-scroll";
import Typed from "react-typed";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";
import cv from "../../../assets/MichaelHenryCV.pdf";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details mt-3">
          <div className="colz">
            <div className="colz-icon">
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
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              <span className="highlighted-text">Michael Henry</span> | Northern
              Ireland
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typed
                  className="typed-text"
                  strings={[
                    "Senior Dev",
                    "Full Stack",
                    "React JS/TS",
                    ".NET",
                    "C#",
                    "SQL",
                    "PHP Laravel",
                    "HTML",
                    "SCSS",
                    "Azure DevOps",
                  ]}
                  typeSpeed={40}
                  backSpeed={60}
                  loop
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Knack of building applications with front and back end operations.
            </span>
          </div>

          <div className="profile-options">
            <Link smooth={true} key={"Contact Me"} to={"Contact Me"}>
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {" "}
                Hire Me{" "}
              </button>
            </Link>
            <a href={cv} download="MichaelHenryCV.pdf">
              <button className="btn highlighted-btn">Download CV</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
