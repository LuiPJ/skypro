import React from "react";
import { useOutletContext } from "react-router-dom";

import styles from "./Order.module.scss";

function Order() {
  const [state] = useOutletContext();
  const sum = state.cart.reduce(
    (acc, val) => acc + Number(val.price.replace(" ", "")) * Number(val.count),
    0
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>Оформление заказа</div>
      <input placeholder="Имя Фамилия"></input>
      <input placeholder="+ 7 904 000 80 80"></input>
      <input placeholder="Адрес доставки"></input>
      <div className={styles.total}>
        Итого:&nbsp;<span>{sum} руб.</span>
      </div>
      <button className={styles.button}>Оформить заказ</button>
    </div>
  );
}

export default Order;
