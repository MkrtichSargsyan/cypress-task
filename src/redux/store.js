import {createStore} from "redux";

import rootReducer from './root-reducer.js'

export const store = createStore(rootReducer);