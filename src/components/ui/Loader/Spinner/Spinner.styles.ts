import { css, keyframes } from '@emotion/core'
import { theme } from 'assets/styles';

const spin = keyframes`
  0%   { transform: rotate(0deg);   }
  100% { transform: rotate(360deg); }
`;

export const spinner = css`
  color: ${theme.colors.secondary};
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
