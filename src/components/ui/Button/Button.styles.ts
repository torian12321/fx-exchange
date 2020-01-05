import { css } from '@emotion/core'
import { theme, functions } from 'assets/styles';

const color = theme.colors.secondary;

export const btn = css`
  outline: none;
  font-size: 1rem;
  padding: .4em 2em;
  border-radius: 10em;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  line-height: 2em;

  background: ${color};
  color: ${functions.smartTextColor(color)};

  &:hover {
    background: ${functions.darkenColor(color, 5)};
  }
  &:focus,
  &:active {
    background: ${functions.darkenColor(color, 10)};
  }
`

export const btnDisabled = css`
  &,
  &:hover {
    cursor: not-allowed;
    background: ${theme.colors.states.disabled.bg};
    color: ${theme.colors.states.disabled.text};
  }
`

export const loader = css`
  font-size: 1em;
  color: white;
  display: block;
  margin: auto;

  position: relative;
  top: 0%;
`;


export const contentLoading = css`
  opacity: 0;
  height: 0;
  display: block;
`;
