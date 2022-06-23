import { NavComponent } from './NavStyle';
import { routes } from '../../../../Router/routes';
import { Item } from './ItemList/ItemList';

export const Nav = () => {
  return (
    <NavComponent>
      <ul>
        {routes.map(({ name, icon, key, route }) => (
          <Item key={key} name={name} icon={icon} route={route} />
        ))}
      </ul>
    </NavComponent>
  );
};
