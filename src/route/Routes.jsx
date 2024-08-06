import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import StaffPage from '../pages/StaffPage';
import HotelListPage from '../pages/HotelListPage';
import BookingsPage from '../pages/BookingsPage';

import ReservationFormPage from '../pages/ReservationFormPage';


const AllRoutes = () => {
  return (
    <Router>
      <Routes>
      
        <Route path="/app/staff" element={<StaffPage />} />
        <Route path="/app/hotel" element={<HotelListPage />} />
        <Route path="/app/bookings" element={<BookingsPage />} />
        <Route path="/app/reservation" element={<ReservationFormPage />} />
      </Routes>
    </Router>
  );
};

export default AllRoutes;
