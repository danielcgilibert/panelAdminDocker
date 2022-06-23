import React from 'react';
import { jsx, css } from '@emotion/react';

export const CardContainer = ({ names, status = '10', image = 'ubuntu' }) => {
  const [name] = names;
  return (
    <section>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          background-color: #f9f9f9;
          padding: 15px;
          border-radius: 15px;
        `}
      >
        <div
          css={css`
            display: flex;
            gap: 25px;
          `}
        >
          <p>🟢{status} </p>

          <p>{name}</p>
        </div>

        <div
          css={css`
            display: flex;
            flex-direction: column;
          `}
        >
          <p>Image : {image}</p>
        </div>
      </div>
    </section>
  );
};
