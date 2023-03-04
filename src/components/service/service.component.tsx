import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import img1 from "../../assets/service/ико.png";
import img2 from "../../assets/service/shipment 1.png";
import img3 from "../../assets/service/ико (1).png";
import img4 from "../../assets/service/Ико (2).png";
import img5 from "../../assets/service/ико (3).png";
export const Service: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="mt-[85px]">
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
          {t("УслугиC")}
        </Typography>
        <div data-aos="fade-up" data-aos-duration="1000">
          <Accordion sx={{ marginTop: 4 }}>
            <AccordionSummary
              sx={{ mt: 4 }}
              expandIcon={<ExpandMoreIcon sx={{ color: "#FFC94F" }} />}
              aria-controls="panel1a-content"
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "bold",
                  color: "#535353",
                }}
              >
                <img src={img1} className="pr-[15px]" alt="Img" />{" "}
                <p>{t("Изготовление")}</p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "#A6A6A6" }}>{t("Мы ценим")}</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              sx={{ mt: 2 }}
              expandIcon={<ExpandMoreIcon sx={{ color: "#FFC94F" }} />}
              aria-controls="panel2a-content"
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "bold",
                  color: "#535353",
                }}
              >
                <img className="pr-[15px]" src={img2} alt="Img" /> Поставки
                дизайнерского света от ведущих европейских производителей
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "#A6A6A6" }}>{t("Мы ценим")}</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              sx={{ mt: 2 }}
              expandIcon={<ExpandMoreIcon sx={{ color: "#FFC94F" }} />}
              aria-controls="panel2a-content"
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "bold",
                  color: "#535353",
                }}
              >
                <img src={img3} className="pr-[15px]" alt="Img" />{" "}
                Проектирование, светотехнические расчеты и разработка концепции
                освещения
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "#A6A6A6" }}>{t("Мы ценим")}</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              sx={{ mt: 2 }}
              expandIcon={<ExpandMoreIcon sx={{ color: "#FFC94F" }} />}
              aria-controls="panel2a-content"
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "bold",
                  color: "#535353",
                }}
              >
                <img src={img4} className="pr-[15px]" alt="Img" />
                Модернизация светильников
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "#A6A6A6" }}>{t("Мы ценим")}</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              sx={{ mt: 2 }}
              expandIcon={<ExpandMoreIcon sx={{ color: "#FFC94F" }} />}
              aria-controls="panel2a-content"
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "bold",
                  color: "#535353",
                }}
              >
                <img src={img5} className="pr-[15px]" alt="Img" />
                Ремонт светодиодных светильников
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "#A6A6A6" }}>{t("Мы ценим")}</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </Container>
    </section>
  );
};
