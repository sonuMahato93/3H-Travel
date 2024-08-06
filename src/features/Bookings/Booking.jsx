


import React, { useState } from "react";

import BookingList from './BookingList';
import DrawerWithFilterForm from "./DrawerWithFilterForm";

const Booking = () => {
  const [openRight, setOpenRight] = useState(false);

  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  return (
    <>
      <BookingList openDrawer={openDrawerRight} />
      <DrawerWithFilterForm open={openRight} onClose={closeDrawerRight} />
    </>
  );
};

export default Booking;
