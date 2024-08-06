import React, { useState } from "react";
import HotelList from "./HotelList";
import DrawerWithForm from "./DrawerWithForm";

const Hotel = () => {
  const [openRight, setOpenRight] = useState(false);

  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  return (
    <>
      <HotelList openDrawer={openDrawerRight} />
      <DrawerWithForm open={openRight} onClose={closeDrawerRight} />
    </>
  );
};

export default Hotel;
