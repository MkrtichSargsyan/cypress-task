import {combineReducers} from "redux";
import sectionReducer from "./section/section.reducer";


const rootReducer = combineReducers({
    section: sectionReducer,
});

export default rootReducer;