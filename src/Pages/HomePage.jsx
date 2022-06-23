import { Main } from '../Components/Main/Main';
import { jsx, css } from '@emotion/react';

function HomePage() {
  return (
    <div
      css={css`
        position: absolute;
        top: 0;
        left: 250px;
        margin-top: 57px;
        width: 80%;
      `}
    >
      <Main />
    </div>
  );
}

export default HomePage;
