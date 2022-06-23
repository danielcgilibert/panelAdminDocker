import { SignOut } from 'phosphor-react';
import { CloseButtonComponent } from './CloseButtonStyle';

export const CloseButton = () => {
  return (
    <CloseButtonComponent>
      <SignOut />
      Sign Out
    </CloseButtonComponent>
  );
};
