import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Experience.css";

export default function Experience(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  // eslint-disable-next-line
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div
      className="experience-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="experience-parent">
        <ScreenHeading
          title={"Experience"}
          subHeading={"Where have I previously worked?"}
        />

        <div className="experience-wrapper">
          <div className="timeline-block timeline-block-left">
            <div className="marker"></div>
            <div className="timeline-content">
              <div className="experience-heading">
                <div className="experience-description">
                  Learning Pool, Derry
                </div>
                <div className="experience-date">Mar 2022 - Present</div>
              </div>
              <h5>Senior Software Developer</h5>
              <p>
                Working in an agile environment developing and maintaining
                Moodle-based Learning Management Systems (LMS) using React,
                Javascript, Typescript, PHP and SQL.
              </p>
              <p>
                Working closely with stakeholders in order to develop viable
                solutions to complex business requirements.
              </p>
              <p>
                Contributing to the planning, scoping and technical design of
                bespoke software projects.
              </p>
              <p>
                Working with other members of the software development team to
                ensure the successful and timely delivery of software projects.
              </p>
              <p>
                Using unit-testing and other testing approaches to ensure the
                software is robust and reliable.
              </p>
              <p>
                Reviewing code submissions from the team in order to meet coding
                standards.
              </p>
              <p>Following continuous integration and deployment processes.</p>
              <p>
                Being a group team leader while also having the responsibility
                of mentoring junior developers.
              </p>
            </div>
          </div>
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div className="timeline-content justify">
              <div className="experience-heading">
                <div className="experience-description">
                  Nitec Solutions Ltd, Antrim
                </div>
                <div className="experience-date">Oct 2018 - Mar 2022</div>
              </div>
              <h5>Software Developer</h5>
              <p>
                Working to various clients, producing responsive web
                applications to help their business needs. The industries that I
                catered for included vessel transport management, medical
                patient management & consumer goods.
              </p>
              <p>
                Upgraded, extended and maintained both client and in-house
                business critical systems using the latest web & cloud
                technologies.
              </p>
              <p>
                Consulting on the specification, implementation and deployment
                of software product creation and improvement working in an agile
                environment.
              </p>
              <p>
                Working closely with the customer through the full lifecycle
                which includes training and user acceptance and data migration.
              </p>
              <p>
                Systematic testing of client applications, providing test
                scripts with expected outcomes.
              </p>
              <p>
                Provided on and off site support for a range of client
                applications.
              </p>
              <p>
                Creating a base project for the dev team which allows the
                download and use as a template for when starting their new
                projects. This also included a list of all the example
                components that I strongly recommended them to use.
              </p>
              <p>Mentoring junior software developers.</p>
            </div>
          </div>
          {/* - */}
          <div className="timeline-block timeline-block-left">
            <div className="marker"></div>
            <div className="timeline-content">
              <div className="experience-heading">
                <div className="experience-description">
                  FP McCann Ltd, Magherafelt
                </div>
                <div className="experience-date">Jun 2016 - Oct 2018</div>
              </div>
              <h5>Graduate Software Developer</h5>
              <p>
                Upgraded, extended and maintained an in-house business support
                system utillising a SQL database system.
              </p>
              <p>Provide support for a range of client applications.</p>
              <p>
                Working with the changing requirements of the employees in a
                responsive efficient manner often influencing the employees and
                engaging with key decision makers.
              </p>
              <p>
                Consulted on the specification, implementation and deployment of
                software changes.
              </p>
              <p>
                Managed the timely delivery of individual and group projects.
              </p>
              <p>
                Responsible for all phases of a projects development lifecycle,
                from initial proposal through detailed planning, development,
                and test to final delivery.
              </p>
              <p>
                Created in-house procedure documents, training manuals and help
                guides.
              </p>
              <p>
                Coordinated client training to the introduction of upgrades and
                new functionality of the existing business support system.
              </p>
              <p>Systematic testing of client applications.</p>
              <p>
                Mentoring student placement software developers along with
                assigning and managing workloads for them.
              </p>
            </div>
          </div>
          {/* - */}
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div className="timeline-content">
              <div className="experience-heading">
                <div className="experience-description">
                  Capita, Newtownabbey
                </div>
                <div className="experience-date">Jun 2014 - Aug 2015</div>
              </div>
              <h5>Service Desk Analyst (Placement)</h5>
              <p>
                Provided a first, and single, point of contact into Capita
                Services Desks for all supported businesses.
              </p>
              <p>
                Deliver outstanding customer service a standard by answering all
                calls promptly, remaining courteous and professional at all
                times.
              </p>
              <p>
                Ensuring incoming incidents are logged accurately and that
                sufficient information is recorded in the relevant incident
                logging software, and following and adhering to stringent
                processes.
              </p>
              <p>
                Ensuring that all cases owned are resolved in accordance to the
                agreed Service Level Agreement (SLA).
              </p>
              <p>Training and mentoring new starters.</p>
              <p>Dealing with high level escalations.</p>
              <p>
                Diagnosing & troubleshooting hardware, software and networking
                incidents.
              </p>
              <p>
                Manually running install packages through Altiris console &
                Altiris client cache.
              </p>
              <p>
                Helping build a greater First Line Fix (FLF) capability within
                the Service Desk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
