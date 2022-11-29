import React from "react";

import HeaderElements from "./HeaderElements/HeaderElements";

import styles from "./Header.module.scss";

function Header() {
  const headerElements = [
    { name: "Каталог", path: "/catalog" },
    {
      name: "Корзина",
      path: "/cart",
    },
  ];

  return (
    <div className={styles.header}>
      <div className={styles.interior}>Интерьер.</div>
      <div className={styles.elements}>
        <HeaderElements props={headerElements} />
      </div>
    </div>
  );
}

export default Header;
