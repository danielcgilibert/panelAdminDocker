import { Nav } from './Nav/Nav';
import { MainTabsDiv } from './MainStyle';
import { CloseButton } from './CloseButton/CloseButton';
export const MainTabs = () => {
  return (
    <MainTabsDiv>
      <Nav />
      <CloseButton />
    </MainTabsDiv>
  );
};
