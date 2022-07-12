import { Box, Container, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import cls from "./FAQ.module.scss";
import { useTranslation, i18n } from "next-i18next";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchBar from "../SearchBar/SearchBar";
import Fuse from "fuse.js";
import { AccordionFunction } from "../../../utils/accordionFilter";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    overflow: "hidden",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function FAQ({ data }) {
  const [listData, setListData] = useState(data);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [filteredData, setfilteredData] = useState([]);
  const [list, setList] = useState(false);
  const [text, setText] = useState("");
  const { t } = useTranslation("common");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const accordionHandleChange = (panel) => (event, isExpanded) => {
    isExpanded ? f.map((el) => el !== panel) : f.push(panel);
    // setList((old) => ([...old ,isExpanded ? old.id !== panel :  ""]))
  };

  const options = {
    includeScore: true,
    threshold: 0.2,
    keys: ["child.question"],
  };

  // console.log("OPTION", options);
  const searchIndex = new Fuse(data, options);

  // console.log("FUSE DATA", data);

  // const handleFilter = e => {
  //   e.preventDefault()
  //   const wordEntered = e.target.value
  //   setText(wordEntered)
  //   const result = searchIndex.search(text)
  //   console.log("RESULT", result);
  //   if (text === "") {
  //     setfilteredData([]);
  //     setListData(data);
  //     setList(false)
  //   } else {
  //     setfilteredData(data);
  //     setListData(result ? result.map(el => el.item) : "")
  //     setList(result ? result.map(el => el.item) : '')
  //   }

  // }

  let a = [];

  let b = data.map((el) => el.child.forEach((el) => a.push(el)));
  // console.log("DATA LIST", a);

  let f = [""];

  let d = list ? list.map((el) => el.child.forEach((el) => f.push(el.id))) : "";
  // console.log("LIST DATAAAAAA", f);
  // console.log("LISTTTTTT", list);

  let e = data.map((el) => el.id);
  // console.log("DATAAA", e);

  const [accordion, setAccordion] = useState(false);
  const handleFilter = (e) => {
    e.preventDefault();
    const wordEntered = e.target.value;
    const arr = AccordionFunction(wordEntered, a);
    // console.log("ACCORDION ARRAY", arr);

    setText(wordEntered);
    // const result = data.find((el, ind) =>
    //   el.child.filter((item) =>
    //     item.question.toLowerCase().includes(text.toLowerCase())));
    if (text === "") {
      setfilteredData([]);
      setListData(data);
      setAccordion(false);
    } else {
      setfilteredData(data);
      setExpanded(true);
      setListData(false);
      setAccordion(arr);
    }
  };
  const clearInput = () => {
    setfilteredData([]);
    setListData(data);
    setText("");
    setAccordion(false);
  };

  return (
    <>
      {/* ACCORDIONS */}
      <div className={cls.roots}>
        <div className={cls.topTitle}>
          <Container>
            <Typography className={cls.title}>
              {t("frequently_asked_questions")}
            </Typography>
            <Typography className={cls.preTitle}>{t("what iman")}</Typography>
            <Typography className={cls.text}>{t("what iman text")}</Typography>
          </Container>
        </div>

        <SearchBar
          placeholder={t("Enter your question")}
          clearInput={clearInput}
          handleFilter={handleFilter}
          filteredData={filteredData}
          setfilteredData={setfilteredData}
          setListData={setListData}
          data={data}
          text={text}
          setText={setText}
        />
        {listData &&
          listData.map((el, index) => (
            <Container className={cls.container}>
              <Box className={cls.box}>
                <div className={cls.row}>
                  <div className={classes.root}>
                    <Accordion
                      key={index}
                      // expanded={el.id === e[index]}
                      expanded={expanded === el.id}
                      onChange={handleChange(el.id)}
                    >
                      <AccordionSummary
                        aria-controls={el.aria}
                        id={el.id}
                        className={cls.contentBorder}
                      >
                        <Typography className={cls.contentTitle}>
                          <div dangerouslySetInnerHTML={{ __html: el.title }} />
                        </Typography>
                        <span className={cls.icon}>
                          <ExpandMoreIcon />
                        </span>
                      </AccordionSummary>
                      <AccordionDetails className={cls.info}>
                        {el.child.map((item, ind) => (
                          <div key={ind} className="flex flex-col">
                            <Accordion
                              className={cls.contentBorder}
                              // onChange={accordionHandleChange(item.id)}
                              // expanded={f.find(el => el === item.id)}
                              // expanded={list ? f.find(el => el === item.id) : false}
                            >
                              <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={item.ariaChild}
                                id={item.id}
                              >
                                <Typography className={cls.content}>
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html: item.question,
                                    }}
                                  />
                                </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography className={cls.contentBody}>
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html: item.answer,
                                    }}
                                  />
                                </Typography>
                              </AccordionDetails>
                            </Accordion>
                          </div>
                        ))}
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </div>
              </Box>
            </Container>
          ))}
        {accordion &&
          accordion.map((el, ind) => (
            <Container className={cls.container}>
              <Box className={cls.box}>
                <div className={cls.row}>
                  <div className={classes.root}>
                    <div key={ind} className="flex flex-col">
                      <Accordion
                        className={cls.contentBorder}
                        // onChange={accordionHandleChange(item.id)}
                        // expanded={f.find(el => el === item.id)}
                        // expanded={list ? f.find(el => el === item.id) : false}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls={el.ariaChild}
                          id={el.id}
                        >
                          <Typography className={cls.content}>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: el.question,
                              }}
                            />
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography className={cls.contentBody}>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: el.answer,
                              }}
                            />
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    </div>
                  </div>
                </div>
              </Box>
            </Container>
          ))}
      </div>
    </>
  );
}
