import React from "react";
import { DialogTitle, DialogContent, Dialog } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Invest from "../Invest/Invest";
import { useTranslation } from "next-i18next";

const useStyles = makeStyles(() => ({
  root: {
    "& .MuiPaper-rounded": {
      background: "#F8F8FB",
      maxWidth: "660px",
      maxHeight: "553px",
      "@media(max-width:576px)": {
        margin: "0",
        width: "100%",
        minHeight: "100vh",
        borderRadius: "0",
      },
    },
    "& .MuiDialogTitle-root": {
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

export default function DialogStrategy(props) {
  const { open, handleClose } = props;
  const classes = useStyles();
  const { t } = useTranslation("common");

  return (
    <Dialog
      className={`${classes.root}`}
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle disableTypography={"false"}>
        <div className="header">
          <h3>{t("calculator_profit")}</h3>
          <div className="outIcon" onClick={handleClose}>
            <img src="images/icons/outIcon.svg" alt="outIcon" />
          </div>
        </div>
      </DialogTitle>
      <DialogContent>
        <Invest />
      </DialogContent>
    </Dialog>
  );
}
