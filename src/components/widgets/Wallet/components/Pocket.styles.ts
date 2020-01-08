import { css } from '@emotion/core'
import { theme, functions } from 'assets/styles';

const color = theme.colors.bgLight;

export const wrapper = css`
  display: inline-flex;
  width: 100%;
  font-size: 1rem;
  position: relative;
  padding: .6em 1em;
  margin: 0 0 .5em;
  border-radius: ${theme.border.radius};
  box-sizing: border-box;
  line-height: 2em;

  border: ${theme.border.border};
  background: ${color};
  color: ${functions.smartTextColor(color)};
`;

export const image = css`
  font-size: 2em;
  width: 1em;
  height: 1em;
`;
export const label = css`
  font-weight: bold;
  margin: 0 1em;
`;
