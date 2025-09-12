import React from "react";
import {
  BsApple,
  BsCreditCard,
  BsCreditCard2Front,
  BsPaypal,
  BsQuestionCircle,
} from "react-icons/bs";

const PaymentMethod = () => {
  return (
    <div className="checkout-section" id="payment-method">
      <div className="section-header">
        <div className="section-number">3</div>
        <h3>Payment Method</h3>
      </div>
      <div className="section-content">
        <div className="payment-options">
          <div className="payment-option active">
            <input
              type="radio"
              name="payment-method"
              id="credit-card"
              checked=""
            />
            <label htmlFor="credit-card">
              <span className="payment-icon">
                <BsCreditCard2Front />
              </span>
              <span className="payment-label">Credit / Debit Card</span>
            </label>
          </div>
          <div className="payment-option">
            <input type="radio" name="payment-method" id="paypal" />
            <label htmlFor="paypal">
              <span className="payment-icon">
                <BsPaypal />
              </span>
              <span className="payment-label">PayPal</span>
            </label>
          </div>
          <div className="payment-option">
            <input type="radio" name="payment-method" id="apple-pay" />
            <label htmlFor="apple-pay">
              <span className="payment-icon">
                <BsApple />
              </span>
              <span className="payment-label">Apple Pay</span>
            </label>
          </div>
        </div>

        <div className="payment-details" id="credit-card-details">
          <div className="form-group">
            <label htmlFor="card-number">Card Number</label>
            <div className="card-number-wrapper">
              <input
                type="text"
                className="form-control"
                name="card-number"
                id="card-number"
                placeholder="1234 5678 9012 3456"
                required=""
              />
              <div className="card-icons">
                <BsCreditCard2Front />
                <BsCreditCard />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 form-group">
              <label htmlFor="expiry">Expiration Date</label>
              <input
                type="text"
                className="form-control"
                name="expiry"
                id="expiry"
                placeholder="MM/YY"
                required=""
              />
            </div>
            <div className="col-md-6 form-group">
              <label htmlFor="cvv">Security Code (CVV)</label>
              <div className="cvv-wrapper">
                <input
                  type="text"
                  className="form-control"
                  name="cvv"
                  id="cvv"
                  placeholder="123"
                  required=""
                />
                <span
                  className="cvv-hint"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="3-digit code on the back of your card"
                >
                  <BsQuestionCircle />
                </span>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="card-name">Name on Card</label>
            <input
              type="text"
              className="form-control"
              name="card-name"
              id="card-name"
              placeholder="John Doe"
              required=""
            />
          </div>
        </div>

        <div className="payment-details d-none" id="paypal-details">
          <p className="payment-info">
            You will be redirected to PayPal to complete your purchase securely.
          </p>
        </div>

        <div className="payment-details d-none" id="apple-pay-details">
          <p className="payment-info">
            You will be prompted to authorize payment with Apple Pay.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
