import React from 'react';
import './cell.styles.scss';


const Cell = ({children, id}) => {
    return (
        <div
            id={id}
            className='cell'
            draggable="true"
            onDragStart={(e) => drag(e)}
            onDragOver={(e) => stopDrag(e)}
        >
            {children}
        </div>
    );
};

const drag = e => {
    const target = e.target;
    e.dataTransfer.setData('selectedCell', target.id);
    e.dataTransfer.setData('selectedSection', target.parentNode.id);

    // setTimeout(() => {
    //     target.style.opacity = '70%';
    //     target.style.animation = 'none';
    // }, 0)
};

const stopDrag = e => {
    e.stopPropagation();

};

export default Cell;