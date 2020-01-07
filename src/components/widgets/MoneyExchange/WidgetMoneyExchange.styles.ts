import { css } from '@emotion/core'
import { theme, functions } from 'assets/styles';

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

  &:hover {
    background: ${functions.darkenColor(color, 2)};
  }
`;
