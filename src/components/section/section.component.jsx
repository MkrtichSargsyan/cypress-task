import React from 'react';
import './section.styles.scss';
import Cell from "../cell/cell.component";

const Section = ({hasBorder, cells, drop, sectionNumber}) => {
    return (
        <div
            id={sectionNumber}
            className={`${hasBorder ? 'hasBorder' : ''} section`}
            onDrop={(e) => drop(e)}
            onDragOver={(e) => allowDrop(e)}
        >
            {
                cells.map((cellName, i) =>
                    <Cell
                        key={i} id={i}>{cellName}
                    </Cell>)
            }
        </div>
    );
};

const allowDrop = e => {
    e.preventDefault();
};

export default Section;