const fontfamily =
  "'Gilroy', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif";

export default {
  MuiContainer: {
    root: {
      paddingLeft: "15px",
      paddingRight: "15px",
      "@media (min-width: 600px)": {
        paddingLeft: "15px",
        paddingRight: "15px",
      },
    },
    maxWidthLg: {
      "@media (min-width: 1280px)": {
        maxWidth: "1230px",
      },
    },
  },
  MuiAccordionSummary: {
    root: {
      padding: "0",
    },
    content: {
      margin: "16px 0!important",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
    },
  },
  MuiAccordion: {
    root: {
      "&::before": {
        opacity: "1!important",
      },
    },
  },
  MuiAccordionDetails: {
    root: {
      padding: "0 0 24px",
    },
  },
  MuiPaper: {
    elevation1: {
      boxShadow: "none",
    },
    rounded: {
      borderRadius: "16px",
    },
  },
  MuiCardMedia: {
    root: {
      height: "200px",
      borderRadius: "16px",
    },
  },
  MuiDialog: {
    paper: {
      borderRadius: "16px",
    },
  },

  MuiButton: {
    root: {
      fontWeight: "600",
      fontSize: "18px",
      lineHeight: "22px",
      borderRadius: "16px",
      textTransform: "none",
      letterSpacing: "normal",
      backgroundColor: "var(--primary-color)",
      padding: "12px!important",
      color: "#fff",
      transition: "all 0.3s ease;",
      border: "1px solid var(--primary-color)",
      fontFamily: fontfamily,
      "&:hover": {
        backgroundColor: `#fff!important`,
        color: "var(--primary-color)",
      },
      whiteSpace: "nowrap",
    },
    contained: {
      padding: "22px 40px!important",
      backgroundColor: `#fff`,
      color: "var(--primary-color)",
      borderColor: "transparent",
      boxShadow: "none!important",
      "&:hover": {
        color: `#fff`,
        backgroundColor: "#56d3cf!important",
        borderColor: "#fff",
      },
    },
    sizeLarge: {
      padding: "16px 64px!important",
      fontSize: "20px",
      lineHeight: "32px",
      "@media (max-width: 800px)": {
        padding: "8px 26px!important",
      },
      "@media (max-width: 600px)": {
        padding: "14px 20px!important",
        fontSize: "16px",
        lineHeight: "22px",
        fontWeight: "500",
      },
    },
    outlined: {
      backgroundColor: "#fff",
      color: "var(--primary-color)",
      border: "1px solid var(--primary-color)",
      "&:hover": {
        color: `#fff`,
        backgroundColor: "var(--primary-color)!important",
      },
    },
  },
};
