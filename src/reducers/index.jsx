import { combineReducers } from "redux";
import UserReducer from './reducerUser';
import {reducer as formReducer} from 'redux-form';

import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    router: routerReducer,
    form: formReducer,
    main: UserReducer
});

export default rootReducer;
