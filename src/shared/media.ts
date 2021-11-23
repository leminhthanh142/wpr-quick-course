export const mediaQueryDesktop = (css: string) => `@media (min-width: 1180px) and (max-width: 1300px) {
    ${css}
  }`;

export const mediaQueryTablet = (css: string) => `@media (min-width: 850px) and (max-width: 1179px) {
    ${css}
  }`;

export const mediaQueryTabletPortrait = (css: string) => `@media (min-width: 551px) and (max-width: 850px) {
    ${css}
  }`;

export const mediaQueryMobile = (css: string) => `@media (max-width: 550px) {
    ${css}
  }`;
