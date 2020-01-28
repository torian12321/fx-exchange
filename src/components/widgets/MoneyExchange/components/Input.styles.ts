import { css } from '@emotion/core'
import { theme, functions } from 'assets/styles';

const color = theme.colors.bgLight;

export const input = css`
  outline: none;
  width: 100%;
  font-size: 1rem;
  position: relative;
  padding: .35em 1em;
  border-radius: 4px;
  box-sizing: border-box;
  line-height: 2em;
  text-align: right;

  border: ${theme.border.border};
  background: ${color};
  color: ${functions.smartTextColor(color)};

  &:focus {
    border-color: ${theme.colors.primary};
  }
`;

export const input_disabled = css`
  background: ${theme.colors.states.disabled.bg};
  color: ${theme.colors.states.disabled.text};
`;
