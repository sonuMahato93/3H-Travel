import axios from 'axios';

// Action Types
export const FETCH_BOOKING_REQUEST = 'FETCH_BOOKING_REQUEST';
export const FETCH_BOOKING_SUCCESS = 'FETCH_BOOKING_SUCCESS';
export const FETCH_BOOKING_FAILURE = 'FETCH_BOOKING_FAILURE';

// Action Creators
export const fetchbookingRequest = () => ({
  type: FETCH_BOOKING_REQUEST,
});

export const fetchbookingSuccess = (bookingList) => ({
  type: FETCH_BOOKING_SUCCESS,
  payload: bookingList,
});

export const fetchbookingFailure = (error) => ({
  type: FETCH_BOOKING_FAILURE,
  payload: error,
});

// Async Action (Thunk)
export const fetchbooking = () => {
  return async (dispatch) => {
    dispatch(fetchbookingRequest());
    try {
      const response = await axios.get('https://api.jsonbin.io/v3/b/66c9c9bdacd3cb34a878cf6c');
      const bookingList = response.data.record.users;
      dispatch(fetchbookingSuccess(bookingList));
    } catch (error) {
      dispatch(fetchbookingFailure(error.message));
    }
  };
};
