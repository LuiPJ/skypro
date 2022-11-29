import React from "react";
import { Link } from "react-router-dom";

import styles from "./HeaderElements.module.scss";

function HeaderElements({ props }) {
  return (
    <>
      {props.map((element) => (
        <div className={styles.elements} key={element.name}>
          <Link className={styles.links} to={element.path}>
            {element.name}
          </Link>
        </div>
      ))}
    </>
  );
}

export default HeaderElements;
