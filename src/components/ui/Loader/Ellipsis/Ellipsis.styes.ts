import { css, keyframes } from '@emotion/core'
import { theme } from 'assets/styles';

const opacitychange = keyframes`
  0%, 100% { opacity: .2; }
  60%      { opacity: 1; }
`

export const wrapp = css`
  font-size: 12px;
  color: ${theme.colors.secondary};
`

export const dot = css`
  display: inline-block;
  width: .8em;
  height: .8em;
  border-radius: 100%;
  background: currentColor;
  margin: 0 .2em;
  opacity: 0;

  animation: ${opacitychange} 1s ease infinite;

  &:nth-child(1) { animation-delay: 0; }
  &:nth-child(2) { animation-delay: 0.33s; }
  &:nth-child(3) { animation-delay: 0.66s; }
`