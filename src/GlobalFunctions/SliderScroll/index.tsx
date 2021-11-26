import React from "react";

export const scrollLeft = (e: React.MouseEvent) => {
  const slider = e.currentTarget.parentNode as HTMLElement;
  if (!slider) return;
  slider.scrollLeft = 0;
};

export const scrollRight = (e: React.MouseEvent) => {
  const slider = e.currentTarget.parentNode as HTMLElement;
  if (!slider) return;
  slider.scrollLeft = slider.scrollWidth;
};
