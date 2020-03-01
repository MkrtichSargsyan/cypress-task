import React from 'react';
import './add-cell.styles.scss';

const AddCell = () => {
    return (
        <div>
            <p>Create new Cell</p>
            <input type="text" placeholder={'name'}/>
            <button>Create</button>
        </div>
    );
};

export default AddCell;