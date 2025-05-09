import React from "react";
import styles from "./card.module.scss";

const Card = ({ children, cardClass }) => {
  return (
    <div className={`${styles.cardContainer} ${cardClass}`}>{children}</div>
  );
};

export default Card;
