import React from "react";
import vinod from "./images/vinod.jpg";
import "./About.css";

const About = () => {
  return (
    <>
      <div
        className="container mb3 about_container"
        style={{ minimumheight: "100%" }}
      >
        <div className="container main_container d-flex justify-contaier-around flex-wrap">
          <div className="left_container mt-5" style={{ width:600}}>
            <h2>Meet Vinod Raikwar</h2>
            <p
              style={{
                color: "#666",
                letterSpacing: ".5px",
                marginTop: 2,
                lineHeight: 2,
              }}
            >
             Hii, My name is Vinod Raikwar. I have completed my graduation with computer science in 2017 from vivekanand vigyan mahavidayala 
             (VVM college Betul). I have also done successfully MERN Full Stack developer internship certification in 2022 from edureka. 
             I am from amla distt-betul(M.P) but currently living in indore. I am a creative and hard working as well as smart working boy.
             I live in a nuclear family. I like sketching, playing and watching cricket and also i like playing puzzle games. Thats all abo me.
            <br></br>
             Thankyou!
            </p>
          </div>
          <div className="right_container mt-5">
            <img src= {vinod} alt="vinod"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
