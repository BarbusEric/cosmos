import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from "./Carousel.module.css";
import Button from "react-bootstrap/Button";
import { addToCart } from "../store/cart/actions";
import { useContext } from "react";
import { CartContext } from "../store/cart/context";

function CarouselItem({ moon }) {
  const contextValue = useContext(CartContext);
  const { cartDispatch } = contextValue;

  const { title, image, text, price, subtitle, distance, population } = moon;

  function handleOnClick(moon) {
    const actionResult = addToCart(moon);
    cartDispatch(actionResult);
  }

  return (
    <div className="d-flex">
      <img src={image} className={styles.carousel_image} alt="img" />

      <Carousel.Caption className={styles.carousel_caption}>
        <div className={styles.text}>
          <h4>{title}</h4>
          <h5>{subtitle}</h5>
          <p>Distance: {distance}</p>
          <p>AUPopulation: {population}</p>
        </div>
        <div className={styles.container}>
          <div className={styles.information_container}>
            <p>{title}</p>
            <p>{text}</p>
          </div>
          <div className={styles.price}>
            <div className={styles.container_container}>
              <div className={styles.countainer}>
                <strong>{price} €</strong>
                <p>one way ticket</p>
              </div>

              <Button
                className={styles.button}
                variant="success"
                onClick={() => {
                  handleOnClick(moon);
                }}
              >
                Purcashe
              </Button>
            </div>
          </div>
        </div>
      </Carousel.Caption>
    </div>
  );
}

export default CarouselItem;
