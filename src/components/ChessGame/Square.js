import React from "react";

const Square = ({ black, children, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: black ? "black" : "white",
        color: black ? "white" : "black",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {children}
    </div>
  );
};

export default Square;
