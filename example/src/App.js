import React, { useState } from 'react';
import styled from 'styled-components';
import { SplitView } from 'react-split-viewport';

export const Button = styled.button`
  width: 40px; height: 40px;
  z-index: 10;
  outline: none;
  border: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
  border-radius: 50%;
  box-shadow: rgb(0 0 0 / .2) 0px 0px 5px 0px;
  transition: box-shadow .3s;
  &:hover { box-shadow: rgb(0 0 0 / .4) 0px 0px 8px 0px; }
  svg {
    width: 100%; height: 100%;
    pointer-events: none;
    transition: fill .3s;
    path { transform: translate(0, 0); transition: transform .3s; }
  }
  ${({ isMinimized }) => isMinimized && (
    `svg g {
      path:first-child { transform: translate(12px, -12px); }
      path:last-child { transform: translate(-12px, 12px); }
    }`
  )}
`;

const MinimizeIcon = () => (
  <svg viewBox="0 0 41 41">
    <circle cx="20.5" cy="20.5" r="20.5" fill="#322f3d" />
    <g transform="translate(9.000000, 9.000000)" fill="#ffeb3b">
      <path d="M9.902 12.73a1.473 1.473 0 0 0-.278-.249c-.035-.023-.073-.04-.11-.06-.047-.025-.092-.054-.142-.074-.049-.02-.099-.032-.148-.046-.042-.013-.082-.03-.126-.038a1.46 1.46 0 0 0-.288-.029h-5.3a1.468 1.468 0 1 0 0 2.936h1.757L.43 20.007a1.467 1.467 0 1 0 2.076 2.075l4.955-4.954v1.992a1.468 1.468 0 1 0 2.936 0v-5.3c0-.435-.193-.822-.495-1.09z" /><path d="M12.729 9.783c.082.093.174.179.278.248.033.023.07.038.104.057.049.028.096.056.148.078.048.02.096.031.145.046.043.012.084.029.13.038.094.019.19.029.287.029h5.3a1.468 1.468 0 1 0 0-2.937h-1.756L22.2 2.506A1.467 1.467 0 1 0 20.125.43L15.17 5.385V3.392a1.468 1.468 0 1 0-2.936 0v5.3c0 .436.193.823.495 1.091z" />
    </g>
  </svg>
);

const App = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
  	<SplitView
      initWidth={40}
      range={{
        min: 5,
        max: 90
      }}
      onResize={({ isMinimized }) => setIsMinimized(isMinimized)}
      onSwitchClick={({ isMinimized }) => setIsMinimized(isMinimized)}
      switcherProps={{
        markup: (
          <Button {...{ isMinimized }}>
            <MinimizeIcon />
          </Button>
        )
      }}
  	/>
  );
};

export default App;
