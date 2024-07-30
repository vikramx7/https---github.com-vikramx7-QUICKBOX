import React from "react";
import { Link } from 'react-router-dom';
import "../Styles/PricingSection.css"; // Import the CSS file for additional styles

const PricingSection = () => {
  return (
    <section className="ptbm-pricingPaid">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="panel pricingGrid pricingBasic">
              <div className="panel-heading">
                <h3>Basic</h3>
              </div>
              <div className="panel-body">
                <p>Features Include</p>
                <ul>
                  <li><strong>Free</strong> Delivery over ₹99</li>
                  <li><strong>Weekly</strong> Offers</li>
                </ul>
              </div>
              <div className="panel-footer">
                <div className="pricingRate">
                  <div className="priceAnnual">
                    <span className="price">
                      <sup>₹</sup>150<small>/month</small>
                    </span>
                    <span className="pricePlans">Save 1500 Annually</span>
                  </div>
                </div>
                <div className="pricingButton">
                  <Link to="/PaymentPage" className="btn btnMonthly btnPrimary">Get Started</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="panel pricingGrid pricingPlus">
              <div className="panel-heading">
                <h3>Basic ++</h3>
              </div>
              <div className="panel-body">
                <p>Features Include</p>
                <ul>
                  <li><strong>FREE</strong> Delivery</li>
                  <li><strong>Daily</strong> Offers</li>
                </ul>
              </div>
              <div className="panel-footer">
                <div className="pricingRate">
                  <div className="priceAnnual">
                    <span className="price">
                      <sup>₹</sup>249<small>/month</small>
                    </span>
                    <span className="pricePlans">Save ₹2500 Annually</span>
                  </div>
                </div>
                <div className="pricingButton">
                  <Link to="/PaymentPage" className="btn btnMonthly btnOrange">Get Started</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="panel pricingGrid pricingPremium">
              <div className="panel-heading">
                <h3>Premium</h3>
              </div>
              <div className="panel-body">
                <p>Features Include</p>
                <ul>
                  <li><strong>FAST and FREE</strong> Delivery</li>
                  <li><strong>24/7</strong> Support</li>
                </ul>
              </div>
              <div className="panel-footer">
                <div className="pricingRate">
                  <div className="priceAnnual">
                    <span className="price">
                      <sup>₹</sup>499<small>/month</small>
                    </span>
                    <span className="pricePlans">Save ₹3500 Annually</span>
                  </div>
                </div>
                <div className="pricingButton">
                  <Link to="/PaymentPage" className="btn btnMonthly btnPurple">Get Started</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
