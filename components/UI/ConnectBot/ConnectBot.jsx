import React from "react";

function ConnectBot() {
  return (
    <img
      onClick={() => {
        if (typeof window !== "undefined") {
          window.open("https://t.me/imaninvest_bot", "_blank");
        }
      }}
      style={{
        cursor: "pointer",
        position: "fixed",
        right: "20px",
        bottom: "20px",
        zIndex: "100000",
      }}
      src="images/icons/connect.svg"
      width="60px"
      height="60px"
      alt="connect"
    />
  );
}

export default ConnectBot;
