import React from "react";

import styles from "./CatalogElement.module.scss";

function CatalogElement({ data, handler }) {
  return (
    <div className={styles.item} onClick={() => handler(data.id)}>
      <img
        src={require(`../../static/image/${data.img}.jpeg`)}
        alt={data.name}
      />
      <span className={styles.name}>{data.name}</span>
      <span className={styles.description}>{data.description}</span>
      <span className={styles.price}>{data.price} руб.</span>
    </div>
  );
}

export default CatalogElement;
