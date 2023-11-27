import React from "react";

const SingleSliderEight = ({ slide = {} }) => {
  const { bg, text, title } = slide;

  return (
    <div className="swiper-slide">
      <div
        className="image-layer"
        style={{
          backgroundImage: `url(${
            require(`@/images/update-01-10-2021/slider/${bg}`).default.src
          })`,
        }}
      ></div>
      <div className="auto-container">
        <div className="slider-eight__content">
          <p className="slider-eight__text">
            <span>{text}</span>
          </p>
          <h2 className="slider-eight__title">{title}</h2>
       
        </div>
      </div>
    </div>
  );
};

export default SingleSliderEight;
