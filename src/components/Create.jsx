import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import TopNavbar from "./TopNavbar";
import axios from "axios";
import { API_URL } from "../App";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Create() {
  const [name, setName] = useState("");
  const [user_name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone] = useState("");
  const [website, setWebsite] = useState("");

  let navigate = useNavigate();

  const handleCreate = async () => {
    try {
      let data = {
        name,
        user_name,
        email,
        phone_number,
        website,
        status: false,
      };
      let res = await axios.post(API_URL, data);
      if (res.status === 201) {
        navigate("/");
        toast.success("User Created Successfully");
      }
    } catch (error) {
      toast.danger("Data Failed");
    }
  };

  return (
    <>
      <TopNavbar />
      <br />
      <div className="container-fluid ">
        <Form>
          <Form.Group className="mb-3 ">
            <Form.Label className="fw-bold">Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Group>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label className="fw-bold">Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label className="fw-bold">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label className="fw-bold">Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Phone Number"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label className="fw-bold">Website</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Website"
                onChange={(e) => {
                  setWebsite(e.target.value);
                }}
              />
            </Form.Group>
          </Row>

          <Button variant="success" onClick={() => handleCreate()}>
            Add User
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Create;
