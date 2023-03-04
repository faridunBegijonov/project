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
              <img src={img1} className="pr-[15px]" alt="Img" /> Изготовление
              счетильников для торгового и общественного освещени
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#A6A6A6" }}>
              Мы ценим Ваше время, поэтому, коротко о главном. Наша компания
              была образована с целью предложить Российскому рынку
              профессиональные светотехнические решения для освещения магазинов,
              офисов и объектов общественно-развлекательного назначения. Сегодня
              мы поставляем осветительное оборудование различных ценовых
              категорий из стран Юго-Восточной Азии и Европы, а так же являемся
              дистрибьюторами лучших Российских производителей. А среди наших
              клиентов, сетевые и частные магазины одежды и обуви, продуктовые
              магазины, торговые и офисные центры, представители индустрии
              красоты и здоровья, кафе, рестораны, отели, коттеджные поселки и
              частные заказчики.
            </Typography>
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
            <Typography sx={{ color: "#A6A6A6" }}>
              Мы ценим Ваше время, поэтому, коротко о главном. Наша компания
              была образована с целью предложить Российскому рынку
              профессиональные светотехнические решения для освещения магазинов,
              офисов и объектов общественно-развлекательного назначения. Сегодня
              мы поставляем осветительное оборудование различных ценовых
              категорий из стран Юго-Восточной Азии и Европы, а так же являемся
              дистрибьюторами лучших Российских производителей. А среди наших
              клиентов, сетевые и частные магазины одежды и обуви, продуктовые
              магазины, торговые и офисные центры, представители индустрии
              красоты и здоровья, кафе, рестораны, отели, коттеджные поселки и
              частные заказчики.
            </Typography>
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
              <img src={img3} className="pr-[15px]" alt="Img" /> Проектирование,
              светотехнические расчеты и разработка концепции освещения
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#A6A6A6" }}>
              Мы ценим Ваше время, поэтому, коротко о главном. Наша компания
              была образована с целью предложить Российскому рынку
              профессиональные светотехнические решения для освещения магазинов,
              офисов и объектов общественно-развлекательного назначения. Сегодня
              мы поставляем осветительное оборудование различных ценовых
              категорий из стран Юго-Восточной Азии и Европы, а так же являемся
              дистрибьюторами лучших Российских производителей. А среди наших
              клиентов, сетевые и частные магазины одежды и обуви, продуктовые
              магазины, торговые и офисные центры, представители индустрии
              красоты и здоровья, кафе, рестораны, отели, коттеджные поселки и
              частные заказчики.
            </Typography>
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
            <Typography sx={{ color: "#A6A6A6" }}>
              Мы ценим Ваше время, поэтому, коротко о главном. Наша компания
              была образована с целью предложить Российскому рынку
              профессиональные светотехнические решения для освещения магазинов,
              офисов и объектов общественно-развлекательного назначения. Сегодня
              мы поставляем осветительное оборудование различных ценовых
              категорий из стран Юго-Восточной Азии и Европы, а так же являемся
              дистрибьюторами лучших Российских производителей. А среди наших
              клиентов, сетевые и частные магазины одежды и обуви, продуктовые
              магазины, торговые и офисные центры, представители индустрии
              красоты и здоровья, кафе, рестораны, отели, коттеджные поселки и
              частные заказчики.
            </Typography>
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
            <Typography sx={{ color: "#A6A6A6" }}>
              Мы ценим Ваше время, поэтому, коротко о главном. Наша компания
              была образована с целью предложить Российскому рынку
              профессиональные светотехнические решения для освещения магазинов,
              офисов и объектов общественно-развлекательного назначения. Сегодня
              мы поставляем осветительное оборудование различных ценовых
              категорий из стран Юго-Восточной Азии и Европы, а так же являемся
              дистрибьюторами лучших Российских производителей. А среди наших
              клиентов, сетевые и частные магазины одежды и обуви, продуктовые
              магазины, торговые и офисные центры, представители индустрии
              красоты и здоровья, кафе, рестораны, отели, коттеджные поселки и
              частные заказчики.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </section>
  );
};
