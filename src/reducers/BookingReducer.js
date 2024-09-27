// reducers/userReducer.js

import {
    FETCH_BOOKING_REQUEST,
    FETCH_BOOKING_SUCCESS,
    FETCH_BOOKING_FAILURE,
  } from "../features/Bookings/api/api.js";
  
  const initialState = {
    loading: false,
    bookingList: [],
    error: null,
  };
  
  const bookingReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
      case FETCH_BOOKING_REQUEST :
        return {
          ...state,
          loading: true,
        };
      case FETCH_BOOKING_SUCCESS:
        return {
          ...state,
          loading: false,
          bookingList: action.payload,
          error: null,
        };
      case FETCH_BOOKING_FAILURE:
        return {
          ...state,
          loading: false,
          bookingList: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default bookingReducer;
  