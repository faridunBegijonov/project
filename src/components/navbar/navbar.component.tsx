import React, { useState } from "react";
import Container from "@mui/material/Container";
import { NavLink } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import { Button, IconButton } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./navbar.style.scss";

export const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const showMenuClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <nav className="bg-[#0C0537] py-[20px] ">
        <Container>
          <div className="flex items-center justify-between">
            <IconButton
              onClick={showMenuClick}
              sx={{ color: "#fff", display: "none" }}
              className="menuIcon"
            >
              <MenuIcon />
            </IconButton>
            <div className="flex items-center justify-between w-[60%] linkNav ">
              <NavLink to="/">Главная</NavLink>
              <NavLink to="aboutCompany">О компании</NavLink>
              <NavLink to="services">Услуги</NavLink>
              <NavLink to="projects">Проекты</NavLink>
              <NavLink to="shippingAndPayment">Доставка и оплата</NavLink>
              <NavLink to="contacts"> Контакты </NavLink>
              <NavLink to="compilation">Подборка</NavLink>
            </div>

            <div className="flex items-center justify-between contentPhoneNav ">
              <p className="text-white emailNav">
                <i className="mr-2">
                  <EmailIcon />
                </i>
                info@i-lights.ru
              </p>
              <Button sx={{ marginLeft: 3, color: "#fff" }} variant="outlined">
                <i>
                  <PhoneIcon />
                </i>
                +7 (495) 233 55 57
              </Button>
            </div>

            <p className="text-white hidden text-xs	 emailMobile">
              <i className="mr-2">
                <EmailIcon />
              </i>
              info@i-lights.ru
            </p>
          </div>
        </Container>
      </nav>

      {showMenu && (
        <div className="mobileMenu h-screen flex items-center justify-between flex-col py-[100px] bg-[#0C0537] fixed top-0 left-0 right-0 bottom-0">
          <IconButton
            onClick={showMenuClick}
            sx={{
              color: "#fff",
              position: "absolute",
              top: "20px",
              right: "20px",
            }}
          >
            <CloseIcon />
          </IconButton>
          <NavLink to="/">Главная</NavLink>
          <NavLink to="aboutCompany">О компании</NavLink>
          <NavLink to="services">Услуги</NavLink>
          <NavLink to="projects">Проекты</NavLink>
          <NavLink to="shippingAndPayment">Доставка и оплата</NavLink>
          <NavLink to="contacts"> Контакты </NavLink>
          <NavLink to="compilation">Подборка</NavLink>
          <p className="text-white emailMobile">
            <i className="mr-2">
              <EmailIcon />
            </i>
            info@i-lights.ru
          </p>
          <Button sx={{ marginLeft: 3, color: "#fff" }} variant="outlined">
            <i>
              <PhoneIcon />
            </i>
            +7 (495) 233 55 57
          </Button>
        </div>
      )}
    </>
  );
};
