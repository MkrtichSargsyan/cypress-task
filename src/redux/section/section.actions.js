import SectionActionTypes from './section.types';

export const addCell = name => ({
    type: SectionActionTypes.addCell,
    payload: name
});


export const dropAction = e => ({
    type: SectionActionTypes.drag,
    payload: drop(e)
});

const drop = (e) => {
    return {
        targetSectionNumber: e.target.id,
        dataNumber: e.dataTransfer.getData("selectedCell"),
        selectedSectionNumber: e.dataTransfer.getData('selectedSection'),
    }
};



