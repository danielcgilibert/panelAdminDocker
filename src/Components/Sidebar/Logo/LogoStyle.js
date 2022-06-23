import { jsx, css } from '@emotion/react';

import styled from '@emotion/styled';

export const LogoDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px;
  gap: 9px;
  width: 202px;
  height: 103px;
  border-radius: 100%;

  img {
    width: 39px;
    height: 39px;
    border-radius: 100%;
  }
`;

export const TextLogo = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: #000000;
`;
