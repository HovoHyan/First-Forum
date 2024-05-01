import React from "react";
import "./contact.css";
import Logo from "../../images/RecaptchaLogo.png";

const Contact = () => {
  const sendMessage = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="contact_container">
      <div className="contact_us">
        <h3>Contact us</h3>
        <div className="contact_us_block">
          <div className="text_info">
            <p className="name">
              Your name: <br />
              <span>Required</span>
            </p>
            <p className="email">
              Your email address: <br />
              <span>Required</span>
            </p>
            <p className="verify">
              Verification: <br />
              <span>Required</span>
            </p>
            <p className="subject">
              Subject: <br />
              <span>Required</span>
            </p>
            <p className="msg">
              Message: <br />
              <span>Required</span>
            </p>
          </div>
          <form>
            <input type="text" name="name" className="info" required />
            <input type="text" name="address" className="info" required />
            <div className="robot">
              <input type="checkbox" />
              <p>Я не робот</p>
              <img src={Logo} alt="Logo" />
            </div>
            <input type="text" name="subject" className="info" required />
            <input type="text" name="message" className="message" required />
          </form>
        </div>
        <button>SEND</button>
      </div>
    </div>
  );
};

export default Contact;
