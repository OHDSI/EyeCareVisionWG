
import { combineReducers } from '@reduxjs/toolkit';
import contentSliceReducer from './content';
import generalSliceReducer from './general';

const rootReducer = combineReducers({
    general: generalSliceReducer,
    content: contentSliceReducer,
});

export default rootReducer
