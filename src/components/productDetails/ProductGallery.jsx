import React from "react";
import {
  BsArrowClockwise,
  BsBagPlus,
  BsCheck,
  BsChevronLeft,
  BsChevronRight,
  BsDash,
  BsHeadset,
  BsHeart,
  BsLightning,
  BsPlus,
  BsShieldCheck,
  BsStarFill,
  BsStarHalf,
  BsTruck,
} from "react-icons/bs";

const ProductGallery = () => {
  return (
    <div className="row g-4">
      {/* <!-- Product Gallery --> */}
      <div className="col-lg-7" data-aos="zoom-in" data-aos-delay="150">
        <div className="product-gallery">
          <div className="main-showcase">
            <div className="image-zoom-container">
              <img
                src="./img/product/product-details-6.webp"
                alt="Product Main"
                className="img-fluid main-product-image drift-zoom"
                id="main-product-image"
                data-zoom="./img/product/product-details-6.webp"
              />

              <div className="image-navigation">
                <button
                  className="nav-arrow prev-image image-nav-btn prev-image"
                  type="button"
                >
                  <BsChevronLeft />
                </button>
                <button
                  className="nav-arrow next-image image-nav-btn next-image"
                  type="button"
                >
                  <BsChevronRight />
                </button>
              </div>
            </div>
          </div>

          <div className="thumbnail-grid">
            <div
              className="thumbnail-wrapper thumbnail-item active"
              data-image="./img/product/product-details-6.webp"
            >
              <img
                src="./img/product/product-details-6.webp"
                alt="View 1"
                className="img-fluid"
              />
            </div>
            <div
              className="thumbnail-wrapper thumbnail-item"
              data-image="./img/product/product-details-7.webp"
            >
              <img
                src="./img/product/product-details-7.webp"
                alt="View 2"
                className="img-fluid"
              />
            </div>
            <div
              className="thumbnail-wrapper thumbnail-item"
              data-image="./img/product/product-details-8.webp"
            >
              <img
                src="./img/product/product-details-8.webp"
                alt="View 3"
                className="img-fluid"
              />
            </div>
            <div
              className="thumbnail-wrapper thumbnail-item"
              data-image="./img/product/product-details-4.webp"
            >
              <img
                src="./img/product/product-details-4.webp"
                alt="View 4"
                className="img-fluid"
              />
            </div>
            <div
              className="thumbnail-wrapper thumbnail-item"
              data-image="./img/product/product-details-5.webp"
            >
              <img
                src="./img/product/product-details-5.webp"
                alt="View 5"
                className="img-fluid"
              />
            </div>
            <div
              className="thumbnail-wrapper thumbnail-item"
              data-image="./img/product/product-details-3.webp"
            >
              <img
                src="./img/product/product-details-3.webp"
                alt="View 6"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Product Details --> */}
      <div className="col-lg-5" data-aos="fade-left" data-aos-delay="200">
        <div className="product-details">
          <div className="product-badge-container">
            <span className="badge-category">Audio Equipment</span>
            <div className="rating-group">
              <div className="stars">
                <BsStarFill />
                <BsStarFill /> <BsStarFill /> <BsStarFill />
                <BsStarHalf />
              </div>
              <span className="review-text">(127 reviews)</span>
            </div>
          </div>

          <h1 className="product-name">
            Mauris tempus cursus magna vel scelerisque nisl consectetur
          </h1>

          <div className="pricing-section">
            <div className="price-display">
              <span className="sale-price">$189.99</span>
              <span className="regular-price">$239.99</span>
            </div>
            <div className="savings-info">
              <span className="save-amount">Save $50.00</span>
              <span className="discount-percent">(21% off)</span>
            </div>
          </div>

          <div className="product-description">
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>

          <div className="availability-status">
            <div className="stock-indicator">
              <i className="bi bi-check-circle-fill"></i>
              <span className="stock-text">Available</span>
            </div>
            <div className="quantity-left">Only 18 items remaining</div>
          </div>

          {/* <!-- Product Variants --> */}
          <div className="variant-section">
            <div className="color-selection">
              <label className="variant-label">Available Colors:</label>
              <div className="color-grid">
                <div
                  className="color-chip active"
                  data-color="Midnight Black"
                  style={{
                    background: "linear-gradient(135deg, #1a1a1a, #000)",
                  }}
                >
                  <span className="selection-check">
                    <BsCheck />
                  </span>
                </div>
                <div
                  className="color-chip"
                  data-color="Pearl White"
                  style={{
                    background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
                  }}
                >
                  <span className="selection-check">
                    <BsCheck />
                  </span>
                </div>
                <div
                  className="color-chip"
                  data-color="Ocean Blue"
                  style={{
                    background: "linear-gradient(135deg, #0066cc, #004499)",
                  }}
                >
                  <span className="selection-check">
                    <BsCheck />
                  </span>
                </div>
                <div
                  className="color-chip"
                  data-color="Forest Green"
                  style={{
                    background: "linear-gradient(135deg, #28a745, #155724)",
                  }}
                >
                  <span className="selection-check">
                    <BsCheck />
                  </span>
                </div>
              </div>
              <div className="selected-variant">
                Selected: <span>Midnight Black</span>
              </div>
            </div>
          </div>

          {/* <!-- Purchase Options --> */}
          <div className="purchase-section">
            <div className="quantity-control">
              <label className="control-label">Quantity:</label>
              <div className="quantity-input-group">
                <div className="quantity-selector">
                  <button className="quantity-btn decrease" type="button">
                    <BsDash />
                  </button>
                  <input
                    type="number"
                    className="quantity-input"
                    defaultValue={1}
                    min="1"
                    max="18"
                  />
                  <button className="quantity-btn increase" type="button">
                    <BsPlus />
                  </button>
                </div>
              </div>
            </div>

            <div className="action-buttons">
              <button className="btn primary-action">
                <BsBagPlus />
                Add to Cart
              </button>
              <button className="btn secondary-action">
                <BsLightning />
                Buy Now
              </button>
              <button className="btn icon-action" title="Add to Wishlist">
                <BsHeart />
              </button>
            </div>
          </div>

          {/* <!-- Benefits List --> */}
          <div className="benefits-list">
            <div className="benefit-item">
              <BsTruck />

              <span>Free delivery on orders over $75</span>
            </div>
            <div className="benefit-item">
              <BsArrowClockwise />

              <span>45-day hassle-free returns</span>
            </div>
            <div className="benefit-item">
              <BsShieldCheck />

              <span>3-year manufacturer warranty</span>
            </div>
            <div className="benefit-item">
              <BsHeadset />

              <span>24/7 customer support available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
