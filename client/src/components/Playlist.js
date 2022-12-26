import React, { Fragment, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import projectData from "./data";
import Spinner from 'react-bootstrap/Spinner';

const Playlist = () => {

  const [spin, setSpin] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSpin(false);

    }, 1000)
  }, [])

  return (
    < >
      {
        spin ? <div className="d-flex justify-content-center align-items-center" style={{ height: "90vh" }}>
          <Spinner animation="border" variant="info" /> &nbsp;&nbsp; Loading...
        </div> :
          <div className="container">
            <h2 className="text-center mt-2">Projects</h2>
            <div className="card_div">
              <div className="row d-flex justify-content align-items-center">
                {
                  projectData.map((element, index) => {
                    return (
                      <>
                        <Card
                          style={{ width: "22rem", heigh: "12rem" }} className="mt-4 mb-4 mx-4 my-4">
                          <Card.Img variant="top" style={{ width: "20rem", margin: "13", paddingTop: "1rem" }} src={element.imagsrc} />
                          <Card.Body >
                            <Card.Title className="text-center">{element.projectName}</Card.Title>
                            <Card.Text></Card.Text>
                            <Button className="btn-block col-lg-12">
                              <a href={element.demo} target="blank" className="text-decoration-none text-light">Live Demo </a>
                            </Button>
                          </Card.Body>
                        </Card>
                      </>
                    )
                  })
                }
              </div>
            </div>
          </div>
      }
    </>

  );
};

export default Playlist;
