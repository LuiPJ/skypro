import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

import CatalogElement from "../../CatalogElement/CatalogElement";
import FilterSelect from "../../FilterSelect/FilterSelect";

import styles from "./Catalog.module.scss";

const COUNTER = 1;

function Catalog() {
  const [state, setState] = useOutletContext();
  const { items } = state;

  const handleElementCatalog = (id) => {
    const foundElement = items.find((item) => item.id === id);
    if (foundElement) {
      setState((state) => {
        const cartElementIndex = state.cart.findIndex(
          (item) => item.id === foundElement.id
        );
        if (cartElementIndex !== -1) {
          const newCart = [...state.cart];
          newCart[cartElementIndex].count = String(
            Number(newCart[cartElementIndex].count) + COUNTER
          );
          return {
            ...state,
            cart: newCart,
          };
        } else {
          foundElement.count = String(Number(foundElement.count) + COUNTER);
          return { ...state, cart: [...state.cart, foundElement] };
        }
      });
    }
  };

  const [selectedClient, setSelectedClient] = useState("all");

  const sortItems =
    selectedClient === "all"
      ? items
      : [...items].sort((a, b) => {
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
          <CatalogElement
            key={item.id}
            data={item}
            handler={handleElementCatalog}
          />
        ))}
      </div>
    </div>
  );
}

export default Catalog;
