# react-resize-zoom

English | [中文说明](./README_CN.md)

[![Version](https://img.shields.io/badge/version-2.0.9-green)](https://www.npmjs.com/package/react-resize-zoom)

# Introduction?

Controls the size of child elements to scale

# featrues

- [x] Support for scaling the size of elements (not yet Canvas), providing flexible API controls for scaling edges or corners
- [x] Other properties of the wrapped `props.children` (properties that are not `draggResize` related) are not affected by `react-resize-zoom`. It's still the same as not being wrapped

# Matters

1. The child element cannot be an inline element;
2. `props. Children` limited to a single closed tag!

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
| axis                          | `auto / x / y / angle / none`            | -                                           | Allows control of drag edges or corners,`none` stop scaling                                                                                  |
| forbid                          | `boolean`     | -                                                  | forbid scaling                                                                                  |
| width                         | `number`                          | -                                                  | width                                                                                  |
| height                        | `number`                          | -                                                  | height                                                                                  |
| offset                        | `number`                          | `10`                                               | How far from the edge can be dragged                                                                              |
| onResizeStart                 | `function`                        | -                                                  | Drag scaling the start event;                                                                                          |
| onResizeMoving                | `function`                        | -                                                  | Drag scaling events                      |
| onResizeEnd                   | `function`                        | -                                                  | Drag scaling end the event                                                                                  |
| ref                           | `{current: HtmlElement}`          | `props.children`                                   | The ref of the child element                                                                                  |
| zIndexRange                   | `[number, number]`                | `[]`                                               | The `zIndex` range that can be set when dragging and dropping                                                                                          |



