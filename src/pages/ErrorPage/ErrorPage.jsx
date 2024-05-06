import React from "react";
import "./errorpage.css";
const ErrorPage = () => {
  return (
    <div className="error-page">
      <div class="error-number">404</div>
      <div class="error-text">
        <span>Ooops...</span>
        <br />
        page not found
      </div>
      <a
        className="me"
        href="https://codepen.io/uzcho_/pens/popular/?grid_type=list"
        target="_blank"
      ></a>
    </div>
  );
};

export default ErrorPage;
