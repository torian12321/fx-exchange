import { css } from '@emotion/core'
import { theme } from 'assets/styles';

export const header = css`
  grid-area: h;
`;
export const menu = css`
  grid-area: m;
`;
export const body = css`
  grid-area: b;
`;

export const main = css`
  display: grid;
  width: 100vw;
  min-height: 100vh;
  grid-template-areas: "h"
                       "m"
                       "b";
  grid-template-rows: 50px 200px 1fr; 1fr
  grid-template-columns: 1fr;

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-areas: "h h"
                         "m b";
    grid-template-rows: 50px 1fr;
    grid-template-columns: 250px 1fr;
  }
`;
