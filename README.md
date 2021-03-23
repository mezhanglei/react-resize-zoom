# react-resize-zoom

English | [中文说明](./README_CN.md)

[![Version](https://img.shields.io/badge/version-1.0.2-green)](https://www.npmjs.com/package/react-resize-zoom)

# Introduction?

Controls the size of child elements to scale

# featrues

- [x] Support for scaling the size of elements (not yet Canvas), providing flexible API controls for scaling edges or corners
- [x] The scope of the drag is controlled by whether the event returns`false` or not to continue scaling

# Matters

1. The child element cannot be an inline element because transform does not work on inline elements!
2. 'props. Children' limited to a single closed tag!

### install
```
npm install --save react-resize-zoom
# or
yarn add react-resize-zoom
```

### example
```javascript
import DragResize from 'react-resize-zoom';

<DragResize>
    <div style={{ width: '50px', height: "50px", background: "red" }}>
        大小拖放
    </div>
</DragResize>
```

## Attributes

| name                          | type                  | defaultValue                                                   | description                                                                                                      |
| ----------------------------- | --------------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| axis                          | `auto / x / y / angle`            | -                                                  | Allows control of drag edges or corners                                                                                  |
| offset                        | `number`                          | `10`                                               | How far from the edge can be dragged                                                                              |
| onResizeStart                 | `function`                        | -                                                  | Drag and drop the start event                                                                                          |
| onResizeMoving                | `function`                        | -                                                  | Drag and drop events                      |
| onResizeEnd                   | `function`                        | -                                                  | Drag and drop to end the event                                                                                  |
| ref                           | `{current: HtmlElement}`          | `props.children`                                   | The ref of the child element                                                                                  |
| zIndexRange                   | `[number, number]`                | `[1, 2]`                                          | The `zIndex` range that can be set when dragging and dropping                                                                                          |



