import React from 'react';
import './cell.styles.scss';

const Cell = ({children}) => {
    return (
        <div className='cell'>
            {children}
        </div>
    );
};

export default Cell;