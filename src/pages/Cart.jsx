import {
  BsArrowClockwise,
  BsBank,
  BsDash,
  BsPlus,
  BsTrash,
  BsWallet2,
} from "react-icons/bs";
import PageTitle from "../components/PageTitle";
import { BiCreditCard, BiLogoPaypal } from "react-icons/bi";

const Cart = () => {
  return (
    <main className="main">
      <PageTitle pageTitle="Cart" />
      <section id="cart" className="cart section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
              <div className="cart-items">
                <div className="cart-header d-none d-lg-block">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <h5>Product</h5>
                    </div>
                    <div className="col-lg-2 text-center">
                      <h5>Price</h5>
                    </div>
                    <div className="col-lg-2 text-center">
                      <h5>Quantity</h5>
                    </div>
                    <div className="col-lg-2 text-center">
                      <h5>Total</h5>
                    </div>
                  </div>
                </div>

                <div className="cart-item">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-12 mt-3 mt-lg-0 mb-lg-0 mb-3">
                      <div className="product-info d-flex align-items-center">
                        <div className="product-image">
                          <img
                            src="./img/product/product-1.webp"
                            alt="Product"
                            className="img-fluid"
                            loading="lazy"
                          />
                        </div>
                        <div className="product-details">
                          <h6 className="product-title">
                            Lorem ipsum dolor sit amet
                          </h6>
                          <div className="product-meta">
                            <span className="product-color">Color: Black</span>
                            <span className="product-size">Size: M</span>
                          </div>
                          <button className="remove-item" type="button">
                            <BsTrash />
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-12 mt-3 mt-lg-0 text-center">
                      <div className="price-tag">
                        <span className="current-price">$89.99</span>
                      </div>
                    </div>
                    <div className="col-lg-2 col-12 mt-3 mt-lg-0 text-center">
                      <div className="quantity-selector">
                        <button className="quantity-btn decrease">
                          <BsDash />
                        </button>
                        <input
                          type="number"
                          className="quantity-input"
                          value="1"
                          min="1"
                          max="10"
                        />
                        <button className="quantity-btn increase">
                          <BsPlus />
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-2 col-12 mt-3 mt-lg-0 text-center">
                      <div className="item-total">
                        <span>$89.99</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="cart-item">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-12 mt-3 mt-lg-0 mb-lg-0 mb-3">
                      <div className="product-info d-flex align-items-center">
                        <div className="product-image">
                          <img
                            src="./img/product/product-3.webp"
                            alt="Product"
                            className="img-fluid"
                            loading="lazy"
                          />
                        </div>
                        <div className="product-details">
                          <h6 className="product-title">
                            Consectetur adipiscing elit
                          </h6>
                          <div className="product-meta">
                            <span className="product-color">Color: White</span>
                            <span className="product-size">Size: L</span>
                          </div>
                          <button className="remove-item" type="button">
                            <BsTrash /> Remove
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-12 mt-3 mt-lg-0 text-center">
                      <div className="price-tag">
                        <span className="current-price">$64.99</span>
                        <span className="original-price">$79.99</span>
                      </div>
                    </div>
                    <div className="col-lg-2 col-12 mt-3 mt-lg-0 text-center">
                      <div className="quantity-selector">
                        <button className="quantity-btn decrease">
                          <BsDash />
                        </button>
                        <input
                          type="number"
                          className="quantity-input"
                          value="2"
                          min="1"
                          max="10"
                        />
                        <button className="quantity-btn increase">
                          <BsPlus />
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-2 col-12 mt-3 mt-lg-0 text-center">
                      <div className="item-total">
                        <span>$129.98</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="cart-item">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-12 mt-3 mt-lg-0 mb-lg-0 mb-3">
                      <div className="product-info d-flex align-items-center">
                        <div className="product-image">
                          <img
                            src="./img/product/product-5.webp"
                            alt="Product"
                            className="img-fluid"
                            loading="lazy"
                          />
                        </div>
                        <div className="product-details">
                          <h6 className="product-title">
                            Sed do eiusmod tempor
                          </h6>
                          <div className="product-meta">
                            <span className="product-color">Color: Blue</span>
                            <span className="product-size">Size: S</span>
                          </div>
                          <button className="remove-item" type="button">
                            <BsTrash /> Remove
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-12 mt-3 mt-lg-0 text-center">
                      <div className="price-tag">
                        <span className="current-price">$49.99</span>
                      </div>
                    </div>
                    <div className="col-lg-2 col-12 mt-3 mt-lg-0 text-center">
                      <div className="quantity-selector">
                        <button className="quantity-btn decrease">
                          <BsDash />
                        </button>
                        <input
                          type="number"
                          className="quantity-input"
                          value="1"
                          min="1"
                          max="10"
                        />
                        <button className="quantity-btn increase">
                          <BsPlus />
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-2 col-12 mt-3 mt-lg-0 text-center">
                      <div className="item-total">
                        <span>$49.99</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="cart-actions">
                  <div className="row">
                    <div className="col-lg-6 mb-3 mb-lg-0">
                      <div className="coupon-form">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Coupon code"
                          />
                          <button
                            className="btn btn-outline-accent"
                            type="button"
                          >
                            Apply Coupon
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 text-md-end">
                      <button className="btn btn-outline-heading me-2">
                        <BsArrowClockwise />
                        Update Cart
                      </button>
                      <button className="btn btn-outline-remove">
                        <BsTrash /> Clear Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 mt-4 mt-lg-0"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="cart-summary">
                <h4 className="summary-title">Order Summary</h4>

                <div className="summary-item">
                  <span className="summary-label">Subtotal</span>
                  <span className="summary-value">$269.96</span>
                </div>

                <div className="summary-item shipping-item">
                  <span className="summary-label">Shipping</span>
                  <div className="shipping-options">
                    <div className="form-check text-end">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="shipping"
                        id="standard"
                        checked=""
                      />
                      <label className="form-check-label" for="standard">
                        Standard Delivery - $4.99
                      </label>
                    </div>
                    <div className="form-check text-end">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="shipping"
                        id="express"
                      />
                      <label className="form-check-label" for="express">
                        Express Delivery - $12.99
                      </label>
                    </div>
                    <div className="form-check text-end">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="shipping"
                        id="free"
                      />
                      <label className="form-check-label" for="free">
                        Free Shipping (Orders over $300)
                      </label>
                    </div>
                  </div>
                </div>

                <div className="summary-item">
                  <span className="summary-label">Tax</span>
                  <span className="summary-value">$27.00</span>
                </div>

                <div className="summary-item discount">
                  <span className="summary-label">Discount</span>
                  <span className="summary-value">-$0.00</span>
                </div>

                <div className="summary-total">
                  <span className="summary-label">Total</span>
                  <span className="summary-value">$301.95</span>
                </div>

                <div className="checkout-button">
                  <a href="#" className="btn btn-accent w-100">
                    Proceed to Checkout <i className="bi bi-arrow-right"></i>
                  </a>
                </div>

                <div className="continue-shopping">
                  <a href="#" className="btn btn-link w-100">
                    <i className="bi bi-arrow-left"></i> Continue Shopping
                  </a>
                </div>

                <div className="payment-methods">
                  <p className="payment-title">We Accept</p>
                  <div className="payment-icons">
                    <BiCreditCard />
                    <BiLogoPaypal />
                    <BsWallet2 />
                    <BsBank />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;
