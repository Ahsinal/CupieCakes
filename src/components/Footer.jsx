import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <section className="shadow py-4">
        <Container>
          <Row className="d-flex align-items-center">
            <Col lg={3} sm={12}>
              <Link href="/">
                <img
                  src="/assets/image/logodark.svg"
                  alt="logo"
                  width={200}
                  height={50}
                />
              </Link>
              <div className="d-flex footer-socials gap-3 h4">
                <Link href="/">
                  <FaFacebook />
                </Link>
                <Link href="/">
                  <FaTwitter />
                </Link>
                <Link href="/">
                  <FaPinterest />
                </Link>
                <Link href="/">
                  <FaInstagram />
                </Link>
              </div>
            </Col>
            <Col lg={3} sm={12}>
              <h5 className="mb-2">Categories</h5>
              <ul className="p-0">
                <li>
                  <Link href="/">Cupcakes</Link>
                </li>
                <li>
                  <Link href="/">Cupcakes</Link>
                </li>
                <li>
                  <Link href="/">Cupcakes</Link>
                </li>
                <li>
                  <Link href="/">Cupcakes</Link>
                </li>
              </ul>
            </Col>
            <Col lg={3} sm={12}>
              <h5 className="mb-2">Services</h5>
              <ul className="p-0">
                <li>
                  <Link href="/">Cupcakes</Link>
                </li>
                <li>
                  <Link href="/">Cupcakes</Link>
                </li>
                <li>
                  <Link href="/">Cupcakes</Link>
                </li>
                <li>
                  <Link href="/">Cupcakes</Link>
                </li>
              </ul>
            </Col>
            <Col lg={3} sm={12}>
              <h5 className="mb-2">Information</h5>
              <ul className="p-0">
                <li>
                  <Link href="/">Cupcakes</Link>
                </li>
                <li>
                  <Link href="/">Cupcakes</Link>
                </li>
                <li>
                  <Link href="/">Cupcakes</Link>
                </li>
                <li>
                  <Link href="/">Cupcakes</Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      <section style={{ backgroundColor: "#F5F4F5" }}>
        <Container className="py-3">
          <div className="text-center small">
            © 2022 <strong>Bakerfresh</strong> Made with by{" "}
            <Link href="/">BootXperts</Link>
          </div>
        </Container>
      </section>
    </footer>
  );
};

export default Footer;
