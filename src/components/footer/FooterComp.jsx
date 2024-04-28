import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
const FooterComp = () => {
  return (
    <footer>
      <div className="footer-first-box">
        <Link className="footer-link">
          Community platform by XenForo® © 2010-2024 XenForo Ltd.
        </Link>
        {" | "}
        <Link className="footer-link">Style and add-ons by ThemeHouse</Link>
      </div>
      <div className="footer-second-box">
        <Link className="footer-nav-link">CONTACT US</Link>
        <Link className="footer-nav-link">TERMS AND RULES</Link>
        <Link className="footer-nav-link">PRIVACY POLICY</Link>
        <Link className="footer-nav-link">TERMS AND RULES</Link>
      </div>
    </footer>
  );
};

export default FooterComp;
