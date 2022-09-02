import React from "react";
import Layout from "../components/Layout";
import PFL from "../components/PFL/pfl";
import CarouselComponent from "../components/CarouselComponent";
import Button from "react-bootstrap/Button";
import {
  //  removeFromCart,
  clearCart,
} from "../store/cart/actions";
import { useContext } from "react";
import { CartContext } from "../store/cart/context";
import styles from "./Button.module.css";

function Home() {
  // { moon }
  const { cartDispatch } = useContext(CartContext);

  // function handleCartRemove(moon) {
  //   const actionResult = removeFromCart(moon);
  //   cartDispatch(actionResult);
  // }

  function handleClearCart() {
    const actionResult = clearCart();
    cartDispatch(actionResult);
  }

  return (
    <div>
      <Layout>
        <CarouselComponent />
        <PFL />
        <Button
          className={styles.button}
          onClick={() => handleClearCart()}
          variant="success"
        >
          Checkout
        </Button>
      </Layout>
    </div>
  );
}

export default Home;
