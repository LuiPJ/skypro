import React from "react";

import styles from "./FilterSelect.module.scss";

function FilterSelect({ handle }) {
  return (
    <>
      <select className={styles.select} onChange={handle}>
        <option value="all">Фильтр</option>
        <option value="expensive">Порядок: Сначала дорогие</option>
        <option value="cheap">Порядок: Сначала дешевые</option>
        <span className={styles.arrow} />
      </select>
    </>
  );
}

export default FilterSelect;
