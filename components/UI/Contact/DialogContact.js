import React from "react";
import { DialogTitle, Dialog, DialogContent, Button } from "@material-ui/core";
import { Telegram } from "@material-ui/icons";
import { useTranslation } from "next-i18next";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    "& .MuiPaper-rounded": {
      background: "#F8F8FB",
      maxWidth: "500px",
      maxHeight: "553px",
    },
    "& .MuiDialogContent-root": {
      textAlign: "center",
      "& .contactBody": {
        padding: "30px",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        "& p": {
          fontWeight: "500",
          fontSize: "18px",
          lineHeight: "24px",
          color: "rgba(4, 4, 21, 0.6)",
        },
      },
    },
    "& .MuiDialogTitle-root": {
      position: "relative",

      "& .header": {
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        "& h3": {
          fontWeight: "600",
          fontSize: "24px",
          lineHeight: "32px",
        },
        "& .outIcon": {
          position: "absolute",
          top: "20px",
          right: "20px",
          cursor: "pointer",
        },
      },
    },
    "& .MuiButton-root": {
      borderRadius: "10px",
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
          <h3>{t("do_you_have_questions")}</h3>
          <div className="outIcon" onClick={handleClose}>
            <img src="images/icons/outIcon.svg" alt="outIcon" />
          </div>
        </div>
      </DialogTitle>
      <DialogContent>
        <div className="contactBody">
          <p>{t("dialog_contact_description")}</p>
          <a href={"https://t.me/imaninvest"} target="_blank">
            <Button startIcon={<Telegram />}>{t("go_telegram_channel")}</Button>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
