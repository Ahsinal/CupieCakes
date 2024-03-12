"use client";
import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleRole = (e) => {
    setRole(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const response = await axios.post(
        "https://bakerybackend.onrender.com/api/users/register",
        {
          username,
          password,
          email,
          role,
          phone,
          address,
        }
      );
      console.log(response);
      console.log("user registered successfully");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container className="my-5 py-5">
      <div
        className="w-50 mx-auto rounded-1  p-5"
        style={{ backgroundColor: "#acc7d4" }}
      >
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username:</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={handleUsername}
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={handlePassword}
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="text"
              value={email}
              onChange={handleEmail}
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Role</Form.Label>
            <div>
              <Form.Check
                inline
                label="Superadmin"
                type="radio"
                name="role"
                value="superadmin"
                checked={role === "superadmin"}
                onChange={handleRole}
              />
              <Form.Check
                inline
                label="Admin"
                type="radio"
                name="role"
                value="admin"
                checked={role === "admin"}
                onChange={handleRole}
              />
              <Form.Check
                inline
                label="User"
                type="radio"
                name="role"
                value="user"
                checked={role === "user"}
                onChange={handleRole}
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="phone"
              value={phone}
              onChange={handlePhone}
              placeholder="Phone Number"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              value={address}
              onChange={handleAddress}
              placeholder="Address"
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleRegister}>
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Signup;
