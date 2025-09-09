import React from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="widgets-container">
      <div className="product-categories-widget widget-item">
        <h3 className="widget-title">Categories</h3>

        <ul className="category-tree list-unstyled mb-0">
          <li className="category-item">
            <div
              className="d-flex justify-content-between align-items-center category-header collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#categories-1-clothing-subcategories"
              aria-expanded="false"
              aria-controls="categories-1-clothing-subcategories"
            >
              <a href="/" className="category-link">
                Clothing
              </a>
              <span className="category-toggle">
                <BsChevronDown />
                <BsChevronUp />
              </span>
            </div>
            <ul
              id="categories-1-clothing-subcategories"
              className="subcategory-list list-unstyled collapse ps-3 mt-2"
            >
              <li>
                <a href="/" className="subcategory-link">
                  Men's Wear
                </a>
              </li>
              <li>
                <a href="/" className="subcategory-link">
                  Women's Wear
                </a>
              </li>
              <li>
                <a href="/" className="subcategory-link">
                  Kids' Clothing
                </a>
              </li>
              <li>
                <a href="/" className="subcategory-link">
                  Accessories
                </a>
              </li>
            </ul>
          </li>

          <li className="category-item">
            <div
              className="d-flex justify-content-between align-items-center category-header collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#categories-1-electronics-subcategories"
              aria-expanded="false"
              aria-controls="categories-1-electronics-subcategories"
            >
              <a href="/" className="category-link">
                Electronics
              </a>
              <span className="category-toggle">
                <BsChevronDown />
                <BsChevronUp />
              </span>
            </div>
            <ul
              id="categories-1-electronics-subcategories"
              className="subcategory-list list-unstyled collapse ps-3 mt-2"
            >
              <li>
                <a href="#" className="subcategory-link">
                  Smartphones
                </a>
              </li>
              <li>
                <a href="#" className="subcategory-link">
                  Laptops
                </a>
              </li>
              <li>
                <a href="#" className="subcategory-link">
                  Tablets
                </a>
              </li>
              <li>
                <a href="#" className="subcategory-link">
                  Accessories
                </a>
              </li>
            </ul>
          </li>

          <li className="category-item">
            <div
              className="d-flex justify-content-between align-items-center category-header collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#categories-1-home-subcategories"
              aria-expanded="false"
              aria-controls="categories-1-home-subcategories"
            >
              <a href="/" className="category-link">
                Home &amp; Kitchen
              </a>
              <span className="category-toggle">
                <BsChevronDown />
                <BsChevronUp />
              </span>
            </div>
            <ul
              id="categories-1-home-subcategories"
              className="subcategory-list list-unstyled collapse ps-3 mt-2"
            >
              <li>
                <a href="#" className="subcategory-link">
                  Furniture
                </a>
              </li>
              <li>
                <a href="#" className="subcategory-link">
                  Kitchen Appliances
                </a>
              </li>
              <li>
                <a href="#" className="subcategory-link">
                  Home Decor
                </a>
              </li>
              <li>
                <a href="#" className="subcategory-link">
                  Bedding
                </a>
              </li>
            </ul>
          </li>

          <li className="category-item">
            <div
              className="d-flex justify-content-between align-items-center category-header collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#categories-1-beauty-subcategories"
              aria-expanded="false"
              aria-controls="categories-1-beauty-subcategories"
            >
              <a href="/" className="category-link">
                Beauty &amp; Personal Care
              </a>
              <span className="category-toggle">
                <BsChevronDown />
                <BsChevronUp />
              </span>
            </div>
            <ul
              id="categories-1-beauty-subcategories"
              className="subcategory-list list-unstyled collapse ps-3 mt-2"
            >
              <li>
                <a href="#" className="subcategory-link">
                  Skincare
                </a>
              </li>
              <li>
                <a href="#" className="subcategory-link">
                  Makeup
                </a>
              </li>
              <li>
                <a href="#" className="subcategory-link">
                  Hair Care
                </a>
              </li>
              <li>
                <a href="#" className="subcategory-link">
                  Fragrances
                </a>
              </li>
            </ul>
          </li>

          <li className="category-item">
            <div
              className="d-flex justify-content-between align-items-center category-header collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#categories-1-sports-subcategories"
              aria-expanded="false"
              aria-controls="categories-1-sports-subcategories"
            >
              <a href="/" className="category-link">
                Sports &amp; Outdoors
              </a>
              <span className="category-toggle">
                <BsChevronDown />
                <BsChevronUp />
              </span>
            </div>
            <ul
              id="categories-1-sports-subcategories"
              className="subcategory-list list-unstyled collapse ps-3 mt-2"
            >
              <li>
                <a href="#" className="subcategory-link">
                  Fitness Equipment
                </a>
              </li>
              <li>
                <a href="#" className="subcategory-link">
                  Outdoor Gear
                </a>
              </li>
              <li>
                <a href="#" className="subcategory-link">
                  Sports Apparel
                </a>
              </li>
              <li>
                <a href="#" className="subcategory-link">
                  Team Sports
                </a>
              </li>
            </ul>
          </li>

          <li className="category-item">
            <div className="d-flex justify-content-between align-items-center category-header">
              <a href="#" className="category-link">
                Books
              </a>
            </div>
          </li>

          <li className="category-item">
            <div
              className="d-flex justify-content-between align-items-center category-header collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#categories-1-toys-subcategories"
              aria-expanded="false"
              aria-controls="categories-1-toys-subcategories"
            >
              <a href="/" className="category-link">
                Toys &amp; Games
              </a>
              <span className="category-toggle">
                <BsChevronDown />
                <BsChevronUp />
              </span>
            </div>
            <ul
              id="categories-1-toys-subcategories"
              className="subcategory-list list-unstyled collapse ps-3 mt-2"
            >
              <li>
                <a href="#" className="subcategory-link">
                  Board Games
                </a>
              </li>
              <li>
                <a href="#" className="subcategory-link">
                  Puzzles
                </a>
              </li>
              <li>
                <a href="#" className="subcategory-link">
                  Action Figures
                </a>
              </li>
              <li>
                <a href="#" className="subcategory-link">
                  Educational Toys
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="pricing-range-widget widget-item">
        <h3 className="widget-title">Price Range</h3>

        <div className="price-range-container">
          <div className="current-range mb-3">
            <span className="min-price">$0</span>
            <span className="max-price float-end">$1000</span>
          </div>

          <div className="range-slider">
            <div className="slider-track"></div>
            <div className="slider-progress"></div>
            <input
              type="range"
              className="min-range"
              min="0"
              max="1000"
              defaultValue={0}
              step="10"
            />
            <input
              type="range"
              className="max-range"
              min="0"
              max="1000"
              defaultValue={500}
              step="10"
            />
          </div>

          <div className="price-inputs mt-3">
            <div className="row g-2">
              <div className="col-6">
                <div className="input-group input-group-sm">
                  <span className="input-group-text">$</span>
                  <input
                    type="number"
                    className="form-control min-price-input"
                    placeholder="Min"
                    min="0"
                    max="1000"
                    defaultValue={0}
                    step="10"
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="input-group input-group-sm">
                  <span className="input-group-text">$</span>
                  <input
                    type="number"
                    className="form-control max-price-input"
                    placeholder="Max"
                    min="0"
                    max="1000"
                    defaultValue={500}
                    step="10"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="filter-actions mt-3">
            <button type="button" className="btn btn-sm btn-primary w-100">
              Apply Filter
            </button>
          </div>
        </div>
      </div>
      <h3 className="brand-filter-widget widget-item">Filter by Brand</h3>

      <div className="color-filter-widget widget-item">
        <h3 className="widget-title">Filter by Color</h3>

        <div className="color-filter-content">
          <div className="color-options">
            <div className="form-check color-option">
              <input
                className="form-check-input"
                type="checkbox"
                value="black"
                id="color-black"
              />
              <label className="form-check-label" htmlFor="color-black">
                <span
                  className="color-swatch"
                  style={{ backgroundColor: "#000000" }}
                  title="Black"
                ></span>
              </label>
            </div>

            <div className="form-check color-option">
              <input
                className="form-check-input"
                type="checkbox"
                value="white"
                id="color-white"
              />
              <label className="form-check-label" htmlFor="color-white">
                <span
                  className="color-swatch"
                  style={{ backgroundColor: "#ffffff" }}
                  title="White"
                ></span>
              </label>
            </div>

            <div className="form-check color-option">
              <input
                className="form-check-input"
                type="checkbox"
                value="red"
                id="color-red"
              />
              <label className="form-check-label" htmlFor="color-red">
                <span
                  className="color-swatch"
                  style={{ backgroundColor: "#e74c3c" }}
                  title="Red"
                ></span>
              </label>
            </div>

            <div className="form-check color-option">
              <input
                className="form-check-input"
                type="checkbox"
                value="blue"
                id="color-blue"
              />
              <label className="form-check-label" htmlFor="color-blue">
                <span
                  className="color-swatch"
                  style={{ backgroundColor: "#3498db" }}
                  title="Blue"
                ></span>
              </label>
            </div>

            <div className="form-check color-option">
              <input
                className="form-check-input"
                type="checkbox"
                value="green"
                id="color-green"
              />
              <label className="form-check-label" htmlFor="color-green">
                <span
                  className="color-swatch"
                  style={{ backgroundColor: "#2ecc71" }}
                  title="Green"
                ></span>
              </label>
            </div>

            <div className="form-check color-option">
              <input
                className="form-check-input"
                type="checkbox"
                value="yellow"
                id="color-yellow"
              />
              <label className="form-check-label" htmlFor="color-yellow">
                <span
                  className="color-swatch"
                  style={{ backgroundColor: "#f1c40f" }}
                  title="Yellow"
                ></span>
              </label>
            </div>

            <div className="form-check color-option">
              <input
                className="form-check-input"
                type="checkbox"
                value="purple"
                id="color-purple"
              />
              <label className="form-check-label" htmlFor="color-purple">
                <span
                  className="color-swatch"
                  style={{ backgroundColor: "#9b59b6" }}
                  title="Purple"
                ></span>
              </label>
            </div>

            <div className="form-check color-option">
              <input
                className="form-check-input"
                type="checkbox"
                value="orange"
                id="color-orange"
              />
              <label className="form-check-label" htmlFor="color-orange">
                <span
                  className="color-swatch"
                  style={{ backgroundColor: "#e67e22" }}
                  title="Orange"
                ></span>
              </label>
            </div>

            <div className="form-check color-option">
              <input
                className="form-check-input"
                type="checkbox"
                value="pink"
                id="color-pink"
              />
              <label className="form-check-label" htmlFor="color-pink">
                <span
                  className="color-swatch"
                  style={{ backgroundColor: "#fd79a8" }}
                  title="Pink"
                ></span>
              </label>
            </div>

            <div className="form-check color-option">
              <input
                className="form-check-input"
                type="checkbox"
                value="brown"
                id="color-brown"
              />
              <label className="form-check-label" htmlFor="color-brown">
                <span
                  className="color-swatch"
                  style={{ backgroundColor: "#795548" }}
                  title="Brown"
                ></span>
              </label>
            </div>
          </div>

          <div className="filter-actions mt-3">
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Clear All
            </button>
            <button type="button" className="btn btn-sm btn-primary">
              Apply Filter
            </button>
          </div>
        </div>
      </div>
      <div className="brand-filter-widget widget-item">
        <h3 className="widget-title">Filter by Brand</h3>

        <div className="brand-filter-content">
          <div className="brand-search">
            <input
              type="text"
              className="form-control"
              placeholder="Search brands..."
            />
            <i className="bi bi-search"></i>
          </div>

          <div className="brand-list">
            <div className="brand-item">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="brand1"
                />
                <label className="form-check-label" htmlFor="brand1">
                  Nike
                  <span className="brand-count">(24)</span>
                </label>
              </div>
            </div>

            <div className="brand-item">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="brand2"
                />
                <label className="form-check-label" htmlFor="brand2">
                  Adidas
                  <span className="brand-count">(18)</span>
                </label>
              </div>
            </div>

            <div className="brand-item">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="brand3"
                />
                <label className="form-check-label" htmlFor="brand3">
                  Puma
                  <span className="brand-count">(12)</span>
                </label>
              </div>
            </div>

            <div className="brand-item">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="brand4"
                />
                <label className="form-check-label" htmlFor="brand4">
                  Reebok
                  <span className="brand-count">(9)</span>
                </label>
              </div>
            </div>

            <div className="brand-item">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="brand5"
                />
                <label className="form-check-label" htmlFor="brand5">
                  Under Armour
                  <span className="brand-count">(7)</span>
                </label>
              </div>
            </div>

            <div className="brand-item">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="brand6"
                />
                <label className="form-check-label" htmlFor="brand6">
                  New Balance
                  <span className="brand-count">(6)</span>
                </label>
              </div>
            </div>

            <div className="brand-item">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="brand7"
                />
                <label className="form-check-label" htmlFor="brand7">
                  Converse
                  <span className="brand-count">(5)</span>
                </label>
              </div>
            </div>

            <div className="brand-item">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="brand8"
                />
                <label className="form-check-label" htmlFor="brand8">
                  Vans
                  <span className="brand-count">(4)</span>
                </label>
              </div>
            </div>
          </div>

          <div className="brand-actions">
            <button className="btn btn-sm btn-outline-primary">
              Apply Filter
            </button>
            <button className="btn btn-sm btn-link">Clear All</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
