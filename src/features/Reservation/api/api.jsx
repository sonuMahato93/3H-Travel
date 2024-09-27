import axios from 'axios';

// Action Types
export const FETCH_RESERVATION_REQUEST = 'FETCH_RESERVATION_REQUEST';
export const FETCH_RESERVATION_SUCCESS = 'FETCH_RESERVATION_SUCCESS';
export const FETCH_RESERVATION_FAILURE = 'FETCH_RESERVATION_FAILURE';

// Action Creators
export const fetchreservationRequest = () => ({
  type: FETCH_RESERVATION_REQUEST,
});

export const fetchreservationSuccess = (reservationList) => ({
  type: FETCH_RESERVATION_SUCCESS,
  payload: reservationList,
});

export const fetchreservationFailure = (error) => ({
  type: FETCH_RESERVATION_FAILURE,
  payload: error,
});

// Async Action (Thunk)
export const fetchreservation = () => {
  return async (dispatch) => {
    dispatch(fetchreservationRequest());
    try {
      const response = await axios.get('https://api.jsonbin.io/v3/b/66c9c9bdacd3cb34a878cf6c');
      const reservationList = response.data.record.users;
      dispatch(fetchreservationSuccess(reservationList));
    } catch (error) {
      dispatch(fetchreservationFailure(error.message));
    }
  };
};
