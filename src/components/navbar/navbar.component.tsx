import React, { useState } from "react";
import Container from "@mui/material/Container";
import { NavLink } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useTranslation } from "react-i18next";
import "./navbar.style.scss";
import i18n from "i18next";

export const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const showMenuClick = () => {
    setShowMenu(!showMenu);
  };
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (l?: string) => {
    setAnchorEl(null);
    i18n.changeLanguage(l);
  };

  return (
    <>
      <nav className="bg-[#0C0537] py-[20px] fixed w-[100%] ">
        <Container>
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between w-[60%] linkNav ">
              <NavLink to="/">{t("Главная")}</NavLink>
              <NavLink to="aboutCompany">{t("О компании")}</NavLink>
              <NavLink to="services">{t("Услуги")}</NavLink>
              <NavLink to="projects">{t("Проекты")}</NavLink>
              <NavLink to="shippingAndPayment">
                {t("Доставка и оплата")}
              </NavLink>
              <NavLink to="contacts"> {t("Контакты")} </NavLink>
              <NavLink to="compilation">{t("Подборка")}</NavLink>
            </div>

            <div className="flex items-center justify-between contentPhoneNav ">
              <Button
                sx={{
                  marginLeft: 3,
                  color: "rgba(100%, 100%, 100%, 0.8)",
                  fontWeight: "700",
                }}
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                endIcon={
                  open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
                }
              >
                {t("Язык")}
              </Button>
            </div>

            <p className="text-white hidden text-xs	 emailMobile">
              <i className="mr-2">
                <EmailIcon />
              </i>
              info@i-lights.ru
            </p>

            <IconButton
              onClick={showMenuClick}
              sx={{ color: "#fff", display: "none" }}
              className="menuIcon"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={() => handleClose()}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={() => handleClose("ru")}>Русский</MenuItem>
              <MenuItem onClick={() => handleClose("en")}>Английский</MenuItem>
            </Menu>
          </div>
        </Container>
      </nav>

      {showMenu && (
        <div className="mobileMenu h-screen flex items-center justify-between flex-col py-[100px] bg-[#0C0537] fixed z-50 top-0 left-0 right-0 bottom-0">
          <IconButton
            onClick={showMenuClick}
            sx={{
              color: "#fff",
              position: "absolute",
              top: "17px",
              right: "17px",
            }}
          >
            <CloseIcon />
          </IconButton>
          <NavLink to="/">{t("Главная")}</NavLink>
          <NavLink to="aboutCompany">{t("О компании")}</NavLink>
          <NavLink to="services">{t("Услуги")}</NavLink>
          <NavLink to="projects">{t("Проекты")}</NavLink>
          <NavLink to="shippingAndPayment">{t("Доставка и оплата")}</NavLink>
          <NavLink to="contacts"> {t("Контакты")} </NavLink>
          <NavLink to="compilation">{t("Подборка")}</NavLink>
          <Button
            sx={{
              color: "rgba(100%, 100%, 100%, 0.8)",
              fontWeight: "700",
            }}
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            endIcon={open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          >
            {t("Язык")}
          </Button>
        </div>
      )}
    </>
  );
};
