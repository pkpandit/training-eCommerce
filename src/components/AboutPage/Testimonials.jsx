import React from "react";
import { BsQuote } from "react-icons/bs";
const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <div className="testimonial-masonry">
          <div className="testimonial-item" data-aos="fade-up">
            <div className="testimonial-content">
              <div className="quote-pattern">
                <BsQuote />
              </div>
              <p>
                Implementing innovative strategies has revolutionized our
                approach to market challenges and competitive positioning.
              </p>
              <div className="client-info">
                <div className="client-image">
                  <img src="./img/person/person-f-7.webp" alt="Client" />
                </div>
                <div className="client-details">
                  <h3>Rachel Bennett</h3>
                  <span className="position">Strategy Director</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="testimonial-item highlight"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="testimonial-content">
              <div className="quote-pattern">
                <BsQuote />
              </div>
              <p>
                Exceptional service delivery and innovative solutions have
                transformed our business operations, leading to remarkable
                growth and enhanced customer satisfaction across all
                touchpoints.
              </p>
              <div className="client-info">
                <div className="client-image">
                  <img src="./img/person/person-m-7.webp" alt="Client" />
                </div>
                <div className="client-details">
                  <h3>Daniel Morgan</h3>
                  <span className="position">Chief Innovation Officer</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="testimonial-item"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="testimonial-content">
              <div className="quote-pattern">
                <BsQuote />
              </div>
              <p>
                Strategic partnership has enabled seamless digital
                transformation and operational excellence.
              </p>
              <div className="client-info">
                <div className="client-image">
                  <img src="./img/person/person-f-8.webp" alt="Client" />
                </div>
                <div className="client-details">
                  <h3>Emma Thompson</h3>
                  <span className="position">Digital Lead</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="testimonial-item"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="testimonial-content">
              <div className="quote-pattern">
                <i className="bi bi-quote"></i>
              </div>
              <p>
                Professional expertise and dedication have significantly
                improved our project delivery timelines and quality metrics.
              </p>
              <div className="client-info">
                <div className="client-image">
                  <img src="./img/person/person-m-8.webp" alt="Client" />
                </div>
                <div className="client-details">
                  <h3>Christopher Lee</h3>
                  <span className="position">Technical Director</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="testimonial-item highlight"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="testimonial-content">
              <div className="quote-pattern">
                <BsQuote />
              </div>
              <p>
                Collaborative approach and industry expertise have
                revolutionized our product development cycle, resulting in
                faster time-to-market and increased customer engagement levels.
              </p>
              <div className="client-info">
                <div className="client-image">
                  <img src="./img/person/person-f-9.webp" alt="Client" />
                </div>
                <div className="client-details">
                  <h3>Olivia Carter</h3>
                  <span className="position">Product Manager</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="testimonial-item"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="testimonial-content">
              <div className="quote-pattern">
                <BsQuote />
              </div>
              <p>
                Innovative approach to user experience design has significantly
                enhanced our platform's engagement metrics and customer
                retention rates.
              </p>
              <div className="client-info">
                <div className="client-image">
                  <img src="./img/person/person-m-13.webp" alt="Client" />
                </div>
                <div className="client-details">
                  <h3>Nathan Brooks</h3>
                  <span className="position">UX Director</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
