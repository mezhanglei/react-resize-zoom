import React, { Component, useState, useEffect } from 'react';
import "./index.less";
import DragResize from '../../../src/index';


const Home: React.FC<any> = (props) => {
const onResizeEnd = () => {

}
    return (
        <>
            <DragResize onResizeEnd={onResizeEnd}>
                <div style={{ width: '50px', height: "50px", background: "red" }}>
                    大小拖放
                </div>
            </DragResize>
        </>
    );
}

export default Home;