// reducers/index.js

import { combineReducers } from 'redux';
import { staffReducer } from './staffReducer'; // Example reducer

const rootReducer = combineReducers({
  staff: staffReducer,
  // Add more reducers as needed
});

export default rootReducer;
