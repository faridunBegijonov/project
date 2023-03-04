import React from "react";
import "./katalogHome.style.scss";
import { Button, Container, Typography } from "@mui/material";
import imgKatalog from "../../assets/katalog/anypics 1.png";
import { useTranslation } from "react-i18next";

export const KatalogHome: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="mt-[150px] contentKatalog ">
      <Container>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            borderLeft: "5px solid #FFC94F",
            paddingLeft: 2,
            color: "#535353",
          }}
        >
          {t("Каталог")}
        </Typography>
        <div className="flex items-center justify-between w-[100%] mt-[64px] flexContentKatalog ">
          <div className="w-[70%] pr-[24px] h-[467px] flex items-center justify-center contentImgkatalog">
            <img className="w-[100%] h-[467px]" src={imgKatalog} alt="Img" />
          </div>
          <div className="w-[30%] contentTextKatalog ">
            <Typography
              variant="h5"
              sx={{
                color: "#FFC94F",
              }}
            >
              {t("Трековые светильники")}
            </Typography>
            <p className="text-[#8C8C8C] my-[25px]">{t("Органично")}</p>
            <Button variant="contained" fullWidth size="large">
              {t("Перейти в каталог")}
            </Button>
            <Typography
              sx={{
                color: "#535353",
                margin: "14px 0",
                borderBottom: "3px solid #EFEFEF",
                paddingBottom: "14px",
              }}
              variant="h6"
            >
              {t("Встраиваемые светильники")}
            </Typography>

            <Typography
              sx={{
                color: "#535353",
                margin: "14px 0",
                borderBottom: "3px solid #EFEFEF",
                paddingBottom: "14px",
              }}
              variant="h6"
            >
              {t("Фигурные светильники")}
            </Typography>

            <Typography
              sx={{
                color: "#535353",
                margin: "14px 0",
                borderBottom: "3px solid #EFEFEF",
                paddingBottom: "14px",
              }}
              variant="h6"
            >
              {t("Светильники Армстронг")}
            </Typography>

            <Typography
              sx={{
                color: "#535353",
                marginTop: "14px",
                borderBottom: "3px solid #EFEFEF",
                paddingBottom: "14px",
              }}
              variant="h6"
            >
              {t("Светильники")}
            </Typography>
          </div>
        </div>
      </Container>
    </section>
  );
};
