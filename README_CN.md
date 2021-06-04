# react-resize-zoom

[English](./README.md) | 中文说明

[![Version](https://img.shields.io/badge/version-2.0.6-green)](https://www.npmjs.com/package/react-resize-zoom)

# 适用场景

控制子元素的大小进行缩放

# features

- [x] 支持对元素(暂未支持canvas)的大小尺寸进行缩放,提供灵活的api控制边或角进行缩放
- [x] 被包裹的`props.children`的其他属性(非拖拽相关的属性)不会受到`react-resize-zoom`组件影响.仍和没有被包裹一样.
- [x] 通过事件返回`false`来阻止拖拽事件,从而控制拖拽范围

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
| axis                          | `auto / x / y / angle / none`     | -                                                  | 允许控制拖拽的边或角, `none`禁止缩放                                                                                  |
| width                         | `number`                          | -                                                  | 宽                                                                                  |
| height                        | `number`                          | -                                                  | 高                                                                                  |
| offset                        | `number`                          | `10`                                               | 离边多远可以拖拽                                                                              |
| onResizeStart                 | `function`                        | -                                                  | 拖拽开始事件,renturn `false` 可以阻止该事件;                                                                                          |
| onResizeMoving                | `function`                        | -                                                  | 拖拽进行事件,renturn `false` 可以阻止该事件;                      |
| onResizeEnd                   | `function`                        | -                                                  | 拖拽结束事件,renturn `false` 可以阻止该事件;                                                                                  |
| ref                           | `{current: HtmlElement}`          | `props.children`                                   | 子元素的ref                                                                              |
| zIndexRange                   | `[number, number]`                | `[]`                                               | 拖拽时可设置的层级范围                                                                                          |



