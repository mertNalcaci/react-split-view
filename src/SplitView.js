import React, { useState, useRef, useEffect } from 'react';
import { oneOfType, element, node, number, shape, string, func, bool } from 'prop-types';

import {
  Wrapper, Col, Resizer, DefaultButton, ResizeHandler, DefaultResizeHandler, DefaultContent, Switcher
} from './styles';

const getPercentage = x => parseFloat(((x * 100) / window.innerWidth).toPrecision(2));

const SplitView = ({
  left,
  right,
  initWidth,
  range,
  resizeProps,
  resizeHandlerProps,
  onResize,
  showSwitcher,
  switcherProps
}) => {
  const wrapperRef = useRef();
  const [width, setWidth] = useState(initWidth);
  const [initVal, setInitVal] = useState({ width, clientX: 0 });
  const [isResizing, setIsResizing] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    if (isResizing) {
      // add window listeners to detect mouse move
      window.document.addEventListener('mousemove', onMouseMove);
      window.document.addEventListener('mouseup', onMouseUp);
    }
  }, [isResizing]);

  useEffect(() => {
    // Switch minimizer mode with respect to closeness between width and range.min
    setIsMinimized(width - range.min <= 10);
  }, [width]);

  const handleResize = newWidth => {
    const { width } = initVal;

    // Update width state if prev is different than current
    if (newWidth !== width) {
      setWidth(newWidth);
      // trigger onResize
      if (typeof onResize === 'function') {
        onResize({ left: 100 - newWidth, right: newWidth, isMinimized: newWidth - range.min <= 10 });
      }
    }
  };

  const handleSwitchClick = () => {
    setWidth(isMinimized ? range.max : range.min);

    if (typeof switcherProps.onSwitchClick === 'function') {
      switcherProps.onSwitchClick({ isMinimized: !isMinimized });
    }
  };

  const onMouseMove = e => {
    const { width, clientX } = initVal;
    const deltaX = e.clientX - clientX;
    // Calculate percentage of mapperWidth
    const newWidth = getPercentage(width - deltaX);
    // Allow expansion between max and min for mapperSide
    if (newWidth >= range.max || newWidth <= range.min) {
      return;
    }
    // Change width of splitted parts
    handleResize(newWidth);
  };

  const onMouseUp = () => {
    // Remove listeners from window
    window.document.removeEventListener('mousemove', onMouseMove);
    window.document.removeEventListener('mouseup', onMouseUp);
    // drag finished for resizing
    setIsResizing(false);
  };

  const onMouseDown = e => {
    const [, rightSide] = wrapperRef.current.children;

    setInitVal({
      clientX: e.clientX,
      width: rightSide.offsetWidth
    });
    // drag started for resizing
    setIsResizing(true);
  };

  return (
    <Wrapper
      ref={wrapperRef}
      {...{ isResizing }}
    >
      <Col {...{ width, resizeProps, side: 'left' }}>
        {left}
      </Col>
      <Col {...{ width, resizeProps, side: 'right' }}>
        <Resizer
          {...resizeProps}
          onMouseDown={onMouseDown}
        >
          <ResizeHandler { ...resizeHandlerProps.position }>
            {resizeHandlerProps.markup}
          </ResizeHandler>
        </Resizer>
        {right}
      </Col>
      {showSwitcher && (
        <Switcher
          { ...switcherProps.position }
          onClick={handleSwitchClick}
        >
          {switcherProps.markup}
        </Switcher>
      )}
    </Wrapper>
  );
};

SplitView.propTypes = {
  left: oneOfType([element, node]),
  right: oneOfType([element, node]),
  initWidth: number,
  range: shape({
    min: number,
    max: number
  }),
  onResize: func,
  resizeProps: shape({
    bgColor: string,
    width: number,
    height: shape({
      val: number,
      unit: string
    })
  }),
  resizeHandlerProps: shape({
    markup: oneOfType([element, node]),
    position: shape({
      x: number,
      y: number,
      unit: string
    })
  }),
  showSwitcher: bool,
  switcherProps: shape({
    markup: oneOfType([element, node]),
    position: shape({
      x: number,
      y: number,
      unit: string
    }),
    onSwitchClick: func
  })
};

SplitView.defaultProps = {
  initWidth: 50,
  left: <DefaultContent content="Left" />,
  right: <DefaultContent content="Right" />,
  range: {
    min: 25,
    max: 75
  },
  onResize: null,
  resizeProps: {
    bgColor: '#322f3d',
    width: 10,
    height: {
      val: 100,
      unit: '%'
    }
  },
  resizeHandlerProps: {
    markup: <DefaultResizeHandler />,
    position: {
      x: 50,
      y: 50,
      unit: '%'
    }
  },
  showSwitcher: true,
  switcherProps: {
    markup: <DefaultButton content="Switch" />,
    onSwitchClick: null,
    position: {
      x: 10,
      y: 10,
      unit: 'px'
    }
  }
};

export default SplitView;
