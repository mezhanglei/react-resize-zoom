import { CSSProperties, JSXElementConstructor, ReactElement } from 'react';
export declare type EventType = MouseEvent | TouchEvent;
export declare type ChildrenType = ReactElement<any, string | JSXElementConstructor<any>>;
export declare enum ResizeDragTypes {
    ResizeStart = "resizeStart",
    Resizing = "resizing",
    ResizeEnd = "resizeEnd"
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
export declare enum ResizeDirection {
    N = "n",
    S = "s",
    W = "w",
    E = "e",
    NE = "ne",
    NW = "nw",
    SE = "se",
    SW = "sw"
}
export declare const ResizeDirectionCode: ResizeDirection[];
export interface DragResizeProps {
    className?: string;
    style?: CSSProperties;
    direction?: string[];
    forbid?: boolean;
    children: any;
    offset?: number;
    width?: number;
    height?: number;
    onResizeStart?: EventHandler;
    onResizeMoving?: EventHandler;
    onResizeEnd?: EventHandler;
    forwardedRef?: any;
    fixed?: boolean;
    childProps?: any;
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
