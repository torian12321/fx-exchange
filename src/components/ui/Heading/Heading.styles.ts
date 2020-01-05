import { css } from '@emotion/core'
import { theme } from 'assets/styles';

export const heading = css`
  margin: .5em 0;
  display: block;
  font-weight: bold;
  color: ${theme.colors.text.dark};
  
  h1&,
  h2& {
    color: ${theme.colors.primary};
  }
  
  h1& { font-size: 2.4em; }
  h2& { font-size: 2em; }
  h3& { font-size: 1.8em; }
  h4& { font-size: 1.25em; }
  h5& { font-size: 1.2em; }
  h6& { font-size: 1em; }
`;