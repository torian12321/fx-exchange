import { css } from '@emotion/core'
import { theme, functions } from 'assets/styles';
import { transparentize } from 'assets/styles/functions';

const color = theme.colors.bg;

export const wrapper = css`
  width: 100%;
  max-width: 400px;
  font-size: 1rem;
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
    background: ${functions.darkenColor(color, 2)};
    box-shadow: 0 0 1rem 0 ${transparentize(theme.colors.secondary, 0.16)};
  }
`;
