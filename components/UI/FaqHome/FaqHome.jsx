import React, { useState } from "react";

import {
  Box,
  Container,
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import cls from "./FaqHome.module.scss";
import { useTranslation } from "next-i18next";
import Fade from "react-reveal/Fade";
import { makeStyles } from "@material-ui/core/styles";
import { Vector } from "../Icons";
import { accordianData } from "./faqData";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    backgroundColor: "f5f5f5",
    "& .MuiAccordion-root.Mui-expanded ": {
      marginBottom: "0",
    },
    "& .MuiAccordionSummary-content": {
      margin: "30px 0 !important",
    },
    "& .MuiAccordion-rounded": {
      borderRadius: 0,
      backgroundColor: "transparent",
    },
  },
}));

export default function FaqHome() {
  const { t } = useTranslation("common");
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const classes = useStyles();

  return (
    <div className={cls.root}>
      <Container className={cls.container}>
        <Fade center>
          <Box className={cls.row}>
            <Grid container spacing={3} justify="center">
              <Grid item xs={12}>
                <Typography className={cls.mainTitle} variant="h2">
                  {t("frequently_asked_questions")}
                </Typography>
              </Grid>
              <Grid item md={10} xs={12}>
                <Box className={cls.accordian}>
                  <div className={classes.root}>
                    {accordianData?.map((elm, index) => (
                      <Accordion
                        expanded={expanded === elm.title}
                        key={index}
                        onChange={handleChange(elm.title)}
                      >
                        <AccordionSummary
                          expandIcon={<Vector />}
                          aria-controls={elm.controls}
                          id={elm.id}
                        >
                          <Typography className={cls.title}>
                            {t(elm?.title)}
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography
                            className={cls.content}
                            dangerouslySetInnerHTML={{
                              __html: t(elm?.content),
                            }}
                          ></Typography>
                        </AccordionDetails>
                      </Accordion>
                    ))}
                  </div>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Container>
    </div>
  );
}
