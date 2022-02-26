import { CSSProperties, JSXElementConstructor, ReactElement } from 'react';
export declare type EventType = MouseEvent | TouchEvent;
export declare type ChildrenType = ReactElement<any, string | JSXElementConstructor<any>>;
export declare enum ResizeDragTypes {
    resizeStart = "resizeStart",
    resizing = "resizing",
    resizeEnd = "resizeEnd"
}
export interface LastStyle {
    width: number;
    height: number;
    eventX: number;
    eventY: number;
}
export interface NowStyle {
    width: number;
    height: number;
}
export declare enum Direction {
    N = "n",
    S = "s",
    W = "w",
    E = "e",
    NE = "ne",
    NW = "nw",
    SE = "se",
    SW = "sw"
}
export declare const DirectionCode: Direction[];
export interface DragResizeProps {
    className?: string;
    style?: CSSProperties;
    axis: Direction[];
    forbid?: boolean;
    children: any;
    offset: number;
    width?: number;
    height?: number;
    onResizeStart?: EventHandler;
    onResizeMoving?: EventHandler;
    onResizeEnd?: EventHandler;
    forwardedRef?: any;
    fixed?: boolean;
}
export interface DragResizeState {
    dragging?: boolean;
    nowStyle?: NowStyle;
    prevWidth?: number;
    prevHeight?: number;
}
export interface EventData {
    node: HTMLElement;
    dir: string;
    width: number;
    height: number;
}
export declare type EventHandler<E = EventType, T = EventData> = (e: E, data?: T) => void | boolean;
