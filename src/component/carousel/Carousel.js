import { useState } from "react";
import arrowLeft from "./img/arrow-left.png";
import arrowRight from "./img/arrow-right.png";
import "./Carousel.scss";

export default function Carousel({ images, text, prefix }) {
  let [current, setCurrent] = useState(0);
  const length = images.length;

  const slideRight = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const slideLeft = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="Carousel">
      {/* Create button navigation */}
      {images.length > 1 && (
        <>
          <img onClick={() => slideRight()} src={arrowRight} className="Carousel_SlideRight" alt="Slide à droite" />
          <img onClick={() => slideLeft()} src={arrowLeft} className="Carousel_SlideLeft" alt="Slide à gauche" />
        </>
      )}
      {/* MAP View DIV and add class slide + active or not */}
      {images.map((img, index) => {
        return (
          <div key={`${prefix}-${index}-${Math.random()}`} className={index === current ? "slide active" : "slide"}>
            {/* IF index === current state view images */}
            {index === current && (<img src={images[current]} alt={text} className="image" />)}
          </div>
        );
      })}
      {/* Create Container Bullet */}
      <div className="Carousel_Bullet">
        <p>{current + 1} / {length}</p>
      </div>
    </section>
  );
}
