import { css } from '@emotion/react';

const breakpoints = {
  mobile: '500px',
};

export const GlobalStyles = css`
  * {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 130%;
    letter-spacing: 0.1px;
    color: #000000;
    @media (max-width: 600px) {
      font-size: 8px;
    }
  }

  /* @media (min-width: 420px) {
    font-size: 2px !important;
  } */
`;
