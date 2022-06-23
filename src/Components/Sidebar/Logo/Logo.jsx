import logoDocker from '../../../../assets/logo2.png';
import { LogoDiv, TextLogo } from './LogoStyle';

export const Logo = () => {
  return (
    <LogoDiv>
      <img src="https://images.unsplash.com/photo-1570126618953-d437176e8c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80" />
      <TextLogo>AdDock</TextLogo>
    </LogoDiv>
  );
};
