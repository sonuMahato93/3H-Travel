import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import StaffPage from '../pages/StaffPage';
import HotelListPage from '../pages/HotelListPage';
import BookingsPage from '../pages/BookingsPage';

import ReservationFormPage from '../pages/ReservationFormPage';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Register from '../pages/Register';


const AllRoutes = () => {
  return (
    <Router>
      <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/app/dashboard" element={<Dashboard />} />
        <Route path="/app/staff" element={<StaffPage />} />
        <Route path="/app/hotel" element={<HotelListPage />} />
        <Route path="/app/bookings" element={<BookingsPage />} />
        <Route path="/app/reservation" element={<ReservationFormPage />} />
      </Routes>
    </Router>
  );
};

export default AllRoutes;
