import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <section className="bg-cover">
        <Container className="p-5 d-flex align-items-center ">
          <div className="py-5 mt-5 text-white">
            <img
              src="/assets/image/bannericon.webp"
              alt="icon"
              width={80}
              height={80}
              className="img-fluid"
            />
            <h1 className="display-2 mt-4 playfair fw-bold">
              {" "}
              We Bake With Passion
            </h1>
            <p className="mt-4">
              Indulge in our mouth-watering cakes made with love and passion.
            </p>
            <Link
              href="/"
              className="btn btn-lg btn-warning rounded-5 text-light fw-bold mt-4"
            >
              Read More
            </Link>
          </div>
        </Container>
      </section>
      <section className="py-5" style={{ backgroundColor: "#3D4857" }}>
        <div className="text-white text-center">
          <h5>Delicious Cakes Just for You</h5>
          <p>Indulge in our mouth-watering cakes made with love and passion.</p>
        </div>
      </section>
      <section>
        <Container>
          <Row className="d-flex align-items-center">
            <Col lg={6} sm={12}>
              <h4 className="playfair fw-bold" style={{color:"#BC8157"}}>about us</h4>
            </Col>
            <Col lg={6} sm={12}>
              <img src="" alt="about-img"  className="img-fluid"/>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
