import React from 'react';
import './cell.styles.scss';

let target;

const Cell = ({children, id}) => {
    return (
        <div
            id={id}
            className='cell'
            draggable="true"
            onDragStart={(e) => dragStart(e)}
            onDragOver={(e) => dragOver(e)}
            onDragEnd={(e) => dragEnd(e)}
        >
            {children}
        </div>
    );
};



const dragStart = e => {
    target = e.target;
    e.dataTransfer.setData('selectedCell', target.id);
    e.dataTransfer.setData('selectedSection', target.parentNode.id);

    setTimeout(() => {
        target.style.opacity = '70%';
        target.style.animation = 'none';
    }, 0)
};

const dragEnd =e=>{
    target.style.opacity = '100%';
};


const dragOver = e => {
    e.stopPropagation();
};


export default Cell;