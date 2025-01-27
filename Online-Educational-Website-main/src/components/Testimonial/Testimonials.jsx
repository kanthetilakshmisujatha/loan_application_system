import React from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

import img from "../../assests/images/testimonial01.png";

const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="10" md="12" className="m-auto">
            <div className="testimonial__wrapper d-flex justify-content-between align-items-center ">
              <div className="testimonial__img w-50">
                <img src={img} alt="" className="w-100" />
              </div>

              <div className="testimonial__content w-50">
                <h2 className="mb-4">Our Vision</h2>

                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent Team Work
                      </h6>
                      <p>
                      Ezfinanz offers consumer loans, wellness loans and personal loans to customers. Ezfinanz is a brand of Sai Roshni Capital Pvt Limited, Non-banking Financial Company(NBFC) incorporated under the Companies Act, 1956. Through this app, the customer can make payments and track schedule of the consumer loans and also can apply for personal loans.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Jhon </h6>
                        <p> United State</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent Team Work
                      </h6>
                      <p>
                      Personal loan tenure & charges:

Apply for instant personal loan upto 5 lacs and get quick approval and disbursal with minimum documentation.

<ul>
<li>1) Avail loan amounts ranging from Rs 50000 to Rs 5 lacs</li>

<li>2) Repayment tenure is 6 months to 60 months</li>

<li>3) Rate of interest/Annual percentage rate(APR) is 12% to 26%</li>

<li>4) Processing fee is Rs 1% to 3%</li>
</ul>
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Jhon </h6>
                        <p> United State</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent Team Work
                      </h6>
                      <p>
                      Representative example :


Total cost of the loan : Rs 2,48,000/-

Interest Rate: 12% per annum( flat rate) for 24 months

Principle Amount : Rs 2,00,000/-

Interest Amount : Rs 48,000/-

Monthly Payment : Rs 10,334/-

Process fee applicable : 1% on principle amount

Processing amount : Rs 2,000/- ( *Processing fee vary on tenure & loan amount)


Security & Protection of Privacy:

Data security & privacy is a top priority at Ezfinanz. Our backend APIs comply with mandated security standards and robust protocols.


<b>Contact us at care@ezfinanz.com or call us at +91 7347778899</b>


<b>or grievances, write to grievances@ezfinanz.comue!</b>
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Jhon</h6>
                        <p> United State</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
