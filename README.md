# react-split-viewport

> It splits view in half

[![NPM](https://img.shields.io/npm/v/react-split-viewport.svg)](https://www.npmjs.com/package/react-split-viewport) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-split-viewport
```

## Usage

```jsx
import React from 'react';
import { SplitView } from 'react-split-viewport';

const App = () => (
	<SplitView
	  initWidth={45}
    range={{
      min: 25,
      max: 75
    }}
    left=<div>Left</div>
    right=<div>Right</div>
	/>
);

export default App;
```

## Props

| Name                                         | Description         |Default | Value            |
|:--------------------------------------------------|:----------------------------------|:-----|:--------|
| initWidth                          | Initial width of the right side.(Initial left side will be calculated with respect to this value)                    | 50   | number    |
| left                          | Content for left side                    | <div>Left</div>   | element   |
| right                          | Content for right side                    | <div>Right</div>   | element   |
| range                          | Minimum and maximum adjustment levels                    | { min: 25, max: 75 }   | { min: number, max: number }    |
| onResize                          | Resize callback                    | null   | func   |
| resizeProps                          | Style property for resize bar                    | { bgColor: '#322f3d', width: 10, height: { val: 100, unit: '%' } }   | { bgColor: string, width: number, height: { val: number, unit: string } }   |
| resizeHandlerProps                          | Style property for resize handler                    | { markup: <DefaultResizeHandler />, position: { x: 50, y: 50, unit: '%' } }   | { markup: element, position: { x: number, y: number, unit: string } }   |
| showSwitcher                          | Switcher visibility                    | true   | bool   |
| onSwitchClick                          | Switch click callback                    | null   | func   |
| switcherProps                          | Style property for switch button                    | { markup: <DefaultButton />, position: { x: 10, y: 10, unit: 'px' } }   | { markup: element, position: { x: number, y: number, unit: string } }   |

## License

MIT © [mertNalcaci](https://github.com/mertNalcaci)
