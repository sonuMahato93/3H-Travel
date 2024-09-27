// reducers/userReducer.js

import {
    FETCH_RESERVATION_REQUEST,
    FETCH_RESERVATION_SUCCESS,
    FETCH_RESERVATION_FAILURE,
  } from "../features/Reservation/api/api";
  
  const initialState = {
    loading: false,
    reservationList: [],
    error: null,
  };
  
  const reservationReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
      case FETCH_RESERVATION_REQUEST :
        return {
          ...state,
          loading: true,
        };
      case FETCH_RESERVATION_SUCCESS:
        return {
          ...state,
          loading: false,
          reservationList: action.payload,
          error: null,
        };
      case FETCH_RESERVATION_FAILURE:
        return {
          ...state,
          loading: false,
          reservationList: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reservationReducer;
  