import {
  FETCH_HOTEL_REQUEST,
  FETCH_HOTEL_SUCCESS,
  FETCH_HOTEL_FAILURE,
  CREATE_HOTEL_REQUEST,
  CREATE_HOTEL_SUCCESS,
  CREATE_HOTEL_FAILURE,
  UPDATE_HOTEL_REQUEST,
  UPDATE_HOTEL_SUCCESS,
  UPDATE_HOTEL_FAILURE,
  DELETE_HOTEL_REQUEST,
  DELETE_HOTEL_SUCCESS,
  DELETE_HOTEL_FAILURE,
} from "../features/Hotel/api/api.js";

const initialState = {
  loading: false,
  hotelList: [],
  error: null,
};

const startLoading = (state) => ({
  ...state,
  loading: true,
  error: null,
});

const loadingFailure = (state, action) => ({
  ...state,
  loading: false,
  error: action.payload,
});

const hotellistReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fetch Users (Read Operation)
    case FETCH_HOTEL_REQUEST:
    case CREATE_HOTEL_REQUEST:
    case UPDATE_HOTEL_REQUEST:
    case DELETE_HOTEL_REQUEST:
      return startLoading(state);

    case FETCH_HOTEL_SUCCESS:
      return {
        ...state,
        loading: false,
        hotelList: action.payload,
      };

    case CREATE_HOTEL_SUCCESS:
      return {
        ...state,
        loading: false,
        hotelList: [...state.hotelList, action.payload],
      };

    case UPDATE_HOTEL_SUCCESS:
      return {
        ...state,
        loading: false,
        hotelList: state.hotelList.map(user =>
          user.id === action.payload.id ? action.payload : user
        ),
      };

    case DELETE_HOTEL_SUCCESS:
      return {
        ...state,
        loading: false,
        hotelList: state.hotelList.filter(user => user.id !== action.payload),
      };

    // Handle failures
    case FETCH_HOTEL_FAILURE:
    case CREATE_HOTEL_FAILURE:
    case UPDATE_HOTEL_FAILURE:
    case DELETE_HOTEL_FAILURE:
      return loadingFailure(state, action);

    default:
      return state;
  }
};

export default hotellistReducer;
