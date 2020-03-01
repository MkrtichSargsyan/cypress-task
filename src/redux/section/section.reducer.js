import {SectionActionTypes} from './section.types';

const INITIAL_STATE = {
    sections: [
        {
            cells: ['Happy', 'Sleepy', 'Doc'],
        },
        {
            cells: ['Sneezy', 'Grumpy'],
            hasBorder: true,
        },
        {
            cells: ['Dopey', 'Bashful'],
        },
    ]
};

const sectionReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        default :
            return state;
    }
};

export default sectionReducer;