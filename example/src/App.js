import React, { useState } from 'react';

import { SplitView } from 'react-split-viewport';

const App = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
  	<SplitView
      initWidth={40}
      range={{
        min: 20,
        max: 100
      }}
      onResize={({ isMinimized }) => setIsMinimized(isMinimized)}
      onSwitchClick={({ isMinimized }) => setIsMinimized(isMinimized)}
      switcherProps={{
        markup: <button>{isMinimized ? 'Maximize' : 'Minimize'}</button>
      }}
  	/>
  );
};

export default App;
