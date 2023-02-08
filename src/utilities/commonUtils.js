import Home from "../PortfolioContainer/Home/Home";
import AboutMe from "../PortfolioContainer/AboutMe/AboutMe";
import Education from "../PortfolioContainer/Education/Education";
import Experience from "../PortfolioContainer/Experience/Experience";
import Skills from "../PortfolioContainer/Skills/Skills";
import Testimonial from "../PortfolioContainer/Testimonial/Testimonial";
import ContactMe from "../PortfolioContainer/ContactMe/ContactMe";

export const TOTAL_SCREENS = [
  {
    screen_name: "Home",
    component: Home,
    showInNavMenu: false,
  },
  {
    screen_name: "About Me",
    component: AboutMe,
    showInNavMenu: true,
  },
  {
    screen_name: "Education",
    component: Education,
    showInNavMenu: true,
  },
  {
    screen_name: "Experience",
    component: Experience,
    showInNavMenu: true,
  },
  {
    screen_name: "Skills",
    component: Skills,
    showInNavMenu: true,
  },
  {
    screen_name: "Testimonial",
    component: Testimonial,
    showInNavMenu: true,
  },
  {
    screen_name: "Contact Me",
    component: ContactMe,
    showInNavMenu: true,
  },
];

export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;

  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }

  return -1;
};
