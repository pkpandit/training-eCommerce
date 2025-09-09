import React from "react";
import { BsFillGrid3X3GapFill, BsListUl, BsSearch, BsX } from "react-icons/bs";

const CategoryHeader = () => {
  return (
    <section id="category-header" className="category-header section">
      <div className="container" data-aos="fade-up">
        <div
          className="filter-container mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="row g-3">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="filter-item search-form">
                <label htmlFor="productSearch" className="form-label">
                  Search Products
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="productSearch"
                    placeholder="Search for products..."
                    aria-label="Search for products"
                  />
                  <button className="btn search-btn" type="button">
                    <BsSearch />
                  </button>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-2">
              <div className="filter-item">
                <label htmlFor="priceRange" className="form-label">
                  Price Range
                </label>
                <select className="form-select" id="priceRange">
                  <option defaultValue="">All Prices</option>
                  <option>Under $25</option>
                  <option>$25 to $50</option>
                  <option>$50 to $100</option>
                  <option>$100 to $200</option>
                  <option>$200 &amp; Above</option>
                </select>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-2">
              <div className="filter-item">
                <label htmlFor="sortBy" className="form-label">
                  Sort By
                </label>
                <select className="form-select" id="sortBy">
                  <option defaultValue="">Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Customer Rating</option>
                  <option>Newest Arrivals</option>
                </select>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="filter-item">
                <label className="form-label">View</label>
                <div className="d-flex align-items-center">
                  <div className="view-options me-3">
                    <button
                      type="button"
                      className="btn view-btn active"
                      data-view="grid"
                      aria-label="Grid view"
                    >
                      <BsFillGrid3X3GapFill />
                    </button>
                    <button
                      type="button"
                      className="btn view-btn"
                      data-view="list"
                      aria-label="List view"
                    >
                      <BsListUl />
                    </button>
                  </div>
                  <div className="items-per-page">
                    <select
                      className="form-select"
                      id="itemsPerPage"
                      aria-label="Items per page"
                    >
                      <option defaultValue={12}>12 per page</option>
                      <option defaultValue={24}>24 per page</option>
                      <option defaultValue={48}>48 per page</option>
                      <option defaultValue={96}>96 per page</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-12" data-aos="fade-up" data-aos-delay="200">
              <div className="active-filters">
                <span className="active-filter-label">Active Filters:</span>
                <div className="filter-tags">
                  <span className="filter-tag">
                    Electronics
                    <button className="filter-remove">
                      <BsX />
                    </button>
                  </span>
                  <span className="filter-tag">
                    $50 to $100
                    <button className="filter-remove">
                      <BsX />
                    </button>
                  </span>
                  <button className="clear-all-btn">Clear All</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryHeader;
