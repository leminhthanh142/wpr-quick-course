export const scrollLeft = (e: any, callback: () => void) => {
  const slider = e.currentTarget.parentNode;
  slider.scrollLeft = 0;
  callback();
};

export const scrollRight = (e: any, callback: () => void) => {
  const slider = e.currentTarget.parentNode;
  slider!.scrollLeft = slider!.scrollWidth;
  callback();
};
