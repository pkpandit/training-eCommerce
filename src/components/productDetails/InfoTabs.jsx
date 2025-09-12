import React from "react";
import {
  BsBatteryCharging,
  BsChatDots,
  BsCheckCircle,
  BsFillVolumeUpFill,
  BsHandThumbsUp,
  BsPersonAdd,
  BsStarFill,
  BsStarHalf,
  BsWifi,
} from "react-icons/bs";

const InfoTabs = () => {
  return (
    <div className="row mt-5" data-aos="fade-up" data-aos-delay="300">
      <div className="col-12">
        <div className="info-tabs-container">
          <nav className="tabs-navigation nav">
            <button
              className="nav-link active"
              data-bs-toggle="tab"
              data-bs-target="#ecommerce-product-details-5-overview"
              type="button"
            >
              Overview
            </button>
            <button
              className="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#ecommerce-product-details-5-technical"
              type="button"
            >
              Technical Details
            </button>
            <button
              className="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#ecommerce-product-details-5-customer-reviews"
              type="button"
            >
              Reviews (127)
            </button>
          </nav>

          <div className="tab-content">
            {/* Overview tab */}

            <div
              className="tab-pane fade show active"
              id="ecommerce-product-details-5-overview"
            >
              <div className="overview-content">
                <div className="row g-4">
                  <div className="col-lg-8">
                    <div className="content-section">
                      <h3>Product Overview</h3>
                      <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia consequuntur magni dolores
                        eos qui ratione voluptatem sequi nesciunt. Neque porro
                        quisquam est, qui dolorem ipsum quia dolor sit amet,
                        consectetur, adipisci velit.
                      </p>

                      <h4>Key Highlights</h4>
                      <div className="highlights-grid">
                        <div className="highlight-card">
                          <BsFillVolumeUpFill />

                          <h5>Superior Audio</h5>
                          <p>
                            Ut enim ad minima veniam quis nostrum exercitationem
                          </p>
                        </div>
                        <div className="highlight-card">
                          <BsBatteryCharging />

                          <h5>Long Battery</h5>
                          <p>Excepteur sint occaecat cupidatat non proident</p>
                        </div>
                        <div className="highlight-card">
                          <BsWifi />

                          <h5>Wireless Tech</h5>
                          <p>
                            Duis aute irure dolor in reprehenderit in voluptate
                          </p>
                        </div>
                        <div className="highlight-card">
                          <BsPersonAdd />

                          <h5>Comfort Fit</h5>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="package-contents">
                      <h4>Package Contents</h4>
                      <ul className="contents-list">
                        <li>
                          <BsCheckCircle />
                          Premium Audio Device
                        </li>
                        <li>
                          <BsCheckCircle />
                          Premium Carrying Case
                        </li>
                        <li>
                          <BsCheckCircle />
                          USB-C Fast Charging Cable
                        </li>
                        <li>
                          <BsCheckCircle />
                          3.5mm Audio Connector
                        </li>
                        <li>
                          <BsCheckCircle />
                          Quick Start Guide
                        </li>
                        <li>
                          <BsCheckCircle />
                          Warranty Documentation
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Technical details tab */}

            <div
              className="tab-pane fade"
              id="ecommerce-product-details-5-technical"
            >
              <div className="technical-content">
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="tech-group">
                      <h4>Audio Specifications</h4>
                      <div className="spec-table">
                        <div className="spec-row">
                          <span className="spec-name">Frequency Range</span>
                          <span className="spec-value">15Hz - 25kHz</span>
                        </div>
                        <div className="spec-row">
                          <span className="spec-name">Driver Diameter</span>
                          <span className="spec-value">50mm Dynamic</span>
                        </div>
                        <div className="spec-row">
                          <span className="spec-name">Sensitivity</span>
                          <span className="spec-value">98dB SPL</span>
                        </div>
                        <div className="spec-row">
                          <span className="spec-name">Impedance</span>
                          <span className="spec-value">24 Ohm</span>
                        </div>
                        <div className="spec-row">
                          <span className="spec-name">THD</span>
                          <span className="spec-value">&lt; 0.5%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="tech-group">
                      <h4>Connectivity &amp; Power</h4>
                      <div className="spec-table">
                        <div className="spec-row">
                          <span className="spec-name">Wireless Protocol</span>
                          <span className="spec-value">Bluetooth 5.3</span>
                        </div>
                        <div className="spec-row">
                          <span className="spec-name">Range</span>
                          <span className="spec-value">Up to 30ft (10m)</span>
                        </div>
                        <div className="spec-row">
                          <span className="spec-name">Battery Capacity</span>
                          <span className="spec-value">800mAh Li-ion</span>
                        </div>
                        <div className="spec-row">
                          <span className="spec-name">Usage Time</span>
                          <span className="spec-value">35+ hours</span>
                        </div>
                        <div className="spec-row">
                          <span className="spec-name">Charge Time</span>
                          <span className="spec-value">2.5 hours</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="tech-group">
                      <h4>Physical Dimensions</h4>
                      <div className="spec-table">
                        <div className="spec-row">
                          <span className="spec-name">Weight</span>
                          <span className="spec-value">285g</span>
                        </div>
                        <div className="spec-row">
                          <span className="spec-name">Dimensions</span>
                          <span className="spec-value">190 x 165 x 82mm</span>
                        </div>
                        <div className="spec-row">
                          <span className="spec-name">Ear Cup Material</span>
                          <span className="spec-value">Memory Foam</span>
                        </div>
                        <div className="spec-row">
                          <span className="spec-name">Headband</span>
                          <span className="spec-value">Adjustable Steel</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="tech-group">
                      <h4>Advanced Features</h4>
                      <div className="spec-table">
                        <div className="spec-row">
                          <span className="spec-name">Noise Cancellation</span>
                          <span className="spec-value">Hybrid ANC</span>
                        </div>
                        <div className="spec-row">
                          <span className="spec-name">Voice Assistant</span>
                          <span className="spec-value">Siri &amp; Google</span>
                        </div>
                        <div className="spec-row">
                          <span className="spec-name">Microphone Type</span>
                          <span className="spec-value">Dual Array</span>
                        </div>
                        <div className="spec-row">
                          <span className="spec-name">Water Rating</span>
                          <span className="spec-value">IPX5</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Review tab */}

            <div
              className="tab-pane fade"
              id="ecommerce-product-details-5-customer-reviews"
            >
              <div className="reviews-content">
                <div className="reviews-header">
                  <div className="rating-overview">
                    <div className="average-score">
                      <div className="score-display">4.6</div>
                      <div className="score-stars">
                        <BsStarFill />
                        <BsStarFill /> <BsStarFill /> <BsStarFill />
                        <BsStarHalf />
                      </div>
                      <div className="total-reviews">127 customer reviews</div>
                    </div>

                    <div className="rating-distribution">
                      <div className="rating-row">
                        <span className="stars-label">5★</span>
                        <div className="progress-container">
                          <div
                            className="progress-fill"
                            style={{ with: "68%" }}
                          ></div>
                        </div>
                        <span className="count-label">86</span>
                      </div>
                      <div className="rating-row">
                        <span className="stars-label">4★</span>
                        <div className="progress-container">
                          <div
                            className="progress-fill"
                            style={{ with: "22%" }}
                          ></div>
                        </div>
                        <span className="count-label">28</span>
                      </div>
                      <div className="rating-row">
                        <span className="stars-label">3★</span>
                        <div className="progress-container">
                          <div
                            className="progress-fill"
                            style={{ with: "6%" }}
                          ></div>
                        </div>
                        <span className="count-label">8</span>
                      </div>
                      <div className="rating-row">
                        <span className="stars-label">2★</span>
                        <div className="progress-container">
                          <div
                            className="progress-fill"
                            style={{ with: "3%" }}
                          ></div>
                        </div>
                        <span className="count-label">4</span>
                      </div>
                      <div className="rating-row">
                        <span className="stars-label">1★</span>
                        <div className="progress-container">
                          <div
                            className="progress-fill"
                            style={{ with: "1%" }}
                          ></div>
                        </div>
                        <span className="count-label">1</span>
                      </div>
                    </div>
                  </div>

                  <div className="write-review-cta">
                    <h4>Share Your Experience</h4>
                    <p>Help others make informed decisions</p>
                    <button className="btn review-btn">Write Review</button>
                  </div>
                </div>

                <div className="customer-reviews-list">
                  <div className="review-card">
                    <div className="reviewer-profile">
                      <img
                        src="./img/person/person-f-3.webp"
                        alt="Customer"
                        className="profile-pic"
                      />
                      <div className="profile-details">
                        <div className="customer-name">Sarah Martinez</div>
                        <div className="review-meta">
                          <div className="review-stars">
                            <BsStarFill />
                            <BsStarFill /> <BsStarFill /> <BsStarFill />{" "}
                            <BsStarFill />
                          </div>
                          <span className="review-date">March 28, 2024</span>
                        </div>
                      </div>
                    </div>
                    <h5 className="review-headline">
                      Outstanding audio quality and comfort
                    </h5>
                    <div className="review-text">
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam. Eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </div>
                    <div className="review-actions">
                      <button className="action-btn">
                        <BsHandThumbsUp /> Helpful (12)
                      </button>
                      <button className="action-btn">
                        <BsChatDots />
                        Reply
                      </button>
                    </div>
                  </div>

                  <div className="review-card">
                    <div className="reviewer-profile">
                      <img
                        src="./img/person/person-m-5.webp"
                        alt="Customer"
                        className="profile-pic"
                      />
                      <div className="profile-details">
                        <div className="customer-name">David Chen</div>
                        <div className="review-meta">
                          <div className="review-stars">
                            <BsStarFill />
                            <BsStarFill /> <BsStarFill /> <BsStarFill />{" "}
                            <BsStarFill />
                          </div>
                          <span className="review-date">March 15, 2024</span>
                        </div>
                      </div>
                    </div>
                    <h5 className="review-headline">
                      Great value, minor connectivity issues
                    </h5>
                    <div className="review-text">
                      <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia consequuntur magni dolores
                        eos qui ratione voluptatem sequi nesciunt. Overall
                        satisfied with the purchase.
                      </p>
                    </div>
                    <div className="review-actions">
                      <button className="action-btn">
                        <BsHandThumbsUp /> Helpful (8)
                      </button>
                      <button className="action-btn">
                        <BsChatDots />
                        Reply
                      </button>
                    </div>
                  </div>

                  <div className="review-card">
                    <div className="reviewer-profile">
                      <img
                        src="./img/person/person-f-7.webp"
                        alt="Customer"
                        className="profile-pic"
                      />
                      <div className="profile-details">
                        <div className="customer-name">Emily Rodriguez</div>
                        <div className="review-meta">
                          <div className="review-stars">
                            <BsStarFill />
                            <BsStarFill /> <BsStarFill /> <BsStarFill />{" "}
                            <BsStarFill />
                          </div>
                          <span className="review-date">February 22, 2024</span>
                        </div>
                      </div>
                    </div>
                    <h5 className="review-headline">
                      Perfect for work-from-home setup
                    </h5>
                    <div className="review-text">
                      <p>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti
                        atque corrupti quos dolores et quas molestias excepturi
                        sint occaecati cupiditate non provident.
                      </p>
                    </div>
                    <div className="review-actions">
                      <button className="action-btn">
                        <BsHandThumbsUp /> Helpful (15)
                      </button>
                      <button className="action-btn">
                        <BsChatDots />
                        Reply
                      </button>
                    </div>
                  </div>

                  <div className="load-more-section">
                    <button className="btn load-more-reviews">
                      Show More Reviews
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoTabs;
