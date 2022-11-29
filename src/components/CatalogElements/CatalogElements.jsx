import React from "react";

import styles from "./CatalogElements.module.scss";

function CatalogElements({ props }) {
  return (
    <div className={styles.item}>
      <img src={require(`../../image/${props.img}.jpeg`)} alt={props.name} />
      <span className={styles.name}>{props.name}</span>
      <span className={styles.description}>{props.description}</span>
      <span className={styles.price}>{props.price} руб.</span>
      <h1>ADD</h1>
    </div>
  );
}

export default CatalogElements;
