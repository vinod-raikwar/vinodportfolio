import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import logo from "./images/vr-group-vector-logo.png"

const Header = () => {
  const common = {
    marginRight: 15,
    fontSize: 17,
    // letterSpacing:".Spx"
  }
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <div>
            <h2 style={{ color: "#6c63ff",fontSize: "1.8rem" }}><Nav.Link href="#home">Vinod Raikwar</Nav.Link></h2>
          </div>
          <div> 
            <img src={logo} width="50" height="35" alt="logo" />
          </div>
          <Nav className="auto">
            <div className="mt-1">
              <NavLink to="/" className="text-decoration-none" style={common}>Home</NavLink>
              <NavLink to="/about" className="text-decoration-none" style={common}>AboutUs</NavLink>
              <NavLink to="/playlist" className="text-decoration-none" style={common}>Projects</NavLink>
              <NavLink to="/contact" className="text-decoration-none" style={common}>ContactUs</NavLink>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
