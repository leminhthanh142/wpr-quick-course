import React from "react";
import leftArrow from "../sources/left-arrow.png";
import rightArrow from "../sources/right-arrow.png";
let scrollState = document.querySelector(".preventHidden");
const prevBtn = document.querySelector(".cata-btn.btn-prev");
const nextBtn = document.querySelector(".cata-btn.btn-next");
export const PrevButton = () => {
  const scrollLeft = () => {
    scrollState.scrollLeft = 0;
    prevBtn.style.opacity = 0;
    nextBtn.style.opacity = 1;
  };
  return (
    <div onClick={scrollLeft} className="cata-btn btn-prev">
      <img src={leftArrow} alt="prev button" />
    </div>
  );
};
export const NextButton = () => {
  const scrollRight = () => {
    scrollState.scrollLeft = scrollState.scrollWidth;
    nextBtn.style.opacity = 0;
    prevBtn.style.opacity = 1;
  };
  return (
    <div onClick={scrollRight} className="cata-btn btn-next">
      <img src={rightArrow} alt="next button" />
    </div>
  );
};
