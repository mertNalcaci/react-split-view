# react-split-view

> It splits view in half

[![NPM](https://img.shields.io/npm/v/react-split-view.svg)](https://www.npmjs.com/package/react-split-view) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-split-view
```

## Usage

```jsx
import React, { Component } from 'react';
import SplitView from 'react-split-view';

const Example = () => (
  <SplitView
    range={{
      min: 30,
      max: 70
    }}
    left: {<div>Left</div>}
    right: {<div>Right</div>}
  />
);
```

## Props

| Name                                         | Description         |Default | Value            |
|:--------------------------------------------------|:----------------------------------|:-----|:--------|
| initWidth                          | Initial width of the right side.(Initial left side will be calculated with respect to this value)                    | 50   | number    |
| left                          | Content for left side                    | <div>Left</div>   | element   |
| right                          | Content for right side                    | <div>Right</div>   | element   |
| range                          | Minimum and maximum adjustment levels                    | { min: 25, max: 75 }   | { min: number, max: number }    |
| resizeProps                          | Style property for resize bar                    | { bgColor: '#322f3d', width: 10, height: { val: 100, unit: '%' } }   | { bgColor: string, width: number, height: { val: number, unit: string } }   |
| resizeHandlerProps                          | Style property for resize handler                    | { markup: <DefaultResizeHandler />, position: { x: 50, y: 50 } }   | { markup: element, position: { x: number, y: number } }   |

## License

MIT © [mertNalcaci](https://github.com/mertNalcaci)
