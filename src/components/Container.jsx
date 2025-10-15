import React from "react";

function Container({ children }) {
  const estilo = {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "20px",
    backgroundColor: "#fff0f5",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  };

  return <div style={estilo}>{children}</div>;
}

export default Container;
