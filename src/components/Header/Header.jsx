import React from "react";

import HeaderElement from "../HeaderElement/HeaderElement";

import { HEADER_ELEMENTS } from "../../constants/constants";

import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.interior}>Интерьер.</div>
      <div className={styles.elements}>
        <HeaderElement props={HEADER_ELEMENTS} />
      </div>
    </div>
  );
}

export default Header;
