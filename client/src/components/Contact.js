import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [inputvalue, setInputvalue] = useState({
    //ek hi state m sare input ki value get kar rahe hai isliye block liye
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    message: "",
  });
  console.log(inputvalue);

  const getvalue = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInputvalue(() => {
      return {
        ...inputvalue,
        [name]: value,
      };
    });
  };

  const sentUserdata = async (e) => {
    e.preventDefault();

    const { fname, lname, email, mobile, message } = inputvalue;
    if (fname === "") {
      toast.error("Fname is required");
    } else if (lname === "") {
      toast.error("Lname is required");
    } else if (email === "") {
      toast.error("Email is required");
    } else if (!email.includes("@")) {
      toast.error("Invalid email address");
    } else if (mobile === "") {
      toast.error("Mobile is required");
    } else {
      const res = await fetch("http://localhost:6002/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fname,
          lname,
          email,
          mobile,
          message,
        }),
      });
      const data = await res.json();
      console.log(data);
      if (data.status === 201) {
        toast.success("Your Response Submitted");
        setInputvalue({
          ...inputvalue,
          fname: "",
          lname: "",
          email: "",
          mobile: "",
          message: "",
        });
      }
    }
  };

  return (
    <>
      <div className="container mb-5 contact">
        <h2 className="text-center">ContactUs</h2>
        <div className="container mt-4">
          <Form className="row mt-2">
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="fname"
                value={inputvalue.fname}
                onChange={getvalue}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lname"
                value={inputvalue.lname}
                onChange={getvalue}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={inputvalue.email}
                onChange={getvalue}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="string"
                name="mobile"
                value={inputvalue.mobile}
                onChange={getvalue}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                value={inputvalue.message}
                onChange={getvalue}
              />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button
                variant="primary"
                className="col-lg-6"
                type="submit"
                onClick={sentUserdata}
              >
                Submit
              </Button>
            </div>
          </Form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default Contact;
