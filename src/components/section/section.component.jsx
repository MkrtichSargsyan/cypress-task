import React from 'react';
import './section.styles.scss';
import Cell from "../cell/cell.component";

const Section = ({hasBorder, cells}) => {
    return (
        <div className={`${hasBorder ? 'hasBorder' : ''} section`}>
            {
                cells.map((cellName, i) =>
                    <Cell
                        key={i}>{cellName}
                    </Cell>)
            }
        </div>
    );
};

export default Section;