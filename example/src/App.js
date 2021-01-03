import React from 'react';

import { SplitView } from 'react-split-view';

const App = () => {

  return (
  	<SplitView
      range={{
        min: 0,
        max: 100
      }}
  	/>
  );
}

export default App;
