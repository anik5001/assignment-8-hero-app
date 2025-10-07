import React from "react";
import Container from "./Container";
import { Link } from "react-router";
import logoImg from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-neutral">
      <Container>
        <footer className="text-white">
          <div className="flex justify-between p-6">
            <div>
              <Link to="/" className="flex items-center gap-2">
                <img className="w-[50px]" src={logoImg} alt="" />
                <h1 className="font-bold text-xl">HERO.IO</h1>
              </Link>
            </div>
            <div>
              <h1>Social Links</h1>
              <div className="flex gap-2 mt-2">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>
          <div>
            <p className="text-center py-5">
              Copyright © 2025 - All right reserved
            </p>
          </div>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
