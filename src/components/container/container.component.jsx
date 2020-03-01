import React from 'react';
import './container.styles.scss';
import Section from "../section/section.component";
import {connect} from "react-redux";

const Container = ({sectionItems}) => {
    const items = sectionItems.sections;
    return (
        <div className={'container'}>
            {items.map((sectionItem, i) => (
                <Section
                    key={i}
                    cells={sectionItem.cells}
                    hasBorder={sectionItem.hasBorder}
                />
            ))}
        </div>
    )
};

const mapStateToProps = state => ({
    sectionItems: state.section
});


export default connect(mapStateToProps)(Container);

