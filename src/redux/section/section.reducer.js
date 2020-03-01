import SectionActionTypes from './section.types';

const INITIAL_STATE = {
    sections: [
        {
            sectionNumber: 'firstSection',
            cells: ['Happy', 'Sleepy', 'Doc'],
        },
        {
            sectionNumber: 'secondSection',
            cells: ['Sneezy', 'Grumpy'],
            hasBorder: true,
        },
        {
            sectionNumber: 'thirdSection',
            cells: ['Dopey', 'Bashful'],
        },
    ]
};

const sectionReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case SectionActionTypes.drag : {

            const {targetSectionNumber, dataNumber, selectedSectionNumber} = action.payload;

            const newState = {...state};
            const selectedSection = newState.sections.find(sect => sect.sectionNumber === selectedSectionNumber);
            const data = selectedSection.cells[dataNumber];
            const targetSection = newState.sections.find(sect => sect.sectionNumber === targetSectionNumber);
            targetSection.cells.push(data);
            selectedSection.cells.splice(dataNumber, 1);

            return {
                ...newState,
            }
        }
        default :
            return state;
    }
};

export default sectionReducer;