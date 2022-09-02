import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from "./Carousel.module.css";
import { moons } from "../utils/sliderInfo";
import CarouselItem from "./CarouselItem";

function CarouselComponent() {
  return (
    <div>
      <Carousel className={styles.carousel} interval="100000000">
        {moons.map((moon) => {
          const { id } = moon;

          return (
            <Carousel.Item key={id}>
              <CarouselItem moon={moon} />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
