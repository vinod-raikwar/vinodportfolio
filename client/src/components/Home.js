import React from "react";
import Button from "react-bootstrap/Button";
import Homeimage from "./images/R.jpg"
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="container home_container">
        <div className="home_innerdiv">
          <div className="left_div">
            <h2>
              Welcome to <span style={{ color: "#6c63ff" }}>Vinod Raikwar</span>
            </h2>
            <p style={{ color: "#666", letterSpacing: ".5px", marginTop: "2" }}>

              I'm MERN Full Stack Developer, Certified by @edureka. The crossover between design and programming has always been of interest to
              me, I've been lucky to learn alongside some talented teams on a number of high profile websites. I have a wide range of skills that
              include back-end development using open source technologies(NodeJs & Express.js), database(MongoDB). design(working closely with 
              designes), front-end development (HTML5,CSS3,Javascript,ReactJs,bootstrap)
            </p>
            <div className="btn_div mt-4">
              <Button
                variant="danger" href="https://github.com/vinod-raikwar" target="main"
                style={{
                  letterSpacing: "1px",
                  border: "none",
                  borderRadius: "4",
                  backgroundColor: "#2f2d69",
                  marginRight: "24px",
                }}
              >
                GitHub
              </Button>{" "}
              <Button
                variant="danger" href="https://www.linkedin.com/in/vinod-raikwar/" target="main"
                style={{
                  letterSpacing: "1px",
                  border: "none",
                  borderRadius: "4",
                  backgroundColor: "#00a0dc",
                  marginLeft: "24px",
                }}
              >
                Linkedin
              </Button>{" "}
            </div>
          </div>
          <div className="right_div">
            <img src={Homeimage} alt="pic" width={600}></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
