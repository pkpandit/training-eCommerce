import React from "react";

const ShippingAddress = () => {
  return (
    <div className="checkout-section" id="shipping-address">
      <div className="section-header">
        <div className="section-number">2</div>
        <h3>Shipping Address</h3>
      </div>
      <div className="section-content">
        <div className="form-group">
          <label htmlFor="address">Street Address</label>
          <input
            type="text"
            className="form-control"
            name="address"
            id="address"
            placeholder="Street Address"
            required=""
          />
        </div>
        <div className="form-group">
          <label htmlFor="apartment">Apartment, Suite, etc. (optional)</label>
          <input
            type="text"
            className="form-control"
            name="apartment"
            id="apartment"
            placeholder="Apartment, Suite, Unit, etc."
          />
        </div>
        <div className="row">
          <div className="col-md-4 form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              className="form-control"
              id="city"
              placeholder="City"
              required=""
            />
          </div>
          <div className="col-md-4 form-group">
            <label htmlFor="state">State</label>
            <input
              type="text"
              name="state"
              className="form-control"
              id="state"
              placeholder="State"
              required=""
            />
          </div>
          <div className="col-md-4 form-group">
            <label htmlFor="zip">ZIP Code</label>
            <input
              type="text"
              name="zip"
              className="form-control"
              id="zip"
              placeholder="ZIP Code"
              required=""
            />
          </div>
        </div>
        <div className="form-group">
          <label for="country">Country</label>
          <select
            className="form-select"
            id="country"
            name="country"
            required=""
          >
            <option defaultValue="">Select Country</option>
            <option defaultValue="US">United States</option>
            <option defaultValue="CA">Canada</option>
            <option defaultValue="UK">United Kingdom</option>
            <option defaultValue="AU">Australia</option>
            <option defaultValue="DE">Germany</option>
            <option defaultValue="FR">France</option>
          </select>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="save-address"
            name="save-address"
          />
          <label className="form-check-label" htmlFor="save-address">
            Save this address for future orders
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="billing-same"
            name="billing-same"
            checked=""
          />
          <label className="form-check-label" htmlFor="billing-same">
            Billing address same as shipping
          </label>
        </div>
      </div>
    </div>
  );
};

export default ShippingAddress;
