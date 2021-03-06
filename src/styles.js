import styled from 'styled-components';

export const Col = styled.div`
  position: relative;
  flex: 1 1;
  min-width: 0;
  flex-basis: ${({ width, side }) => (side === 'left' ? `${100 - width}%` : `${width}%`)};
  ${({ side, resizeProps: { width } }) => `padding-${side === 'left' ? 'right' : 'left'}: ${width / 2}px`};
  transition: flex-basis .3s;
`;

export const ColContent = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  ${({ isResizing }) => isResizing && `
    & > ${Col} {
      transition: none;
      pointer-events: none;
      user-select: none;
    }
  `}
`;

export const Switcher = styled.div`
  position: absolute; 
  right: 10px;
  top: 10px;
`;

export const DefaultButton = styled.button`
  display: inline-block;
  outline: none;
  cursor: pointer;
  &:before {
    content: ${({ content }) => `"${content}"`};
  }
`;

export const Resizer = styled.div`
  position: absolute;
  height: ${({ height: { val, unit } }) => `${val}${unit}`};
  width: ${({ width }) => `${width}px`};
  top: 50%;
  left: 0;
  background-color: ${({ bgColor }) => bgColor};
  cursor: col-resize;
  transform: translate(-50%, -50%);
`;

export const ResizeHandler = styled.div`
  position: absolute;
  ${({ x, y, unit }) => `top: ${y}${unit}; left: ${x}${unit};`}
  ${({ x, y }) => (x === 50 && y === 50) && 'transform: translate(-50%, -50%);'}
`;

export const DefaultResizeHandler = styled.div`
  background-color: #ffeb3b;
  border: 4px solid #322f3d;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  box-shadow: 0 0 5px 0 rgba(0,0,0,.2);
`;

export const DefaultContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:before {
    content: ${({ content }) => `"${content}"`};
    font-family: monospace, sans-serif;
    font-size: 4em;
    text-align: center;
  }
`;
