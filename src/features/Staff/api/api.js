// actions/staffActions.js

import axios from 'axios';

export const fetchStaffRequest = () => ({
  type: 'FETCH_STAFF_REQUEST',
});

export const fetchStaffSuccess = (staffList) => ({
  type: 'FETCH_STAFF_SUCCESS',
  payload: staffList,
});

export const fetchStaffFailure = (error) => ({
  type: 'FETCH_STAFF_FAILURE',
  payload: error,
});

export const fetchStaff = () => {
  return async (dispatch) => {
    dispatch(fetchStaffRequest());
    try {
      const response = await axios.get('https://6c78-117-210-139-124.ngrok-free.app/api/v1/user/all'); 
      console.log(response);
      dispatch(fetchStaffSuccess(response.data));
    } catch (error) {
      dispatch(fetchStaffFailure(error.message));
    }
  };
};
