import React from "react";

function Card({ titulo, children }) {
  const estilo = {
    border: "2px solid pink",
    borderRadius: "12px",
    padding: "10px",
    margin: "10px 0",
    backgroundColor: "#ffe6f0",
  };

  return (
    <div style={estilo}>
      <h3>{titulo}</h3>
      {children}
    </div>
  );
}

export default Card;
