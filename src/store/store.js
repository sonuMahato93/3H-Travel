// store.js

import { configureStore } from "@reduxjs/toolkit";
import staffReducer from "../reducers/staffReducer";
import hotellistReducer from "../reducers/HotellistReducer";
import bookingReducer from "../reducers/BookingReducer";
import reservationReducer from "../reducers/ReservationReducer";



const store = configureStore({
    reducer:{
        staff: staffReducer,
        hotel: hotellistReducer,
        booking:bookingReducer,
        reservation:reservationReducer
    }
})

export default store;
