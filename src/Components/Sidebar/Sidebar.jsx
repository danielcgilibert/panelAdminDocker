import { Logo } from './Logo/Logo';
import { MainTabs } from './MainTabs/MainTabs';
import { SideBarAside } from './SideBarStyle';
export const Sidebar = () => {
  return (
    <SideBarAside>
      <Logo />
      <MainTabs />
    </SideBarAside>
  );
};
