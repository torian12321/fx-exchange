import { css } from '@emotion/core'
import { theme, functions } from 'assets/styles';
// import { transparentize } from 'assets/styles/functions';

// const color = theme.colors.bg;

export const wrapper = css`
  position: relative;
  margin: 1em -1em;
  text-align: center;
`;
export const progressBar = css`
  position: absolute;
  width: 100%;
  left: 0;
  height: 2px;
  top: 50%;
  background: ${theme.colors.primary};
`;

export const badge = css`
  // font-size: .8em;
  position: relative;
  display: inline;
  background: ${theme.colors.bgDark};
  color: ${functions.smartTextColor(theme.colors.bgDark)};

  padding: .3em 1em;
  border-radius: 6em;

  transition: 
    height ${theme.transitionTime} ease-out,
    opacity ${theme.transitionTime} ease 0.5s;

  & > * {
    display: inline-block;
  }
`;
export const badgeHighlighted = css`
  background: ${theme.colors.secondary};
  color: ${functions.smartTextColor(theme.colors.secondary)};
`;

export const icon = css`
  position: relative;
  top: .2em;
  width: 1em;
  margin-right: 0.8em;
`;
export const text = css`
`;
