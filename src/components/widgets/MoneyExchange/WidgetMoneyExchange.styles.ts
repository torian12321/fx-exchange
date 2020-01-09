import { css } from '@emotion/core'
import { theme, functions } from 'assets/styles';
import { transparentize } from 'assets/styles/functions';

const color = theme.colors.bgLight;

export const wrapper = css`
  width: 100%;
  max-width: 320px;
  min-width: 260px;
  font-size: 1rem;
  position: relative;
  padding: .6em 1em;
  border-radius: ${theme.border.radius};
  box-sizing: border-box;
  line-height: 2em;

  border: ${theme.border.border};
  background: ${color};
  color: ${functions.smartTextColor(color)};
`;

export const wrapperActive = css`
  transition: box-shadow .4s;

  &:hover {
    // background: ${functions.darkenColor(color, 2)};
    box-shadow: 0 0 1rem 0 ${transparentize(theme.colors.secondary, 0.16)};
  }
`;


export const moneyBox = css`
  width: 100%;
  margin: 20px 0;
  display: grid;
  grid-gap: 12px;
  grid-template-areas: "select input";
  grid-template-columns: 100px 1fr;
`;
export const moneyBox__select = css`
  grid-area: select;
`;
export const moneyBox__input = css`
  grid-area: input;
`;
