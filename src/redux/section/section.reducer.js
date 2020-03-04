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

        case SectionActionTypes.addCell: {

            const newState = {...state};
            newState.sections[0].cells.push(action.payload);

            return {
                ...newState,
            }
        }

        case SectionActionTypes.drag : {

            const {targetSectionNumber, dataNumber, selectedSectionNumber} = action.payload;
            const newState = {...state};
            let selectedSection = newState.sections.find(sect => sect.sectionNumber === selectedSectionNumber);
            const targetSection = newState.sections.find(sect => sect.sectionNumber === targetSectionNumber);

            if (selectedSection === targetSection) {
                return {...newState}
            }

            targetSection.cells.push(dataNumber);
            selectedSection.cells = selectedSection.cells.filter(it => it !== dataNumber);

            return {
                ...newState,
            }
        }
        default :
            return state;
    }
};

export default sectionReducer;