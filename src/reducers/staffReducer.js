// reducers/userReducer.js

import {
  FETCH_STAFF_REQUEST,
  FETCH_STAFF_SUCCESS,
  FETCH_STAFF_FAILURE,
} from "../features/Staff/api/api.js";

const initialState = {
  loading: false,
  staff: [],
  error: null,
};

const staffReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case FETCH_STAFF_REQUEST :
      return {
        ...state,
        loading: true,
      };
    case FETCH_STAFF_SUCCESS:
      return {
        ...state,
        loading: false,
        staff: action.payload,
        error: null,
      };
    case FETCH_STAFF_FAILURE:
      return {
        ...state,
        loading: false,
        staff: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default staffReducer;
