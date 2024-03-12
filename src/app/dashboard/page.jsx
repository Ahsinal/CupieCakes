import Link from "next/link";
import React from "react";
import { Button, Container } from "react-bootstrap";

const Dashboard = () => {
  return (
    <section className="bg-dark">
      <Container className="d-flex align-items-center justify-content-center flex-column"  style={{ minHeight: "90vh" }}>
        <h1 className="text-white display-5 text-center ">
          Welcome to Dashboard
        </h1>
        <Button variant="light mt-2"><Link href='/' >Go Back</Link></Button>
      </Container>
    </section>
  );
};

export default Dashboard;
