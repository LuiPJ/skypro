import React, { useState } from "react";

import CatalogElements from "../../CatalogElements/CatalogElements";
import FilterSelect from "../../FilterSelect/FilterSelect";

import ITEMS from "../constants";

import styles from "./Catalog.module.scss";

function Catalog() {
  const [selectedClient, setSelectedClient] = useState("all");

  const sortItems =
    selectedClient === "all"
      ? ITEMS
      : [...ITEMS].sort((a, b) => {
          if (selectedClient === "cheap")
            return (
              Number(a.price.replace(" ", "")) -
              Number(b.price.replace(" ", ""))
            );
          else
            return (
              Number(b.price.replace(" ", "")) -
              Number(a.price.replace(" ", ""))
            );
        });

  const handleSelectChange = (event) => {
    setSelectedClient(event.target.value);
  };

  return (
    <div className={styles.layout}>
      <FilterSelect handle={handleSelectChange} />
      <div className={styles.container}>
        {sortItems.map((item) => (
          <CatalogElements key={item.id} props={item} />
        ))}
      </div>
    </div>
  );
}

export default Catalog;
