import { css, keyframes } from '@emotion/core'

const color = '#b159a4'

const spin = keyframes`
  0%   { transform: rotate(0deg);   }
  100% { transform: rotate(360deg); }
`;

export const spinner = css`
  color: ${color};
  padding: 0;
  border: 4px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  font-size: 24px;
  height: 1em;
  width: 1em;
  background: transparent;

  animation: ${spin} 1s infinite;
`;
