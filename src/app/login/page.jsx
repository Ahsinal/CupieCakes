"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Container, Form, Button } from "react-bootstrap";

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const response = await axios.post(
        "https://bakerybackend.onrender.com/api/users/login",
        {
          username,
          password,
        }
      );
      // console.log(response);
      router.push("/dashboard");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError(error.response.data.message);
        alert(error.response.data.message);
      }
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
          <Button variant="primary" type="submit" onClick={handleLogin}>
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
