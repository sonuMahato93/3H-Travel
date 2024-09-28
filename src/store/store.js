// store.js

import { configureStore } from "@reduxjs/toolkit";


import staffReducer from "../reducers/staffReducer";
import hotellistReducer from "../reducers/HotellistReducer";
import bookingReducer from "../reducers/BookingReducer";
import reservationReducer from "../reducers/ReservationReducer";
import AuthenticateReducer from "../reducers/AuthenticateReducer";

const store = configureStore({
  reducer: {
    authentication: AuthenticateReducer, 
    staff: staffReducer,
    hotel: hotellistReducer,
    booking: bookingReducer,
    reservation: reservationReducer
  },
});

export default store;
