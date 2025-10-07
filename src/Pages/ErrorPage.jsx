import React from "react";
import errorImg from "../assets/error-404.png";

const ErrorPage = () => {
  return (
    <div>
      <img className="mx-auto" src={errorImg} alt="" />
    </div>
  );
};

export default ErrorPage;
