import React from "react";
import { useOutletContext } from "react-router-dom";

import styles from "./CatrElement.module.scss";

function CartElement({ props, deleteItem }) {
  const [state, setState] = useOutletContext();
  const elementIndex = state.cart.findIndex((item) => item.id === props.id);

  const handleNumChange = (event) => {
    if (event.target.value < 1) return;
    setState((state) => {
      const newCart = [...state.cart];
      newCart[elementIndex].count = event.target.value;
      return { ...state, cart: newCart };
    });
  };

  return (
    <div className={styles.item}>
      <img
        className={styles.img}
        src={require(`../../static/image/${props.img}.jpeg`)}
        alt={props.name}
        width={173}
        height={173}
      />
      <div className={styles.info}>
        <span className={styles.name}>{props.name}</span>
        <span className={styles.description}>{props.description}</span>
        <span className={styles.price}>
          {Number(props.price.replace(" ", "")) *
            Number(state.cart[elementIndex].count)}{" "}
          руб.
        </span>
        <div className={styles.buttons}>
          <button>Избранное</button>
          <button
            onClick={() => {
              deleteItem(props.id);
            }}
          >
            Удалить
          </button>
        </div>
      </div>
      <input
        type="number"
        className={styles.count}
        value={state.cart[elementIndex].count}
        onChange={handleNumChange}
      ></input>
    </div>
  );
}

export default CartElement;
