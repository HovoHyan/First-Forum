import React from "react";
import "./contact.css";
import Logo from "../../images/RecaptchaLogo.png";
import { useDispatch } from "react-redux";
import { fetchAddMessages } from "../../store/Slices/MessagesSlice/API";

const Contact = () => {
  const dispatch = useDispatch();
  const sendMessage = async (e) => {
    e.preventDefault();
    const {
      name: { value: name },
      email: { value: email },
      subject: { value: subject },
      message: { value: message },
    } = e.target;

    console.log(name);
    const newMessage = {
      id: new Date().getTime().toString(),
      name,
      email,
      verfication: false,
      subject,
      message,
      image: "https://www.computerhope.com/jargon/g/guest-user.png",
    };
    console.log(newMessage);
    dispatch(fetchAddMessages(newMessage));
    e.target.reset();
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
          <form onSubmit={(e) => sendMessage(e)}>
            <input type="text" name="name" className="info" required />
            <input type="email" name="email" className="info" required />
            <div className="robot">
              <input type="checkbox" />
              <p>Я не робот</p>
              <img src={Logo} alt="Logo" />
            </div>
            <input type="text" name="subject" className="info" required />
            <input type="text" name="message" className="message" required />
            <button>SEND</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
