import React from "react";
import { Link, useOutletContext } from "react-router-dom";

import Order from "../../Order/Order";
import CartElement from "../../CartElement/CartElement";

import styles from "./Cart.module.scss";

function Cart() {
  const [state, setState] = useOutletContext();
  const { cart } = state;

  const deleteItem = (id) => {
    setState((state) => {
      const updatedCart = state.cart.filter((item) => item.id !== id);
      return { ...state, cart: updatedCart };
    });
  };

  const clearCart = () => {
    const emptyArray = [];
    setState({ ...state, cart: emptyArray });
  };
  return (
    <>
      {cart.length !== 0 ? (
        <div className={styles.container}>
          <div className={styles.element}>
            <div className={styles.header}>
              <span>Товар</span>
              <span>К-во</span>
            </div>
            {cart.map((el) => (
              <CartElement key={el.id} props={el} deleteItem={deleteItem} />
            ))}
            <div className={styles.buttons}>
              <button
                onClick={() => {
                  clearCart();
                }}
              >
                Очистить корзину
              </button>
              <Link className={styles.dark} to={"/catalog"}>
                Продолжить покупки
              </Link>
            </div>
          </div>
          <div className={styles.order}>
            <Order />
          </div>
        </div>
      ) : (
        <div className={styles.clear}>Корзина пуста!</div>
      )}
    </>
  );
}

export default Cart;
