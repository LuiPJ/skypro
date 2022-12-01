import React from "react";
import { Link } from "react-router-dom";

import styles from "./HeaderElement.module.scss";

function HeaderElement({ props }) {
  return (
    <>
      {props.map((element) => (
        <div className={styles.elements} key={element.name}>
          <Link className={styles.links} to={element.path}>
            <span className={styles.icon}>{element.icon}</span>
            <span className={styles.text}>{element.name}</span>
          </Link>
        </div>
      ))}
    </>
  );
}

export default HeaderElement;
