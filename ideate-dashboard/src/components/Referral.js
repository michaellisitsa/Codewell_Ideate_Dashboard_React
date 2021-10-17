import React, { Component } from "react";
import "../styles/Referral.css";
import referralImage from "../Assets/ReferralImage.png";

export class Referral extends Component {
  render() {
    const referralImageObj = {
      backgroundImage: `url(${referralImage})`,
    };
    return (
      <div className="referral">
        <div className="referral__form">
          <header className="referral__header">
            Earn up to 40% off by referring people
          </header>
          <p className="referral__body">
            We just kicked off our referral program. Invite people to Ideate and
            get 40% off on your next renewal.
          </p>
          <form className="referral__email-form">
            <input
              type="text"
              placeholder="Enter Email Address"
              className="referral__email-input"
            />
            <button className="referral__email-button">Invite</button>
          </form>
          <small className="referral__terms">
            * Applicable to new accounts only.
          </small>
        </div>
        <div className="referral__image" style={referralImageObj}></div>
      </div>
    );
  }
}

export default Referral;
