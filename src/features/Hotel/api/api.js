import axios from 'axios';

// Action Types
export const FETCH_HOTEL_REQUEST = 'FETCH_HOTEL_REQUEST';
export const FETCH_HOTEL_SUCCESS = 'FETCH_HOTEL_SUCCESS';
export const FETCH_HOTEL_FAILURE = 'FETCH_HOTEL_FAILURE';

export const CREATE_HOTEL_REQUEST = 'CREATE_HOTEL_REQUEST';
export const CREATE_HOTEL_SUCCESS = 'CREATE_HOTEL_SUCCESS';
export const CREATE_HOTEL_FAILURE = 'CREATE_HOTEL_FAILURE';

export const UPDATE_HOTEL_REQUEST = 'UPDATE_HOTEL_REQUEST';
export const UPDATE_HOTEL_SUCCESS = 'UPDATE_HOTEL_SUCCESS';
export const UPDATE_HOTEL_FAILURE = 'UPDATE_HOTEL_FAILURE';

export const DELETE_HOTEL_REQUEST = 'DELETE_HOTEL_REQUEST';
export const DELETE_HOTEL_SUCCESS = 'DELETE_HOTEL_SUCCESS';
export const DELETE_HOTEL_FAILURE = 'DELETE_HOTEL_FAILURE';

// Action Creators for Fetch HOTELs (Read)
export const fetchhotelRequest = () => ({
  type: FETCH_HOTEL_REQUEST,
});

export const fetchhotelSuccess = (users) => ({
  type: FETCH_HOTEL_SUCCESS,
  payload: hotelList,
});

export const fetchhotelFailure = (error) => ({
  type: FETCH_HOTEL_FAILURE,
  payload: error,
});

// Async Action (Thunk) to Fetch Users
export const fetchhotel = () => {
  return async (dispatch) => {
    dispatch(fetchhotelRequest());
    try {
      const response = await axios.get('https://api.jsonbin.io/v3/b/66c9c9bdacd3cb34a878cf6c');
      const users = response.data;
      console.log(users)
      dispatch(fetchhotelSuccess(users));
    } catch (error) {
      dispatch(fetchhotelFailure(error.message));
    }
  };
};

// Action Creators for Create User
export const createHotelRequest = () => ({
  type: CREATE_HOTEL_REQUEST,
});

export const createHotelSuccess = (hotelList) => ({
  type: CREATE_HOTEL_SUCCESS,
  payload: hotelList,
});

export const createHotelFailure = (error) => ({
  type: CREATE_HOTEL_FAILURE,
  payload: error,
});

// Async Action (Thunk) to Create User
export const createUser = (userData) => {
  return async (dispatch) => {
    dispatch(createHotelRequest());
    try {
      const response = await axios.post('https://api.example.com/users', userData);
      const newUser = response.data;
      dispatch(createHotelSuccess(newUser));
    } catch (error) {
      dispatch(createHotelFailure(error.message));
    }
  };
};

// Action Creators for Update User
export const updateHotelRequest = () => ({
  type: UPDATE_HOTEL_REQUEST,
});

export const updateHotelSuccess = (hotel) => ({
  type: UPDATE_HOTEL_SUCCESS,
  payload: hotel,
});

export const updateHotelFailure = (error) => ({
  type: UPDATE_HOTEL_FAILURE,
  payload: error,
});

// Async Action (Thunk) to Update User
export const updateUser = (userId, userData) => {
  return async (dispatch) => {
    dispatch(updateHotelRequest());
    try {
      const response = await axios.put(`https://api.example.com/users/${userId}`, userData);
      const updatedUser = response.data;
      dispatch(updateHotelSuccess(updatedUser));
    } catch (error) {
      dispatch(updateHotelFailure(error.message));
    }
  };
};

// Action Creators for Delete User
export const deleteHotelRequest = () => ({
  type: DELETE_HOTEL_REQUEST,
});

export const deleteHotelSuccess = (userId) => ({
  type: DELETE_HOTEL_SUCCESS,
  payload: userId,
});

export const deleteHotelFailure = (error) => ({
  type: DELETE_HOTEL_FAILURE,
  payload: error,
});

// Async Action (Thunk) to Delete User
export const deleteUser = (userId) => {
  return async (dispatch) => {
    dispatch(deleteHotelRequest());
    try {
      await axios.delete(`https://api.example.com/users/${userId}`);
      dispatch(deleteHotelSuccess(userId));
    } catch (error) {
      dispatch(deleteHotelFailure(error.message));
    }
  };
};
