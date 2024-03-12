"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { IoIosSearch } from "react-icons/io";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";

const Header = () => {
  const [windowChange, setWindowChange] = useState(false);
  useEffect(() => {
    const changeNavbarPosition = () => {
      if (window.scrollY >= 100) {
        setWindowChange(true);
      } else {
        setWindowChange(false);
      }
    };
    window.addEventListener("scroll", changeNavbarPosition);
    return () => {
      window.removeEventListener("scroll", changeNavbarPosition);
    };
  }, []);
  return (
    <header className={`w-100 ${windowChange ? "sticky" : ""}`}>
      <Navbar expand="lg" className="shadow">
        <Container className=" d-flex justify-content-between">
          <Navbar.Brand href="/" as={Link}>
            <img
              src="/assets/image/logodark.svg"
              alt="logo"
              width={160}
              height={80}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto d-flex gap-2"
              style={{ maxHeight: "500px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/">Services</Nav.Link>
              <Nav.Link href="/">Cakes</Nav.Link>
              <Nav.Link href="/">Gallery</Nav.Link>
              <Nav.Link href="/">Contact</Nav.Link>
            </Nav>
            <div className="d-lg-flex align-items-center gap-4 ">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search Here.."
                  className="me-1"
                  aria-label="Search"
                />
                <div className="h3">
                  <IoIosSearch />
                </div>
              </Form>
              <div className="h3 nav-icons">
                <Link href="/cart">
                  <FaShoppingCart />
                </Link>
              </div>
              <div className="h3 nav-icons">
                <Link href="/profile">
                  <FaUserCircle />
                </Link>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
