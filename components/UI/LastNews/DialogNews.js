import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from "next-i18next";
import {
  DialogContent,
  DialogContentText,
  DialogTitle,
  Dialog,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    "& .MuiPaper-rounded": {
      background: "#F8F8FB",
      maxWidth: "755px",
      maxHeight: "700px",
      "@media(max-width:576px)": {
        margin: "0",
        width: "100%",
        minHeight: "100vh",
        borderRadius: "0",
      },
    },
    "& .MuiDialogContent-root": {
      padding: "0px",
      "& .img": {
        objectFit: "contain",
        width: "100%",
        height: "398px",
      },
    },
    "& .MuiDialogTitle-root": {
      boxShadow: "inset 0px -1px 0px rgba(0, 0, 0, 0.05)",
      "& .header": {
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",

        "& .outIcon": {
          cursor: "pointer",
        },
      },
    },
  },
}));

export default function DialogNews({ data }) {
  const classes = useStyles();
  const { t } = useTranslation("news");
  const [open, setOpen] = useState(false);
  const firstrRender = useRef(true);
  const { title, modalDescr, modalImg } = data;

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    if (!firstrRender.current) {
      setOpen(true);
    }
    firstrRender.current = false;
  }, [data]);

  return (
    <Dialog
      className={`${classes.root}`}
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle disableTypography={"false"}>
        <div className="header">
          <h3>{t(title)}</h3>
          <div className="outIcon" onClick={handleClose}>
            <img src="images/icons/outIcon.svg" alt="outIcon" />
          </div>
        </div>
      </DialogTitle>
      <DialogContent>
        <div>
          <img className="img" src={modalImg} width={"100%"} alt="img" />
          <DialogContentText>
            <p
              style={{
                padding: "25px",
                color: "#000",
                fontWeight: 500,
                fontSize: "18px",
                lineHeight: "24px",
                color: "rgba(4, 4, 21, 0.6)",
              }}
              dangerouslySetInnerHTML={{
                __html: t(modalDescr),
              }}
            ></p>
          </DialogContentText>
        </div>
      </DialogContent>
    </Dialog>
  );
}
