import React from "react";
import { Navbar } from "../../components/navbar/navbar.component";
import { Button, Container, Typography } from "@mui/material";
import imgBanner from "../../assets/banner/i 1.png";
import { useTranslation } from "react-i18next";
import "./home.style.scss";
export const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <section>
        <Container>
          <div className="flex items-center justify-between h-auto pt-[180px] contentBanner ">
            <div className="w-[50%] contentText">
              <Typography variant="h4" className="font-bold text-[#535353]">
                <span className="text-[#FFC94F]">I-LIGHTS</span> -{" "}
                {t("Эффективные решения")}
              </Typography>
              <p className="mt-[44px] text-[#8C8C8C] text-sm textBanner">
                {t("Компания I-lights")}
              </p>
              <Button
                className="btnBanner"
                sx={{ marginTop: "53px" }}
                variant="contained"
                size="large"
              >
                {t("Подробнее")}
              </Button>
            </div>
            <div className="w-[80%] h-[450px] ml-3 truncate contentImgBanner duration-500 flex items-center justify-center	">
              <img
                className="w-[100%] h-[450px] imgBanner duration-500	"
                src={imgBanner}
                alt="Img"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
