# react-resize-zoom

[English](./README.md) | 中文说明

[![Version](https://img.shields.io/badge/version-1.0.0-green)](https://www.npmjs.com/package/react-resize-zoom)

# 适用场景

控制子元素的大小进行缩放

# features

- [x] 支持对元素(暂未支持canvas)的大小尺寸进行缩放,提供灵活的api控制边或角进行缩放
- [x] 通过事件返回`false`与否来控制是否继续进行缩放,从而控制拖拽范围

# 注意事项

1. 子元素不能为行内(inline)类型元素
2. `props.children`限制为单个闭合标签!

### 快速安装
```
npm install --save react-resize-zoom
# or
yarn add react-resize-zoom
```

### 示例
```javascript
import DragResize from 'react-resize-zoom';

<DragResize>
    <div style={{ width: '50px', height: "50px", background: "red" }}>
        大小拖放
    </div>
</DragResize>
```

## 组件属性说明

| 名称                          | 类型                  | 默认值                                                         | 描述                                                                                                      |
| ----------------------------- | --------------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| axis                          | `auto / x / y / angle`            | -                                                  | 允许控制拖拽的边或角                                                                                  |
| offset                        | `number`                          | `10`                                               | 离边多远可以拖拽                                                                              |
| onResizeStart                 | `function`                        | -                                                  | 拖拽开始事件                                                                                          |
| onResizeMoving                | `function`                        | -                                                  | 拖拽进行事件                      |
| onResizeEnd                   | `function`                        | -                                                  | 拖拽结束事件                                                                                  |



