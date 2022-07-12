import React from "react";
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
      maxWidth: "1068px",
      //   minHeight: "595px",
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
        height: "30px",
        background: "transparent",

        "& .outIcon": {
          position: "absolute",
          right: "60px",
          top: "30px",
          cursor: "pointer",
          "@media(max-width:576px)": {
            top: "15px",
            right: "25px",
          },
        },
      },
    },
    "& .MuiDialogContent-root": {
      padding: "0 50px 50px 50px",
      "@media(max-width:576px)": {
        padding: "24px",
      },
      "& .bodyTeam": {
        display: "flex",
        gap: "30px",
        "@media(max-width:992px)": {
          flexDirection: "column",
          alignItems: "center",
        },
        "& h3 ": {
          fontWeight: "700",
          fontSize: "24px",
          lineHeight: "24px",
        },
        "& .position": {
          margin: "10px 0",
          fontWeight: "600",
          fontSize: "14px",
          lineHeight: "24px",
        },
        "& p": {
          marginTop: "10px",
          fontWeight: "300",
          fontSize: "14px",
          lineHeight: "24px",
        },
        "& .img": {
          objectFit: "cover",
          width: "363px",
          height: "487px",
          borderRadius: "26px",
          "@media(max-width:576px)": {
            width: "100%",
            height: "auto",
            borderRadius: "26px",
          },
        },
      },
    },
  },
}));

export default function TeamDialog({ data, setOpen, open }) {
  const classes = useStyles();
  const { t } = useTranslation("common");

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog
      className={`${classes.root}`}
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle disableTypography={"false"}>
        <div className="header">
          <div className="outIcon" onClick={handleClose}>
            <img src="images/icons/outIcon.svg" alt="outIcon" />
          </div>
        </div>
      </DialogTitle>
      <DialogContent>
        <div className="bodyTeam">
          <img
            className="img"
            src={`images/company/team/${data.url}`}
            alt={data.name}
          />
          <div>
            <h3>{t(data?.name)}</h3>
            <p className="position">{t(data?.position)}</p>
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <a href={data?.link} target="_blank">
                <img src="images/company/icons/linkedin.svg" alt="linkedin" />
              </a>
              <a href={data?.insta} target="_blank">
                <img src="images/company/icons/insta.svg" alt="instagram" />
              </a>
            </div>
            <p>{t(data?.about)}</p>
            <p>{t(data?.text)}</p>
            <p>{t(data?.content)}</p>
            <p>{data?.vizyon ? `${t("vizyon")}: ${t(data?.vizyon)}` : ""}</p>
            <p>
              {data?.ocupation
                ? `${t("Education")}: ${t(data?.ocupation)}`
                : ""}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
