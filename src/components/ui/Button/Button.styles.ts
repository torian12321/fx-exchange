import { css } from '@emotion/core'
import { theme } from 'assets/styles';

const color = 'white';

export const btn = css`
  font-size: 12px;
  padding: .4em 2em;
  border-radius: 4px;
  border: none;
  box-sizing: border-box;

  background: ${theme.colors.primary};
  color: white;

  &:hover {
    color: ${color};
    background-color: red; 
  }
`

export const btnDisabled = css`
  background: black;
`

export const loader = css`
  font-size: 1em;
  color: white;
  display: block;
  margin: auto;

  position: relative;
  top: 0%;
`;
