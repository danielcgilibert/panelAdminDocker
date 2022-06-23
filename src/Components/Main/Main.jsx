import { jsx, css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { getContainers } from '../../api/getContainers';
import { CardContainer } from './cardContainer/CardContainer';

export const Main = () => {
  const [containers, setContainers] = useState([]);
  useEffect(() => {
    getContainers().then((data) => setContainers(data));
  }, []);

  console.log(containers);
  return (
    <main
      css={css`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 25px;
      `}
    >
      {/* <h1>Containers</h1> */}

      {containers.map(({ Image: image, Status: status, Names: names }) => (
        <CardContainer image={image} status={status} names={names} />
      ))}
    </main>
  );
};
