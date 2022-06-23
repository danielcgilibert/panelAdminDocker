import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const ItemNavLink = styled(NavLink)`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 12px;
  padding: 12px 15px;
  margin-bottom: 15px;
  width: 105px;
  height: 35px;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  text-decoration: inherit;
  transition: all 0.3s;
  :hover {
    transform: scale(1.05);
  }
  &.active {
    svg {
      fill: white;
    }
    svg > rect {
      width: 0;
      height: 0;
      fill: none;
    }
    svg > * {
      stroke: white;
    }
    background: #0832de;
    cursor: default;
    p {
      color: white;
    }
  }
`;
