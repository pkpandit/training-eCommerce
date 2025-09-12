import React from "react";
import {
  BsApple,
  BsCreditCard,
  BsCreditCard2Front,
  BsPaypal,
} from "react-icons/bs";

const OrderSummary = () => {
  return (
    <div className="order-summary" data-aos="fade-left" data-aos-delay="200">
      <div className="order-summary-header">
        <h3>Order Summary</h3>
        <span className="item-count">2 Items</span>
      </div>

      <div className="order-summary-content">
        <div className="order-items">
          <div className="order-item">
            <div className="order-item-image">
              <img
                src="./img/product/product-1.webp"
                alt="Product"
                className="img-fluid"
              />
            </div>
            <div className="order-item-details">
              <h4>Lorem Ipsum Dolor</h4>
              <p className="order-item-variant">Color: Black | Size: M</p>
              <div className="order-item-price">
                <span className="quantity">1 ×</span>
                <span className="price">$89.99</span>
              </div>
            </div>
          </div>

          <div className="order-item">
            <div className="order-item-image">
              <img
                src="./img/product/product-2.webp"
                alt="Product"
                className="img-fluid"
              />
            </div>
            <div className="order-item-details">
              <h4>Sit Amet Consectetur</h4>
              <p className="order-item-variant">Color: White | Size: L</p>
              <div className="order-item-price">
                <span className="quantity">2 ×</span>
                <span className="price">$59.99</span>
              </div>
            </div>
          </div>
        </div>

        <div className="promo-code">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Promo Code"
              aria-label="Promo Code"
            />
            <button className="btn btn-outline-primary" type="button">
              Apply
            </button>
          </div>
        </div>

        <div className="order-totals">
          <div className="order-subtotal d-flex justify-content-between">
            <span>Subtotal</span>
            <span>$209.97</span>
          </div>
          <div className="order-shipping d-flex justify-content-between">
            <span>Shipping</span>
            <span>$9.99</span>
          </div>
          <div className="order-tax d-flex justify-content-between">
            <span>Tax</span>
            <span>$21.00</span>
          </div>
          <div className="order-total d-flex justify-content-between">
            <span>Total</span>
            <span>$240.96</span>
          </div>
        </div>

        <div className="secure-checkout">
          <div className="secure-checkout-header">
            <i className="bi bi-shield-lock"></i>
            <span>Secure Checkout</span>
          </div>
          <div className="payment-icons">
            <BsCreditCard2Front />
            <BsCreditCard />
            <BsPaypal />
            <BsApple />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
