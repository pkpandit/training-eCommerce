import React from "react";

const ReviewOrder = () => {
  return (
    <div className="checkout-section" id="order-review">
      <div className="section-header">
        <div className="section-number">4</div>
        <h3>Review &amp; Place Order</h3>
      </div>
      <div className="section-content">
        <div className="form-check terms-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="terms"
            name="terms"
            required=""
          />
          <label className="form-check-label" htmlFor="terms">
            I agree to the
            <a href="#" data-bs-toggle="modal" data-bs-target="#termsModal">
              Terms and Conditions
            </a>
            and
            <a href="#" data-bs-toggle="modal" data-bs-target="#privacyModal">
              Privacy Policy
            </a>
          </label>
        </div>
        <div className="success-message d-none">
          Your order has been placed successfully! Thank you for your purchase.
        </div>
        <div className="place-order-container">
          <button type="submit" className="btn btn-primary place-order-btn">
            <span className="btn-text">Place Order</span>
            <span className="btn-price">$240.96</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewOrder;
