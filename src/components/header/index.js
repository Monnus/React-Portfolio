import React from "react";
import headerimage from "../../images/header-image.png";
import Body from "../body";
import ReactSvg from "../../images/svgs/bxl_react.svg";
import JavascriptSvg from "../../images/svgs/ic_sharp-javascript.svg";
import FirbaseSvg from "../../images/svgs/teenyicons_firebase-outline.svg";
import ExpoSvg from "../../images/svgs/cib_expo.svg";
const Profile = () => {

  return (
    <>
      <div
        style={{ height: "2.64rem", width: "100%", backgroundColor: "#43291A" }}
      ></div>
        <header>
          <h1 className="desktop-h1-header">Web & Mobile developer</h1>
          <div className="bgImage-person-on-pc"
            style={{
              position: "relative",
    backgroundImage:`url(${headerimage})`,
    backgroundSize: "cover",
    backgroundRepeat: "none",
            }}
          >
            <img
            className="profileImaged"
              src={require("../../images/myProfile-img.jpg")}
              alt="My Profile Img"
              style={{
                borderRadius: "100% 0 0 100%",
             
              
              }}
            ></img>
          </div>
      <div className="desktop-show-about">
      <h3 style={{ marginBottom: "10px",fontWeight:"500",letterSpacing:"2px" }}>Maundrian Velsket</h3>
      <h4 style={{color:"white",fontWeight:"100",fontSize:"2rem",letterSpacing:"2px"}}>My Passion</h4>
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
<div style={{width:"70%",height:"max-coontent",display:"flex",alignContent:"flex-start",justifyContent:"space-between"}}>
<img src={JavascriptSvg} style={{ width: "100px", height: "100px" }}/>
<img src={FirbaseSvg} style={{ width: "100px", height: "100px" }} />
<img src={ExpoSvg} style={{ width: "100px", height: "100px" }} />
<img src={ReactSvg} style={{ width: "100px", height: "100px" }} />

</div>
      <br />
      </div>
        </header>
      <Body />
    </>
  );
};

export default Profile;
