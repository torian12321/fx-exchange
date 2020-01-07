import { css } from '@emotion/core'
import { theme, functions } from 'assets/styles';

const color = theme.colors.primary;

export const main = css`
  background: ${color};
  color: ${functions.smartTextColor(color)};
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: .8em;
`;
