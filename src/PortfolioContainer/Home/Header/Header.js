import React, { useState } from "react";
import { Link } from "react-scroll";
import { TOTAL_SCREENS } from "../../../utilities/commonUtils";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

export default function Header() {
  // eslint-disable-next-line
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [showHeaderOptions, setShowHeaderOptions] = useState(false);

  const getHeaderOptions = () => {
    return TOTAL_SCREENS.map(
      (Screen, i) =>
        Screen.showInNavMenu && (
          <Link
            smooth={true}
            key={Screen.screen_name}
            className={getHeaderOptionsClasses(i)}
            to={Screen.screen_name}
            onClick={() => setShowHeaderOptions(false)}
          >
            <span>{Screen.screen_name}</span>
          </Link>
        )
    );
  };

  const getHeaderOptionsClasses = (index) => {
    let classes = "header-option ";
    if (index < TOTAL_SCREENS.length - 1) classes += "header-option-seperator ";

    if (selectedScreen === index) classes += "selected-header-option ";

    return classes;
  };

  return (
    <div className="header-container">
      <div className="header-parent">
        <div className="header-logo">
          <span>Michael</span>
        </div>
        <div
          className="header-hamburger"
          onClick={() => setShowHeaderOptions(!showHeaderOptions)}
        >
          <FontAwesomeIcon className="header-hamburger-bars" icon={faBars} />
        </div>
        <div
          className={
            showHeaderOptions
              ? "header-options show-hamburger-options"
              : "header-options"
          }
        >
          {getHeaderOptions()}
        </div>
      </div>
    </div>
  );
}
