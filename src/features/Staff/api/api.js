import axios from 'axios';

// Action Types
export const FETCH_STAFF_REQUEST = 'FETCH_STAFF_REQUEST';
export const FETCH_STAFF_SUCCESS = 'FETCH_STAFF_SUCCESS';
export const FETCH_STAFF_FAILURE = 'FETCH_STAFF_FAILURE';

// Action Creators
export const fetchStaffRequest = () => ({
  type: FETCH_STAFF_REQUEST,
});

export const fetchStaffSuccess = (staffList) => ({
  type: FETCH_STAFF_SUCCESS,
  payload: staffList,
});

export const fetchStaffFailure = (error) => ({
  type: FETCH_STAFF_FAILURE,
  payload: error,
});

// Async Action (Thunk)
export const fetchStaff = () => {
  return async (dispatch) => {
    dispatch(fetchStaffRequest());
    try {
      const response = await axios.get('https://api.jsonbin.io/v3/b/66c9c9bdacd3cb34a878cf6c');
      const staffList = response.data.record.users;
      dispatch(fetchStaffSuccess(staffList));
    } catch (error) {
      dispatch(fetchStaffFailure(error.message));
    }
  };
};
