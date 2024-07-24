import React from "react";
import "./card.scss";
function Card({ children, customClass }) {
  return (
    <div className={`mycard ${customClass && customClass}`}>{children}</div>
  );
}

export default Card;
