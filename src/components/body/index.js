import React from "react";
import { Box } from "@mui/material";
import ReactSvg from "../../images/svgs/bxl_react.svg";
import JavascriptSvg from "../../images/svgs/ic_sharp-javascript.svg";
import FirbaseSvg from "../../images/svgs/teenyicons_firebase-outline.svg";
import ExpoSvg from "../../images/svgs/cib_expo.svg";
import GithubSvgs from "../../images/svgs/GithubSvg.svg";
import FacebookSvg from "../../images/svgs/facebookSvg.svg";
import TwitterSvg from "../../images/svgs/TwitterSvgs.svg";
import LinkInSvg from "../../images/svgs/LinkInSvg.svg";
import EmailSvg from "../../images/svgs/EmailSvg.svg";
import { JavascriptTwoTone } from "@mui/icons-material";
const Body = () => {
  return (
    <>
      <div className="grid-wrapper">
        <h2 className="heading2">Maundrian Velsket</h2>

        <div className="paragraph">
          <h3 style={{ marginBottom: "10px" }}>Short story:</h3>
          <p>
            I am a junior software developer. My journey with Code-Tribe a
            skills development program taught me to dedicate myself to
            programming/development. I have proven to my superiors that I am a
            dedicated hard worker and a strong-minded individual. I have
            acquired problem-solving skills, I have learned to develop in
            different frameworks like Firebase, React and React-native(Expo) ,
            and I have developed excellent organisational and time managment
            skills. I have database knowledge and most Important data structures
            and algorithms skills. I also have the ability to self-train for new
            projects and technologies. .
          </p>
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <img src={ReactSvg} style={{ width: "100px", height: "100px" }} />
            <img
              src={JavascriptSvg}
              style={{ width: "100px", height: "100px" }}
            />
          </div>
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <img src={FirbaseSvg} style={{ width: "100px", height: "100px" }} />
            <img src={ExpoSvg} style={{ width: "100px", height: "100px" }} />
          </div>
        </div>
      </div>
      {/* here is secoond part of the body */}
      <div className="grid-wrapper2">
        <div className="heading3">
          <h1 className="heading3">My Proven work</h1>
          <p className="secondPeragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            pellentesque dapibus erat vel euismod. Nulla facilisi. Donec
            pulvinar bibendum facilisis. Donec in luctus nibh. Phasellus justo
            sapien, ultrices ut nulla vel, auctor placerat est. Nullam sodales
            tellus quis lacus aliquet faucibus. Nunc lacus justo, elementum non
            cursus a, mollis ac augue. Curabitur blandit dapibus metus, id
            tempor turpis aliquam id. Vivamus nec venenatis augue. Mauris ut
            dictum tellus.
          </p>
        </div>
        <div className="container-box-mobile">
          <div className="projects-styles">
            <div className="project-box">
              <h3 className="projectsH2">Hotal Plaza</h3>
              <img src={ReactSvg} style={{ width: "100px", height: "100px" }} />
              <p>
                Hotal plaza a hotal website demo designed with ReactJS to
                mirrior a working online hotal site you are able to view the
                site as well by clicking here.
              </p>
            </div>
          </div>
          <div className="projects-styles">
            <div className="project-box">
              <h3 className="projectsH2">Hotal Plaza</h3>
              <img src={ReactSvg} style={{ width: "100px", height: "100px" }} />
              <p>
                Hotal plaza a hotal website demo designed with ReactJS to
                mirrior a working online hotal site you are able to view the
                site as well by clicking here.
              </p>
            </div>
          </div>
          <div className="projects-styles">
            <div className="project-box">
              <h3 className="projectsH2">Hotal Plaza</h3>
              <img src={ReactSvg} style={{ width: "100px", height: "100px" }} />
              <p>
                Hotal plaza a hotal website demo designed with ReactJS to
                mirrior a working online hotal site you are able to view the
                site as well by clicking here.
              </p>
            </div>
          </div>
          <div className="projects-styles">
            <div className="project-box">
              <h3 className="projectsH2">Hotal Plaza</h3>
              <img src={ReactSvg} style={{ width: "100px", height: "100px" }} />
              <p>
                Hotal plaza a hotal website demo designed with ReactJS to
                mirrior a working online hotal site you are able to view the
                site as well by clicking here.
              </p>
            </div>
          </div>
        </div>
        {/* ================================== */}
        <div className="container-box-desktop">
          <div className="ringElement">
            <div className="projects-styles">
              <img src={ReactSvg} style={{ width: "100px", height: "100px" }} />
              <div className="project-box">
                <h3 className="projectsH2">Hotal Plaza</h3>
                <p>
                  Hotal plaza a hotal website demo designed with ReactJS to
                  mirrior a working online hotal site you are able to view the
                  site as well by clicking here.
                </p>
              </div>
            </div>
          </div>
          <div className="ringElement">
            <div className="projects-styles">
              <img
                src={JavascriptSvg}
                style={{ width: "100px", height: "100px" }}
              />
              <div className="project-box">
                <h3 className="projectsH2">Pig Game</h3>
                <p>
                  This is a game develop in Javascript, you play with a partner,
                  you and your parnter roll the dice till one of you reach a
                  100.if you reach a 100 you win the game.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="ringElement">
            <div className="projects-styles">
              <img src={ExpoSvg} style={{ width: "100px", height: "100px" }} />
              <div className="project-box">
                <h3 className="projectsH2">AniRead</h3>
                <p>
                  A mobile app developed in React-native{"(Expo)"}, its purpose
                  is to give you data about your favourite anime or manga,read
                  character profiles,vice actors ect.
                </p>
              </div>
            </div>
          </div>
          <div className="ringElement">
            <div className="projects-styles">
              <img
                src={FirbaseSvg}
                style={{ width: "100px", height: "100px" }}
              />
              <div className="project-box">
                <h3 className="projectsH2">Resturant app</h3>
                <p>
                Created a Resturant app using expo and firebase to capture user imput to put inside a database for to end-user.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div style={{ padding: "1rem", width: "100%", height: "100%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: "auto",
            }}
          >
            <h2 style={{fontSize:"2rem",fontWeight:"600"}}>Contect Me</h2>
            <br />
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={EmailSvg} alt="email icon" />
              <h5>maundrian@livumtrade.co.za</h5>
            </div>
            <br />
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={EmailSvg} alt="email icon" />
              <h5>maun2velsket@gmail.com</h5>
            </div>
          </div>
          <div>
            <br />
            <br />

            <h2>Links</h2>
            <div
              style={{
                display: "flex",
                width: "30%",
                height: "auto",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              <a href="https://github.com/Monnus">
                {" "}
                <img src={GithubSvgs} alt="Github icon" />
              </a>
              <a href="https://www.linkedin.com/mwlite/in/maundrian-velsket-8859421ba">
                {" "}
                <img src={LinkInSvg} alt="LinkedIn" />
              </a>
              <img src={FacebookSvg} alt="facebook icon" />
              <img src={TwitterSvg} alt="twitter icon" />
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#43291A",
            height: "4.5rem",
            width: "100%",
          }}
        ></div>
      </footer>
    </>
  );
};

export default Body;
