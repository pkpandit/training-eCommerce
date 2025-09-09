import React from "react";
import {
  BiCreditCard,
  BiLogoApple,
  BiLogoFacebookCircle,
  BiLogoGoogle,
  BiLogoInstagramAlt,
  BiLogoPaypal,
  BiLogoPinterest,
  BiLogoPlayStore,
  BiLogoTiktok,
  BiLogoTwitter,
  BiLogoYoutube,
  BiMoney,
  BiStore,
} from "react-icons/bi";

const Footer = () => {
  return (
    <footer id="footer" className="footer dark-background">
      <div className="footer-main">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6">
              <div className="footer-widget footer-about">
                <a href="index.html" className="logo">
                  <span className="sitename">NiceShop</span>
                </a>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam in nibh vehicula, facilisis magna ut, consectetur
                  lorem. Proin eget tortor risus.
                </p>

                <div className="social-links mt-4">
                  <h5>Connect With Us</h5>
                  <div className="social-icons">
                    <a href="#" aria-label="Facebook">
                      <BiLogoFacebookCircle />
                    </a>
                    <a href="#" aria-label="Instagram">
                      <BiLogoInstagramAlt />
                    </a>
                    <a href="#" aria-label="Twitter">
                      <BiLogoTwitter />
                    </a>
                    <a href="#" aria-label="TikTok">
                      <BiLogoTiktok />
                    </a>
                    <a href="#" aria-label="Pinterest">
                      <BiLogoPinterest />
                    </a>
                    <a href="#" aria-label="YouTube">
                      <BiLogoYoutube />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="footer-widget">
                <h4>Shop</h4>
                <ul className="footer-links">
                  <li>
                    <a href="category.html">New Arrivals</a>
                  </li>
                  <li>
                    <a href="category.html">Bestsellers</a>
                  </li>
                  <li>
                    <a href="category.html">Women's Clothing</a>
                  </li>
                  <li>
                    <a href="category.html">Men's Clothing</a>
                  </li>
                  <li>
                    <a href="category.html">Accessories</a>
                  </li>
                  <li>
                    <a href="category.html">Sale</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="footer-widget">
                <h4>Support</h4>
                <ul className="footer-links">
                  <li>
                    <a href="support.html">Help Center</a>
                  </li>
                  <li>
                    <a href="account.html">Order Status</a>
                  </li>
                  <li>
                    <a href="shiping-info.html">Shipping Info</a>
                  </li>
                  <li>
                    <a href="return-policy.html">Returns &amp; Exchanges</a>
                  </li>
                  <li>
                    <a href="#">Size Guide</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="footer-widget">
                <h4>Contact Information</h4>
                <div className="footer-contact">
                  <div className="contact-item">
                    <i className="bi bi-geo-alt"></i>
                    <span>123 Fashion Street, New York, NY 10001</span>
                  </div>
                  <div className="contact-item">
                    <i className="bi bi-telephone"></i>
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="contact-item">
                    <i className="bi bi-envelope"></i>
                    <span>hello@example.com</span>
                  </div>
                  <div className="contact-item">
                    <i className="bi bi-clock"></i>
                    <span>
                      Monday-Friday: 9am-6pm
                      <br />
                      Saturday: 10am-4pm
                      <br />
                      Sunday: Closed
                    </span>
                  </div>
                </div>

                <div className="app-buttons mt-4">
                  <a href="#" className="app-btn">
                    <BiLogoApple />

                    <span>App Store</span>
                  </a>
                  <a href="#" className="app-btn">
                    <BiLogoPlayStore />

                    <span>Google Play</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="row gy-3 align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="copyright">
                <p>
                  © <span>Copyright</span>
                  <strong className="sitename">NiceShop</strong>. All Rights
                  Reserved.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="d-flex flex-wrap justify-content-lg-end justify-content-center align-items-center gap-4">
                <div className="payment-methods">
                  <div className="payment-icons">
                    <BiCreditCard aria-label="Credit Card" />
                    <BiLogoPaypal aria-label="PayPal" />
                    <BiLogoApple aria-label="Apple Pay" />
                    <BiLogoGoogle aria-label="Google Pay" />
                    <BiStore aria-label="Shop Pay" />

                    <BiMoney aria-label="Cash on Delivery" />
                  </div>
                </div>

                <div className="legal-links">
                  <a href="tos.html">Terms</a>
                  <a href="privacy.html">Privacy</a>
                  <a href="tos.html">Cookies</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
