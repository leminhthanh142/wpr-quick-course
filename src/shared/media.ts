export const mediaQueryDesktop = (css: string) => `@media (min-width: 1025px) {
    ${css}
  }`;

export const mediaQueryTablet = (css: string) => `@media (min-width: 850px) and (max-width: 1024px) {
    ${css}
  }`;

export const mediaQueryTabletPortrait = (css: string) => `@media (min-width: 768px) and (max-width: 850px) {
    ${css}
  }`;

export const mediaQueryMobile = (css: string) => `@media (max-width: 767px) {
    ${css}
  }`;
