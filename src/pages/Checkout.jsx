import CustomerInformation from "../components/checkOut/CustomerInformation";
import OrderSummary from "../components/checkOut/OrderSummary";
import PaymentMethod from "../components/checkOut/PaymentMethod";
import ReviewOrder from "../components/checkOut/ReviewOrder";
import ShippingAddress from "../components/checkOut/ShippingAddress";
import PageTitle from "../components/PageTitle";

const Checkout = () => {
  return (
    <main className="main">
      <PageTitle pageTitle="Checkout" />
      <section id="checkout" className="checkout section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            <div className="col-lg-7">
              <div className="checkout-container" data-aos="fade-up">
                <form className="checkout-form">
                  <CustomerInformation />
                  <ShippingAddress />
                  <PaymentMethod />
                  <ReviewOrder />
                </form>
              </div>
            </div>

            <div className="col-lg-5">
              <OrderSummary />
            </div>
          </div>

          <div
            className="modal fade"
            id="termsModal"
            tabindex="-1"
            aria-labelledby="termsModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="termsModalLabel">
                    Terms and Conditions
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam in dui mauris. Vivamus hendrerit arcu sed erat
                    molestie vehicula. Sed auctor neque eu tellus rhoncus ut
                    eleifend nibh porttitor. Ut in nulla enim. Phasellus
                    molestie magna non est bibendum non venenatis nisl tempor.
                  </p>
                  <p>
                    Suspendisse in orci enim. Vivamus hendrerit arcu sed erat
                    molestie vehicula. Sed auctor neque eu tellus rhoncus ut
                    eleifend nibh porttitor. Ut in nulla enim. Phasellus
                    molestie magna non est bibendum non venenatis nisl tempor.
                  </p>
                  <p>
                    Suspendisse in orci enim. Vivamus hendrerit arcu sed erat
                    molestie vehicula. Sed auctor neque eu tellus rhoncus ut
                    eleifend nibh porttitor. Ut in nulla enim. Phasellus
                    molestie magna non est bibendum non venenatis nisl tempor.
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    I Understand
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            className="modal fade"
            id="privacyModal"
            tabindex="-1"
            aria-labelledby="privacyModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="privacyModalLabel">
                    Privacy Policy
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam in dui mauris. Vivamus hendrerit arcu sed erat
                    molestie vehicula. Sed auctor neque eu tellus rhoncus ut
                    eleifend nibh porttitor. Ut in nulla enim.
                  </p>
                  <p>
                    Suspendisse in orci enim. Vivamus hendrerit arcu sed erat
                    molestie vehicula. Sed auctor neque eu tellus rhoncus ut
                    eleifend nibh porttitor. Ut in nulla enim. Phasellus
                    molestie magna non est bibendum non venenatis nisl tempor.
                  </p>
                  <p>
                    Suspendisse in orci enim. Vivamus hendrerit arcu sed erat
                    molestie vehicula. Sed auctor neque eu tellus rhoncus ut
                    eleifend nibh porttitor. Ut in nulla enim. Phasellus
                    molestie magna non est bibendum non venenatis nisl tempor.
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    I Understand
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Checkout;
