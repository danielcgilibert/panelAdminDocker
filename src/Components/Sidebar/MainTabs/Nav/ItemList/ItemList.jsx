import { useState } from 'react';
import { ItemNavLink } from './ItemStyle';

export const Item = ({ name, icon: Icon, route }) => {
  return (
    <li>
      <ItemNavLink to={route}>
        <Icon />
        <p>{name}</p>
      </ItemNavLink>
    </li>
  );
};
