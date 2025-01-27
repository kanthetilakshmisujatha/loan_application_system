import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/hero-img1.png";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
              Welcome to the Loan Application Portal
              </h2>
              <p className="mb-5">
              Welcome to <strong>EasyLoan</strong> - your trusted partner for hassle-free loan applications.
        Whether you're looking to achieve a dream, expand your business, or tackle unexpected expenses,
        we've got you covered. <br />
        Sign up today and take the first step towards financial freedom, or log in to continue your journey with us.
              </p>
            </div>
            <div className="search">
              <input type="text" placeholder="Search" />
              <button className="btn">Search</button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
