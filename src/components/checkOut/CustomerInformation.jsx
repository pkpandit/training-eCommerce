import React from "react";

const CustomerInformation = () => {
  return (
    <div className="checkout-section" id="customer-info">
      <div className="section-header">
        <div className="section-number">1</div>
        <h3>Customer Information</h3>
      </div>
      <div className="section-content">
        <div className="row">
          <div className="col-md-6 form-group">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              name="first-name"
              className="form-control"
              id="first-name"
              placeholder="Your First Name"
              required=""
            />
          </div>
          <div className="col-md-6 form-group">
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              name="last-name"
              className="form-control"
              id="last-name"
              placeholder="Your Last Name"
              required=""
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            placeholder="Your Email"
            required=""
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            name="phone"
            id="phone"
            placeholder="Your Phone Number"
            required=""
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerInformation;
