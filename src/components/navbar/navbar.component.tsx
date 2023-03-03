import React from "react";
import Container from "@mui/material/Container";
import logo from "../../assets/navbar/logo.png";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#0C0537] py-[10px] ">
      <Container>
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>
      </Container>
    </nav>
  );
};
